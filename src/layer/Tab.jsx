import React, { useState } from "react";

const Tab = ({ tabsWithLinks }) => {
  const [activeTab, setActiveTab] = useState(tabsWithLinks[0].label);

  return (
    <div className="flex flex-wrap md:space-x-4 space-x-2">
      {tabsWithLinks.map((tab) => (
        <a
          key={tab.label}
          href={tab.link}
          className={`pb-1 inline-block ${
            activeTab === tab.label
              ? "border-b-2 border-blue text-black font-Poppins text-base font-semibold"
              : "hover:text-[#838383]"
          }`}
          onClick={() => setActiveTab(tab.label)}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
};

export default Tab;
