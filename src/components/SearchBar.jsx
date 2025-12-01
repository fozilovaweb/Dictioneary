import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const [word, setWord] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (word.trim() !== "") onSearch(word);
  };

  return (
    <form onSubmit={submit} className="px-6 mt-4">
      <div className=" container mx-auto flex items-center  bg-gray-200 dark:bg-gray-800 px-6 py-5 rounded-xl mb-11">
        <input
          type="text"
          className="bg-transparent text-5 font-bold flex-1 outline-none text-lg"
          placeholder="Search for a word..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <CiSearch className="text-[#a445ed] text-2xl font-bold" />
      </div>
    </form>
  );
};

export default SearchBar;
