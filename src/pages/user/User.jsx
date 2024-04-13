import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import './user.css'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <Link to='/newUser'>
                <button className='userAddButton'>Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img className='userShowImg' src="../../../public/assets/avatar.jpg" alt="" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Fred Becker</span>
                        <span className="userShowTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">fredbeck99</span>
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
                        <span className="userShowInfoTitle">fredbeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">Nairobi | Kenya</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className='userUpdateForm'>
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input 
                                    className='userUpdateInput' 
                                    type="text"
                                    placeholder='fredbeck99'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input 
                                    className='userUpdateInput' 
                                    type="text"
                                    placeholder='Fred Becker'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input 
                                    className='userUpdateInput' 
                                    type="text"
                                    placeholder='fredbeck99@gmail.com'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input 
                                    className='userUpdateInput' 
                                    type="text"
                                    placeholder='+254 768 444 443'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input 
                                    className='userUpdateInput' 
                                    type="text"
                                    placeholder='Nairobi | Kenya'/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="../../../public/assets/avatar.jpg" alt="" className='userUpdateImg'/>
                                <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default User