import React from "react";

const SentMessage = ({
  message,
  name,
}: {
  message?: string;
  name?: string | number;
}) => {
  return (
    <div className="self-end flex flex-col justify-end mb-2 max-w-[400px]">
      <small className="text-2xs text-slate-300 self-end mr-1 mb-1">
        {name ?? "User"}
      </small>
      <div className="bg-purple rounded-2xl px-4 py-2 self-end flex flex-col">
        {message ?? <i className="text-sm">Message from {name ?? "User"}</i>}
      </div>
    </div>
  );
};

export default SentMessage;
