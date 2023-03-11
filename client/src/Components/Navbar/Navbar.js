import React, { useState } from 'react'
import "./Navbar.css"


function Navbar({ user, userLogin }) {

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }

    const [sideBurger, SetSideBurger] = useState(true)

    const slideStart=()=>{
        SetSideBurger(false)
    }

    const slideEnd=()=>{
        SetSideBurger(true)
    }



    return (
        <div className='navbarBigBox'>
            <nav className="navbar navbar-expand-lg">
                <div className="navbarIcons">
                    <span>IAMLOGO</span>
                </div>
                <form className="d-flex" id='navbarNav' role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div id="navbarDP">
                    {userLogin ? <a href='/Profile'><img id="navbarProfile" src={user.profile} alt="Loading" /></a> :
                        <a className="nav-link active" href="/Login"><i id='loginIcon' className="fa-solid fa-user"></i></a>}
                    <span>Name</span>
                    {sideBurger?<i className="fa-solid fa-bars" onClick={slideStart}></i>:<i className="fa-solid fa-xmark" onClick={slideEnd}></i>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
