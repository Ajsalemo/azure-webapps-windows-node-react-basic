import { Link } from "react-router-dom";

export const Footer = () => (
  <div className="grid gap-4 md:grid-cols-4">
    <ul className="space-y-1 text-gray-600">
      <li className="pb-4 font-serif text-gray-600">Lorem ipsum dolor</li>
      <li>
        <Link to={"/"} className="hover:underline">
          Twitter
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:underline">
          Linkedin
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:underline">
          Facebook
        </Link>
      </li>
    </ul>
    <ul className="space-y-1 text-gray-600">
      <li className="pb-4 font-serif text-gray-600">Locations</li>
      <li>
        <Link to={"/"} className="hover:underline">
          Paris
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:underline">
          New York
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:underline">
          London
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:underline">
          Singapore
        </Link>
      </li>
    </ul>
    <ul className="space-y-1 text-gray-600">
      <li className="pb-4 font-serif text-gray-600">Company</li>
      <li>
        <Link to={"/"} className="hover:underline">
          The team
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:underline">
          About us
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:underline">
          Our vision
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:underline">
          Join us
        </Link>
      </li>
    </ul>

    <div className="h-12"></div>
  </div>
);
