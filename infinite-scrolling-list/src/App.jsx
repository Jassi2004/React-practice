import { useContext, useEffect } from "react"
import Posts from "./components/Posts"
import { AppContext } from "./context/AppContext";

function App() {
  const {darkMode} = useContext(AppContext);
  return (
    <>
    <div className={`main-container  ${!darkMode ? "main-container-light" : "main-container-dark"}`}>

      <nav>Infinite Scrolling List</nav>
      <Posts/>
    </div>
    </>
  )
}

export default App