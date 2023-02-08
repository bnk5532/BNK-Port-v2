import React from "react";
import BVPrague2 from "../../assets/images/BVPrague2.jpeg";

var elements = document.getElementsByClassName("column");
var i;
// var header = document.getElementById("myHeader");
// var btns = header.getElementsByClassName("btn");

function Photo() {
  return (
    function one() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%"; // IE10
        elements[i].style.flex = "100%";
      }
    },
    // Two images side by side
    function two() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "50%"; // IE10
        elements[i].style.flex = "50%";
      }
    },
    // Four images side by side
    function four() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%"; // IE10
        elements[i].style.flex = "25%";
      }
    },
    (
      // Add active class to the current button (highlight it)

      // for (var i = 0; i < btns.length; i++) {
      //   btns[i].addEventListener("click", function() {
      //     var current = document.getElementsByClassName("active");
      //     current[0].className = current[0].className.replace(" active", "");
      //     this.className += " active";
      //   });
      // }

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
    )
  );
}

export default Photo;
