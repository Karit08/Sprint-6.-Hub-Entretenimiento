namespace ServerAsp.Models
{
    public class Movies
    {
        public int ID_Movie { get; set;}
        public required string Title { get; set;}  
        public required string M_Description { get; set;}
        public int M_Year { get; set;}
        public int M_Length { get; set;}
        public required string M_State {get; set;}
        public required string URL_img {get; set;}

    }

}
