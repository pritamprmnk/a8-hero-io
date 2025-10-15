import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Download, Star, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Installations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
      setInstalledApps(apps);
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);


  const handleUninstall = (id) => {
    const appToRemove = installedApps.find((app) => app.id === id);
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    toast.info(`${appToRemove?.title || "App"} uninstalled successfully 🗑️`, {
      position: "bottom-right",
    });
  };


  const convertToNumber = (val) => {
    if (!val) return 0;
    if (typeof val === "string") {
      if (val.toLowerCase().includes("m")) return parseFloat(val) * 1_000_000;
      if (val.toLowerCase().includes("b")) return parseFloat(val) * 1_000_000_000;
    }
    return parseFloat(val) || 0;
  };


  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...installedApps].sort((a, b) => {
      const numA = convertToNumber(a.downloads);
      const numB = convertToNumber(b.downloads);
      return order === "high-low" ? numB - numA : numA - numB;
    });
    setInstalledApps(sorted);


    const detailsEl = document.querySelector("details.group");
    if (detailsEl) detailsEl.removeAttribute("open");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (installedApps.length === 0) {
    return (
      <div className="flex justify-center items-center text-2xl h-screen text-gray-500 bg-gray-50">
        <h1>No installed apps</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-20">


      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Your Installed Apps
          </h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>


        <div className="relative">
          <details className="group">
            <summary className="flex items-center justify-between w-36 cursor-pointer border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 transition">
              Sort By Downloads
              <ChevronDown
                size={14}
                className="ml-1 text-gray-500 transition-transform group-open:rotate-180"
              />
            </summary>
            <ul className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <li>
                <button
                  onClick={() => handleSort("high-low")}
                  className={`w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 ${
                    sortOrder === "high-low"
                      ? "text-emerald-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  High to Low
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSort("low-high")}
                  className={`w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 ${
                    sortOrder === "low-high"
                      ? "text-emerald-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  Low to High
                </button>
              </li>
            </ul>
          </details>
        </div>
      </div>



      <p className="text-lg font-semibold mb-4 text-gray-800">
        {installedApps.length} Apps Found
      </p>



      <div className="space-y-4">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 rounded-lg object-cover bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/app/${app.id}`)}
              />
              <div>
                <h2
                  className="font-semibold text-gray-900 cursor-pointer"
                  onClick={() => navigate(`/app/${app.id}`)}
                >
                  {app.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 space-x-3 mt-1">
                  <span className="flex items-center text-emerald-500">
                    <Download size={14} className="mr-1" />{" "}
                    {app.downloads || "9M"}
                  </span>
                  <span className="flex items-center text-orange-500">
                    <Star size={14} className="mr-1" /> {app.rating || "5"}
                  </span>
                  <span>{app.size || "258 MB"}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installations;
