import React from 'react'

const SightingItem = ({ item }) => {
    return <div class="container center">
        <div className="card">
            <div className="bird-card">
                <header>
                    <div className="bird-name"> <h1>{item.comName}</h1> </div>
                </header>
                <hr></hr>
                <div className="bird-sci-name"> <h2>{item.sciName}</h2> </div>
                <div className="bird-loc-name"> <b>{item.locName}</b> </div>
                <div className="bird-obs-date"> <b>{item.obsDate}</b>  </div>
                <div className="bird-how-many"> <b>{item.howMany}</b>  </div>
            </div>
        </div>
    </div>
}

export default SightingItem;