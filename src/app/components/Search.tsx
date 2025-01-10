import React from "react";

const Search = ({
  value,
  handleSearchChanged,
}: {
  handleSearchChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <div
      className="absolute md:hidden flex flex-col custom-paddingX top-0 left-0 w-full bg-black bg-opacity-[60%] py-[10px] z-20"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-[52px] "></div>
      <div>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for products..."
            className=" pl-10 py-2 pr-4 border rounded-[62px] w-full bg-[#F0F0F0] font-satoshi"
            onChange={handleSearchChanged}
            value={value}
          />
          <img
            src="/assets/svgs/search.svg"
            alt="search icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-[40%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
