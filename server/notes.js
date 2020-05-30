// write a function to retrieve a blob of json

// make an ajax request! use the 'fetch' function.
//https://rallycoding.herokuapp.com/

// function fetchAlbums() {
//   fetch("https://rallycoding.herokuapp.com/api/music_albums")
//     .then((res) => {
//       res.json();
//     })
//     .then((json) => {
//       console.log(json);
//     })
//     .catch();
// }

const fetchAlbums = async () => {
  try {
    const res = await fetch(
      "https://rallycoding.herokuapp.com/api/music_albums"
    );
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
};

fetchAlbums();
