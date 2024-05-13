import React from 'react'
export default function NewHome(){
    const [count,setCount]=React.useState(0)
    function pluscount(){
        setCount((prev)=> prev + 1)
    }

    return(
        <>
            <h1>Home</h1>
            <p>
            A man with strong desire to change the world.Thanks for connecting.
            </p>
            <h2>Timer</h2>
            <ul>{count}</ul>
        </>
    )
}