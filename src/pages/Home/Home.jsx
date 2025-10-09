import React from 'react'
import Banner from '../../components/Banner/Banner'
import TrustedCard from '../../components/TrustedCard/TrustedCard'
import TrendingApp from '../../components/AppSection/TrendingApp'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TrustedCard></TrustedCard>
      <TrendingApp></TrendingApp>
    </div>
  )
}

export default Home
