import { useRef } from "react";

const Phonetics = ({ phonetics }) => {
  const audioRefs = useRef([]);

  const handlePlay = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].currentTime = 0;
      audioRefs.current[index].play();
    }
  };

  return (
    <div className="mt-4">
      {phonetics.length > 0 && phonetics[0].audio && (
        <div className="flex items-center my-3">
          <audio
            ref={(el) => (audioRefs.current[0] = el)}
            src={phonetics[0].audio}
          />

          <img
            src="/play.png"
            alt="play"
            className="w-12 h-12 cursor-pointer hover:scale-110 transition"
            onClick={() => handlePlay(0)}
          />
        </div>
      )}
    </div>
  );
};

export default Phonetics;
