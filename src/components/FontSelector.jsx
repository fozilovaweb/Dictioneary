import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomSelect = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("sans");

  const selectItem = (v) => {
    setValue(v);
    document.body.style.fontFamily = v;
    setOpen(false);
  };

  return (
    <div className="relative w-40">
      <div
        onClick={() => setOpen(!open)}
        className="
          bg-transparent text-[20px] font-bold
          cursor-pointer px-3 py-2 flex items-center justify-between
          dark:text-white text-[#2d2d2d]
        "
      >
        {value.charAt(0).toUpperCase() + value.slice(1)}
        <ChevronDown className="w-5 h-5 text-[#a445ed]" />
      </div>

      {open && (
        <div
          className="
            absolute left-0 right-0 mt-2 py-2 rounded-xl bg-white dark:bg-[#1d1d1d]
            shadow-[0px_5px_30px_#0000001A]
            dark:shadow-[0px_5px_30px_#a445ed]
            backdrop-blur-[30px]
          "
        >
          <div
            className="px-4 py-2 cursor-pointer text-xl hover:text-[#a445ed]"
            onClick={() => selectItem("sans")}
          >
            Sans
          </div>
          <div
            className="px-4 py-2 cursor-pointer text-xl hover:text-[#a445ed]"
            onClick={() => selectItem("serif")}
          >
            Serif
          </div>
          <div
            className="px-4 py-2 cursor-pointer text-xl hover:text-[#a445ed]"
            onClick={() => selectItem("monospace")}
          >
            Mono
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
