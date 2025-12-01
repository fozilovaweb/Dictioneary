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
      {phonetics.map((p, i) =>
        p.audio ? (
          <div key={i} className="flex items-center my-3">
            <audio ref={(el) => (audioRefs.current[i] = el)} src={p.audio} />

            <img
              src="/play.png"
              alt="play"
              className="w-12 h-12 cursor-pointer hover:scale-110 transition"
              onClick={() => handlePlay(i)}
            />
          </div>
        ) : null
      )}
    </div>
  );
};

export default Phonetics;
