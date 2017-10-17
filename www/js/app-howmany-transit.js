function extend_quizzer() {
	// Here we add the javascript we need to manage the stop-list interface.
	quizzer.config.transit_stops = 1;
    quizzer.text_activate = function(answer)
    {
        // What happens when you get a text answer right.
        $("#correct").append("<li>" + answer + "</li>");
		// Display the stop in the ol.
        // If it's already displayed then that means we show a different one.
        var index = this.prev_answer_position + 1;
        // In edge cases where we have a split answer that has multiple possibilities for displaying the list item
        console.log("AAA", this.prev_simple, "BBB", this.prev_answer_position);
        if ( typeof this.prev_simple !== 'undefined' )
        {
            index = this.prev_simple + 1;
            var classes = $('#legend ol li:nth-child(' + index + ') span').attr('class');
            if ( typeof classes !== 'undefined' && classes == 'show' ) index = this.prev_answer_position + 1;
        }
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
