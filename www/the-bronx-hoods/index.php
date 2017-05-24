<?php
$append = '';
if ( $_SERVER['QUERY_STRING'] !== '' ) $append = '?' . substr(htmlspecialchars($_SERVER['QUERY_STRING']), 0, 11);
?><!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!-- EDIT: Add a title. -->
    <title>TITLE</title>

    <!-- EDIT: Add the URL of the article this quiz is embedded in, once you know what that is -->
    <link rel="canonical" href="" />
    <link rel="shortcut icon" href="" type="image/x-icon" />

    <meta name="distribution" content="global" />
    <meta name="robots" content="noindex" />
    <meta name="language" content="en, sv" />
    <meta name="Copyright" content="Copyright &copy; 2017 the New York Daily News" />

    <link rel="stylesheet"  href="../css/style-howmany.css<?php echo $append; ?>" type="text/css" media="all" />
    <link rel="stylesheet"  href="https://fonts.googleapis.com/css?family=Open%20Sans|Open+Sans+Condensed:300,700|PT+Serif" type="text/css" media="all" />
    <script>
    var is_mobile = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
      if ( check == true ) return 1;
      return 0;
    };
    </script>
</head>
<body class="body-copy">

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

    <article>
<h1>The two-minute drill</h1>
<!-- EDIT: Edit the text in the h2, and if we're quizzing on something other than names, the text in the p element. -->
<h2>
    QUESTION
</h2>

<p class="hide">
    (Type the name in the box below, if you get it right it will disappear and be added to your correct-answers list. No need to type "Jr." or "Junior", no need to hit the enter key, if it's not accepting your answer either you're spelling it wrong or we made a mistake)
</p>
<!-- EDIT: If you want to give the people more or less than two minutes, edit this. --> 
<input id="time_limit" type="hidden" value="2" />
<!-- EDIT: Put the answers here, separated by commas, like this: value="Name1,Name2,Name3,Name4" -->
<input id="answer_key" type="hidden" value="Rhode Island,Washington,Idaho,New Hampshire,North Carolina,North Dakota,South Dakota,South Carolina,Utah,Oklahoma,Ohio,Hawaii,Massachusetts,Michigan" />
<!-- EDIT: Add the quiz-specific configuration values. -->
<script>
var quiz_config = { 
        title: 'TITLE',
        slug: 'SLUG',
        log_url: '../handler.php',
        has_photos: 1,
        log_answers: 1,
    };
if ( is_mobile() === 1 ) quiz_config.has_photos = 0;
</script>

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