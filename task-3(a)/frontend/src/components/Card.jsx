import React from "react";

function Card({ venue }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden m-4 max-w-lg mx-auto transition-transform hover:scale-105">
      <div className="relative w-full overflow-x-auto flex touch-pan-x scrollbar-none">
        <img
          src={venue.VenueImageURL || "https://via.placeholder.com/200"}
          alt={venue.Name}
          className="w-full h-48 object-cover flex-shrink-0"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-customDarkBlue mb-2">{venue.Name}</h2>
        <p className="text-sm text-customLightBlue mb-2 flex items-center">
          <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          {venue.Address}
        </p>
        <p className="text-sm text-customLightBlue mb-2 flex items-center">
          <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          Capacity: {venue.Capacity}
        </p>
        <p className="text-sm text-gray-600 italic leading-relaxed">{venue.ShortDescription}</p>
      </div>
    </div>
  );
}

export default Card;
