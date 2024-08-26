using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using ServerAsp.Data;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularClient",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

builder.Services.AddSingleton<SqlServerConnection>(sp =>
{
    return new SqlServerConnection(configuration);
});

builder.Services.AddTransient<DatabaseManager>(sp =>
{
    var sqlServerConnection = sp.GetRequiredService<SqlServerConnection>();
    return new DatabaseManager(sqlServerConnection.getConnectionString());
});

builder.Services.AddControllers();



var key = Encoding.UTF8.GetBytes("Jwt:Key");
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

var app = builder.Build();

app.UseCors("AllowAngularClient"); 

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/", () => "API funcionando correctamente");
app.MapControllers();
app.Run();
