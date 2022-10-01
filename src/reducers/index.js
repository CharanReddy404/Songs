import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Song1', duration: '04:30' },
        { title: 'Song2', duration: '04:50' },
        { title: 'Song3', duration: '05:00' },
        { title: 'Song4', duration: '05:30' },
        { title: 'Song5', duration: '03:56' }
    ];
};

const selectedSongReducer = (selectSong = null, action) => {
    if (action.type === 'SONG_SELETED') {
        return action.payload;
    }
    return selectSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});