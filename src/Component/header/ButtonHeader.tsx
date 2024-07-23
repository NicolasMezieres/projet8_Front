import { useRouter } from "next/navigation";
import React from "react";

const ButtonHeader = ({
  redirection,
  text,
}: {
  redirection: string;
  text: string;
}) => {
  const { push } = useRouter();
  return (
    <button
      onClick={() => {
        push(`${redirection}`);
      }}
      className="border-2 border-black rounded-3xl px-2 py-0.5 xl:p-2 xl:text-xl"
    >
      {text}
    </button>
  );
};

export default ButtonHeader;
