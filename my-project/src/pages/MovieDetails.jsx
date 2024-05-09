import { Navbar } from "../Components/nav";
import "./website.css";

function MovieDetails({ fetchData, isPending }) {
  return (
    <div className="Home">
      <header>
        <Navbar />
      </header>
      <body className="Home-body">
        {!isPending && <Card fetchData={fetchData} />}
      </body>
    </div>
  );
}

export default MovieDetails;
