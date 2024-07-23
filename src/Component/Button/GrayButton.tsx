import React from "react";

const GrayButton = ({
  text,
  additionalCss,
}: {
  text: string;
  additionalCss?: string;
}) => {
  return (
    <div className="flex justify-center">
      <div
        className={`${additionalCss} GrayBG text-black px-3 py-1 md:px-4 md:py-2 rounded-3xl`}
      >
        <input
          value={text}
          type="submit"
          className="md:text-2xl xl:text-3xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default GrayButton;
