import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.message}
      </pre>
    </>
  );
};

export default Error;
