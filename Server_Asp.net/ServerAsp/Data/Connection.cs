using System.Data.SqlClient;
namespace ServerAsp.Data
{
    public class SqlServerConnection
    {
        private string _StringConnection = string.Empty;

        public SqlServerConnection(IConfiguration configuration){
            var connectionString = configuration.GetConnectionString("DefaultConnection");
            _StringConnection = connectionString + ";TrustServerCertificate=True";
        }

        public string getConnectionString()
        {
            return _StringConnection;
        }
    }
}
