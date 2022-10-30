import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Sept_12_22 from "./pages/Sept_12_22";
import Jan_16_2022 from "./pages/Jan_16_2022";
import Jun_5_2022 from "./pages/Jun_5_2022";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter basename="kaylisadventures/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sept_12_22" element={<Sept_12_22 />} />
          <Route path="jan_16_2022" element={<Jan_16_2022 />} />
          <Route path="jun_5_2022" element={<Jun_5_2022 />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}