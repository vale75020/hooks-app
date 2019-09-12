import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'The dark side of the moon', id: 1 },
        { title: 'Starway to heaven', id: 2 },
        { title: 'Smoke on the water', id: 3 }
    ]);

    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, { title: title, id: uuid() }])
    }

    useEffect(() => {
        console.log("useEffect hook ran for a new song", songs);
    }, [songs]) // re-render only for song-list

    useEffect(() => {
        console.log("useEffect hook ran for a new age", age);
    }, [age]) // re-render only for age


    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return(
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
          <NewSongForm addSong={addSong}/> 
          <button onClick={() => setAge(age+1)}>Add One to age : {age}</button>
        </div>
    );
};

export default SongList;