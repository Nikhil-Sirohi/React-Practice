import React, { useState, useEffect } from "react";
export default function FetchDataFromApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        Fetched Data
        {loading ? <p>Loading...</p> : null}
        <ul>
          {data.slice(0, 10).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
