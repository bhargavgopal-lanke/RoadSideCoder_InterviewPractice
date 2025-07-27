import "./App.css";
import { useEffect, useState } from "react";

const totalItems = 10;
function App() {
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=100");
      const res = await data.json();
      if (res && res?.products) {
        setApiData(res?.products);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const totalProducts = Math.ceil(apiData.length / totalItems);
  const start = page * totalItems;
  const end = start + totalItems;

  const handleClick = (selectedPage) => {
    // prevent unnecessary re-renders
    if (selectedPage >= 0 && totalProducts && selectedPage !== page)
      setPage(selectedPage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 0}
        >
          ◀️
        </button>
        {[...Array(totalProducts).keys()].map((x) => {
          return (
            <button
              key={x}
              className={page === x ? "active" : ""}
              onClick={() => handleClick(x)}
            >
              {x + 1}
            </button>
          );
        })}
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalProducts - 1}
        >
          ▶️
        </button>
      </div>
      {apiData?.length > 0 &&
        apiData?.slice(start, end).map((x) => {
          return (
            <div key={x.id}>
              <img src={x.thumbnail} alt={x.title} />
              <h1>{x.title}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default App;
