import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import appsData from "../data/appsData.json";
import { toast } from "react-toastify";
import { Star, Eye, Download } from "lucide-react";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {


      const selectedApp = appsData.find((item) => item.id === parseInt(id));



      if (!selectedApp) {
        navigate("/appnotfound");
        return;
      }

      setApp(selectedApp);



      const installedApps =
        JSON.parse(localStorage.getItem("installedApps")) || [];
      const alreadyInstalled = installedApps.some(
        (a) => a.id === parseInt(id)
      );
      setIsInstalled(alreadyInstalled);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [id, navigate]);

  const handleInstall = () => {
    let installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.some((a) => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setIsInstalled(true);
      toast.success(`${app.title} installed successfully! 🎉`, {
        position: "bottom-right",
      });
    } else {
      toast.info(`${app.title} is already installed ✅`, {
        position: "bottom-right",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!app) return null;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-28 h-28 object-contain mb-4 md:mb-0 md:mr-8"
        />

        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-semibold text-gray-900">{app.title}</h1>
          <p className="text-gray-500 text-sm">by {app.companyName}</p>

          <div className="flex items-center space-x-6 text-sm text-gray-700">
            <div className="flex items-center space-x-1">
              <Star className="text-yellow-500 w-4 h-4" />
              <span>{app.ratingAvg}</span>
            </div>

            <div className="flex items-center space-x-1">
              <Eye className="text-blue-500 w-4 h-4" />
              <span>{app.reviews.toLocaleString()} reviews</span>
            </div>

            <div className="flex items-center space-x-1">
              <Download className="text-green-600 w-4 h-4" />
              <span>{app.downloads.toLocaleString()} downloads</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`px-5 py-2 text-white rounded-lg transition ${
              isInstalled
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-indigo-500 hover:opacity-90"
            }`}
          >
            {isInstalled ? "Installed" : "Install"}
          </button>
        </div>
      </div>



      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg text-green-600 font-semibold mb-4">
          User Ratings
        </h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={app.ratings}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg text-green-600 font-semibold mb-3">
          Description
        </h2>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
