import "./assets/css/style.scss";
import * as React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import axios from "axios";

function App() {
    const apiKey = "at_78FP5IyukK4UMaR1egRhQkPHi6uPf";
    const apiUrl = "https://geo.ipify.org/api/v1?apiKey=at_78FP5IyukK4UMaR1egRhQkPHi6uPf&ipAddress=8.8.8.8";
    const [newIp, setNewIp] = useState();

    useEffect(() => {
        axios
            .get("https://geo.ipify.org/api/v1?apiKey=at_78FP5IyukK4UMaR1egRhQkPHi6uPf&ipAddress=8.8.8.8")
            .then(({ data: newIp }) => {
                setNewIp(newIp);
            });
    }, []);
    // newIp.map((item) => {
    //     console.log(item.ip);
    // });

    // console.log(newIp);

    return (
        <div className="main">
            <div className="header">
                <h1>IP Address Tracker</h1>
                <div className="search-box">
                    <input type="search" name="ip" id="ip" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="map">
                <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[51.505, -0.09]} />
                </MapContainer>
            </div>
        </div>
    );
}

export default App;
