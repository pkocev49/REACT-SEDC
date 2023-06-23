import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Planets from "./Pages/Planets/Planets";
import Header from "./components/Header/Header";
import People from "./Pages/People/People";
import SinglePerson from "./Pages/SinglePerson/SinglePerson";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/planets" element={<Planets />} />
          <Route
            path="*"
            element={
              <div>
                <h1 style={{ color: "red" }}>Page not found 404</h1>
              </div>
            }
          />
          <Route path="/people/:id" element={<SinglePerson />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
