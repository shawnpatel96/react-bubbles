import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";



const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect (()=>{
    axiosWithAuth()
    .get('/api/colors')   
    .then(res=>{
      console.log("this is res from get in bubble page", res)
      setColorList(res.data)
    })
    .catch (err=>{
      console.log("this is error from get in bubble page", err)
    })
  },[])

 


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
