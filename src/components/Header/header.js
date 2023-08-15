import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { blueGrey } from '@mui/material/colors';
import CardS from '../Card/card';
import Stack from '@mui/joy/Stack';
import { useState,useEffect } from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Detail } from '../Detail/detail';
function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}
export default function Header(props){

    const [picture,setPicture]=useState({});
    useEffect(()=>{
      Picture();
      console.log(picture);
      
    },[])
    async function Picture(){
      try{
        let data= await fetch("https://calm-blue-zebra-vest.cyclic.cloud/videos");
        if(!data.ok){
          throw new Error("Gagal Fetch");
        }
        let result=await data.json();
        setPicture(result);
      }catch(e){
        console.log(e.message);
      }
    }
    
    // console.log("pandings")
    return(
        <>
        <ElevationScroll {...props}>
        <AppBar style={{backgroundColor: '#313866'}}>
          <Toolbar>
            <Typography style={{color:'#FFFFFF',fontFamily:'Open Sans, sans-serif',fontWeight: 'bold',}} variant="h4" component="div" color="secondary">
              TokoFaiq
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container maxWidth="xl" sx={{ marginTop: '30px' }}>
        
        <Routes>
       <Route path='/'element={
        <>
          <Typography variant="h6" style={{ position: 'relative', display: 'inline-block', borderBottom:'2px solid #333',width:'100%', textAlign:'center',paddingBottom:'10px',marginBottom:'20px'}}>
        Our Products
      </Typography>
  <Stack
  direction="row"
  paddingLeft="70px"
  justifyContent="flex-start"
  alignItems="flex-start"
  spacing={2}
  useFlexGap flexWrap="wrap"
>
          {
            picture?.data?.map((item)=>{
              console.log(item)
              return <Link to={item._id}><CardS picture={item.url}/></Link>
            })
          }
        </Stack>
        </>
        }/>
        <Route path=":id" element={<Detail/>}/>
        </Routes>
      </Container>
        </>
    )
}