import Empty from "../Empty";
import { useDictionary } from "../hook/useDictionary";
import SearchBar from "../SearchBar";
import WordInfo from "../WordInfo";

export const Home = () => {
  const { data, loading, error, searchWord } = useDictionary();

  return (
    <main >
      <SearchBar onSearch={searchWord} />

      {loading && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-2xl font-semibold">Loading...</p>
        </div>
      )}
      {error && <Empty />}
      {data && <WordInfo data={data} />}
    </main>
  );
};
