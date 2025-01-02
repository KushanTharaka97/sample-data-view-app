import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Movies from "./pages/Movies";
import Update from "./pages/Update";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
