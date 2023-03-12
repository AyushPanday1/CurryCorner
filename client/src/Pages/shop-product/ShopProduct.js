import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar'
import Chat from '../../Components/Chat/Chat'
import ProductCard from '../../Components/ProductCard/PorductCard';

function ShopProduct() {

  const { shopId } = useParams();
  const [product,SetProduct]=useState([])
  const [shop,Setshop]=useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/product/${shopId}`)
      .then((responce) => {
        SetProduct(responce.data.data);
        console.log(responce.data.shopDetail)
        Setshop(responce.data.shopDetail)
        
      
      })
      .catch((err) => alert(err.message));
  }, []);
  



  return (
    <div>
       <Navbar />

       <div>
        {/* <img src={product[0].shopId.pic} alt="" /> */}
       </div>

      <Chat />

      <ProductCard product={product} />

      i am product page
      <div>Username: { shopId }</div>
    </div>
  )
}

export default ShopProduct
