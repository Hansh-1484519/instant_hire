import React , {useEffect, useState} from 'react'
import axios from 'axios'
import './sidebar.css'

const Sidebar = () => {
    const [user, setUser] = useState([])
    const getUser = () =>{
        axios.get("http://refertest.pythonanywhere.com/user/data")
        .then(response =>{
           // console.log(response.data.data);
            setUser(response.data.data);
        })
    }

    useEffect(()=>{
        getUser()
    }, [])
    return (
        <div>
            <div className='UserImage'>
            <img src={user.pictureUrl} alt = "user"/>
            </div>
            <div className = "UserInfo">
                <span>{user.name}</span>
                <p>{user.college}</p>
            </div>
        </div>
    );
}

export default Sidebar