import { useNavigate } from "react-router-dom";
import appsData from "../../data/appsData.json";

export default function TrendingApps() {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8);
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Trending Apps</h2>
        <p className="text-gray-500 mb-10">
          Explore all trending apps on the market developed by us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topApps.map((app) => (
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

        <button
          onClick={() => navigate("/allapps")}
          className="mt-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:opacity-90"
        >
          Show All
        </button>
      </div>
    </section>
  );
}
