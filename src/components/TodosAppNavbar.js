import React from "react";
import { useState, useRef } from "react";
// This component create a navbar with a dropdown functionality.
// When a button is clicked, the dropdown opens and when clicked again,
// it closes. Also, when the user clicks anywhere on the screen outside of the dropdown,
// it closes when it is open.
import { useOnClickOutside } from "../useOnClickOutside";

const TodosAppNavbar = () => {
  const [dropdown, setDropdowwn] = useState(false);

  const ref = useRef();

  // useEffect(() => {
  //   const handler = (event) => {
  //     // check for click event outside of the dropdown and close it.
  //     if (dropdown && ref.current && !ref.current.contains(event.target)) {
  //       setDropdowwn(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   // cleanup the event listener
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, [dropdown]);

  // The above commented code is replace with the custom hook, which implements the same function
  useOnClickOutside(ref, dropdown, () => setDropdowwn(false));

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          {/* Button to toggle dropdown */}
          <button onClick={() => setDropdowwn((dropdown) => !dropdown)}>
            Services <span>⇊</span>
          </button>
          {dropdown && (
            <ul>
              <li>design</li>
              <li>Web creation</li>
              <li>Painting</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default TodosAppNavbar;
