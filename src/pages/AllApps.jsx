import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import appsData from "../data/appsData.json";

export default function AllApplications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(appsData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredApps(appsData);
      return;
    }

    
    setLoading(true);
    const delay = setTimeout(() => {
      const foundApps = appsData.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredApps(foundApps);
      setLoading(false);

      if (foundApps.length === 0) {
        navigate("/appnotfound");
      }
    }, 700);

    return () => clearTimeout(delay);
  }, [searchTerm, navigate]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">



        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our All Applications
          </h2>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions.
          </p>
        </div>




        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-gray-700 font-medium">
            ({filteredApps.length}) Apps Found
          </p>

          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder=" Search Apps"
            className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-800 placeholder-gray-800"
          />
        </div>



        {/* Loading Animation */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredApps.map((app) => (
                <div
                  key={app.id}
                  onClick={() => navigate(`/appdetails/${app.id}`)}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 cursor-pointer"
                >
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {app.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{app.companyName}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>📥 {(app.downloads / 1000000).toFixed(1)}M</span>
                    <span>⭐ {app.ratingAvg}</span>
                  </div>
                </div>
              ))}
            </div>




            {filteredApps.length === 0 && !loading && (
              <p className="text-gray-500 mt-10 text-center">
                No apps found for your search 🔍
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
