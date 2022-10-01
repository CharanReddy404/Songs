//Action creator

export const selectSong = (song) => {
    //Return Action
    return {
        type: 'SONG_SELETED',
        payload: song
    };
};

