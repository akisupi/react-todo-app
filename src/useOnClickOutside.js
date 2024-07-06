import { useEffect } from "react";
// This a custom hook. It checks for click event outside of a
// DOM and performs an action.
// It is to be use for closing dropdowns, modals or popovers

export const useOnClickOutside = (ref, currentState, updater) => {
  useEffect(() => {
    const handler = (event) => {
      // check for click event oustside of the ref DOM to perform action
      if (currentState && ref.current && !ref.current.contains(event.target)) {
        updater();
      }
    };
    // add event listener
    document.addEventListener("mousedown", handler);

    return () => {
      // cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [ref, currentState, updater]);
};
