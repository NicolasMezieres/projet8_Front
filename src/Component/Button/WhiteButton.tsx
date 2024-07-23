import React from "react";

const WhiteButton = ({
  text,
  additionalCss,
}: {
  text: string;
  additionalCss?: string;
}) => {
  return (
    <div className="flex justify-center">
      <div
        className={`${additionalCss} bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-3xl transition duration-300`}
      >
        <input
          value={text}
          type="submit"
          className="text-sm md:text-2xl xl:text-3xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default WhiteButton;
