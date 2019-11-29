<h1> LIRI Bot </h1>
<h2>UCB-2019 Class Assignment</h2>
<p>
    In this assignment, we'll make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
</p>

<h3>Liri Commands:</h3>
    <code>1. concert-this</code><br>
    <code>2. spotify-this-song</code> OR <br>
    <code>spotify-this-song songName</code><br>
    <code>3. movie-this</code> OR <br>
    <code>movie-this movieName</code><br>
    <code>4. do-what-it-says</code>

<h3>Technologies used</h3>
<ul>
    <li>Dotenv</li>
    <li>fs</li>
    <li>moment</li>
    <li>axios</li>
    <li>chalk</li>
    <li>spotify</li>
</ul>

<h3>Installation guide</h3>

<ol>
    <li>run <code>npm install</code></li>
    <li>provide your own spotify id & secrete and in the dotenv file</li>
    <li>provide you own OMDB api key</li>
</ol>

<h2>Require & Local Linked files</h2>
LIRI required installation of several npm packages and links to local files.<br>

<pre><code>
require("dotenv").config(); <br>
var fs = require("fs"); <br>
var moment = require("moment");<br>
var axios = require("axios");<br>
var Spotify = require("node-spotify-api");<br>
var spotifyKeyInfo = require("./keys.js");</h2>
</code></pre>

<h2 style='text-align:center'><a href="https://drive.google.com/file/d/1pH_UW2Q5wHKsA0pCWo0RtfhsrOzgLUaG/view?usp=sharing">Visual walk-through</a></h2>