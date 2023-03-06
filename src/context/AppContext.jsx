import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [amountInput, setAmountInput] = useState(0);
  const [amountResult, setAmountResult] = useState(0);
  const [amountResultInverted, setAmountResultInverted] = useState(0);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");

  const [currencies, setCurrencies] = useState([]);

  const swapCurrencies = () => {
    alert("swapCurrencies");
  };

  const value = {
    amountInput,
    setAmountInput,
    amountResultInverted,
    setAmountResultInverted,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amountResult,
    setAmountResult,
    swapCurrencies,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
