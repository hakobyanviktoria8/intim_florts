import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addErrorMessage } from "../features/errorMessageSlice";

export const useDebounce = (value, delay, regex, message) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (regex.test(value)) {
        setDebouncedValue(value);
        dispatch(addErrorMessage(""));
      } else {
        if (value) {
          setDebouncedValue("");
          dispatch(addErrorMessage(message));
        }
      }
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, regex, dispatch, message]);

  return debouncedValue;
};
