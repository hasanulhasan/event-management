import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-xl my-4">Page Not Found</p>
      <Link to='/' className="bg-blue-600 px-4 py-2 font-semibold rounded-lg text-white">Back to Home</Link>
    </div>
  );
}
