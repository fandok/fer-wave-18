import ReactDOM from "react-dom/client";
import Detail from "./Detail";
import LandingPage from "./LandingPage";
import HasilPencarian from "./HasilPencarian";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatPage from "./CatPage";
import CariMobil from "./CariMobil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="cari-mobil" element={<CariMobil />} />

      <Route path="hasil-pencarian" element={<HasilPencarian />} />
      <Route path="detail/:id" element={<Detail />} />
      <Route path="cat" element={<CatPage />} />
    </Routes>
  </BrowserRouter>
);
