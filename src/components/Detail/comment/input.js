import { Button,TextField } from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom";
export function InputForm({rubah,setRubah}){
    const [username,setUsername]=useState('');
    const [comment,setComment]=useState('')
    const urlParams=useParams();
    function Submit(e){
        e.preventDefault();
        console.log("sip")
        const addComment={
            userName:username,
            comment,
            videoId:urlParams.id,
        }
        console.log(username,comment)
        fetch('https://calm-blue-zebra-vest.cyclic.cloud/comment',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(addComment)
        }).then(()=>{
            console.log('new comment added')
        })
        setComment('')
        setUsername('')
        setRubah(true)
    }
    return(<>
         <TextField
        label="Add a Comment"
        variant="outlined"
        fullWidth
        value={comment}
        onChange={(e) => {
            console.log(e.target.value)
            setComment(e.target.value)}
        }
        sx={{ marginTop: 2 }}
      />
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) =>setUsername(e.target.value)}
        sx={{ marginTop: 2 }}
      />
      <Button variant="submit" sx={{ marginTop: 2 }} style={{backgroundColor:'#504099',color:'white'}} onClick={Submit}>
        Add Comment
      </Button>
    </>)
}