import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useFetchAPI } from "./Components/FetchAPI";

function App() {
  const { data, isPending } = useFetchAPI("http://localhost:8000/releases");

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
