import React from "react";

import useCounter from "./hooks/use-counter";

import Card from "./UI/Card/Card";

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
