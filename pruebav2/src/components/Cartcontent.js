import React, { createContext, useState } from "react";

export const Cartcontents = createContext(null);

export const Cartcontent = ({ children }) => { 
    const [cart, setCart] = useState([]);

    return (
        <Cartcontents.Provider value={[cart, setCart]}>
            {children} 
        </Cartcontents.Provider>
    );
};
