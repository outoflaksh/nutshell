import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="app" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
