import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";


export default function PageNumber({ size }) {
    const {pageNumber, setPageNumber} = useContext(AppContext);
    // useEffect(()=>{
    //     console.log("pageNumver: " , pageNumber);
    // }, [pageNumber])
    const handleChange = (index) => {
        setPageNumber(index);
    }
    return (
      <>
        <div className="page-buttons-container">
          {Array.from({ length: size }).map((e, index) => {
            return (
              <button 
                key={index}
                className={`page-buttons + ${pageNumber === index ? "selected-button" : ""}`}    
                onClick={()=>handleChange(index)}
              >
                {index + 1}

              </button>
            );
          })}
        </div>
      </>
    );
  }
  