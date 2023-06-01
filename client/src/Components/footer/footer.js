import React from 'react'
import classes from './footer.css'

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer__addr">
    <h1 class="footer__logo"><img className='nav-logo' src="https://th.bing.com/th/id/OIP.GyWqMDYf4DCTJM4aOY5oIgHaHa?pid=ImgDet&rs=1" alt="img" /> CurryCorner</h1>
     
          
      <h2>Contact</h2>
      
      <address>
        5534 Jaipur, Rajasthan 22193-10212<br />
            
        <a class="footer__btn" href="ayush7426883261@gmail.com">Email Us</a>
      </address>
    </div>
    
    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">States</h2>
  
        <ul class="nav__ul">
          <li>
            <a href="#">Rajasthan</a>
          </li>
  
          <li>
            <a href="#">Uttar pradesh</a>
          </li>
              
          <li>
            <a href="#">Punjab</a>
          </li>
          <li>
            <a href="#">Delhi</a>
          </li>
          <li>
            <a href="#">Maharastra</a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </li>
      
      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">About Us</h2>
        
        <p class="color">Launched in 2023, CurryCorner not only connects people to food in every context but work closely with restaurants to enable a sustainable ecosystem
        We find the best delicates dishes to serve you with combination of taste and love.
        </p>

        {/* <ul class="nav__ul nav__ul--extra">
          <li>
            <a href="#">Hardware Design</a>
          </li>
          
          <li>
            <a href="#">Software Design</a>
          </li>
          
          <li>
            <a href="#">Digital Signage</a>
          </li>
          
          <li>
            <a href="#">Automation</a>
          </li>
          
          <li>
            <a href="#">Artificial Intelligence</a>
          </li>
          
          <li>
            <a href="#">IoT</a>
          </li>
        </ul> */}
      </li>
      
      <li class="nav__item">
        <h2 class="nav__title">Legal</h2>
        
        <ul class="nav__ul">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          
          <li>
            <a href="#">Terms of Use</a>
          </li>
          
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </li>
    </ul>
    
    <div class="legal">
      <p>&copy; 2023 CurryCorner. All rights reserved.</p>
      
      <div class="legal__links">
        <span> <span class="heart">♥</span>Designed by Ayush Panday.</span>
      </div>
    </div>
  </footer>
  )
}

export default Footer