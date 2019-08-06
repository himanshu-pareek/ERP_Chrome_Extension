$(function() {
    var users = [
        {
            name: "Himanshu Pareek",
            userId: "///////////",
            password: "Your Password",
            security: [
                {
                    question: "Security question 1",
                    answer: "Answer 1"
                },
                {
                    question: "Security question 2",
                    answer: "Answer 2"
                },
                {
                    question: "Security question 3",
                    answer: "Answer 3"
                }
            ]
        },

        {
            name: "Heeramani Prasad",
            userId: "//////////",
            password: "Your Password",
            security: [
                {
                    question: "Security question 1",
                    answer: "Answer 1"
                },
                {
                    question: "Security question 2",
                    answer: "Answer 2"
                },
                {
                    question: "Security question 3",
                    answer: "Answer 3"
                }
            ]
        }
    ];

    for (i = 0; i < users.length; i++) {
        var html_text = "<div class=\"user\">\n<p class=\"name_and_roll\">" + users[i].name + " (" + users[i].userId + ")</p>\n<button class=\"login_button\" id=\"user" + i + "\">Login</button>\n</div>";
        $('#available-users').append (html_text);
    }

    $('.login_button').click(function() {
        var user_index = $(this).attr("id").substring(4);
        var user = users[user_index];
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
    });

});