import React from "react";
import "./Hero.css";
import image from "../../assets/images/image-web-3-desktop.jpg";
import { holderData } from "../../data";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <div className="img-container">
            <img src={image} alt="" />
          </div>
          <div className="content-container">
            <div className="content-left">
              <h1>
                The Bright <br /> Future of <br /> Web 3.0?
              </h1>
            </div>
            <div className="content-right">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <button>R E A D &nbsp; M O R E</button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="holder">
          <h1>New</h1>
            {holderData.map((item, idx) => {
              return (
                <div className="data">
                  <h2>{item.head}</h2>
                      <p>{item.body}</p>
                      <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
