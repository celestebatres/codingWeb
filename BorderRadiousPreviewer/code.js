var rangeValues =
{
    "1": "You've selected option 1!",
    "2": "...and now option 2!",
    "3": "...stackoverflow rocks for 3!",
    "4": "...and a custom label 4!"
};


$(function () {

    // on page load, set the text of the label based the value of the range
    $('#rangeText').text(rangeValues[$('#rangeInput').val()]);

    // setup an event handler to set the text when the range value is dragged (see event for input) or changed (see event for change)
    $('#rangeInput').on('input change', function () {
        $('#rangeText').text(rangeValues[$(this).val()]);
    });

});