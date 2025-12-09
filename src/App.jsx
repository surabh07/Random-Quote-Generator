import { useState, useEffect } from "react";
import "./App.css";
import QuoteCard from "./QuoteCard";

function App() {
  const [quote, setQuote] = useState("Loading Quote.....");
  const [author, setAuthor] = useState("Loading....");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ----------------------- Fetch Function -----------------------
  async function fetchQuote() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://dummyjson.com/quotes/random");

      if (!response.ok) {
        throw new Error("Quote API failed");
      }

      const data = await response.json();
      console.log(response);

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      setError("Failed to fetch Quote");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <QuoteCard
      quote={quote}
      author={author}
      handleClick={fetchQuote}
      loading={loading}
      error={error}
    />
  );
}

export default App;
