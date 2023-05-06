import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./style/navBar.Styled";
import { useState } from "react";

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  const onActiveMenu = () => {
    if (navActive) {
      setNavActive(false);
    } else {
      setNavActive(true);
    }
    console.log(navActive);
  };
  const onInactiveMenu = () => {
    if (navActive) {
      setNavActive(false);
    }
  };
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className={`parent ${navActive ? "navActive" : "inactive"}`}>
      <div className={`child chil1`}>
        <div className="back navLink" onClick={onInactiveMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
            className={` icono ${navActive ? "visible" : "invisible"}`}
          >
            <path
              d="M359 814 120 575l239-239 43 43-166 166h604v60H236l166 166-43 43Z"
              fill="#FF4C4C"
            />
          </svg>
        </div>

        <div className="menu navLink" onClick={onActiveMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
          >
            <path
              d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
              fill="#FF4C4C"
            />
          </svg>
          <h1 className={navActive ? "navActive2" : "inactive2"}>
            Fácil Cocina
          </h1>
        </div>

        <NavLink
          to="/search"
          className={({ isActive }) => `search navLink ´${isActive}?'active:''`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
            className={` icono ${navActive ? "visible" : "invisible"}`}
          >
            <path
              d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"
              fill="#FF4C4C"
            />
          </svg>
          <p className={navActive ? "navActive2" : "inactive2"}>Search</p>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => `home navLink ´${isActive}?'active:''`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
            className={` icono ${navActive ? "visible" : "invisible"}`}
          >
            <path
              d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"
              fill="#FF4C4C"
            />
          </svg>
          <p className={navActive ? "navActive2" : "inactive2"}>Home</p>
        </NavLink>
        <NavLink
          to="/my-list"
          className={({ isActive }) =>
            `my-list navLink ´${isActive}?'active:''`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
            className={` icono ${navActive ? "visible" : "invisible"}`}
          >
            <path
              d="M300 770q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm132 328h244v-60H432v60Zm0-164h244v-60H432v60Zm0-164h244v-60H432v60ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Z"
              fill="#FF4C4C"
            />
          </svg>
          <p className={navActive ? "navActive2" : "inactive2"}>
            My Custom List
          </p>
        </NavLink>
      </div>

      <div className="child chil1">
        <div className="user navLink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
            className={` icono ${navActive ? "visible" : "invisible"}`}
          >
            <path
              d="M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"
              fill="#FF4C4C"
            />
          </svg>
          <p className={navActive ? "navActive2" : "inactive2"}>User</p>
        </div>
        <Button
          type="button"
          className={({ isActive }) =>
            `logout navLink ${isActive} ? 'active:''`
          }
          onClick={onLogout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
            className={` icono ${navActive ? "visible" : "invisible"}`}
          >
            <path
              d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z"
              fill="#FF4C4C"
            />
          </svg>
          <p className={navActive ? "navActive2" : "inactive2"}>Logout</p>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
