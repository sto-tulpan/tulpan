import React from "react";

export const useTime = (refreshCycle = 10000) => {
  const [now, setNow] = React.useState(getTime());

  React.useEffect(() => {
    const intervalId = setInterval(() => setNow(getTime()), refreshCycle);
    return () => clearInterval(intervalId);
  }, [refreshCycle]);

  return now;
};

export const getTime = () => {
  return new Date();
};
