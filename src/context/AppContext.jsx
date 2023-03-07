import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { getCrypto } from "../services/getCrypto";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [amountInput, setAmountInput] = useState(0);
  const [amountResult, setAmountResult] = useState(0);
  const [amountResultInverted, setAmountResultInverted] = useState(0);

  const [fromCurrency, setFromCurrency] = useState({});
  const [toCurrency, setToCurrency] = useState({});

  const [currencies, setCurrencies] = useState([]);

  useEffect(async () => {
    const response = await getCrypto();
    const currencies = response.data;
    setCurrencies(currencies);
  }, []);

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
    currencies,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
