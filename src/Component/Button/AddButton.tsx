import React from "react";

const AddButton = ({
  text,
  additionalCss,
}: {
  text: string;
  additionalCss?: string;
}) => {
  return (
    <div className={`${additionalCss} flex justify-center`}>
      <div
        className={` bg-blue-700 text-white px-3 md:px-4 xl:py-1 rounded-3xl`}
      >
        <input value={text} type="submit" className="md:text-xl xl:text-2xl" />
      </div>
    </div>
  );
};

export default AddButton;
