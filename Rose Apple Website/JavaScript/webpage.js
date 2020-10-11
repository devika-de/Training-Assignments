$("#search1").click(function() {
                 var str = $("#Input1").val();
                 var url = "https://www.apple.com/in/search/" + str + "?src=globalnav";
                 window.open(url);
             })