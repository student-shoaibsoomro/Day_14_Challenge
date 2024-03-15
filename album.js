"use strict";
function make_album(artist_Name, album_Title, track) {
    let music_Album = {
        artist_Name: artist_Name,
        album_Title: album_Title
    };
    if (track !== undefined) {
        music_Album.track = track;
    }
    return music_Album;
}
let music_Album = make_album('Artist A', 'Title A');
console.log(music_Album);
let music_Album2 = make_album('Artist B', 'Title B');
console.log(music_Album2);
let music_Album3 = make_album('Artist C', 'Title C', 20);
console.log(music_Album3);
