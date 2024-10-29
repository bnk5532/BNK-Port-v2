// import React, {useState} from "react";
// import Carousel from "react-bootstrap/Carousel";
// import familyPic1 from "../../assets/images/familyPic1.png";
// import Battleship1 from "../../assets/photography/Battleship1.jpeg";
// import Tig1 from "../../assets/photography/Tig1.jpeg";
// import VECharles from "../../assets/photography/VEcharleston1.jpeg";

import IRL1 from "../../assets/photography/IRL1.jpeg";
import IRL2 from "../../assets/photography/IRL2.jpeg";
import IRL3 from "../../assets/photography/IRL3.jpeg";
import DUB1 from "../../assets/photography/Dublin1.JPG";
import DUB2 from "../../assets/photography/Dublin2.jpg";
import TART from "../../assets/photography/Tart1.jpg";
import WF1 from "../../assets/photography/WF1.jpg";
import Trim1 from "../../assets/photography/Trim1.JPG";
import Trim2 from "../../assets/photography/Trim2.jpg";
import NG3 from "../../assets/photography/NG3.jpg";
import VAKRoss1 from "../../assets/photography/VAKRoss1.jpg";
import FRIAR2 from "../../assets/photography/FRIAR2.jpg";

// import Drone1 from "../../assets/photography/Drone1.jpeg";
import Prague1 from "../../assets/photography/Prague1.jpeg";
import Prague2 from "../../assets/photography/Prague2.jpeg";
import Prague9 from "../../assets/photography/Prague9.jpeg";
import Prague4 from "../../assets/photography/Prague4.jpeg";
import Prague5 from "../../assets/photography/Prague5.jpeg";
import Prague11 from "../../assets/photography/Prague11.jpeg";
import Prague15 from "../../assets/photography/Prague15.jpeg";
import Prague16 from "../../assets/photography/Prague16.jpeg";
import KH1 from "../../assets/photography/KH1.jpeg";
import KH2 from "../../assets/photography/KH2.jpeg";
import KH3 from "../../assets/photography/KH3.jpeg";
import KH4 from "../../assets/photography/KH4.jpeg";

import BA1 from "../../assets/photography/BA1.jpeg";
import BA2 from "../../assets/photography/BA2.jpeg";
import BA3 from "../../assets/photography/BA3.jpeg";
import BA4 from "../../assets/photography/BA4.jpeg";
import BA6 from "../../assets/photography/BA6.jpeg";
import BA7 from "../../assets/photography/BA7.jpeg";

import BH1 from "../../assets/photography/BH1.jpeg";
import BH2 from "../../assets/photography/BH2.jpeg";
import BH3 from "../../assets/photography/BH3.jpeg";
import BH4 from "../../assets/photography/BH4.jpeg";
import BH5 from "../../assets/photography/BH5.jpeg";
import BH6 from "../../assets/photography/BH6.jpeg";

import BASH1 from "../../assets/photography/BASH1.jpg";
import BASH2 from "../../assets/photography/BASH2.jpg";
import BASH3 from "../../assets/photography/BASH3.jpg";
import BASH4 from "../../assets/photography/BASH4.jpg";
import BASH5 from "../../assets/photography/BASH5.jpg";
import BASH6 from "../../assets/photography/BASH6.jpg";
import BASH7 from "../../assets/photography/BASH7.jpg";
import BASH8 from "../../assets/photography/BASH8.jpg";
import FA1 from "../../assets/photography/FA1.jpg";

import RAP1 from "../../assets/photography/Rap1.jpg";
import RAP4 from "../../assets/photography/Rap4.jpg";
import RAP6 from "../../assets/photography/Rap6.jpg";
import RAP7 from "../../assets/photography/Rap7.jpg";
import RAP8 from "../../assets/photography/Rap8.jpg";
import RAP9 from "../../assets/photography/Rap9.jpg";

import DUCK1 from "../../assets/photography/Duck1.jpeg";
import HORSE2 from "../../assets/photography/IRLH2.jpg";
import RB1 from "../../assets/photography/RB1.jpg";

