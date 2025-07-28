import "./App.css";
import { useEffect, useState } from "react";

const totalItems = 10;
function App() {
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(1);
  const maxVisibilePages = 10;

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
  const start = page * totalItems - totalItems;
  const end = page * totalItems;

  const handleClick = (selectedPage) => {
    // prevent unnecessary re-renders
    if (selectedPage >= 1 && totalProducts && selectedPage !== page)
      setPage(selectedPage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderPageKey = (currentPage, key) => {
    return (
      <button
        key={key}
        className={page === currentPage ? "active" : ""}
        onClick={() => handleClick(currentPage)}
      >
        {currentPage}
      </button>
    );
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalProducts <= maxVisibilePages) {
      for (let i = 1; i < totalProducts; i++) {
        pageNumbers.push(renderPageKey(i, i));
      }
    } else {
      // truncation logic
      const startPage = Math.max(1, page - Math.floor(maxVisibilePages / 2));
      const endPage = Math.min(totalProducts, startPage + maxVisibilePages - 1);
      if (startPage > 1) {
        if (startPage > 2) pageNumbers.push(renderPageKey(1));
        pageNumbers.push(renderPageKey("...", "ellipsis-start"));
      }
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(renderPageKey(i));
      }
      if (endPage < totalItems) {
        pageNumbers.push(renderPageKey("...", "ellipsis-start"));
        if (endPage < totalItems - 1) {
          pageNumbers.push(renderPageKey(totalItems));
        }
      }
    }
    return pageNumbers;
  };

  return (
    <div className="App">
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 0}
        >
          ◀️
        </button>
        {/* {[...Array(totalProducts).keys()].map((x, i) => {
          return (
            <button
              key={i}
              className={page === i ? "active" : ""}
              onClick={() => handleClick(i)}
            >
              {i + 1}
            </button>
          );
        })} */}
        {renderPageNumbers()}
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
