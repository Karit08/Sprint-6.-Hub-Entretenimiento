using System.Data;
using Microsoft.AspNetCore.Mvc;
using ServerAsp.Data;


namespace ServerAsp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Media : ControllerBase
    {
        private readonly DatabaseManager _databaseManager;

        public Media(DatabaseManager databaseManager)
        {
            _databaseManager = databaseManager;
        }


        [HttpGet("Movies")]
        public IActionResult Movies()  // Obtener todas las peliculas
        {
            string query = @"SELECT
                                m.ID_Movie,
                                m.Title,
                                m.M_Description,
                                m.M_Length,
                                m.URL_img,
                                c.Category
                            FROM movies m
                            LEFT JOIN
                                MoviesCategorys mc ON m.ID_Movie = mc.ID_Movie
                            LEFT JOIN
                                Categorys c ON mc.ID_Category = c.ID_Category;";
            var data = _databaseManager.ExecuteQuery(query);

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
        public IActionResult Series() 
        {
            string query = @"SELECT
                                s.ID_Series,
                                s.Title,
                                s.S_Description,
                                s.S_Length,
                                s.URL_img,
                                c.Category
                            FROM Series s
                            LEFT JOIN
                                SeriesCategorys sc ON s.ID_Series = sc.ID_Series
                            LEFT JOIN
                                Categorys c ON sc.ID_Category = c.ID_Category";
            var data = _databaseManager.ExecuteQuery(query);

            var DesData = new List<Dictionary<string, object>>();
            foreach (DataRow row in data.Rows)
            {
                var series = new Dictionary<string, object>();
                foreach (DataColumn column in data.Columns)
                {
                    series.Add(column.ColumnName, row[column]);
                }
                DesData.Add(series);
            }
            return Ok(DesData);
        }
    }
}
