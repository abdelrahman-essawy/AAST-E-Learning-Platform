import React, { createContext, useState } from 'react'

const WindowDimentionsContext = createContext('')

export function WindowDimentionsContextProvider(props) {
    const [innerHeight, setInnerHeight] = useState()
    const [innerWidth, setInnerWidth] = useState()
    function setValues({ innerHeight, innerWidth }) {
        setInnerHeight( innerHeight )
        setInnerWidth( innerWidth )
        console.log(innerHeight, innerWidth)
    }
    return (
        <WindowDimentionsContext.Provider value={{ innerHeight, innerWidth, setValues }}>
            {props.children}
        </WindowDimentionsContext.Provider>
    )
}
export default WindowDimentionsContext