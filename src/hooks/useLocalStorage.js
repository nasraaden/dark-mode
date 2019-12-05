import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {


    return item ? JSON.parse(item) : initialValue;
  })
  const item = window.localStorage.getItem(key);

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      };
  return [storedValue, setValue];
}

export default useLocalStorage;
