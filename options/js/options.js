$(function () {
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
            userId: "///////",
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
        var html_to_append = 
                    '<tr id = "user' + i + '">' +
                        '<td>' + users[i].name + '</td>' +
                        '<td>' + users[i].userId + '</td>' +
                        '<td>' +
                            '<button id="edit_user_' + i + '" class="edit_user">Edit</button> ' +
                            '<button id="delete_user_' + i + '" class="delete_user">Delete</button>' +
                        '</td>' +
                    '</tr>';
        $("#users_table").append (html_to_append);
    }

    $('.edit_user').click(function() {
        var user_index = $(this).attr("id").substring(10);
        user_index = parseInt(user_index);
        editUser (user_index);
    });

    $('.delete_user').click(function() {
        var user_index = $(this).attr("id").substring(12);
        user_index = parseInt(user_index);
        deleteUser (user_index);
    });

    var editUser = function (user_index) {
        // Edit user here
        console.log ("Inside editUser with user_index = " + user_index);
    };

    var deleteUser = function (user_index) {
        // Delete user here
        console.log ("Inside deleteUser with user_index = " + user_index);
    }
});