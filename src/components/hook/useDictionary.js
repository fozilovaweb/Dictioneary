import { useState } from "react";

export const getDefinition = async (word) => {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!res.ok) {
      throw new Error("Word not found");
    }

    const data = await res.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching definition:", error.message);
    throw error;
  }
};
export const useDictionary = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWord = async (word) => {
    try {
      setLoading(true);
      setError("");

      const result = await getDefinition(word);
      setData(result);
    } catch (e) {
      setError("Word not found!");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, searchWord };
};
