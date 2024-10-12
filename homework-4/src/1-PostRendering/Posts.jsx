import { useState, useEffect } from "react";
import "./posts.css";
const DataFetchingComponent = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data from an API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) return <div className=""></div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ol>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ol>
  );
};

export default DataFetchingComponent;
