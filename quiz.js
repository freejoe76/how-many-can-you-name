
window.onload = init;

var quizzer = {
    correctcount: 0,
    correct: new Array(),
    answerkey: new Array(),
    answertimes: new Array(),
    answercount: 0,
    mins: 0,
    secs: 0,
    init: function() 
    {
        this.answerkey = $('#answerkey').attr('value').split(',');
        this.answercount = this.answerkey.length;
        this.timecount();
        document.getElementById('answer').focus();
    },
    timecount: function() 
    {
        this.mins = 1 * minCount($('#time_limit').attr('value'));
        this.secs = 0 + secCount(":01");
        this.counter();
    },
    minCount: function(input) 
    {
        // Pull out the minutes part of a time string, as in the "1" part of, say, "1:30"
        var len = input.length;

        for( var i = 0; i < len; i++ ) if( input.substring(i, i + 1) == ":" ) break;

        return( input.substring(0, i) );
    },
    secCount: function(input) 
    {
        // Pull out the seconds part of a time string, as in the "30" part of, say, "1:30"
        var len = input.length;

        for( var i = 0; i < len; i++ ) if( input.substring(i, i + 1) == ":" ) break;

        return( input.substring(i + 1, input.length) );
    },
    displayTime: function(mins,secs) 
    {
        var display;

        if( mins <= 9 ) display = " 0";
        else display = " ";

        display += mins + ":";

        if( secs <= 9 ) display += "0" + secs;
        else display += secs;

        return( display );
    },
    counter: function() 
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
            cd = setTimeout("counter()", 1000);
        }
    },
    checkAnswer: function(input)
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
        
                    $("#correct").text(msg);
                    var remainmsg = " remain";
                    
                    $("#remain").text( (answercount - correctcount) + remainmsg );
                    if( correctcount == answercount ) window.alert("You win!"); 
                }
            }
        }
        else
        {
            if( input.value == " " ) input.value = "";
        }
    },
    showAnswers: function()
    {
        var len = answerkey.length;
        var msg = '<h3>Missed:</h3><p>';
        for( var x=0; x < len; x++ ) msg += answerkey[x]+", ";
        msg += '</p>';

        $("#missed").text(msg);
        $("#missed").css('display','block');
        $("#explanation").css('display', 'block');
    }
}
