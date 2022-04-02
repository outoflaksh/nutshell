import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="app" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
