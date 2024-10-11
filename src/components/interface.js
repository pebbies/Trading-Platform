import Stats from "./stats";
import Tabs from "./tabs";
import PriceTab from "./price/price-tab";

const Interface = () => {
  return (
    <div className="absolute mt-[88px] ml-[88px] w-[1264px] h-[741px] gap-[16px] bg-black dark-gray">
      <Stats />

      <div className="mt-6">
        {" "}
        <Tabs
          style={"gap-[32px]"}
          tabs={{
            first: {
              str: "PRICE",
              comp: <PriceTab />,
            },
            second: {
              str: "FUNDING",
              comp: <div></div>,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Interface;
