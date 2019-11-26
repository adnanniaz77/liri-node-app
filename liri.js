require('dotenv').config({ path: './.env' })
let chalk = require('chalk');
var axios = require("axios");
let Spotify = require('node-spotify-api');
let dotenv = require('dotenv'); 
let fs = require('fs'); 
let keys = require('./key.js');



function movie(movieName) {
    let movieKeyword = keys.imdb.key;
    let queryUrl =  `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=${movieKeyword}`;

    axios.get(queryUrl).then(
        function(response){
            console.log(chalk.cyan.underline("Title: ") + chalk.yellow(response.data.Title));
            console.log(chalk.cyan.underline("Year: ") + chalk.yellow(response.data.Year));
            console.log(chalk.cyan.underline("Rated: ") + chalk.yellow(response.data.imdbRating));
            console.log(chalk.cyan.underline("Country: ") + chalk.yellow(response.data.Country));
            console.log(chalk.cyan.underline("Language: ") + chalk.yellow(response.data.Language));
            console.log(chalk.cyan.underline("Plot: ") + chalk.yellow(response.data.Plot));
            console.log(chalk.cyan.underline("Actors: ") + chalk.yellow(response.data.Actors));
        });
}


function spotify(song) { 

    let myid = keys.spotify.id;
    let mysecret = keys.spotify.secret;

    let spotify = new Spotify({
        id: myid,
        secret: mysecret
    });
    spotify.search({
        type: 'track',
        query: song,
        limit: 10
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            console.log('\n' +
            chalk.cyan.underline("Artist(s) Name: ").padEnd(28) + data.tracks.items[0].album.artists[0].name + '\n' +
            chalk.cyan.underline("Song Title: ").padEnd(28) + data.tracks.items[0].name + '\n' +
            chalk.cyan.underline("Preview: ").padEnd(28) + data.tracks.items[0].preview_url + '\n' +
            chalk.cyan.underline("Album Title: ").padEnd(28) + data.tracks.items[0].album.name
            );
        }
    });
}



let action = process.argv[2];
let variable = process.argv[3];


if (action == "movie-this") {
    if (variable == undefined) { variable = 'Mr. Nobody' } else { variable = process.argv[3]; }
    movie(variable);
} 
else if (action == "spotify-this-song") { 
    if (variable == undefined) { variable = 'dark horse' } else { variable = process.argv[3]; }
    spotify(variable);
}
else if (action == "concert-this") {
    concert();
}
else if (action == "do-what-it-says") {
    random();
}
else {
    console.log("Probably spelling mistake, check your spellings?");
}