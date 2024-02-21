import {createContext, useEffect, useState} from "react";
import {usePageQuery} from "../hooks/usePageQuery";
import {episodesService} from "../services";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const state = useState(null)


    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider, Context};


