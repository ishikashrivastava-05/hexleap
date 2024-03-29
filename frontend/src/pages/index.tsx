import React from "react";

import Next from "./nextcomp"
function index() {
  return (
    <div className="main">
      <h1 style={{fontFamily:"roboto", color:'white', paddingTop:"2%", paddingLeft:"5.8%"}}>Sports</h1>
      <div className="one-block" style={{ display: "flex", flexWrap: "wrap", gap: "22px", marginLeft:"6%" }}>
        
       
        <div className="card" style={{ width: "15rem", backgroundColor: "rgb(59,62,71,1)" }}>
          <img
            src="./Capture.PNG"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h3 style={{fontFamily:"roboto", color:"white", marginLeft:"10px"}} >Sacramento River Cats</h3>
           
           <div style={{background:"rgba(41, 43, 50, 1)",width:"88%",marginLeft:"5%"}}>
            <h5 style={{marginLeft:"5%",color:"rgba(223, 223, 223, 1)", paddingTop:"3%"}}> Total Event &nbsp; &nbsp; &nbsp; &nbsp; Sport</h5>
            <h4 style={{marginLeft:"5%",color:"rgba(255, 255, 255, 1)", paddingBottom:"1%"}}>48 Events  &nbsp; &nbsp; &nbsp;  baseball</h4>
           </div>
          </div>
        </div>
        <div className="card" style={{ width: "15rem", backgroundColor: "rgb(59,62,71,1)" }}>
          <img
            src="Capture2.PNG"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <h3 style={{fontFamily:"roboto", color:"white", marginLeft:"10px"}} >Sacramento River Cats</h3>
          <div style={{background:"rgba(41, 43, 50, 1)",width:"88%",marginLeft:"5%"}}>
            <h5 style={{marginLeft:"5%",color:"rgba(223, 223, 223, 1)", paddingTop:"3%"}}> Total Event &nbsp; &nbsp; &nbsp; &nbsp; Sport</h5>
            <h4 style={{marginLeft:"5%",color:"rgba(255, 255, 255, 1)", paddingBottom:"1%"}}>48 Events  &nbsp; &nbsp; &nbsp;  baseball</h4>
           </div>
          </div>
        </div>
        <div className="card" style={{ width: "15rem", backgroundColor: "rgb(59,62,71,1)" }}>
          <img
            src="./Capture3.PNG"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <h3 style={{fontFamily:"roboto", color:"white", marginLeft:"10px"}} >Sacramento River Cats</h3>
          <div style={{background:"rgba(41, 43, 50, 1)",width:"88%",marginLeft:"5%"}}>
            <h5 style={{marginLeft:"5%",color:"rgba(223, 223, 223, 1)", paddingTop:"3%"}}> Total Event &nbsp; &nbsp; &nbsp; &nbsp; Sport</h5>
            <h4 style={{marginLeft:"5%",color:"rgba(255, 255, 255, 1)", paddingBottom:"1%"}}>48 Events  &nbsp; &nbsp; &nbsp;  baseball</h4>
           </div>
          </div>
        </div>
        <div className="card" style={{ width: "15rem", backgroundColor: "rgb(59,62,71,1)" }}>
          <img
            src="./Capture2.PNG"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <h3 style={{fontFamily:"roboto", color:"white", marginLeft:"10px"}} >Sacramento River Cats</h3>
          <div style={{background:"rgba(41, 43, 50, 1)",width:"88%",marginLeft:"5%"}}>
            <h5 style={{marginLeft:"5%",color:"rgba(223, 223, 223, 1)", paddingTop:"3%"}}> Total Event &nbsp; &nbsp; &nbsp; &nbsp; Sport</h5>
            <h4 style={{marginLeft:"5%",color:"rgba(255, 255, 255, 1)", paddingBottom:"1%"}}>48 Events  &nbsp; &nbsp; &nbsp;  baseball</h4>
           </div>
          </div>
        </div>
        <div className="card" style={{ width: "15rem", backgroundColor: "rgb(59,62,71,1)" }}>
          <img
            src="./Capture4.PNG" width="90%" height="48%" 
            style={{paddingTop:"5%",paddingLeft:"5%"}}
            
            alt="..."
          />
          <div className="card-body">
          <h3 style={{fontFamily:"roboto", color:"white", paddingLeft:"5%"}} >Advertisement title</h3>

            <p style={{color:"white",fontSize:"14px",marginLeft:"6%"}}>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Nulla cupiditate ab deserunt<br></br> deleniti consequuntur ut! Officia assumenda nobis reprehenderit, quibusdam est quos porro,<br></br> quaerat veniam, exercitationem sequi sunt quam fugiat.
            </p>
           
          </div>
        </div>
      </div>
     <div className="second">
     <h1 style={{color:"white", fontFamily:"roboto", fontSize:"430%", textAlign:"center"}}>Collection Spotlight</h1>
     <p style={{marginLeft:"20%",fontFamily:"roboto",color:"rgba(255, 255, 255, 1)"}}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable<br></br><span style={{marginLeft:"35%"}}> experience. Grab yours today!</span></p>
     <Next/>
     </div>
    </div>
  );
}

export default index;
