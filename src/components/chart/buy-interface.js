import React from "react";
import Tabs from "../tabs";

const BuyInterface = () => {
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
    </div>
  );
};

export default BuyInterface;
