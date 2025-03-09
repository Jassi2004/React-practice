import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Three() {
    const { setCurrPage, amount, setAmount, payeName, setPayeName, paymentMode, setPaymentMode } = useContext(AppContext);
    const handleNext = () => {
        setCurrPage((prev)=>prev+1);
    }
    const handlePrev = () => {
        setCurrPage((prev)=>prev-1);
    }
    return (
        <div className="container">
            <h1>Payment Details</h1>

            <div className="container-div">
                <label> Amount Payable: </label>
                <input 
                    placeholder="150 Rupya"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <div className="container-div">
                <label> Payee's Name: </label>
                <input 
                    placeholder="Bhindi"
                    value={payeName}
                    onChange={(e) => setPayeName(e.target.value)}
                />
            </div>

            <div className="container-div">
                <label> Payment Mode: </label>
                <input 
                    placeholder="Cash ya check"
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                />
            </div>

            <div className="buttons-div">
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
