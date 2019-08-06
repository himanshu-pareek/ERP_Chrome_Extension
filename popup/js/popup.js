$(function() {
    var users = [
        {
            name: "Himanshu Pareek",
            userId: "15CS30016",
            password: "TemporaryPassword",
            security: [
                {
                    question: "What is your name?",
                    answer: "Himanshu Pareek"
                },
                {
                    question: "Which book do you like most?",
                    answer: "Maths"
                },
                {
                    question: "Who are you?",
                    answer: "indian"
                }
            ]
        },

        {
            name: "Heeramani Prasad",
            userId: "15CS30015",
            password: "TemporaryPassword",
            security: [
                {
                    question: "What is your name?",
                    answer: "Heeramani Prasad"
                },
                {
                    question: "Which book do you like most?",
                    answer: "Geeta"
                },
                {
                    question: "Who are you?",
                    answer: "indian"
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