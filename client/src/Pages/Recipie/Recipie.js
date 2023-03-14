import React,{useState,useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Chat from "../../Components/Chat/Chat";
import "./Recipi.css";
import axios from "axios";
import Video from '../../Components/Video/Videoplay'


function Recipie() {
  const [videodata,setvideodata]=useState([])


  useEffect(() => {
    axios.get("http://localhost:3001/recipi")
      .then((responce) => {
        
        setvideodata(responce.data.data);
      })
      .catch((err) => alert(err.message));
  }, []);


  return (
    <div>
      <Navbar />
      <Chat />
      <Video videodata={videodata}/>
    </div>
  );
}

export default Recipie;
