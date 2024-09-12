var toggle = true;

$("#button").click(function (e) { 
    if (toggle) {
        $('#text').css('display', 'none');
        toggle = false;
    } else {
        $('#text').css('display', 'block');
        toggle = true;
    }
})

