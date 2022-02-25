import React from "react";

const ReceivedMessage = ({
  message,
  name,
}: {
  message?: string;
  name?: string;
}) => {
  return (
    <div className="self-start flex flex-col justify-start mb-2 max-w-[400px]">
      <small className="text-[.7rem] text-slate-300 self-start ml-1 mb-1">
        {name ?? "User"}
      </small>
      <div className="bg-slate-500 rounded-2xl px-4 py-2 self-start flex flex-col">
        {message ?? <i className="text-sm">Message from {name ?? "User"}</i>}
      </div>
    </div>
  );
};

export default ReceivedMessage;
