import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="app" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
