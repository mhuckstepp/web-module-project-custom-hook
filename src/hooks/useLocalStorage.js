import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    console.log(window.localStorage.getItem(key));
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    console.log(item);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [];
}

export default useLocalStorage;
