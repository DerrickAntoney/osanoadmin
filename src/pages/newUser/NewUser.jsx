import './newUser.css'

const NewUser = () => {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input 
                    className='newUserInput' 
                    type="text"
                    placeholder='john'/>
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input 
                    className='newUserInput' 
                    type="text"
                    placeholder='John Smith'/>
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input 
                    className='newUserInput' 
                    type="email"
                    placeholder='john@gmail.com'/>
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input 
                    className='newUserInput' 
                    type="password"
                    placeholder='password'/>
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input 
                    className='newUserInput' 
                    type="text"
                    placeholder='+25471234564'/>
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input 
                    className='newUserInput' 
                    type="text"
                    placeholder='Nairobi | Kenya'/>
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input 
                        type='radio' 
                        name="gender"
                        id='male'
                        value='male'/>
                    <label for='Male'>Male</label>
                    <input 
                        type='radio' 
                        name="gender"
                        id='female'
                        value='female'/>
                    <label for='Female'>Female</label>
                    <input 
                        type='radio' 
                        name="gender"
                        id='other'
                        value='other'/>
                    <label for='Other'>Other</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className='newUserSelect' name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            
        </form>
        <button className="newUserButton">Create</button>
    </div>
  )
}

export default NewUser