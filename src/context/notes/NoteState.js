import { useState } from "react"
import NoteContext from "./NoteContext"

const NoteState = (props) => {

    const [globalContext, setGlobalContext] = useState({"name": "witbychance", "type": "humour"})

    const update = () => {
        setTimeout(() => {
            setGlobalContext({"name": "Anurag", "type": "wordplay"})
        }, 2000);
    }

    return (
        <NoteContext.Provider value={{globalContext, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState

/*
Description: 

> Using createContext method from react library, we are able to create an object that can help in setting global variables.
> So we create this object and make it available from NoteContext.js
> Next NoteState.js creates a state with the wannabe global variables. And returns the NoteContext.Provider component with these values.
> Next, we enclose the App.js' return block inside the NoteState Component.
> Now, if we observe the NoteState's return value, we realise that the whole component tree in App.js is enclosed in NoteContext.Provider and also the value passed in this component are avalible throughout the tree.
> Any component can now use the variables & functions passed in the NoteContext.Provider. And they must import it, as they use it.
*/