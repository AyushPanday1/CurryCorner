import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css"

function Menu({ sideBurger }) {
    return (
        <div className='menu' style={(sideBurger) ? { right: "-17rem" } : { right: "0rem" }}>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/product'>Products</NavLink></li>
                <li><NavLink to='/addshop'>Add Shop</NavLink></li>
                <li><NavLink to='/addproduct'>Add Product</NavLink></li>
                <li><NavLink to='/cart'>Cart</NavLink></li>
                <li><NavLink to='/About'>About us</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu