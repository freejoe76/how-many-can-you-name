<?php
$append = '';
if ( $_SERVER['QUERY_STRING'] !== '' ) $append = '?' . substr(htmlspecialchars($_SERVER['QUERY_STRING']), 0, 11);
?><!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!-- EDIT: Add a title. -->
    <title>How many men's World Cup winners can you name?</title>

    <!-- EDIT: Add the URL of the article this quiz is embedded in, once you know what that is -->
    <link rel="canonical" href="" />
    <link rel="shortcut icon" href="" type="image/x-icon" />

    <meta name="distribution" content="global" />
    <meta name="robots" content="noindex" />
    <meta name="language" content="en, sv" />
    <meta name="Copyright" content="Copyright &copy; 2018 the New York Daily News" />

    <link rel="stylesheet"  href="../css/style-howmany-v2.css<?php echo $append; ?>" media="all" />
    <link rel="stylesheet"  href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|PT+Serif" media="all" />
</head>
<body class="body-copy">

<script src="/js/jquery.min.js"></script>

    <article>
<h1>The two-minute drill</h1>
<!-- EDIT: Edit the text in the h2, and if we're quizzing on something other than names, the text in the p element. -->
<h2>
   How many men's World Cup winners can you name? 
</h2>

<p class="hide">
    (Type the name in the box below, if you get it right it will disappear and be added to your correct-answers list. No need to type "Jr." or "Junior", no need to hit the enter key, if it's not accepting your answer either you're spelling it wrong or we made a mistake)
</p>
<!-- EDIT: If you want to give the people more or less than two minutes, edit this. --> 
<input id="time_limit" type="hidden" value="2" />
<!-- EDIT: Put the answers here, separated by commas, like this: value="Name1,Name2,Name3,Name4" -->
<input id="answer_key" type="hidden" value="Uruguay,Italy,Germany,Brazil,England,Argentina,France,Spain" />
<!-- EDIT: Add the quiz-specific configuration values. -->
<script>
var quiz_config = { 
        title: 'How many men\'s world Cup Winners can you name?',
        slug: 'mens-world-cup-winners',
        log_url: '../handler.php',
        has_photos: 0,
        log_answers: 1,
    };
if ( is_mobile === 1 ) quiz_config.has_photos = 0;
</script>
<style>
.photos li {
	/*
	background-size: 75px;
	*/
}
</style>


    <button class="btn-show-more-headlines" id="start-it" onClick="quizzer.start();">Start the quiz</button>
    <form name="time_count">
        <input id="timer" type="text" readonly="true" value="2:00" name="timer" />
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
