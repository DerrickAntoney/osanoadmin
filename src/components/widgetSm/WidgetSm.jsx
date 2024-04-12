import { Visibility } from '@mui/icons-material'
import './widgetSm.css'
import avatar from '../../../public/assets/avatar.jpg'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">
            New Join Members
        </span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={avatar} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">
                        Anna Keller
                    </span>
                    <span className="widgetSmUserTitle">
                        Software Engineer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={avatar} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">
                        Anna Keller
                    </span>
                    <span className="widgetSmUserTitle">
                        Software Engineer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={avatar} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">
                        Anna Keller
                    </span>
                    <span className="widgetSmUserTitle">
                        Software Engineer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={avatar} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">
                        Anna Keller
                    </span>
                    <span className="widgetSmUserTitle">
                        Software Engineer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={avatar} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">
                        Anna Keller
                    </span>
                    <span className="widgetSmUserTitle">
                        Software Engineer
                    </span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm