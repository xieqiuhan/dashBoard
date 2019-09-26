$(document).ready(function () {
    var m = 4;
    var s = 00;
    var timer = setInterval(function () {
        if (s < 10) {
            //如果秒数少于10在前面加上0
            $('#time').html('0' + m + ':0' + s);
        } else {
            $('#time').html('0' + m + ':' + s);
        }
        s--;
        if (s < 0) {
            //如果秒数少于0就变成59秒
            s = 59;
            m--;
        }
        var time = $('#time').text();
        var min = time.split(":")[0];
        var second = time.split(":")[1];
        console.log(min, second);
        if (min == "03" && second == "45") {
            clearInterval(timer);
            $("#page-top").hide("fast", function () {
                $(this).css("display", "none")
            });

            $("#about").show("fast", function () {
                $(this).css("display", "block")
            });
        //     $("#page-top").addClass("hide");
        //     $("#about").removeClass("hide");
         }

    }, 1000)






})