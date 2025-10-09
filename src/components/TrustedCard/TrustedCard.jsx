import React from 'react'

const TrustedCard = () => {
  return (
    <div>
<section className="w-full bg-gradient-to-br from-[#6E00FF] via-[#7E3BFF] to-[#A466FF] text-white py-20 flex flex-col items-center justify-center text-center">

<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
Trusted By Millions, Built For You
</h2>

<div className="flex flex-col sm:flex-row justify-center items-center gap-16 sm:gap-24">

<div className="flex flex-col items-center">
<span className="text-base opacity-80 mb-2">Total Downloads</span>
<span className="text-6xl font-extrabold mb-2">29.6M</span>
<span className="text-sm opacity-80">21% More Than Last Month</span>
</div>


<div className="flex flex-col items-center">
<span className="text-base opacity-80 mb-2">Total Reviews</span>
<span className="text-6xl font-extrabold mb-2">906K</span>
<span className="text-sm opacity-80">46% More Than Last Month</span>
</div>

<div className="flex flex-col items-center">
<span className="text-base opacity-80 mb-2">Active Apps</span>
<span className="text-6xl font-extrabold mb-2">132+</span>
<span className="text-sm opacity-80">31 More Will Launch</span>
</div>
</div>
</section>
    </div>
  )
}

export default TrustedCard
