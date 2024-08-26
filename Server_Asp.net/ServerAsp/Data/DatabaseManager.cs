using System.Data.SqlClient;
using System.Data;
using Microsoft.Data.SqlClient;

namespace ServerAsp.Data
{
    public class DatabaseManager
    {
        private readonly string _Connection;

        public DatabaseManager(string _StringConnection) => _Connection = _StringConnection;

        public DataTable ExecuteQuery(string query, params SqlParameter[] parameters)
            DataTable dataTable = new DataTable();

            using (SqlConnection sqlConnection = new SqlConnection(_Connection))
            {
                using (SqlCommand cmd = new SqlCommand(query, sqlConnection))
                {
                    cmd.Parameters.AddRange(parameters);
                    sqlConnection.Open();
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        dataTable.Load(reader);
                    }
                }
            }
            return dataTable;
        }
        public int ExecuteNoQuery(string query, params SqlParameter[] parameters) 
        {
            using (SqlConnection connection = new SqlConnection(_Connection))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddRange(parameters);
                    connection.Open();
                    return command.ExecuteNonQuery();
                }
            }
        }
    }
}
