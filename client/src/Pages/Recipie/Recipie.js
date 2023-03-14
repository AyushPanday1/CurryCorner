import React,{useState} from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import Navbar from "../../Components/Navbar/Navbar";
import Chat from "../../Components/Chat/Chat";
import Video1 from "./Video/v.mp4";
import img1 from "./Video/vdimg.webp"
import "./Recipi.css"

function Recipie() {
  const [model,setModel]=useState("")

  let data=[
    {
      id:1,
      poster:img1,
      videoUri:Video1,
      title:"chikn curry"
    }
  ]

  return (
    <div>
      <Navbar />
      <Chat />
      <div  className="Vid-div gallery">
        {data.map((item)=>{

          return(
            <>
            <Video
            style={{ width: "20rem" , height:"20rem" }}
            autoPlay={model}
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            poster={item.poster}
          >
            <source src={item.videoUri} type="video/webm" />
            
          </Video>
          <h2>{item.title}</h2>
         </>
          )
        })}

      </div>
    </div>
  );
}

export default Recipie;
