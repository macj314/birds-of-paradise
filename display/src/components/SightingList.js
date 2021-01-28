import React from 'react'
import SightingItem from './SightingItem';

const Sightings = ({ items, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className="sighting-list">
        {items.map(item => (
            <SightingItem key={item.speciesCode} item={item}></SightingItem>
            ))}
    </section>)
}

export default Sightings