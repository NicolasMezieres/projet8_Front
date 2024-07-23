import React from "react";

const BlueButton = ({
  text,
  additionalCss,
}: {
  text: string;
  additionalCss?: string;
}) => {
  return (
    <div className={`${additionalCss} flex justify-center`}>
      <div
        className={` bg-blue-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-3xl`}
      >
        <input value={text} type="submit" className="md:text-2xl xl:text-3xl" />
      </div>
    </div>
  );
};

export default BlueButton;
