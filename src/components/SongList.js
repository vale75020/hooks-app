import React, { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'The dark side of the moon', id: 1 },
        { title: 'Starway to heaven', id: 2 },
        { title: 'Smoke on the water', id: 3 }
    ]);

    const addSong = (title) => {
        setSongs([...songs, { title: title, id: uuid() }])
    }
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
        </div>
    );
};

export default SongList;