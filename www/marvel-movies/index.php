<?php
$append = '';
if ( $_SERVER['QUERY_STRING'] !== '' ) $append = '?' . substr(htmlspecialchars($_SERVER['QUERY_STRING']), 0, 11);
?><!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!-- EDIT: Add a title. -->
    <title>How many Marvel movies can you name?</title>

    <!-- EDIT: Add the URL of the article this quiz is embedded in, once you know what that is -->
    <link rel="canonical" href="" />
    <link rel="shortcut icon" href="" type="image/x-icon" />

    <meta name="distribution" content="global" />
    <meta name="robots" content="noindex" />
    <meta name="language" content="en, sv" />
    <meta name="Copyright" content="Copyright &copy; 2018 the New York Daily News" />

    <link rel="stylesheet"  href="../css/style-howmany-v2.css<?php echo $append; ?>" media="all" />
    <link rel="stylesheet"  href="https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:300,700|PT+Serif" media="all" />
</head>
<body class="body-copy">

<script src="/js/jquery.min.js"></script>

    <article>
<h1>The seven-minute drill</h1>
<!-- EDIT: Edit the text in the h2, and if we're quizzing on something other than names, the text in the p element. -->
<h2>
   How many Marvel movies can you name in seven minutes? 
</h2>

<p class="hide">
    (Type the name in the box below, if you get it right it will disappear and be added to your correct-answers list. No need to type "Jr." or "Junior", no need to hit the enter key, if it's not accepting your answer either you're spelling it wrong or we made a mistake)
</p>
<!-- EDIT: If you want to give the people more or less than two minutes, edit this. --> 
<input id="time_limit" type="hidden" value="7" />
<!-- EDIT: Put the answers here, separated by commas, like this: value="Name1,Name2,Name3,Name4" -->
<input id="answer_key" type="hidden" value="Ant Man and the Wasp/Ant Man 2,Avengers:Infinity War/Infinity War/Avengers 3,Black Panther,Thor: Ragnarok/Ragnarok/Thor 3,Spider-Man: Homecoming/Spider-Man Homecoming/Homecoming,Guardians of the Galaxy Vol. 2/Guardians of the Galaxy Vol 2,Logan,Doctor Strange,X-Men: Apocalypse/Apocalypse/X-Men Apocalypse,Captain America: Civil War/Civil War/Captain America 3,Deadpool,Fantastic Four/Fantastic 4,Ant-Man,Avengers: Age of Ultron/Age of Ultron/Avengers 2,Guardians of the Galaxy,X-Men: Days of Future Past/Days of Future Past,The Amazing Spider-Man 2,Captain America: The Winter Soldier/The Winter Soldier/Captain America 2,Thor: The Dark World/The Dark World/Thor 2,The Wolverine,Iron Man 3,The Amazing Spider-Man,The Avengers/Avengers,Ghost Rider: Spirit of Vengeance/Spirit of Vengence/Ghost Rider 2,Captain America: The First Avenger/The First Avenger/Captain America,X-Men: First Class/First Class/X-Men First Class,Thor,Iron Man 2,X-Men Origins: Wolverine/Wolverine,Punisher: War Zone/War Zone/Punisher 2,The Incredible Hulk,Iron Man,Fantastic Four: Rise of the Silver Surfer/Rise of the Silver Surfer/Fantastic Four 2,Spider-Man 3,Ghost Rider,X3: The Last Stand/X-Men 3/X-Men The Last Stand,Fantastic Four,Man-Thing,Elektra,Blade: Trinity/Blade 3/Blade Trinity,Spider-Man 2,The Punisher,Hulk,X2: X-Men United/X-Men 2/X-Men United,Daredevil,Spider-Man,Blade II/Blade 2,X-Men,Blade,Howard the Duck" />
<!-- EDIT: Add the quiz-specific configuration values. -->
<script>
var quiz_config = { 
        title: 'How many Marvel movies can you name?',
        slug: 'marvel-movies',
        log_url: '../handler.php',
        has_photos: 1,
        log_answers: 1,
    };
if ( is_mobile === 1 ) quiz_config.has_photos = 0;
</script>
<style>
.photos li {
	background-size: 75px;
}
.photos li span { width: 87px!important; }
</style>

    <button class="btn-show-more-headlines" id="start-it" onClick="quizzer.start();">Start the quiz</button>
    <form name="time_count">
        <input id="timer" type="text" readonly="true" value="7:00" name="timer" />
    </form>

    <section id="quiz_interface" class="hide">
        <div id="answer_field_container">
            <div id="answer_field">
                <label for="answer" class="hide">Enter your answers here:</label>
                <input type="text" onKeyUp="quizzer.check_answer(this);" name="input" id="answer" />
                <p id="remain"></p>
            </div>
            <button class="btn-show-more-headlines" id="end-it" onClick="quizzer.quit();">End quiz now</button>
        </div>
        
        <p id="result"></p>
        <h3 class="hide">Correct Answers</h3>
        <ul id="correct"></ul>
        <ul id="missed" class="hide"></ul>
    </section>

    </article>
    <script src="../js/app-howmany.js<?php echo $append; ?>"></script>

</body>
</html>
