import { ReactComponent as SearchIcon } from "./../icons/search-normal.svg";
import { ReactComponent as NotificationIcon } from "./../icons/notification.svg";

const Search = () => {
  return (
    <div className="absolute top-4 left-20 flex items-center gap-[4px]">
      <div className="w-[1097px] h-[48px] mr-[8px] bg-dark-gray opacity-100 flex items-center rounded-sm">
        <div className="py-[16px] px-[8px]">
          <SearchIcon />
        </div>

        <input
          type="text"
          placeholder="SEARCH"
          className="w-full h-full py-[16px] px-[8px] text-light-gray bg-transparent font-ibm-plex text-[14px] font-normal text-left focus:outline-none"
        />
      </div>

      <NotificationIcon />

      <div>
        <div className="w-[127px] h-[24px] px-[8px] text-dark-white">
          0xfC...E63d1
        </div>
      </div>
    </div>
  );
};

export default Search;
