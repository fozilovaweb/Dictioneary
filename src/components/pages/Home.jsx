import { useDictionary } from "../hook/useDictionary";
import SearchBar from "../SearchBar";
import WordInfo from "../WordInfo";

export const Home = () => {
  const { data, loading, error, searchWord } = useDictionary();

  return (
    <main>
      <SearchBar onSearch={searchWord} />

      {loading && <p className="px-6 mt-4">Loading...</p>}
      {error && <p className="px-6 mt-4 text-red-500">{error}</p>}
      {data && <WordInfo data={data} />}
    </main>
  );
};
