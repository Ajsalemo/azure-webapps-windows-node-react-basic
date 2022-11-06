import { Route, Routes } from "react-router-dom";
import { About } from "../pages/about/about";
import { Business } from "../pages/business/business";
import { Index } from "../pages/index/index";

export const RouterContainer = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/business" element={<Business />} />
  </Routes>
);
