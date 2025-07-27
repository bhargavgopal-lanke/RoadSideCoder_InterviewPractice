import "./App.css";
import { useEffect, useState } from "react";

const totalItems = 10;
function App() {
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(0);

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
    if (selectedPage >= 1 && totalProducts && selectedPage !== page)
      setPage(selectedPage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="pagination">
        {[...Array(totalProducts).keys()].map((x) => {
          return (
            <button key={x} onClick={() => handleClick(x)}>
              {x}
            </button>
          );
        })}
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
