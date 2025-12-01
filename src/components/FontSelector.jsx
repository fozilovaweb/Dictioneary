import { useState } from "react";

const FontSelector = () => {
  const [font, setFont] = useState("sans");

  const changeFont = (e) => {
    setFont(e.target.value);
    document.body.style.fontFamily = e.target.value;
  };

  return (
    <select
      onChange={changeFont}
      className="bg-transparent  text-[20] font-bold text-[#2d2d2d] px-2 py-1"
    >
      <option value="sans">Sans</option>
      <option value="serif">Serif</option>
      <option value="monospace">Mono</option>
    </select>
  );
};

export default FontSelector;
