// Exercise One

let songs = ["Summer Time", "Billy Jean", "September", "Bottom of the Map", ];

console.log(songs[0]);

console.log(songs[2]);

songs[4]= "Happy";

console.log(songs[4]);

console.log(songs);

let jamFour = songs[3];

songs.push("Feel It");

console.log(songs);

console.log(songs.length)

songs.pop()

console.log(songs.length)

for (let i = 0; i < songs.length; i++) {
        console.log(songs[i]);
   
  
}

for (let i = 0; i < songs.length; i++) {
      
        console.log(i + " "+ songs[i]);
  
}

let lastSong = songs[songs.length - 1];

console.log(lastSong);


// Exercise Two

let array = [1,4,34,5,234,24];

//ascending
array.sort(function (a,b){return a-b});

console.log(array);

//descending
array.sort(function (a,b){return b -a});

console.log(array);

//Exercise Three

let movies = [
    ["Thriller", "Saw", "Insidious"],
    ["Romance", "How To Be Single", "Notebook"],
    ["Comedy", "Step Brothers", "Anchorman"]
];

// console.log(movies[2][1]);

// console.log(movies);

// movies[1][0] = "Hostel";

// console.log(movies[1][0]);

for(let i = 0; i < movies.length; i++){
    for(let j = 0; j < movies[i].length; j++){
        console.log(movies[i][j]);
    }
}