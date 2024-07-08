import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

// import { useState, useRef } from "react";
// This component create a navbar with a dropdown functionality.
// When a button is clicked, the dropdown opens and when clicked again,
// it closes. Also, when the user clicks anywhere on the screen outside of the dropdown,
// it closes when it is open.
import { useOnClickOutside } from "../useOnClickOutside";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";

const links = [
  { path: "/", text: "Home" },
  { path: "about", text: "About" },
  { path: "profile", text: "Profile" },
  { path: "login", text: "Login" },
];

const TodosAppNavbar = () => {
  // const [dropdown, setDropdowwn] = useState(false);
  const [navbarOpen, setNavebarOpen] = useState(false);

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

  useOnClickOutside(ref, navbarOpen, () => setNavebarOpen(false));

  const { user, logout } = useAuthContext();

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    // <nav>
    //   <ul>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li ref={ref}>
    //       {/* Button to toggle dropdown */}
    //       <button onClick={() => setDropdowwn((dropdown) => !dropdown)}>
    //         Services <span>⇊</span>
    //       </button>
    //       {dropdown && (
    //         <ul>
    //           <li>design</li>
    //           <li>Web creation</li>
    //           <li>Painting</li>
    //         </ul>
    //       )}
    //     </li>
    //   </ul>
    // </nav>
    <>
      <nav ref={ref} className="navbar">
        <button
          className="toggle"
          onClick={() => setNavebarOpen((navbarOpen) => !navbarOpen)}
        >
          {navbarOpen ? (
            <MdClose style={{ width: "32px", height: "32px" }} />
          ) : (
            <FiMenu style={{ width: "32px", height: "32px" }} />
          )}
        </button>
        <ul className={`menu-nav ${navbarOpen ? "show-menu" : ""}`}>
          {links.map((link) => {
            return (
              <React.Fragment key={link.text}>
                {/* <li key={link.text}>
                  <NavLink
                    to={link.path}
                    // Styling the active link
                    // className={({ isActive }) =>
                    //   isActive ? "active__class" : undefined
                    // }

                    // or this

                    // style={({ isActive }) => ({
                    //   color: isActive ? "red" : undefined,
                    // })}

                    // all the above has been replaced with using default active class
                  >
                    {link.text}
                  </NavLink>
                </li> */}
                {link.path === "login" ? (
                  !user && (
                    <li>
                      <NavLink
                        to={link.path}
                        onClick={() => setNavebarOpen(false)}
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  )
                ) : link.path === "profile" ? (
                  user && (
                    <li>
                      <NavLink
                        to={link.path}
                        onClick={() => setNavebarOpen(false)}
                      >
                        {link.path}
                      </NavLink>
                    </li>
                  )
                ) : (
                  <li>
                    <NavLink
                      to={link.path}
                      onClick={() => setNavebarOpen(false)}
                    >
                      {link.text}
                    </NavLink>
                  </li>
                )}
              </React.Fragment>
            );
          })}
          {!user && (
            <li className="=log-in">
              <span>Login to edit todos</span>
            </li>
          )}
        </ul>
      </nav>
      {user && (
        <div className="logout">
          <p>{user}</p>
          <button
            onClick={handleLogout}
            style={{ fontSize: "12pt", color: "#ea9393" }}
          >
            <AiOutlineLogout />
            Logout
          </button>
        </div>
      )}
    </>
  );
};
export default TodosAppNavbar;
