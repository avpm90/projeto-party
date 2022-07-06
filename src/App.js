import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Create } from "./Pages/Create";
import { Read } from "./Pages/Read";
import { Update } from "./Pages/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/read" element={<Read />} />
        <Route path="/" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
