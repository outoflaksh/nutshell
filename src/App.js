import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="app" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
