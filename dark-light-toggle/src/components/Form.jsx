import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Form() {
    const {darkMode} = useContext(AppContext);
    return (
        <div className={`container" + ${darkMode ? "container-dark" : "container-light"}`}>
            <h1>Basic Details</h1>

            <div className="container-div">
                <label>Name:</label>
                <input
                    placeholder="Jethalal Champaklal Gada"
                />
            </div>

            <div className="container-div">
                <label>Email:</label>
                <input
                    placeholder="gada@gmail.com"
                />
            </div>

            <div className="container-div">
                <label>Phone No:</label>
                <input
                    placeholder="98xxx76xxx"
                />
            </div>

            <div className="buttons-div">
                <button>Next</button>
            </div>
        </div>
    );
}
