import { ReactComponent as Cross } from "./../../icons/cross.svg";
import { ReactComponent as TrendLine } from "./../../icons/trend-line.svg";
import { ReactComponent as Fib } from "./../../icons/fib ret.svg";
import { ReactComponent as Brush } from "./../../icons/brush.svg";
import { ReactComponent as XABCD } from "./../../icons/XABCD pattern.svg";
import { ReactComponent as Text } from "./../../icons/text.svg";
import { ReactComponent as Long } from "./../../icons/long position.svg";
import { ReactComponent as Heart } from "./../../icons/heart.svg";
import { ReactComponent as Ruler } from "./../../icons/ruler.svg";
import { ReactComponent as Zoom } from "./../../icons/search-zoom-in.svg";
import { ReactComponent as Magnet } from "./../../icons/magnet.svg";
import { ReactComponent as Lock } from "./../../icons/lock drawing mode.svg";

const ChartSideBar = () => {
  return (
    <div className="w-[24px] h-[439px] text-dark-gray flex flex-col items-center justify-between">
      <Cross />

      <TrendLine />

      <Fib />

      <Brush />

      <Text />

      <XABCD />

      <Long />

      <Heart />

      <Ruler />

      <Zoom />

      <Magnet />

      <Lock />
    </div>
  );
};

export default ChartSideBar;
