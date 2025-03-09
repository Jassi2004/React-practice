import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Two() {
    const { setCurrPage, houseNo, setHouseNo, city, setCity, state, setState } = useContext(AppContext);

    
    const handleNext = () => {
        setCurrPage((prev)=>prev+1);
    }
    const handlePrev = () => {
        setCurrPage((prev)=>prev-1);
    }
    return (
        <div className="container">
            <h1>Address Details</h1>

            <div className="container-div">
                <label> House Number: </label>
                <input 
                    placeholder="kaali seedi ke upar wala flat"
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                />
            </div>

            <div className="container-div">
                <label> City: </label>
                <input 
                    placeholder="Goregaon"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <div className="container-div">
                <label> State: </label>
                <input 
                    placeholder="Mumbai"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            </div>

            <div className="buttons-div">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
