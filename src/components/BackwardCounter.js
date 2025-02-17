import React from "react";

import Card from "./UI/Card/Card";
import useCounter from "./hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
