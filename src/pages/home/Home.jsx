import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData'

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title='User Analytics' grid dataKey='ActiveUser'/>
    </div>
  )
}

export default Home