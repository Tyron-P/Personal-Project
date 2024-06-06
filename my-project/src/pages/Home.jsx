import { Card } from "../Components/cardComponent";
import { Navbar } from "../Components/nav";
import "./website.css";

function Home({ fetchData, isPending, handleCardClick }) {
  return (
    <div className="Home">
      <header>
        <Navbar />
      </header>

      <div className="Home-body">
        {!isPending && (
          <Card fetchData={fetchData} handleCardClick={handleCardClick} />
        )}
      </div>
    </div>
  );
}

export default Home;
