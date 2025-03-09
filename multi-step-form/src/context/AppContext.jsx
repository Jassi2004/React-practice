import { createContext, useContext, useState } from "react";
export const AppContext = createContext();

export function AppProvider({children}){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [amount, setAmount] = useState("");
    const [payeName, setPayeName] = useState("");
    const [paymentMode, setPaymentMode] = useState("");

    const [currPage, setCurrPage] = useState(0);

    return <AppContext.Provider value={{ currPage, setCurrPage , name, setName,  email, setEmail,phone, setPhone, houseNo, setHouseNo, city, setCity,state, setState,amount, setAmount,payeName, setPayeName,paymentMode, setPaymentMode}}>
        {children}
        </AppContext.Provider>
}