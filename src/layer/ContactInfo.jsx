import React from "react";
import { FiClock, FiMapPin } from "react-icons/fi";
import CustomLink from "./CustomLink";

const ContactInfo = () => {
  // Data for different sections with added classNames
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
      content: "1234 Street Address,  City Address, 1234",
       
      border: true,
      className: "section-address",
    },
    {
      content: <CustomLink className='text-blueLight' label="Phones" type="phone" href="+0012345678" />,
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
    <div className="max-w-sm mx-auto bg-white rounded-lg py-4 md:px-0 px-full ">
      {contactInfo.map((section, index) => (
        <div
          key={index}
          className={`${section.border ? 'border-b border-color-6' : ''} ${section.className}`}
        >
          <div className="flex  items-start space-x-2">
            {section.icon && <span className="text-blue  text-xl">{section.icon}</span>}
            <h3 className="liFront text-black">
              {section.title && <span>{section.title}</span>} 
              <span>
                {Array.isArray(section.content) ? (
                  // If content is an array, render as a list (for open hours, address)
                  <ul>
                    {section.content.map((item, idx) => (
                      <li key={idx} className="text-black liFront font-semibold">
                        {item.day ? (
                          <span className="text-color-5 liFront !font-semibold">{item.day}</span>
                        ) : (
                          <span className="text-black">{item}</span>
                        )}
                        {item.time ? ` ${item.time}` : ''}
                      </li>
                    ))}
                  </ul>
                ) : (
                  // Render the content directly for phones and emails
                  section.content
                )}
              </span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
