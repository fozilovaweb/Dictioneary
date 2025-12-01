import Phonetics from "./Phonetics";
import Meanings from "./Meanings";
import { GoLinkExternal } from "react-icons/go";

const WordInfo = ({ data }) => {
  return (
    <div className="px-6 mt-8 container mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-6xl text-[#2d2d2d]  font-bold mb-4">
            {data.word}
          </h1>
          <p className="text-purple-600 text-xl">{data.phonetic}</p>
        </div>

        <Phonetics phonetics={data.phonetics} />
      </div>

      {data.meanings.map((m, i) => (
        <Meanings key={i} meaning={m} />
      ))}
      <hr className="mt-5" />
      <div className="flex justify-start  gap-5 items-center mt-5 mb-20">
        <span className="underline decoration-[#757575] text-[#757575]">
          Source
        </span>
        <a href="https://en.wiktionary.org/wiki/keyboard">
          https://en.wiktionary.org/wiki/keyboard
        </a>
        <GoLinkExternal />
      </div>
    </div>
  );
};

export default WordInfo;
