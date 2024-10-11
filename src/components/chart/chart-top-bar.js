import { ReactComponent as AddIcon } from "./../../icons/add-circle.svg";
import { ReactComponent as Candles } from "./../../icons/candels.svg";
import { ReactComponent as Indicator } from "./../../icons/indicator.svg";
import { ReactComponent as Camera } from "./../../icons/camera.svg";
import { ReactComponent as Scan } from "./../../icons/scan.svg";
import { ReactComponent as Setting } from "./../../icons/setting-2.svg";

const ChartTopBar = () => {
  return (
    <div className="h-[24px] pr-2 text-dark-white py-6 flex flex-row justify-between items-center text-sm">
      <div className="flex">
        <div className="border-r pr-2">
          <AddIcon />
        </div>
        <div className="border-r px-2">1H</div>
        <div className="border-r px-2">
          <Candles />
        </div>
        <div className="flex flex-row px-2">
          <Indicator /> INDICATORS
        </div>
      </div>

      <div className="flex gap-2 pl-2 border-l">
        <Setting />

        <Scan />

        <Camera />
      </div>
    </div>
  );
};

export default ChartTopBar;
