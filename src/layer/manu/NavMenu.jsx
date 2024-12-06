import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const NavMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null); // Level 1
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null); // Level 2
  const [hoveredSubSubCategory, setHoveredSubSubCategory] = useState(null); // Level 3
  const [products, setProducts] = useState([]); // Products displayed in level 4

  // Dropdown Data Structure
  const categories = [
    {
      name: "Everyday Use Notebooks",
      subcategories: [],
    },
    {
      name: "MSI Workstation Series",
      subcategories: [
        {
          name: "MSI WS Series",
          subcategories: [
            {
              name: "WS Series Type A",
              id: "ws-type-a", // Use ID to fetch products
            },
            {
              name: "WS Series Type B",
              id: "ws-type-b",
            },
          ],
        },
        {
          name: "MSI WT Series",
          subcategories: [],
        },
      ],
    },
    { name: "MSI Prestige Series", subcategories: [] },
  ];

  // Fetch products when the 3rd-level category is hovered
  useEffect(() => {
    if (hoveredSubSubCategory) {
      fetch(`https://api.example.com/products?subcategory=${hoveredSubSubCategory.id}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [hoveredSubSubCategory]);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-md"
        onMouseEnter={() => {
          setHoveredCategory(null);
          setHoveredSubCategory(null);
          setHoveredSubSubCategory(null);
        }}
      >
        Laptops
      </button>

      {/* Main Dropdown */}
      <div className="absolute top-12 left-0 w-full bg-white shadow-lg z-10">
        <div className="flex">
          {/* Level 1: Categories */}
          <div className="w-1/4 p-4 border-r border-gray-300">
            {categories.map((category, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  setHoveredCategory(category);
                  setHoveredSubCategory(null);
                  setHoveredSubSubCategory(null);
                }}
                className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 transition cursor-pointer"
              >
                <span>{category.name}</span>
                {category.subcategories.length > 0 && (
                  <MdOutlineKeyboardArrowRight className="text-gray-500" />
                )}
              </div>
            ))}
          </div>

          {/* Level 2: Subcategories */}
          {hoveredCategory && hoveredCategory.subcategories.length > 0 && (
            <div className="w-1/4 p-4 border-r border-gray-300 bg-gray-50">
              {hoveredCategory.subcategories.map((subcategory, index) => (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setHoveredSubCategory(subcategory);
                    setHoveredSubSubCategory(null);
                  }}
                  className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 transition cursor-pointer"
                >
                  <span>{subcategory.name}</span>
                  {subcategory.subcategories.length > 0 && (
                    <MdOutlineKeyboardArrowRight className="text-gray-500" />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Level 3: Sub-subcategories */}
          {hoveredSubCategory && hoveredSubCategory.subcategories.length > 0 && (
            <div className="w-1/4 p-4 border-r border-gray-300 bg-gray-100">
              {hoveredSubCategory.subcategories.map((subSubCategory, index) => (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setHoveredSubSubCategory(subSubCategory);
                  }}
                  className="flex items-center justify-between py-2 px-4 hover:bg-gray-300 transition cursor-pointer"
                >
                  <span>{subSubCategory.name}</span>
                  {subSubCategory.id && (
                    <MdOutlineKeyboardArrowRight className="text-gray-500" />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Level 4: Products */}
          {hoveredSubSubCategory && (
            <div className="w-2/4 p-4 bg-gray-100">
              <div className="grid grid-cols-2 gap-4">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product.id}
                      className="border p-2 rounded-md shadow hover:shadow-lg transition"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover"
                      />
                      <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
                      <p className="text-gray-500">${product.price}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">Loading products...</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;


