import React from "react";

const Typing = ({ username }: { username: string }) => {
  return (
    <div className="self-start  flex flex-col   justify-center items-center mb-2 max-w-[400px]">
      <small className="text-[.7rem] text-slate-300 self-start ml-1 mb-1">
        {username ?? "User"}
      </small>
      <div className="bg-slate-500 rounded-2xl px-4 py-2 self-start flex gap-3  justify-center align-center">
        <i className="xs text-slate-200">{username} is typing...</i>
      </div>
    </div>
  );
};

export default Typing;
