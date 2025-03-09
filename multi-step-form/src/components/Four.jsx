import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Four() {
    const { 
        name, email, phone, 
        houseNo, city, state, 
        amount, payeName, paymentMode ,setCurrPage
    } = useContext(AppContext);
    const handlePrev = () => {
        setCurrPage((prev)=>prev-1);
    }
    return (
        <div className="container">
            <h1>Review Details</h1>

            <div className="container-div">
                <label>Name: </label>
                <span>{name}</span>
            </div>

            <div className="container-div">
                <label>Email: </label>
                <span>{email}</span>
            </div>

            <div className="container-div">
                <label>Phone No: </label>
                <span>{phone}</span>
            </div>

            <div className="container-div">
                <label>House Number: </label>
                <span>{houseNo}</span>
            </div>

            <div className="container-div">
                <label>City: </label>
                <span>{city}</span>
            </div>

            <div className="container-div">
                <label>State: </label>
                <span>{state}</span>
            </div>

            <div className="container-div">
                <label>Amount Payable: </label>
                <span>{amount}</span>
            </div>

            <div className="container-div">
                <label>Payee's Name: </label>
                <span>{payeName}</span>
            </div>

            <div className="container-div">
                <label>Payment Mode: </label>
                <span>{paymentMode}</span>
            </div>

            <div className="buttons-div">
            <button onClick={handlePrev}>Prev</button>
                <button onClick={()=>alert("Form Submitted")}>Submit</button>
            </div>
        </div>
    );
}
