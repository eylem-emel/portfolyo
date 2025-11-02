import { useContext, createContext, useEffect, useState } from "react";

const getBrowserTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}


const TemaContext = createContext();
export const TemaProvider = ({ children }) => {
    const [tema, setTema] = useState(() => {
        return localStorage.getItem('appTema') || getBrowserTheme();
    });
    useEffect(() => {
        localStorage.setItem('appTema', tema);
        document.body.className = tema;
    }, [tema]);
    return (
        <TemaContext.Provider value={{ tema, setTema }}>
            {children}
        </TemaContext.Provider>
    );
}
export const useTema = () => {
    return useContext(TemaContext);
}