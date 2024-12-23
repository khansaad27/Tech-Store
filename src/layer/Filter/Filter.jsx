import React, { useState } from "react";
import Button from "../Button";
import Image from "../Image";
import PTopBar from "../productTopBar/PTopBar";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  // Handle clear filters
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setSelectedColor(null);
    setSelectedFilters(0);

    const inputs = document.querySelectorAll("input[type=checkbox], input[type=radio]");
    if (inputs.length > 0) {
      inputs.forEach((input) => {
        input.checked = false;
      });
    }
    alert("Filters cleared!");
  };



  // Handle apply filters
  const handleApplyFilters = () => {
    setSelectedFilters(
      selectedCategories.length + selectedPriceRanges.length + (selectedColor ? 1 : 0)
    );
    alert(`Filters Applied (${selectedFilters})`);
  };



  // Handle color change
  const handleColorChange = (event) => {
    setSelectedColor(event.target.id);
  };

  // Handle checkbox changes for categories and price ranges
  const handleCheckboxChange = (event, type) => {
    const value = event.target.id;
    if (type === "category") {
      setSelectedCategories((prev) =>
        event.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
      );
    } else if (type === "price") {
      setSelectedPriceRanges((prev) =>
        event.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
      );
    }
  };

  // Categories data
  const categories = [
    { id: "custom-pcs", label: "CUSTOM PCS", count: 5 },
    { id: "hp-pcs", label: "HP/COMPAQ PCS", count: 15 },
    { id: "msi-pcs", label: "MSI ALL-IN-ONE PCS", count: 45 },
  ];

  // Price ranges data
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

  // Color data
  const colors = [
    { id: 'red', hex: '#FF0000' },
    { id: 'blue', hex: '#0000FF' },
    { id: 'green', hex: '#008000' },
    { id: 'yellow', hex: '#FFFF00' },
  ];

  // Brands data (with logo URLs)
  const brands = [
    { id: "brand2", label: "MSI", logo: "/assets/BrandLogos/ad.svg" },
    { id: "brand3", label: "ASUS", logo: "/assets/BrandLogos/gi.svg" },
    { id: "brand4", label: "GIGABYTE", logo: "/assets/BrandLogos/hp.svg" },
    { id: "brand5", label: "GIGABYTE", logo: "/assets/BrandLogos/msi.svg" },
    { id: "brand6", label: "GIGABYTE", logo: "/assets/BrandLogos/ra.svg" },
    { id: "brand7", label: "GIGABYTE", logo: "/assets/BrandLogos/rl.svg" },
  ];
  const navigate = useNavigate();


  return (
    < >

      <div className="flex  ">
        <aside className="w-[270px] mt-4 pr-4">
          <div className="mb-3">
            <button
              onClick={() => navigate(-1)}
              className="font-Poppins text-sm px-6 lg:px-[90px] font-semibold text-black hover:underline"
            >
              &lt; Back
            </button>
          </div>
          <div>
            {/* Filters */}
            <div className="px-4 py-7 mb-4 bg-color-1 shadow-md">
              <div className="text-center">
                <h2 className="text-base font-Poppins text-black font-bold mb-2">
                  Filters
                </h2>
                <Button
                  onClick={handleClearFilters}
                  className="py-2 px-[61px] border-color-5 text-color-5 rounded-full mb-4"
                >
                  Clear Filter
                </Button>
              </div>

              {/* Category Filter */}
              <div className="mb-4">
                <h3 className="font-semibold font-Poppins text-base text-black mb-2">
                  Category
                </h3>
                <ul>
                  {categories.map((category) => (
                    <li
                      className="font-Poppins text-sm leading-[1.70em] text-black"
                      key={category.id}
                    >
                      <input
                        className="mr-2 rounded-full"
                        id={category.id}
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, "category")}
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
                <h3 className="font-semibold font-Poppins text-base text-black mb-2">
                  Price
                </h3>
                <ul>
                  {priceRanges.map((price, index) => (
                    <li
                      className="font-Poppins text-sm leading-[1.70em] text-black"
                      key={index}
                    >
                      <input
                        className="mr-2"
                        id={`price${index + 1}`}
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, "price")}
                      />
                      <label htmlFor={`price${index + 1}`}>{price}</label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Filter */}
              <div className="mb-4">
                <h3 className="font-semibold font-Poppins text-base text-black mb-2">
                  Color
                </h3>
                <ul className="flex gap-2">
                  {colors.map((color) => (
                    <li key={color.id}>
                      <input
                        className="hidden"
                        id={color.id}
                        type="radio"
                        name="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor={color.id}
                        className={`block w-5 h-5 rounded-full cursor-pointer transition ${selectedColor === color.id
                            ? "border-blueLight border-[3px] w-7 h-7"
                            : ""
                          }`}
                        style={{ backgroundColor: color.hex }}
                      ></label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Filters */}
              <div className="mb-4">
                <h3 className="font-semibold font-Poppins text-base text-black mb-2">
                  Filter Name
                </h3>
                <Button
                  onClick={handleApplyFilters}
                  className="py-2 px-[45px] font-semibold text-sm rounded"
                >
                  Apply Filters ({selectedFilters})
                </Button>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-4 py-7 px-4 bg-color-1 shadow-md">
              <div className="text-center">
                <h3 className="font-semibold font-Poppins text-base text-black mb-2">
                  Brands
                </h3>
                <Button className="py-2 px-[63px] border-color-5 text-color-5 font-semibold text-sm rounded">
                  All Brands
                </Button>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {brands.map((brand) => (
                  <div
                    key={brand.id}
                    className="flex items-center justify-center p-2 border rounded-md bg-white hover:shadow-lg"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.label}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Advertisement */}
            <div className="mb-4 py-7 px-3 bg-color-1 text-center shadow-md">
              <h3 className="font-semibold font-Poppins text-base text-black mb-2">
                Compare Products
              </h3>
              <p className="font-Poppins text-sm text-black">
                You have no items to compare.
              </p>
            </div>
            <div className="mb-4 py-7 px-4 text-center bg-color-1 shadow-md">
              <h3 className="font-semibold font-Poppins text-base text-black mb-2">
                My Wish List
              </h3>
              <p className="font-Poppins text-sm text-black">
                You have no items in your wish list.
              </p>
            </div>
            <div className="mb-4">
              <Image
                alt="Advertisement for noblechairs The Icon Series"
                className="w-full rounded"
                height="300"
                src="/assets/hsd/hs.svg"
                width="200"
              />
            </div>
          </div>
        </aside>

        <div className="w-[90%] ">
          <PTopBar />
        </div>
      </div>


    </>

  );
};

export default Filter;
