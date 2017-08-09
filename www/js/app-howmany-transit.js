function extend_quizzer() {
	// Here we add the javascript we need to manage the stop-list interface.
	quizzer.config.transit_stops = 1;
    quizzer.text_activate = function(answer)
    {
        // What happens when you get a text answer right.
        $("#correct").append("<li>" + answer + "</li>");
		// Display the stop in the ol
		var index = this.previous_answer + 1;
		$('#legend ol li:nth-child(' + index + ')').addClass('show');
		$('#legend ol li:nth-child(' + index + ') span').addClass('show');
    };
    quizzer.show_text_answers = function()
    {
        // Add to the existing functionality.
		$('#legend ol').addClass('done');
        $('#remain').text('You named ' + this.correct_count + ' out of ' + this.answer_count + ' stations.');
        $('#remain').append($('#correct'));
        //var len = this.answer_key.length;
        //for ( var x=0; x < len; x++ ) $("#missed").append("<li>" + this.answer_key[x] + "</li>");
        //$("#missed").before('<h3>Missed</h3>');

        // This is the new stuff:
		var len = this.answer_count;
		for ( var i = 0; i <= len; i ++ )
		{
			var el = $('#legend ol li:nth-child(' + i + ') span')
			if ( !el.hasClass('show') )
			{
				el.addClass('show');
				el.addClass('missed');
			}
		}
    };
}
