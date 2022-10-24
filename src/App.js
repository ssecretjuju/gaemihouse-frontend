import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./Join";
import Login from "./Login";
import Play from "./Play";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
