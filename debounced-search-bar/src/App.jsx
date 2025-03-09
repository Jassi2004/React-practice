import { useEffect, useState } from "react";

function App() {


  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [focused, setFocused] = useState(false);
  const [cache, setCache] = useState({})


  const fetchData = async (query) => {
    if(!query) return;
    if(cache[query])
    {
      console.log("api called from cache: " , query);
      setResult(cache[query])
      return;
    }
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
    const dataTwo = await response.json();
    const data = await dataTwo.recipes;
    setResult(data);
    setCache(prev => ({...prev, [query]:data}))
    console.log("api called for: " , query);
    
    // console.log("query: " , query , " data=> ", data);
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{fetchData(query)}, 300)

    return ()=>{
      clearTimeout(timer);
    }
  }, [query])

  return (
    <>
    <div className="container">

      <span className="head">Search Bar</span>
      <input className={focused ? "focus-input" : "blur-input"} type="text" onFocus={()=>{setFocused(true)}} onBlur={()=>{setFocused(false)}} onChange={(e) => setQuery(e.target.value)}/>
      {focused && result.length > 0 && (

        <div className="result-container">
          {result.map((e, index)=>{
            return <div key={index} className="result-container-elements">{e.name}</div>
          })}
        </div>
      ) } 
    </div>
    </>
  )
}

export default App
