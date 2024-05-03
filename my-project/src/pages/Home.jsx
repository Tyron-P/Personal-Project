import { Card } from "../Components/cardComponent";
import "./Home.css";

function Home({ fetchData, isPending }) {
  return (
    <div className="Home">
      <header className="Home-header">
        {!isPending && <Card fetchData={fetchData} />}
      </header>
    </div>
  );
}

export default Home;
