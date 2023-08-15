import React from 'react';
import { Paper } from '@mui/material';

const YouTubeVideo = ({ videoId, width, height }) => {
  let arrVideo=["Lx74cvj60dw","tWw6PSv4s3I","W6OBYpEqusI","C4H3W_K1hzc","R9AlZqIz6OM&t=20s"]
  // let arrVideo=["Lx74cvj60dw","Lx74cvj60dw","Lx74cvj60dw","Lx74cvj60dw","Lx74cvj60dw"]
  let randIndex=Math.floor(Math.random()*arrVideo.length);
  let item=arrVideo[randIndex]
  const embedUrl = "https://www.youtube.com/embed/"+item;

  return (
    <Paper elevation={3} style={{ maxWidth: '800px' }} sx={{ marginTop: 12.25 ,position: 'fixed', left: '400px', top: '0'}}>
      <iframe
        width="600px"
        height="400px"
        src={embedUrl}
        title="YouTube Video"
        allowFullScreen
        frameBorder="0"
      />
    </Paper>
  );
};

export default YouTubeVideo;
