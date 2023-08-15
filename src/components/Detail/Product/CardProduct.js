import { useEffect, useState } from "react";
import CardProduct from "./card";
import { Stack } from "@mui/material";

export function Product({id}){
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        console.log("Heloo guys");
        console.log(product);
      Products();
    },[]);
    async function Products(){
        try{
          let data=await fetch(`https://calm-blue-zebra-vest.cyclic.cloud/products/${id}`);
          if(!data.ok){
            throw new Error("Gagal Fetch");
          }
          let result=await data.json();
          setProduct(result);
        }catch(e){
          console.log(e.message);
        }
      }
      return(<>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={5}
        useFlexGap flexWrap="wrap">
      {
        
        product?.data?.map((item)=>{
            console.log(item)
            return (
              
            <CardProduct url={item.link_product} name={item.title} price={item.price}/>
            
            )
        })
      }
      </Stack>
      </>)
}