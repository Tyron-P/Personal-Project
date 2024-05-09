import { Card } from "../Components/cardComponent";
import { Navbar } from "../Components/nav";
import "./website.css";

function Home({ fetchData, isPending }) {
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

export default Home;
