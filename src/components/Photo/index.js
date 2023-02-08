import React from "react";
import BVPrague2 from "../../assets/images/BVPrague2.png";



function Photo() {
  return (
    //build html for photo grid
    <div className="album-container">
      <div className="header" id="myHeader">
        <h1>Image Grid</h1>
        <p>Click on the buttons to change the grid view.</p>
        <button className="btn" onclick="one()">
          1
        </button>
        <button className="btn active" onclick="two()">
          2
        </button>
        <button className="btn" onclick="four()">
          4
        </button>
      </div>

      <div className="row photo-grid">
        <div className="column">
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
        </div>

        <div className="column">
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
        </div>

        <div className="column">
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
        </div>

        <div className="column">
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
          <img src={BVPrague2} alt="" />
        </div>
      </div>
    </div>
  );
}






export default Photo;
