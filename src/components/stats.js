import { ReactComponent as BitcoinIcon } from "./../icons/bitcoin.svg";

const Stats = () => {
  return (
    <div className="grid grid-cols-6 gap-4 py-[8px] items-center text-xs">
      <div className="flex text-white text-semibold">
        <BitcoinIcon />
        <div className="ml-2 text-base font-semibold">
          BTC / BITCOIN
        </div>
      </div>

      <div className="flex flex-col items-left text-light-gray">
        PRICE
        <div className="text-white font-semibold text-base">
          $31,119.01
        </div>
      </div>

      <div className="flex flex-col items-left text-light-gray">
        24H CHANGE
        <div className="text-money-green font-semibold text-base">
          +22.3 USDC (+7.5$)
        </div>
      </div>

      <div className="flex flex-col items-left text-light-gray">
        1H FUNDING
        <div className="text-money-green font-semibold text-base">
          0.00012%
        </div>
      </div>

      <div className="flex flex-col items-left text-light-gray">
        LONG OPEN INTEREST
        <div className="text-money-green font-semibold text-base">
          8.871 BTC
        </div>
      </div>

      <div className="flex flex-col items-left text-light-gray">
        SHORT OPEN INTEREST
        <div className="text-money-green font-semibold text-base">
          8.871 BTC
        </div>
      </div>
    </div>
  );
};

export default Stats;
