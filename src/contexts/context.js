import { createContext, useState } from "react";
import { Branch, areaList } from "../util/areaList";

const fallbackInitModel = new Branch(areaList);
export const Context = createContext(fallbackInitModel);

const BranchContextProvider = ({ children }) => {
  const [branch, setBranch] = useState({});

  return (
    <Context.Provider value={{ branch, setBranch }}>
      {children}
    </Context.Provider>
  );
};

export default BranchContextProvider;