import React, {useEffect} from "react";
import {
  // MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

// function PhotoGrid() {
//   return (
//     <MDBRow>
//       <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
//         <img
//           src={Ross1}
//           className="w-100 shadow-1-strong rounded mb-4"
//           alt="Old Point Lighthouse, Virginiar"
//         />

//         <img
//           src={VECharles}
//           className="w-100 shadow-1-strong rounded mb-4"
//           alt="Victoria & Brian Jr. in Williamsburg, Virginia"
//         />
//       </MDBCol>

//       <MDBCol lg={4} className="mb-4 mb-lg-0">
//         <img
//           src={Tig1}
//           className="w-100 shadow-1-strong rounded mb-4"
//           alt="Victoria & Brian Jr. at Porters Neck Easter Event"
//         />

//         <img
//           src={Drone1}
//           className="w-100 shadow-1-strong rounded mb-4"
//           alt="Family at Banner Elk Winery"
//         />
//       </MDBCol>

//       <MDBCol lg={4} className="mb-4 mb-lg-0">
//         <img
//           src={Drone1}
//           className="w-100 shadow-1-strong rounded mb-4"
//           alt="Family on Christmas morning, 2022"
//         />
//         <img
//           src={Cliffs1}
//           className="w-100 shadow-1-strong rounded mb-4"
//           alt="Family on Christmas morning, 2022"
//         />

//         <img
//           src={Battleship1}
//           className="w-100 shadow-1-strong rounded mb-4"
//           alt="Family at Banner Elk Winery"
//         />
//       </MDBCol>
//     </MDBRow>
//   );
// }

function PragueGrid1() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <img
          src={Prague1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Charles Bridge at night"
        />
        <img
          src={Prague5}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Prague Old Town Square at night"
        />
        <img
          src={Prague9}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="St. Vitus Cathedral interior arches"
        />
        <img
          src={KH3}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Vlasta in Kutna Hora"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={Prague2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Tower on Charles Bridge"
        />

        <img
          src={Prague4}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Waterwheel in Prague at night"
        />
        <img
          src={Prague16}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Abandoned Palace in Prague"
        />
        <img
          src={KH1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Vineyards of Kutna Hora"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={Prague15}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Vlatava river and Prague Castle"
        />
        <img
          src={Prague11}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Tower entrance at Charles Bridge"
        />
        <img
          src={KH4}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Kutna Hora Church"
        />
        <img
          src={KH2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Chandler made of human bones"
        />
      </MDBCol>
    </MDBRow>
  );
}

function IrelandGrid1() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <img
          src={IRL2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Ross Castle at dusk"
        />
        <img
          src={DUB1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Temple Bar at night"
        />
        <img
          src={FRIAR2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Friary ruin outside of Galway, Ireland"
        />
        <img
          src={VAKRoss1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Vlasta at Ross Castle"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={IRL1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Ornate chalice at Dublin, Ireland museum"
        />
        <img
          src={TART}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Tart with a cart statue"
        />
        <img
          src={WF1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Waterfall at Blarney Castle"
        />
        <img
          src={Trim2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Vlasta scaling hillside at Trim Castle"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={IRL3}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="View of the Cliffs of Mohor"
        />
        <img
          src={Trim1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Trim Castle"
        />
        <img
          src={DUB2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Penny Bridge at night in Dublin"
        />
        <img
          src={NG3}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Newgrange ancient passage tomb"
        />
        
      </MDBCol>
    </MDBRow>
  );
}


function BlueAngelsGrid1() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <img
          src={BASH7}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 1-4 break formation"
        />
        <img
          src={BASH5}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 5 and 6 pass head on"
        />
        <img
          src={BASH8}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels Delta wing formation"
        />
        <img
          src={BA1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 1-4 Parade pass"
        />
        <img
          src={BA4}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 5 and 6 fly dirty"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={BASH6}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 1-4 break formation"
        />
        <img
          src={BASH1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 5 high G right turn"
        />
        <img
          src={BASH2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 5 and 6 mirror formation"
        />
        <img
          src={BA2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 5 and 6 pass head on at high speed"
        />
        <img
          src={BA7}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 5 and 6 playing chicken"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={FA1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels Fat Albert makes parade pass"
        />
        <img
          src={BASH3}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 1-4 half inverted formation"
        />
        <img
          src={BASH4}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angel 6 high angle right turn"
        />
        <img
          src={BA3}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angels 1-4 break formation"
        />
        <img
          src={BA6}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue Angel 5 sneak attach over grounded F-35s"
        />
      </MDBCol>
    </MDBRow>
  );
}

function RaptorGrid1() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <img
          src={RAP1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="F-22 in flat spin"
        />
        <img
          src={RAP9}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="F-22 high G turn right"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={RAP4}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="F-22 in unlimited climb with heavy condensation on wings"
        />

        <img
          src={RAP8}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Heritage flight of F-22 and A-1 Skyraider"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={RAP7}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="F-22 inverted parade pass"
        />
        <img
          src={RAP6}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="F-22 demonstrating high angle maneuver at low speed"
        />
      </MDBCol>
    </MDBRow>
  );
}

function BlueHeronGrid1() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <img
          src={BH2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue heron flying majestically over water"
        />
        <img
          src={BH1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="OBlue heron flying majestically over water"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={BH4}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue heron flying majestically over water"
        />
        <img
          src={BH6}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue heron dipping wing tips in water while in flight"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={BH3}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue heron dipping wing tips in water while in flight"
        />
        <img
          src={BH5}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Blue heron leaps into flight from water"
        />
      </MDBCol>
    </MDBRow>
  );
}

function WildlifeGrid1() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <img
          src={RB1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Perched Irish Redbreast"
        />
       
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={DUCK1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Duck landing on water"
        />
        
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={HORSE2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Pair of Irish horses"
        />
      </MDBCol>
    </MDBRow>
  );
}





function Photography() {

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div style={{ width: "100%" }}>
        <div className="about-me">
          <span className="carousel">
            <div className="photo-title">
              <h2>Photography Albums</h2>
              <a href="#TRAVEL">TRAVEL</a> &nbsp;| &nbsp;
              <a href="#AVIATION">AVIATION</a> &nbsp;| &nbsp;
              <a href="#WILD">WILDLIFE</a> &nbsp;
            </div>
          </span>

          <br></br>
          {/* <span className="carousel">
            <ControlledCarousel />
            
          </span> */}
          {/* <PhotoGrid /> */}
          <strong className="resume-header" id="TRAVEL">
            CZECH REPUBLIC
          </strong>
          <PragueGrid1 />

          <strong className="resume-header" id="TRAVEL">
            IRELAND
          </strong>
          <IrelandGrid1 />

          <strong className="resume-header" id="AVIATION">
            THE U.S. NAVY BLUE ANGELS
          </strong>
          <BlueAngelsGrid1 />
         
          <strong className="resume-header" id="AVIATION">
            LOCKHEED MARTIN F-22 RAPTOR
          </strong>
          <RaptorGrid1 />

          <strong className="resume-header" id="WILD">
            THE GREAT BLUE HERON
          </strong>
          <BlueHeronGrid1 />
          
          <strong className="resume-header" id="WILD">
            WILDLIFE
          </strong>
          <WildlifeGrid1 />

          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Photography;
