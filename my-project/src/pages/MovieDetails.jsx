import { Navbar } from "../Components/nav";
import { useFetchTitleDetails } from "../Components/FetchTitleDetails";
import "./website.css";

function MovieDetails({ movieId }) {
  const urlMock = "http://localhost:8000/titleDetails";
  const { data, isPending } = useFetchTitleDetails(movieId, urlMock);
  return (
    <div className="Home">
      <header>
        <Navbar />
      </header>
      <div className="Home-body">test</div>
    </div>
  );
}

export default MovieDetails;
