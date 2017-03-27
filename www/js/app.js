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
        // Populate the answers, figure out how many answers the reader
        // has to get right, start the timer.
        this.answerkey = $('#answerkey').attr('value').split(',');
        this.answercount = this.answerkey.length;
        this.timecount();
        document.getElementById('answer').focus();
    },
    timecount: function() 
    {
        // Count down.
        this.mins = 1 * this.minCount($('#time_limit').attr('value'));
        this.secs = 0 + this.secCount(":01");
        this.counter();
    },
    minCount: function(input) 
    {
        // Pull out the minutes part of a time string, as in the "1" part of, say, "1:30"
        var len = input.length;

        for( var i = 0; i < len; i++ ) if( input.substring(i, i + 1) == ":" ) break;

        return input.substring(0, i);
    },
    secCount: function(input) 
    {
        // Pull out the seconds part of a time string, as in the "30" part of, say, "1:30"
        var len = input.length;

        for( var i = 0; i < len; i++ ) if( input.substring(i, i + 1) == ":" ) break;

        return input.substring(i + 1, input.length);
    },
    displayTime: function(mins,secs) 
    {
        // Format a string so we can show readers how much time they have left.
        var display;

        if( mins <= 9 ) display = " 0";
        else display = " ";

        display += mins + ":";

        if( secs <= 9 ) display += "0" + secs;
        else display += secs;

        return display;
    },
    quit: function()
    {
        // Sometimes games end early.
        $('#end-it').remove();
        this.secs = 1;
        this.mins = 0;
        this.counter();
        return false;
    },
    alerted: 0,
    counter: function() 
    {
        // Deal with the passage of time.
        if( this.correctcount == this.answerkey.length ) return;
        this.secs--;
        if( this.secs == -1 ) 
        {
            this.secs = 59;
            this.mins--;

            // This situation happens if we end a game early.
            if ( this.mins < 0 )
            {
                this.mins = 0;
                this.secs = 0;
            }
        }
        document.timecount.timer.value = this.displayTime(this.mins,this.secs);

        if( this.mins == 0 && this.secs == 0 && this.alerted == 0 ) 
        {
            this.alerted = 1;
            window.alert("Time up."); 
            this.showAnswers(); 
        } 
        else 
        {
            cd = setTimeout("quizzer.counter()", 1000);
        }
    },
    checkAnswer: function(input)
    {
        if( input.value.length > 0 )
        {
            for( var i = 0; i < this.answerkey.length; i++ )
            {
                if( input.value.toLowerCase() == this.answerkey[i].toLowerCase() )
                {
                    this.correct[this.correct.length] = this.answerkey[i];
                    this.correct.sort();
                    this.answerkey.splice(i,1);
                    input.value = "";
                    this.correctcount++;
                    var msg = "";
                    var len_correct = this.correct.length;
                    this.answertimes[len_correct] = (this.mins * 60) + this.secs;
                    for( var x=0; x < len_correct; x++ ) msg += this.correct[x]+", ";
        
                    $("#correct").html(msg);
                    var remainmsg = " remain";
                    
                    $("#remain").text( (this.answercount - this.correctcount) + remainmsg );
                    if( this.correctcount == this.answercount ) window.alert("You win!"); 
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
        var len = this.answerkey.length;
        var msg = '<h3>Missed:</h3><p>';
        for( var x=0; x < len; x++ ) msg += this.answerkey[x]+", ";
        msg += '</p>';

        $("#missed").html(msg);
        $("#missed").css('display','block');
        $("#explanation").css('display', 'block');
    }
}

$(document).ready(function(){ quizzer.init(); });
