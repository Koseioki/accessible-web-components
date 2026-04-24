import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { DetailPage } from "./components/DetailPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
