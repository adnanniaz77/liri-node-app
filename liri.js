require("dotenv").config();
let keys = require("./keys.js");
let spotify = new spotify(keys.spotify);

const fs = require('fs');
const moment = require('moment');
const chalk = require('chalk');
const axios = require('axios');

//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


