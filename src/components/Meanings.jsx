const Meanings = ({ meaning }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold italic mb-2">
        {meaning.partOfSpeech}
      </h2>

      <h3 className="text-lg text-gray-500 dark:text-gray-400">Meaning</h3>

      <ul className="list-disc ml-6 mt-2 space-y-2">
        {meaning.definitions.map((d, i) => (
          <li key={i}>
            <p>{d.definition}</p>
            {d.example && (
              <p className="text-gray-500 italic mt-1">“{d.example}”</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meanings;
