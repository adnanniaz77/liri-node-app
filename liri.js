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

