import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@mui/icons-material'
import './user.css'

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <button className='userAddButton'>Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img className='userShowImg' src="../../../public/assets/avatar.jpg" alt="" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">09.02.1999</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+254 768 444 443</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">Nairobi | Kenya</span>
                    </div>
                </div>
                
            </div>
            <div className="userUpdate"></div>
        </div>
    </div>
  )
}

export default User