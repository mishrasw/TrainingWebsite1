import React from "react";
//import BannerImage from "../assets/banner.png";
import ImageSlider from "../ImageSlider"
import "../style/About.css";
import img1 from "../assets/se_framework.png"
import img2 from "../assets/pw_framework.png"
import img3 from "../assets/rest_assured.png"
import img4 from "../assets/appium.png"

function About() {
  const images=[
    img1,img2,img3,img4
  ];
  return (
    <div className="about">
      <div
        className="aboutTop"
        //style={{ backgroundImage: `url(${BannerImage})` }}
      >
      <div style={{padding: "10px"}}>
        <ImageSlider images={images}/>
      </div>
      </div>
      <div className="aboutBottom" style={{ color: 'white' }}>
        <h1 style={{ color: 'white' }}> ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </p>
      </div>
    </div>
  );
}

export default About;
