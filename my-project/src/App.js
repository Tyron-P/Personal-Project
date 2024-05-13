import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import { useFetchListTitles } from "./Components/FetchTitles";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const { data, isPending } = useFetchListTitles(
    "http://localhost:8000/releases"
  );
  const [selectedId, setSelectedId] = useState(null);
  const handleCardClick = (id) => {
    setSelectedId(id);
  };
  console.log(selectedId);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Home
                fetchData={data}
                isPending={isPending}
                handleCardClick={handleCardClick}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                fetchData={data}
                isPending={isPending}
                handleCardClick={handleCardClick}
              />
            }
          />
          <Route
            path="/movie-details"
            element={<MovieDetails id={selectedId} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
