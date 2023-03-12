import React, { useState } from 'react'
import Menu from '../../Components/Menu/Menu'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'



function Navbar({ user, userLogin }) {

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }

    //SideBurger

    const [sideBurger, SetSideBurger] = useState(true)

    const slideStart = () => {
        SetSideBurger(false)
    }
    const slideEnd = () => {
        SetSideBurger(true)
    }


    const [searchName, setSearchName] = useState("")

    const navigate = useNavigate()
    const searchItems = (e) => {
        e.preventDefault()
        if (searchName === "") { return alert("Error : Search for food !") }
        navigate(`/items?title=${searchName}`, { replace: true })
        //window.location.replace(`/items?title=${searchName}`)
    }

    let userData = JSON.parse(localStorage.getItem("user"))

    return (
        <div className='navbarBigBox'>
            <nav className="navbar navbar-expand-lg">
                <div className="navbarIcons">
                    <img className='nav-logo' src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" alt="img" />
                    <span>OniFood</span>
                </div>
                <form className="d-flex" id='navbarNav' role="search">
                    <input className="form-control me-2" type="search" placeholder={userData.userId.address.city} aria-label="Search" value={searchItems} onChange={(e) => setSearchName(e.target.value)} />
                    <button className="btn btn-outline-success" onClick={searchItems} type="submit" >Search</button>
                </form>
                <div id="navbarDP">
                    <img id="navbarProfile" src={userData.userId.profileImage} alt="Loading" />
                    <span>{userData.userId.name}</span>
                    {sideBurger ? <i className="fa-solid fa-bars barger" onClick={slideStart}></i> : <i className="fa-solid fa-xmark" onClick={slideEnd}></i>}
                </div>
            </nav>
            <div className="menuBtnBox">
                <Menu sideBurger={sideBurger} />
            </div>
        </div>
    )
}

export default Navbar