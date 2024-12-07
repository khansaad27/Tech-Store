import React, { useState } from "react";
import { FaTh } from "react-icons/fa";
import { HiMiniBarsArrowDown } from "react-icons/hi2";

const ViewBar = () => {
  const [view, setView] = useState("grid"); 
  const [columns, setColumns] = useState(6); 

  const toggleView = () => {
    if (view === "grid") {
      setColumns((prev) => (prev > 2 ? prev - 2 : 6)); 
    }
    setView("grid"); 
  };

  return (
    <div>
   
      <div className="flex items-center justify-end space-x-4">
       
        <button
          onClick={toggleView}
          className={`p-2 border rounded ${
            view === "grid" ? "bg-blue text-white" : "bg-gray-200 text-black"
          }`}
        >
          <FaTh size={18} />
        </button>

       
        <button
          onClick={() => setView("list")}
          className={`p-2 border rounded ${
            view === "list" ? "bg-blue text-white" : "bg-gray-200 text-black"
          }`}
        >
          <HiMiniBarsArrowDown size={18} />
        </button>
      </div>
    </div>
  );
};

export default ViewBar;



// import React, { useState } from "react";
// import { FaTh, FaBars } from "react-icons/fa"; // Importing grid and list icons from react-icons

// const ViewBar = () => {
//   const [view, setView] = useState("grid"); // State to track current view
//   const [columns, setColumns] = useState(6); // Default grid column count

//   const toggleView = () => {
//     if (view === "grid") {
//       setColumns((prev) => (prev > 2 ? prev - 2 : 6)); // Reduce grid columns (min 2), then reset to 6
//     }
//     setView("grid"); // Default view is grid
//   };

//   return (
//     <div>
//       {/* View Bar */}
//       <div className="flex items-center justify-end space-x-4 mb-4">
//         {/* Grid View Button */}
//         <button
//           onClick={toggleView}
//           className={`p-2 border rounded ${
//             view === "grid" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
//           }`}
//         >
//           <FaTh size={18} />
//         </button>

//         {/* List View Button */}
//         <button
//           onClick={() => setView("list")}
//           className={`p-2 border rounded ${
//             view === "list" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
//           }`}
//         >
//           <FaBars size={18} />
//         </button>
//       </div>

//       {/* Content Section */}
//       <div
//         className={`grid ${
//           view === "grid"
//             ? `grid-cols-${columns}` // Dynamic grid columns
//             : "grid-cols-1" // List view
//         } gap-4`}
//       >
//         {/* Mock Items for Demonstration */}
//         {[...Array(12)].map((_, index) => (
//           <div
//             key={index}
//             className="border p-4 rounded shadow-md text-center"
//           >
//             Item {index + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewBar;
