import ChartTopBar from "../chart/chart-top-bar";
import ChartSideBar from "../chart/chart-side-bar";
import PriceChart from "../chart/price-chart";
import BuyInterface from "../chart/buy-interface"

const Chart = () => {
  return (
    <div className="w-[928px] h-[551px] bg-dark-gray flex-col px-6">
      <ChartTopBar />

      <div className="flex">
        <ChartSideBar />

        <PriceChart />
      </div>
    </div>
  );
};

export default Chart;
