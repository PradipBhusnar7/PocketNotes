import { createContext, useContext } from "react";

const WidthContext = createContext("");

export default WidthContext.Provider;

export function useWidth() {
    return useContext(WidthContext);
}