import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title='User Analytics' grid dataKey='ActiveUser'/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home