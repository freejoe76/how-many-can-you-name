var quizzer = {
    correct_count: 0,
    correct: new Array(),
    answer_key: new Array(),
    answer_times: new Array(),
    answer_count: 0,
    mins: 0,
    secs: 0,
    time_on_current_answer: 0,
    time_count: function() 
    {
        // Count down.
        this.mins = 1 * this.min_count($('#time_limit').attr('value'));
        this.secs = 0 + this.sec_count(":01");
        this.counter();
    },
    min_count: function(input) 
    {
        // Pull out the minutes part of a time string, as in the "1" part of, say, "1:30"
        var len = input.length;

        for( var i = 0; i < len; i++ ) if( input.substring(i, i + 1) == ":" ) break;

        return input.substring(0, i);
    },
    sec_count: function(input) 
    {
        // Pull out the seconds part of a time string, as in the "30" part of, say, "1:30"
        var len = input.length;

        for( var i = 0; i < len; i++ ) if( input.substring(i, i + 1) == ":" ) break;

        return input.substring(i + 1, input.length);
    },
    display_time: function(mins,secs) 
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
        if( this.correct_count == this.answer_key.length ) return;
        this.time_on_current_answer++;
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
        document.time_count.timer.value = this.display_time(this.mins,this.secs);

        if( this.mins == 0 && this.secs == 0 && this.alerted == 0 ) 
        {
            this.alerted = 1;
            window.alert("Time up."); 
            this.show_answers(); 
        } 
        else 
        {
            cd = setTimeout("quizzer.counter()", 1000);
        }
    },
    check_answer: function(input)
    {
        if( input.value.length > 0 )
        {
            for( var i = 0; i < this.answer_key.length; i++ )
            {
                if( input.value.toLowerCase() == this.answer_key[i].toLowerCase() )
                {
                    this.time_on_current_answer = 0;
                    this.correct[this.correct.length] = this.answer_key[i];
                    this.correct.sort();
                    this.answer_key.splice(i,1);
                    input.value = "";
                    this.correct_count++;
                    var msg = "";
                    var len_correct = this.correct.length;
                    this.answer_times[len_correct] = (this.mins * 60) + this.secs;
                    for( var x=0; x < len_correct; x++ ) msg += this.correct[x]+", ";
        
                    $("#correct").html(msg);
                    var remainmsg = " remain";
                    
                    $("#remain").text( (this.answer_count - this.correct_count) + remainmsg );
                    if( this.correct_count == this.answer_count ) window.alert("You win!"); 
                }
            }
        }
        else
        {
            if( input.value == " " ) input.value = "";
        }
    },
    show_answers: function()
    {
        var len = this.answer_key.length;
        var msg = '<h3>Missed:</h3><p>';
        for( var x=0; x < len; x++ ) msg += this.answer_key[x]+", ";
        msg += '</p>';

        $("#missed").html(msg);
        $("#missed").css('display','block');
        $("#explanation").css('display', 'block');
    },
    start: function()
    {
        // Start the quiz
        $('#start-it').remove();
        $('#quiz_interface').removeClass('hide');
        //this.counter();
        this.time_count();
        document.getElementById('answer').focus();
    },
    init: function() 
    {
        // Populate the answers, figure out how many answers the reader
        // has to get right, start the timer.
        this.answer_key = $('#answer_key').attr('value').split(',');
        this.answer_count = this.answer_key.length;
    }
}

$(document).ready(function(){ quizzer.init(); });

function slugify(text) {
    // from https://gist.github.com/mathewbyrne/1280286
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}
