import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useFetchListTitles } from "./Components/FetchTitles";

function App() {
  const { data, isPending } = useFetchListTitles(
    "http://localhost:8000/releases"
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home fetchData={data} isPending={isPending} />}
          />
          <Route
            path="/home"
            element={<Home fetchData={data} isPending={isPending} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
