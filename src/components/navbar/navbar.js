import { Link } from "react-router-dom";

export const Navbar = () => (
  <div className="flex">
    <Link to={"/"} className="font-serif text-3xl font-medium pr-4">
      Home
    </Link>
    <Link to={"/about"} className="font-serif text-3xl font-medium pr-4">
      About
    </Link>
    <Link to={"/business"} className="font-serif text-3xl font-medium">
      Business
    </Link>
  </div>
);
