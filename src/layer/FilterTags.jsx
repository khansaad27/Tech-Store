import React, { useState } from "react";

const FilterTags = () => {
  // State to store selected filters
  const [selectedFilters, setSelectedFilters] = useState([
    { id: 1, name: "CUSTOM PCS", count: 24 },
    { id: 2, name: "HP/COMPAQ PCS", count: 24 },
  ]);

  // Remove an individual filter
  const removeFilter = (id) => {
    setSelectedFilters(selectedFilters.filter((filter) => filter.id !== id));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="flex items-center space-x-2">
      {selectedFilters.map((filter) => (
        <div
          key={filter.id}
          className="flex items-center border border-gray-300 rounded px-3 py-1 space-x-2"
        >
          <span className="text-sm font-semibold">
            {filter.name}{" "}
            <span className="text-gray-500">({filter.count})</span>
          </span>
          <button
            onClick={() => removeFilter(filter.id)}
            className="text-red-500 font-bold"
          >
            &times;
          </button>
        </div>
      ))}

      {selectedFilters.length > 0 && (
        <button
          onClick={clearAllFilters}
          className="text-sm font-semibold text-gray-700 underline"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default FilterTags;
