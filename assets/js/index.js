$(document).ready(function () {

    $('.tel').click(function () {
        event.preventDefault();
        var get = $(this).attr('href');
        var response = confirm(get);
        if (response == true) {
            window.open("callto:"  + get)
        } else {
           // back to the page
        }
    });
});