import { useState, useEffect } from "react";
import "./advise.css";
function MakeAdvice() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAdvice = () => {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAdvice(data.slip.advice);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  if (loading) return <div className="spinner"></div>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <h1>{advice || "No advice available"}</h1>
      <button onClick={fetchAdvice} className="btn">
        New advice
      </button>
    </>
  );
}

export default MakeAdvice;
