import {createContext, useState, useContext, useEffect} from 'react';

const getBrowserLanguage = () => {
  const lang = navigator.language.slice(0, 2);
  return lang === 'tr' ? 'tr' : 'en';
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