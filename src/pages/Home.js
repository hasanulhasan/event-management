import HomeBanner from '../components/HomeBanner'
import Destinations from '../components/Destinations'
import WorldPlace from '../components/WorldPlace'
import Services from '../components/Services'
import CTA from '../components/CTA'
import TravelWorld from '../components/TravelWorld'

export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <HomeBanner />
      <Destinations />
      <WorldPlace />
      <Services/>
      <CTA/>
      <TravelWorld />
    </div>
  )
}
