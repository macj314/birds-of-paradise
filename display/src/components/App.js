import React from "react";
import map from '../counties-map.jpg'
// import Header from "./Header";
import Sightings from "./Sightings";
// import SightingsControl from "./SightingsControl";

function App(){
  return ( 
    <React.Fragment>
      <img src={map} className="App-map" alt="map" />
      {/* <Header /> */}
      <Sightings />
    </React.Fragment>
  );
}

export default App;