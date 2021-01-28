import React from 'react'

const SightingItem = ({ item }) => {
    return <div className="card">
        <div className="bird-card">
            <header>
                <div className="bird-name"> {item.comName} </div>
            </header>
            <div className="bird-sci-name"> {item.sciName} </div>
            <div className="bird-loc-name"> {item.locName} </div>
            <div className="bird-obs-date"> {item.obsDate} </div>
            <div className="bird-how-many"> {item.howMany} </div>
        </div>
    </div>
}

export default SightingItem;