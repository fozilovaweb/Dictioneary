import { useContext } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="text-2xl">
      {dark ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeToggle;
