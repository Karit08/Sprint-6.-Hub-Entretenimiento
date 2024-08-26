namespace ServerAsp.Models
{
    public class FavoritesM
    {
        public int ID_Favorites { get; set;}
        public int ID_User { get; set;}
        public int? ID_Movie { get; set;}
        public int? ID_Series { get; set;}
    }
}