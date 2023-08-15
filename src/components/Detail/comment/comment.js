import { useEffect, useState } from "react";
import React from 'react';
import { Container, Paper, Typography} from '@mui/material';
import TableComment from "./tableComment";
import { InputForm } from "./input";

export function Comment({id}){
    const [comments,setComment]=useState([]);
    const [rubah,setRubah]=useState(false)
    useEffect(()=>{
        console.log("Heloo guys");
        console.log(comments);
        Comments();
        setRubah(false)
    },[rubah]);
    async function Comments(){
        try{
          let data=await fetch(`https://calm-blue-zebra-vest.cyclic.cloud/comment/${id}`);
          if(!data.ok){
            throw new Error("Gagal Fetch");
          }
          let result=await data.json();
          setComment(result);
        }catch(e){
          console.log(e.message);
        }
      }
      return(<>
    <Container style={{ maxWidth: '500px' }} sx={{ marginTop: 4 ,position: 'fixed', right: '10px', top: '0'}}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Comments
      </Typography>
      <Paper 
      style={{
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
      }}
      elevation={3} sx={{ padding: 3, maxHeight: '330px', overflowY: 'scroll' }}>
        {comments?.data?.map((comment) => {
            console.log(comment)
          return(<TableComment
            key={comment._id}
            author={comment.userName}
            content={comment.comment}
            timestamp={comment.created_at}
          />)
          })}
      </Paper>
      <Paper sx={{ padding: 3}}
      style={{
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
      }}>
     <InputForm rubah={rubah} setRubah={setRubah}/>
      </Paper>
    </Container>
      </>)
}