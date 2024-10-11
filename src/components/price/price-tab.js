import React from "react";
import Chart from "./chart";
import BuyInterface from "../chart/buy-interface";

const PriceTab = () => {
  return (
    <div className="mt-4 flex gap-2">
      <Chart />

      <BuyInterface />
    </div>
  );
};

export default PriceTab;
