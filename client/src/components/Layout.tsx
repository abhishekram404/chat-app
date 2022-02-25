import React, { Suspense } from "react";
const Header = React.lazy(() => import("./Header"));
const Conversation = React.lazy(() => import("./Conversation"));
const CreateMessage = React.lazy(() => import("./CreateMessage"));
const Layout = () => {
  return (
    <div className="w-[95%] h-[100%] sm:h-[600px] min-w-[300px] max-w-[600px] sm:w-[600px] bg-slate-800 p-3 rounded text-white border border-purple/50">
      <div className="chat h-full flex flex-col">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Header />
        </Suspense>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Conversation />
        </Suspense>
        <Suspense fallback={<h2>Loading...</h2>}>
          <CreateMessage />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
