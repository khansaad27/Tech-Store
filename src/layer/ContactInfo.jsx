import React, { useState, useEffect, useRef } from "react";
import { FiClock, FiMapPin } from "react-icons/fi";
import CustomLink from "./CustomLink";

const ContactInfo = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true); // Dropdown visibility is controlled here
  const dropdownRef = useRef(null); // Reference to the dropdown container

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const contactInfo = [
    {
      icon: <FiClock />,
      title: "We are open:",
      content: [
        { day: "Mon–Thu", time: "9:00 AM – 5:30 PM" },
        { day: "Fri", time: "9:00 AM – 6:00 PM" },
        { day: "Sat", time: "11:00 AM – 5:00 PM" },
      ],
      border: true,
      className: "section-open-hours",
    },
    {
      icon: <FiMapPin />,
      title: "Address:",
      content: "1234 Street Address, City Address, 1234",
      border: true,
      className: "section-address",
    },
    {
      content: <CustomLink className="text-blueLight" label="Phones" type="phone" href="+0012345678" />,
      border: false,
      className: "section-phones",
    },
    {
      content: <CustomLink className="text-blueLight" label="E-mail" type="email" href="shop@email.com" />,
      border: false,
      className: "section-email",
    },
  ];

  return (
    <>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="max-w-sm mx-auto bg-white rounded-lg py-4 relative shadow-md"
        >
          <div className="absolute top-1 md:left-[48px] right-[22px] transform -translate-y-2 w-2 h-2 bg-white border-t border-l border-gray-200 rotate-45"></div>

          {contactInfo.map((section, index) => (
            <div
              key={index}
              className={`${section.border ? "border-b border-color-6" : ""} ${section.className}`}
            >
              <div className="flex items-start space-x-2">
                {section.icon && <span className="text-blue text-xl">{section.icon}</span>}
                <h3 className="liFront text-black">
                  {section.title && <span>{section.title}</span>}
                  <span>
                    {Array.isArray(section.content) ? (
                      <ul>
                        {section.content.map((item, idx) => (
                          <li key={idx} className="text-black liFront font-semibold">
                            {item.day ? (
                              <span className="text-color-5 liFront !font-semibold">
                                {item.day}
                              </span>
                            ) : (
                              <span className="text-black">{item}</span>
                            )}
                            {item.time ? ` ${item.time}` : ""}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      section.content
                    )}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ContactInfo;
