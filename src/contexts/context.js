import { createContext, useEffect, useState } from "react";
import { Branch, areaList } from "../util/areaList";
import localModelInit from "../util/util";

// const fallbackInitModel = new Branch(areaList);

const modelInit = new Branch(areaList);
localModelInit(modelInit);
export const Context = createContext(modelInit);

const BranchContextProvider = ({ children }) => {
  const [branch, setBranch] = useState(modelInit);
  // console.log("I ran!");
  return (
    <Context.Provider value={{ branch, setBranch }}>
      {children}
    </Context.Provider>
  );
};

export default BranchContextProvider;
