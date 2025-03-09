import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function One() {
    const { name, setName, email, setEmail, phone, setPhone, setCurrPage } = useContext(AppContext);

    const handleNext = () => {
        if (!name || !email || !phone) {
            alert("Please fill all fields before proceeding.");
            return;
        }
        setCurrPage((prev)=>prev+1);
    }

    return (
        <div className="container">
            <h1>Basic Details</h1>

            <div className="container-div">
                <label>Name:</label>
                <input
                    placeholder="Jethalal Champaklal Gada"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="container-div">
                <label>Email:</label>
                <input
                    placeholder="gada@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="container-div">
                <label>Phone No:</label>
                <input
                    placeholder="98xxx76xxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className="buttons-div">
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
