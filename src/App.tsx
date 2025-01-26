import './App.css'
import {BranchAComponent} from "./components/component-branch-a/BranchAComponent.tsx";
import {BranchBComponent} from "./components/component-branch-b/BranchBComponent.tsx";
import {MyContext} from "./contaxt/MyContextProvider.tsx";
import {useState} from "react";

function App() {

    const [themeColor, setThemeColor] = useState<string>('light');

    return (
    <div>
        <MyContext.Provider value={{
            theme: themeColor,
            changeTheme: (themeValue: string) => {
                setThemeColor(themeValue);
            }
        }}>
            <BranchAComponent/>
            <BranchBComponent/>
        </MyContext.Provider>
    </div>
  )
}

export default App
