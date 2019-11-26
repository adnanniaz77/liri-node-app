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

<h2 style='text-align:center'>Visual walk-through</h2>

<code>node liri.js movie-this</code>
<img src="./runApp/img1.jpg">

<code>node liri.js movie-this 'fight club</code>
<img src="./runApp/img2.jpg">

<code>node liri.js concert-this</code>
<img src="./runApp/concert-this.jpg">

<code>node liri.js concert-this</code>
<img src="./runApp/concert-this-keyword.jpg">







