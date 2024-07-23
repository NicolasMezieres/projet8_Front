import React from "react";

const Search = ({
  text,
  setSearch,
}: {
  text: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex justify-center gap-2 md:gap-4">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder={text}
        className="GrayBG placeholder-gray-700 text-center text-black  py-1 md:px-4 md:py-2 rounded-3xl xl:text-xl"
      />
      <input
        type="submit"
        value={"Search"}
        className={`bg-blue-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-3xl`}
      />
    </div>
  );
};

export default Search;
