import { createContext, useState, useEffect } from "react";
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchFunction = async () => {
      const data = await fetch("https://dummyjson.com/products?limit=194");
      const dataP = await data.json();
      setProducts(dataP.products);
    };
    fetchFunction();
  }, []);

  return (
    <AppContext.Provider value={{ products, pageNumber, setPageNumber }}>
      {children}
    </AppContext.Provider>
  );
}
