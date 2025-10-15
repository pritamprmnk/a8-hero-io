import React from 'react'

const Banner = () => {
  return (
    <div>
    <section className="bg-gray-100 py-16 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          We Build <br /><span className="text-purple-600">Productive</span> Apps
        </h1>

        <p className="mt-4 text-gray-500">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative apps designed 
          to make everyday life simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mt-8">
          <button
            onClick={() => window.open("https://play.google.com/", "_blank")}
            className="bg-white border border-gray-200 px-5 py-3 rounded-xl flex items-center gap-3 shadow hover:shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src="/assets/playstore.png"
              alt="Get it on Google Play"
              className="h-9"
            />
          </button>

          <button
            onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
            className="bg-white border border-gray-200 px-5 py-3 rounded-xl flex items-center gap-3 shadow hover:shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src="/assets/applestore.png"
              alt="Download on the App Store"
              className="h-9"
            />
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <img
            src="/assets/hero.png"
            alt="App Banner"
            className="w-full max-w-3xl mx-auto drop-shadow-xl rounded-2xl"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Banner
