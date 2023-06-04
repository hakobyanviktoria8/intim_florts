import { useEffect, useState } from "react";

function useDebounce(value, delay, regex) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (regex.test(value)) {
        setDebouncedValue(value);
      }
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, regex]);

  return debouncedValue;
}

export default useDebounce;
