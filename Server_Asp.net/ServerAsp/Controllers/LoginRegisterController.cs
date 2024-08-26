using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.IdentityModel.Tokens;
using ServerAsp.Data;
using ServerAsp.Models;

namespace ServerAsp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegisterUser : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly DatabaseManager _databaseManager;
        private readonly PasswordHasher<object> _passwordHasher;

        public RegisterUser(IConfiguration configuration, DatabaseManager databaseManager){ // injeccion de la clase databaseManager
            _configuration = configuration;
            _databaseManager = databaseManager;
            _passwordHasher = new PasswordHasher<object>();
        }

        [HttpPost]
        public IActionResult register([FromBody] User user)
        {
            var hashedpassword = _passwordHasher.HashPassword(User, user.U_password);
            string query = " INSERT INTO users (U_Name, Mail, U_password, Preferences) VALUES (@U_Name, @Mail, @U_Password, @Preferences)";
            var parameters = new[]
            {
                new SqlParameter("@U_Name", user.U_Name),
                new SqlParameter("@Mail", user.Mail),
                new SqlParameter("@U_Password", hashedpassword),
                new SqlParameter("@Preferences", user.Preferences)
            };

            int rowsAffected = _databaseManager.ExecuteNoQuery(query, parameters);
            if (rowsAffected > 0)
            {
                return Ok("Registro realizado con exito");
            }
            return BadRequest("Error al registrar al usuario");
        }

        [HttpGet]
        public IActionResult login([FromQuery] Login login)
        {
            string query = "SELECT * FROM users WHERE Mail = @Mail";
            var parameters = new[]
            {
                new SqlParameter("@Mail", login.Mail)
            };
            var datauser = _databaseManager.ExecuteQuery(query, parameters);
            if (datauser.Rows.Count == 0)
            {
                return Unauthorized("Usuario no encontrado");
            }
            var hashedpassword = datauser.Rows[0]["U_password"].ToString();
            var result = _passwordHasher.VerifyHashedPassword(null, hashedpassword, login.U_password);
            if (result == PasswordVerificationResult.Success)
            {
                var idUser = datauser.Rows[0]["ID_User"].ToString();
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, idUser), 
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                var key = _configuration["Jwt:Key"];
                var keyBytes = Encoding.UTF8.GetBytes(key);
                var creds = new SigningCredentials(new SymmetricSecurityKey(keyBytes), SecurityAlgorithms.HmacSha256);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = creds
                };

                try
                {
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var token = tokenHandler.CreateToken(tokenDescriptor);
                    var tokenString = tokenHandler.WriteToken(token);

                    return Ok(new { Token = tokenString });
                }
                catch (Exception ex)
                {
                    return BadRequest($"Error al generar el token: {ex.Message}");
                }
            }
            else
            {
                return Unauthorized("Contrasena incorrecta");
            }
        }
    }
}
