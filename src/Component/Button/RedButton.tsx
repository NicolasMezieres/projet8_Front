import React from "react";

const RedButton = ({
  text,
  additionalCss,
}: {
  text: string;
  additionalCss?: string;
}) => {
  return (
    <div className={`${additionalCss} flex justify-center`}>
      <div
        className={` bg-red-700 text-white px-1 py-0.5 md:px-4 md:py-2 rounded-3xl`}
      >
        <input value={text} type="submit" className="md:text-xl xl:text-2xl" />
      </div>
    </div>
  );
};

export default RedButton;
