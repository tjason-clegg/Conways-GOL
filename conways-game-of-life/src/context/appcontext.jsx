import React, { createContext, useState, useRef } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [speed, setSpeed] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const [numCols, setNumCols] = useState(20);
  const [numRows, setNumRows] = useState(20);

  return (
    <AppContext.Provider
      value={[
        speed,
        setSpeed,
        isRunning,
        setIsRunning,
        numCols,
        setNumCols,
        numRows,
        setNumRows,
      ]}
    >
      {props.children}
    </AppContext.Provider>
  );
};
