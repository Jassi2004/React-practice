import { useState } from "react";
import data from "../data"
import { ChevronDown } from 'lucide-react';


export default function Accordian(){

    const [openSet, setOpenSet] = useState(new Set());

    const handleChange = (index) => {
        setOpenSet(prevSet => {
            const newSet = new Set(prevSet); // Create a new copy
            if (newSet.has(index)) {
                newSet.delete(index); // Remove index if it's already there
            } else {
                newSet.add(index); // Add index if it's not there
            }
            return newSet; // Update state with new Set
        });
    };
    

    return(
        <>
            {data.map((d, index)=>{
                return <div key={index} className="container" onClick={()=>handleChange(index)}>
                    <div className="heading-container">
                        <span className="heading">{d.name}</span>
                        <ChevronDown className="icon"/>

                    </div>
                    <span className={`content ${openSet.has(index) ? "" : "closed"}`}>{d.content}</span>
                </div>
            })}
        </>
    )
}