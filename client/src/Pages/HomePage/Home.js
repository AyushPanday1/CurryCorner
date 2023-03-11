import React, { useState, useEffect } from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import Carousel from '../../Components/Carousel/Carousel'
import Chat from '../../Components/Chat/Chat'
import ShopCard from '../../Components/ShopCard/ShopCard'
import axios from 'axios';




function Home() {

  //ftech restorent

  const [resto, SetResto] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/product")
      .then((responce) => {
        console.log(responce.data.data);
        SetResto(responce.data.data);
      })
      .catch((err) => alert(err.message));
  }, []);



  return (
    <div>
      <Navbar />
      <Carousel />
      I am Home Page
      <Chat />
      <ShopCard resto={resto} />
    </div>
  )
}

export default Home
