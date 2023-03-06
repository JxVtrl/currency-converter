import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [amountCurrency, setAmountCurrency] = useState("USD");
  const [amountInput, setAmountInput] = useState("");

  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");

  const value = {
    amountInput,
    setAmountInput,
    amountCurrency,
    setAmountCurrency,
    fromInput,
    setFromInput,
    toInput,
    setToInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
