import { createContext ,useContext } from "react";
// these three are the same way we have done in prev project to use context api

// The code creates a ThemeContext using the createContext function. This context is initialized with an object as its default value.
// The default value object has three properties:
// themeMode: Represents the current theme mode and is initially set to "light".
// darkTheme: Represents a function to switch to the dark theme. However, the function is empty (() => {}) in the default value.
// lightTheme: Represents a function to switch to the light theme. Similarly, the function is empty (() => {}) in the default value.



export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})


// This line exports ThemeProvider which is simply an alias for ThemeContext.Provider. It's common to use the Provider component to wrap parts of your application where you want the context to be available
export const ThemeProvider = ThemeContext.Provider

// The useTheme hook uses the useContext hook with ThemeContext as an argument. This hook allows you to subscribe to the nearest ThemeContext.Provider and read its current value.
export default function useTheme(){
    return useContext(ThemeContext)
}