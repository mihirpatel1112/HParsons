import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import venues from "../data/venues.json";

function Home() {
  // setup state variables for filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVenues, setFilteredVenues] = useState(venues);
  const [nameFilter, setNameFilter] = useState("");
  const [capacityFilter, setCapacityFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [suburbOrPostalCode, setSuburbOrPostalCode] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // get unique values for filter dropdowns
  const uniqueNames = [...new Set(venues.map((venue) => venue.Name))];
  const capacityRanges = ["50-100", "100-150", "150-200", "200-250"];
  const australianStates = ["TAS", "ACT", "NT", "QLD", "NSW"];

  // filter venues when search or filters change
  useEffect(() => {
    let filtered = venues;

    // filter by search term
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (venue) =>
          venue.Name.toLowerCase().includes(lowerCaseSearchTerm) ||
          venue.Location.toLowerCase().includes(lowerCaseSearchTerm) ||
          venue.ShortDescription.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    // filter by venue name
    if (nameFilter) {
      filtered = filtered.filter((venue) => venue.Name === nameFilter);
    }

    // filter by capacity range
    if (capacityFilter) {
      const [minCapacity, maxCapacity] = capacityFilter.split("-").map(Number);
      filtered = filtered.filter(
        (venue) =>
          venue.Capacity >= minCapacity && venue.Capacity <= maxCapacity
      );
    }

    // filter by state
    if (locationFilter) {
      filtered = filtered.filter((venue) =>
        venue.Location.includes(locationFilter)
      );
    }

    // filter by suburb/postcode
    if (suburbOrPostalCode) {
      const lowerCaseSuburbOrPostalCode = suburbOrPostalCode.toLowerCase();
      filtered = filtered.filter((venue) =>
        venue.Location.toLowerCase().includes(lowerCaseSuburbOrPostalCode)
      );
    }

    setFilteredVenues(filtered);
  }, [
    nameFilter,
    capacityFilter,
    locationFilter,
    suburbOrPostalCode,
    searchTerm,
  ]);

  return (
    <div>
      {/* logo */}
      <div className="flex justify-center items-center p-4">
        <img
          src="/Parsons-CMYK-No-Bck.png"
          alt="logo"
          className="max-w-full h-auto"
        />
      </div>

      {/* search bar */}
      <div className="flex justify-center items-center p-4">
        <div className="relative sm:w-1/2 w-full">
          <input
            type="text"
            placeholder="Search venue, suburb, state or postal code"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full border-2 border-gray-300 p-2 rounded-2xl text-gray-600 focus:outline-none focus:ring-1 focus:ring-customLightBlue"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* mobile filters dropdown */}
      <div className="flex justify-center sm:hidden items-center p-4">
        <div className="relative sm:w-1/2 w-full">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full border-2 border-gray-300 p-2 rounded-2xl text-gray-600 focus:outline-none focus:ring-1 focus:ring-customLightBlue flex justify-between items-center"
          >
            <span>Filters</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-2 border-gray-300 rounded-2xl shadow-lg mt-2 z-10">
              <div className="p-4">
                <select
                  value={nameFilter}
                  onChange={(e) => setNameFilter(e.target.value)}
                  className="border-2 border-gray-300 text-gray-600 p-2 rounded-2xl   focus:outline-none focus:ring-2 focus:ring-customLightBlue w-full mb-2"
                >
                  <option value="">Select Name</option>
                  {uniqueNames.map((name, index) => (
                    <option key={index} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
                <select
                  value={capacityFilter}
                  onChange={(e) => setCapacityFilter(e.target.value)}
                  className="border-2 border-gray-300 p-2 rounded-2xl text-gray-600   focus:outline-none focus:ring-2 focus:ring-customLightBlue w-full mb-2"
                >
                  <option value="">Select Capacity</option>
                  {capacityRanges.map((range, index) => (
                    <option key={index} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="border-2 border-gray-300 p-2 rounded-2xl text-gray-600   focus:outline-none focus:ring-2 focus:ring-customLightBlue w-full mb-2"
                >
                  <option value="">Select State</option>
                  {australianStates.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Suburb or Postal Code"
                  value={suburbOrPostalCode}
                  onChange={(e) => setSuburbOrPostalCode(e.target.value.toLowerCase())}
                  className="border-2 border-gray-300 p-2 rounded-2xl text-gray-600   focus:outline-none focus:ring-2 focus:ring-customLightBlue w-full"
                />
                 <button
          onClick={() => {
            setNameFilter('');
            setCapacityFilter('');
            setLocationFilter('');
            setSuburbOrPostalCode('');
          }}
          className="bg-customLightBlue text-white px-6 py-2 my-4 rounded-2xl   hover:bg-opacity-90 transition-colors duration-200 w-full sm:w-auto"
        >
          Clear Filters
        </button>
              </div>
              
            </div>
          )}
        </div>
      </div>

      {/* desktop filters */}
      <div className="sm:flex hidden flex-wrap justify-center gap-4 p-4">
        {/* Filter by name */}
        <select
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="border-2 border-gray-300 text-gray-600 p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-customLightBlue w-full sm:w-1/5"
        >
          <option value="">Select Name</option>
          {uniqueNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>

        {/* Filter by capacity */}
        <select
          value={capacityFilter}
          onChange={(e) => setCapacityFilter(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-2xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-customLightBlue w-full sm:w-1/5"
        >
          <option value="">Select Capacity</option>
          {capacityRanges.map((range, index) => (
            <option key={index} value={range}>
              {range}
            </option>
          ))}
        </select>

        {/* Filter by address */}
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-2xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-customLightBlue w-full sm:w-1/5"
        >
          <option value="">Select State</option>
          {australianStates.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* Filter by suburb or postal code */}
        <input
          type="text"
          placeholder="Suburb or Postal Code"
          value={suburbOrPostalCode}
          onChange={(e) => setSuburbOrPostalCode(e.target.value.toLowerCase())}
          className="border-2 border-gray-300 p-2 rounded-2xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-customLightBlue w-full sm:w-1/5"
        />

        {/* Clear filters button */}
        <button
          onClick={() => {
            setNameFilter('');
            setCapacityFilter('');
            setLocationFilter('');
            setSuburbOrPostalCode('');
          }}
          className="bg-customLightBlue text-white px-6 py-2 rounded-2xl hover:bg-opacity-90 transition-colors duration-200 w-full sm:w-auto"
        >
          Clear Filters
        </button>
      </div>

      {/* No results message */}
      {filteredVenues.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">No venues match your search criteria</p>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search terms</p>
        </div>
      )}

      {/* venue cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
        {filteredVenues.map((venue, index) => (
          <Card key={index} venue={venue} />
        ))}
      </div>
    </div>
  );
}

export default Home;
