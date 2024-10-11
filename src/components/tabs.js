import React, { useState } from "react";
import PriceTab from "./price/price-tab";

const Tabs = ({
  tabs,
  style,
  tabWidth = "w-[72px]",
}) => {
  const [activeTab, setActiveTab] =
    useState("first");

  return (
    <div className="text-sm">
      <div className={`${style} flex`}>
        <div
          onClick={() => setActiveTab("first")}
          className={`${tabWidth} h-[48px] flex justify-center items-center cursor-pointer ${
            activeTab === "first"
              ? "text-red-500 border-b-2 border-red-500"
              : "text-dark-white"
          }`}
        >
          {tabs?.first?.str ?? "ERR"}
        </div>

        <div
          onClick={() => setActiveTab("second")}
          className={`${tabWidth} h-[48px] flex justify-center items-center cursor-pointer ${
            activeTab === "second"
              ? "text-red-500 border-b-2 border-red-500"
              : "text-dark-white"
          }`}
        >
          {tabs?.second?.str ?? "ERR"}
        </div>
      </div>

      {activeTab === "first" && tabs.first.comp}
    </div>
  );
};

export default Tabs;
