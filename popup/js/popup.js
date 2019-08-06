$(function() {

    chrome.storage.sync.get ('users', function (data) {
        users = data.users;

        for (i = 0; i < users.length; i++) {
            var html_text = "<div class=\"user\">\n<p class=\"name_and_roll\">" + users[i].name + " (" + users[i].userId + ")</p>\n<button class=\"login_button\" id=\"user" + i + "\">Login</button>\n</div>";
            $('#available-users').append (html_text);
        }

        $('.login_button').click(function() {
            var user_index = $(this).attr("id").substring(4);
            loginUser (user_index);
        });
    });

    

    var loginUser = function (user_index) {
        var user = users[user_index];
        console.log (user);
        var message = {
            todo: 'loginUser',
            user: user
        };
        chrome.tabs.query ({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage (tabs[0].id, message);
        });
    }
});