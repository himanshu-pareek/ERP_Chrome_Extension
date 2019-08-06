chrome.runtime.sendMessage ({
    todo: "showPageAction"
});

chrome.runtime.onMessage.addListener (function (request, sender, sendResponse) {
    if (request.todo == "loginUser") {
        var user = request.user;

        console.log (this);
        $('#user_id').val(user.userId);
        var user_id = $("#user_id").val();
        var request = $.ajax({
            url: "getSecurityQues.htm",
            type: "POST",
            cache: false,
            data: "user_id="+user_id,
            dataType: "text"
        });
        request.done(function(response) {
            if(response.indexOf("FALSE")>-1){
                $("#answer_div").addClass('hidden');
                return false;
            }else{
                $("#question").html(response);
                $("#answer_div").removeClass('hidden');
            }
            var security_question = response;
            console.log (security_question);
            for (i = 0; i < user.security.length; i++) {
                if (user.security[i].question == security_question) {
                    var security_answer = user.security[i].answer;
                    console.log (security_answer);
                    $("#answer").val(security_answer);
                    $(".well form").submit();
                    break;
                }
            }
        });
        $('#password').val (user.password);
        
    }
    
});
