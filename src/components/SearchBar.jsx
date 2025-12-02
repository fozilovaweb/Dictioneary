import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (word.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    onSearch(word);
  };

  return (
    <form onSubmit={submit} className="px-6 mt-4">
      <div
        className={`container mx-auto flex items-center px-6 py-5 rounded-xl mb-2
        bg-gray-200 dark:bg-gray-800  hover:border hover:border-[#a445ed]
        ${error ? "border border-red-500" : ""}`}
      >
        <input
          type="text"
          className="bg-transparent font-bold flex-1 outline-none text-lg  dark:text-white"
          placeholder="Search for a word..."
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
            setError(false);
          }}
        />
        <CiSearch className="text-[#a445ed] text-2xl font-bold" />
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1 mx-auto container">
          Whoops, can’t be empty...
        </p>
      )}
    </form>
  );
};

export default SearchBar;
