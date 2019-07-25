import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  return [storedValue, setValue];
}

function setValue(value) {
  setStoredValue(value);
  window.localStorage.setItem(key, JSON.stringify(value));
}
