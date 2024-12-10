import React, { useState, useEffect } from "react";
import axios from "axios";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:5000/hotels");
        setHotels(response.data);
      } catch (error) {
        console.error("Error fetching hotels", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div>
      <h1>Hotels</h1>
      <ul>
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <li key={hotel.id}>
              <h2>{hotel.name}</h2>
              <p>{hotel.address}</p>
              <p>Rating: {hotel.hotel_rating}</p>
            </li>
          ))
        ) : (
          <p>No hotels available</p>
        )}
      </ul>
    </div>
  );
};

export default Hotels;
