import { useContext } from "react"
import Four from "./components/Four"
import One from "./components/One"
import Three from "./components/Three"
import Two from "./components/Two"
import { AppContext } from "./context/AppContext"


function App() {
const array = [
  <One/>,
  <Two/>,
  <Three/>,
  <Four/>
]
    const {currPage} = useContext(AppContext);

  return (
   <>
      {array[currPage]}
   </>
  )
}

export default App
