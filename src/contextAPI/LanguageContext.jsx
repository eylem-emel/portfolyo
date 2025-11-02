import {createContext, useState, useContext, useEffect} from 'react';

const getBrowserLanguage = () => {
  const language = navigator.language || navigator.userLanguage;
  return language ? language.split('-')[0] : 'tr';
}

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState(()=>{
    return localStorage.getItem('appLanguage') || getBrowserLanguage(); 
  });
useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  return useContext(LanguageContext);
}