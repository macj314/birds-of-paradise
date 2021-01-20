import React from "react";
import Header from "./Header";
import Sightings from "./Sightings";
// import SightingsControl from "./SightingsControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <Sightings />
    </React.Fragment>
  );
}

export default App;