chrome.runtime.sendMessage ({
    todo: "showPageAction"
});

chrome.runtime.onMessage.addListener (function (request, sender, sendResponse) {
    if (request.todo == "loginUser") {
        var user = request.user;

        $('#user_id').val(user.userId);
        $('#password').val (user.password);
        
    }
    
});
