import React, { useState } from "react";
import Tabs from "../tabs";
import OrderTypeDropdown from "./order-dropdown";
import OrderSize from "./order-size";
import LeverageSlider from "./leverage-slider";

const BuyInterface = () => {
  const [leverage, setLeverage] = useState(1);

  const handleLeverageChange = (selected) => {
    setLeverage(selected);
  };

  return (
    <div className="w-[320px] h-[551px] bg-dark-gray">
      <Tabs
        style={"px-4"}
        tabWidth={"w-[150px]"}
        tabs={{
          first: {
            str: "LONG",
            comp: <div></div>,
          },
          second: {
            str: "SHORT",
            comp: <div></div>,
          },
        }}
      />

      <div className="flex w-[288px] h-[100px] gap-2">
        <div className="w-[196px] h-[72px]">
          <OrderTypeDropdown />
        </div>

        <div className="w-[90px] h-[72px] text-sm pt-4 text-dark-white">
          Open Price
          <div className="my-2">
            30,021.29 USDC
          </div>
        </div>
      </div>

      <div className="px-4 text-dark-white">
        Order Size
        <OrderSize />
        <div className="mt-2 text-xs text-light-gray">
          Up To 100,000 USDC
        </div>
      </div>

      <div className="w-[320px] h-[79px] px-4 mt-4 text-dark-white">
        <div className="flex justify-between items-center">
          <div>Leverage</div>
          <div>{leverage}x</div>
        </div>
        <LeverageSlider
          onLeverageChange={handleLeverageChange}
        />
      </div>

      <div className="w-[320px] h-[76px] px-4 flex-col mt-4 text-dark-white">
        <div className="flex justify-between">
          <div>Liquidation Price</div>
          <div>300,000 USDC</div>
        </div>

        <div className="flex mt-2 justify-between">
          <div>Slippage</div>
          <div>1.20 USDC (0.3%)</div>
        </div>

        <div className="flex mt-2 justify-between">
          <div>Fee</div>
          <div>2.00 USDC (0.5%)</div>
        </div>
      </div>

      <div className="h-[50px] w-[320px] px-4 mt-2">
        <select
          id="orderType"
          value={null}
          onChange={() =>
            console.log("NOT IMPLEMENTED")
          }
          className="w-full my-2 py-2 shadow-sm bg-[#2b2b2b] text-dark-white text-sm p-2 rounded-sm"
        >
          {" "}
          <option value="ADVANCED">
            Advanced
          </option>
        </select>
      </div>

      <button className="w-[290px] h-[40px] mt-2 mx-4 rounded-sm bg-money-green">
        BUY / LONG
      </button>
    </div>
  );
};

export default BuyInterface;
