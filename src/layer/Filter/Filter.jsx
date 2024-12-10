import React, { useState } from "react";

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState(0);

  const handleClearFilters = () => {
    setSelectedFilters(0);
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((checkbox) => (checkbox.checked = false));
    alert("Filters cleared!");
  };

  const handleApplyFilters = () => {
    alert(`Filters Applied (${selectedFilters})`);
  };

  const handleCheckboxChange = (e) => {
    setSelectedFilters(
      e.target.checked ? selectedFilters + 1 : selectedFilters - 1
    );
  };

  const categories = [
    { id: "custom-pcs", label: "CUSTOM PCS", count: 5 },
    { id: "hp-pcs", label: "HP/COMPAQ PCS", count: 15 },
    { id: "msi-pcs", label: "MSI ALL-IN-ONE PCS", count: 45 },
  ];

  const priceRanges = [
    "$0.00 - $100.00 (1)",
    "$100.00 - $200.00 (2)",
    "$200.00 - $300.00 (3)",
    "$300.00 - $400.00 (4)",
    "$400.00 - $500.00 (5)",
    "$500.00 - $600.00 (6)",
    "$600.00 - $700.00 (7)",
    "$700.00 and Above (8)",
  ];

  const colors = [
    { id: "color-red", label: "Red", count: 1 },
    { id: "color-blue", label: "Blue", count: 2 },
    { id: "color-green", label: "Green", count: 3 },
  ];

  const brands = [
    { id: "brand1", label: "All Brands" },
    { id: "brand2", label: "MSI" },
    { id: "brand3", label: "ASUS" },
    { id: "brand4", label: "GIGABYTE" },
  ];

  return (
    <aside className="w-1/4 pr-4">
      <div className="bg-white p-4 rounded shadow mb-4">
        {/* Header */}
        <div>
          <h2 className="text-lg font-bold mb-2">Filters</h2>
          <button
            onClick={handleClearFilters}
            className="bg-blue text-white px-4 py-2 rounded-full mb-4"
          >
            Clear Filter
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">Category</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <input
                  className="mr-2"
                  id={category.id}
                  type="checkbox"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={category.id}>
                  {category.label} ({category.count})
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">Price</h3>
          <ul>
            {priceRanges.map((price, index) => (
              <li key={index}>
                <input
                  className="mr-2"
                  id={`price${index + 1}`}
                  type="checkbox"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`price${index + 1}`}>{price}</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Color Filter */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">Color</h3>
          <ul>
            {colors.map((color) => (
              <li key={color.id}>
                <input
                  className="mr-2"
                  id={color.id}
                  type="checkbox"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={color.id}>
                  {color.label} ({color.count})
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Filters */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">Filter Name</h3>
          <button
            onClick={handleApplyFilters}
            className="bg-blue text-white px-4 py-2 rounded"
          >
            Apply Filters ({selectedFilters})
          </button>
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">Brands</h3>
          <select className="w-full border bg-white border-gray-300 rounded-md p-2 text-sm text-gray-600">
            <option value="">Select a Filter</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.label}
              </option>
            ))}
          </select>
          
          </div>

          {/* Advertisement */}
          <div className="mb-4">
            <h3 className="font-bold mb-2">Compare Products</h3>
            <p>You have no items to compare.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-2">My Wish List</h3>
            <p>You have no items in your wish list.</p>
          </div>
          <img
            alt="Advertisement for noblechairs The Icon Series"
            className="w-full rounded"
            height="300"
            src="https://storage.googleapis.com/a1aa/image/699r3p2KQcJ1C1OchY0vP5uvHkAALDRM6ABaMBlhTLJzAYeJA.jpg"
            width="200"
          />
        </div>
    </aside>
  );
};

export default Filter;
