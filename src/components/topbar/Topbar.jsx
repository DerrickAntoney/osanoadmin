import { Language, NotificationsNone, Settings } from '@mui/icons-material'
import './topbar.css'
import avatar from '../../assets/avatar.jpg'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <div className="topbarLogo">
                    <a href="/">
                        <span className='logo'>Osano Admin</span>
                    </a>
                </div>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src={avatar} alt="avatar" className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}

export default Topbar