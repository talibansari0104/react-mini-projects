import { createContext, useContext, useState} from "react";



export  const ThemeContext = createContext({
   
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}


//   const {lightTheme, darkTheme} = useTheme()

//   const lightTheme = () => {
    
//   }

//   const darkTheme = () => {
    