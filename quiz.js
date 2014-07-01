
window.onload = init;


var correctcount=0;
var correct = new Array();
var answerkey = new Array();
var answertimes = new Array();
var answercount;
var mins;
var secs;

function init() 
{
    answerkey = $('answerkey').value.split(',');
    answercount = answerkey.length;
    timecount();
    document.getElementById('answer').focus();
}

function timecount() 
{
    mins = 1 * minCount($('time_limit').value);
    secs = 0 + secCount(":01");
    counter();
}

function minCount(input) 
{
    // Pull out the minutes part of a time string, as in the "1" part of, say, "1:30"
    var len = input.length;

    for( var i = 0; i < len; i++ ) if( input.substring(i, i + 1) == ":" ) break;

    return( input.substring(0, i) );
}

function secCount(input) 
{
    // Pull out the seconds part of a time string, as in the "30" part of, say, "1:30"
    var len = input.length;

    for( var i = 0; i < len; i++ ) if( input.substring(i, i + 1) == ":" ) break;

    return( input.substring(i + 1, input.length) );
}

function displayTime(mins,secs) 
{
    var display;

    if( mins <= 9 ) display = " 0";
    else display = " ";

    display += mins + ":";

    if( secs <= 9 ) display += "0" + secs;
    else display += secs;

    return( display );
}

function counter() 
{
    if( correctcount == answerkey.length ) return;
    secs--;
    if( secs == -1 ) 
    {
        secs = 59;
        mins--;
    }
    document.timecount.timer.value = displayTime(mins,secs);

    if( ( mins == 0 ) && ( secs == 0 ) ) 
    {
        window.alert("Time up."); 
        showAnswers(); 
    } 
    else 
    {
        cd = setTimeout("counter()",1000);
    }
}



function checkAnswer(input)
{
    if( input.value.length > 0 )
    {
        for( var i = 0; i < answerkey.length; i++ )
        {
            if( input.value.toLowerCase() == answerkey[i].toLowerCase() )
            {
                correct[correct.length] = answerkey[i];
                correct.sort();
                answerkey.splice(i,1);
                input.value = "";
                correctcount++;
                var msg = "";
                var len_correct = correct.length;
                answertimes[len_correct] = (mins * 60) + secs;
                for( var x=0; x < len_correct; x++ ) msg += correct[x]+", ";
    
                document.getElementById("correct").innerHTML = msg;
                var remainmsg = " remain";
                
                document.getElementById("remain").innerHTML = (answercount - correctcount) + remainmsg;
                if( correctcount == answercount ) window.alert("You win!"); 
            }
        }
    }
    else
    {
        if( input.value == " " ) input.value = "";
    }
 }
 
 
function showAnswers()
{
    var len = answerkey.length;
    var msg = '<h3>Missed:</h3><p>';
    for( var x=0; x < len; x++ ) msg += answerkey[x]+", ";
    msg += '</p>';

    document.getElementById("missed").innerHTML = msg;
    document.getElementById("missed").style.display = 'block';
    document.getElementById("explanation").style.display = 'block';
}
