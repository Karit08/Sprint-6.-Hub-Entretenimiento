using System.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using ServerAsp.Data;
using ServerAsp.Models;


namespace ServerAsp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Category : ControllerBase
    {
        private readonly DatabaseManager _databaseManager;

        public Category(DatabaseManager databaseManager)
        {
            _databaseManager = databaseManager;
        }

        [HttpGet("Movies")]
        public IActionResult CategorysMovies([FromQuery] Categorys categorys)
        {
            string query = @"
                SELECT m.*,
                       c.Category
                FROM movies m
                JOIN MoviesCategorys cm ON m.ID_Movie = cm.ID_Movie
                JOIN Categorys c ON cm.ID_Category = c.ID_Category
                WHERE c.Category = @Category;";

            var parameters = new[]
            {
                new SqlParameter("@Category", categorys.Category)
            };

            var data = _databaseManager.ExecuteQuery(query, parameters);

            var DesData = new List<Dictionary<string, object>>();
            foreach (DataRow row in data.Rows)
            {
                var movie = new Dictionary<string, object>();
                foreach (DataColumn column in data.Columns)
                {
                    movie.Add(column.ColumnName, row[column]);
                }
                DesData.Add(movie);
            }
            return Ok(DesData);
        }

        [HttpGet("Series")]
        public IActionResult CategorysSeries([FromQuery] Categorys categorys)
        {
            var query = @"
                    SELECT s.*,
                           c.Category
                    FROM Series s
                    JOIN SeriesCategorys cs on s.ID_Series = cs.ID_Series
                    JOIN Categorys c on cs.ID_Category = c.ID_Category
                    WHERE c.Category = @Category";
            var parameters = new[]
            {
                new SqlParameter("@Category", categorys.Category)
            };
            var data = _databaseManager.ExecuteQuery(query, parameters);

            var DesData = new List<Dictionary<string, object>>();
            foreach (DataRow row in data.Rows)
            {
                var serie = new Dictionary<string, object>();
                foreach (DataColumn column in data.Columns)
                {
                    serie.Add(column.ColumnName, row[column]);
                }
                DesData.Add(serie);
            }
            return Ok(DesData);
        }
    }
}
