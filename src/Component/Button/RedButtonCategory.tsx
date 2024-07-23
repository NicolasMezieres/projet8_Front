import React from "react";

const RedButtonCategory = ({
  text,
  additionalCss,
}: {
  text: string;
  additionalCss?: string;
}) => {
  return (
    <div className={`${additionalCss} flex justify-center`}>
      <div
        className={` bg-red-700 text-white px-1 py-0.5 md:px-2 md:py-0 rounded-3xl`}
      >
        <input
          value={text}
          type="submit"
          className="md:text-base xl:text-2xl"
        />
      </div>
    </div>
  );
};

export default RedButtonCategory;
