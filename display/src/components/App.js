import React, { useState, useEffect } from "react";
import axios from 'axios';
import map from '../counties-map.jpg';
import SearchBar from './SearchBar';
import Sightings from "./SightingList";
// import Header from "./Header";
// import SightingsControl from "./SightingsControl";
import './App.css';

function App(){
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        'https://api.ebird.org/v2/data/obs/US-WA-033/recent?maxResults=5', {
          headers: {
            'X-eBirdApiToken': process.env.REACT_APP_EBIRD_API_TOKEN
          }
        })

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])
  return ( 
    <React.Fragment>
      <img src={map} className="App-map" alt="map" />
      <SearchBar>
        {/* input={input} 
        onChange={updateInput} */}
      </SearchBar>
      <Sightings isLoading={isLoading} items={items} />
    </React.Fragment>
  );
}

export default App;