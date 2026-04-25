import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { DetailPage } from "./pages/DetailPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<DetailPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
