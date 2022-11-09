import './Shop.css';
import React from 'react';
import Player from '../Components/Player/Player';
import { songsdata } from '../Components/Player/audios';
import { useRef, useState, useEffect } from 'react';
import { songg } from './1.mp3';

const Shop = () => {

  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
      console.log( audioElem.current)
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }
 

  return (
    <>
     <div className="App">
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} 
              audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
    </div>
   </>

  );
}

export default Shop;