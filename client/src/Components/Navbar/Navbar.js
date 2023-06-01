import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../Components/Menu/Menu'
import "./Navbar.css"


function Navbar() {



    //SideBurger

    const [sideBurger, SetSideBurger] = useState(true)

    const slideStart = () => {
        SetSideBurger(false)
    }
    const slideEnd = () => {
        SetSideBurger(true)
    }


    const [searchName, setSearchName] = useState("")


    const searchItems = (e) => {
        e.preventDefault()
        if (searchName === "") { return alert("Error : Search for food !") }
        window.location.replace(`/items?title=${searchName}`, { replace: true })
    }

    let userData = JSON.parse(localStorage.getItem("user"))

    return (
        <div className='navbarBigBox'>
            <nav className="navbar navbar-expand-lg">
                <a href="/home">
                    <div className="navbarIcons">
                        <img className='nav-logo' src="https://th.bing.com/th/id/OIP.GyWqMDYf4DCTJM4aOY5oIgHaHa?pid=ImgDet&rs=1" alt="img" />
                        <span id='logo'>CurryCorner</span>

                    </div>
                </a>
                <form className="d-flex" id='navbarNav' role="search">
                    <input className="form-control me-2" type="search" placeholder={"📍"} aria-label="Search" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
                    <button className="btn btn-outline-success" onClick={searchItems} type="submit" >Search</button>
                </form>
                <div id="navbarDP">
                    <img id="navbarProfile" src={userData.userId.profileImage} alt="Loading" />
                    <span>{userData.userId.name}</span>
                    {sideBurger ? <i className="fa-solid fa-bars barger" onClick={slideStart}></i> : <i className="fa-solid fa-xmark" onClick={slideEnd}></i>}
                </div>
            </nav>
            <Menu sideBurger={sideBurger} />
        </div>
    )
}

export default Navbar