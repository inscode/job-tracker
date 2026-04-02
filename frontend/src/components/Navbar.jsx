import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <Link to="/dashboard" className="text-xl font-bold text-blue-600">
        JobTracker
      </Link>
      <div className="flex gap-4">
        <Link to="/login" className="text-gray-600 hover:text-blue-600 text-sm">
          Login
        </Link>
        <Link
          to="/register"
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
