import React from "react";
import { useRouteError } from "react-router";

function Error() {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-4xl font-bold">
          Opp's{" "}
          <span className="text-red-600">
            | 4<span className="animate-pulse">😓</span>4 |
          </span>{" "}
          Page not found
        </p>
        <p className=" text-4xl">
          Error Message :{" "}
          <span className="underline text-amber-600">[ {error.message} ]</span>
        </p>
      </div>
    </div>
  );
}

export default Error;
