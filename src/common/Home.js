import React from 'react';
import "../App.css";
import hello from "../image/mani.png"
const Home = () => {
  return (
    <>
    <div className="home-page">
      <img src={hello}></img>
      <div className="home-div">
      <p className="pt-5"> hello manish </p>
       <p>how are you manish</p>
     </div>
    </div>
    
       
    </>
  );
}

export default Home;
