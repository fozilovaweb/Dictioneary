import React from "react";

function Empty() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 px-6">
      <img src="./emojin.png" alt="Error emoji" className="w-24 h-24 mb-6" />

      <h2 className="text-2xl font-bold mb-3">No Definitions Found</h2>

      <p className="text-gray-500 dark:text-gray-400 max-w-md">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default Empty;
