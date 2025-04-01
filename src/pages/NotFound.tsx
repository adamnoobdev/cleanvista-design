
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md p-8 bg-white shadow-md rounded-sm">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Sidan kunde inte hittas</p>
        <p className="mb-6 text-muted-foreground">
          Adressen <code className="bg-gray-100 px-2 py-1">{location.pathname}</code> finns inte på vår webbplats.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium"
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
