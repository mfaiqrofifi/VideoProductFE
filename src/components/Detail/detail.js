import { useParams } from "react-router-dom"
import { Product } from "./Product/CardProduct";
import { Comment } from "./comment/comment";
import { Stack } from "@mui/material";
import YouTubeVideo from "./youtube/youtube";
export function Detail(){
    const urlParams=useParams();
    console.log(urlParams.id)
    return(
        <>
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        useFlexGap flexWrap="wrap">
            <Product id={urlParams.id}/>
            <YouTubeVideo/>
            <Comment id={urlParams.id}/>
        </Stack>
        
        </>
    )
}