import React from 'react'
import {nanoid} from 'nanoid'
export default function Lookup(){
const [text,setText]=React.useState()
const [comment,setComment]=React.useState([{id:0,fill:"**** only you can see these comments ****"}])
const handleChange= (event)=> {
setText(event.target.value)
}
    
    function newComment(){
        setComment((prev)=> {
            const newCmt={
                id:nanoid(),
                fill:`${text}`,
            }
            return [newCmt,...prev]
        })
        setText(()=> " ")
    }
    

const cmtbox=comment.map((one)=> <div key={one.id}><li>{one.fill}</li> </div> )
    return (
        <>
            <h1>Comment section </h1>
            <h2>Leave a comment here.</h2>
            <form  >
                <input onChange={handleChange} value={text} type='text' name='text' />
                
            </form>
            <button onClick={newComment} >submit</button>
            <p>Comments</p>
            <p>{text}</p>
            <div>{cmtbox} </div>
        </>

    )
}