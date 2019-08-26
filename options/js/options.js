$(function () {

    var getDataFromStorage = function() {
        chrome.storage.sync.get ('users', function (data) {
            users = data.users;
    
            if (!users) {
                users = [];
            }
    
            createTable();
            
        });
    }

    getDataFromStorage();

    var createTable = function () {
        $("#users_table tbody").html("");
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
            $("#users_table tbody").append (html_to_append);
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
    }

    var editUser = function (user_index) {
        // Edit user here
        console.log ("Inside editUser with user_index = " + user_index);
        popupToSaveUser (user_index, users[user_index]);
    };

    var deleteUser = function (user_index) {
        // Delete user here
        console.log ("Inside deleteUser with user_index = " + user_index);
        console.log (users);
        users.splice (user_index, 1);
        chrome.storage.sync.set ({'users': users}, function () {
            getDataFromStorage();
        });
    };

    var popupToSaveUser = function (user_index, user) {
        $("#myModal").css ("display", "block");
        $("#myModal").attr ("user_index", user_index);
        if (user) {
            $("#name").val (user.name);
            $("#userId").val (user.userId);
            $("#password").val (user.password);
            $("#question1").val (user.security[0].question);
            $("#answer1").val (user.security[0].answer);
            $("#question2").val (user.security[1].question);
            $("#answer2").val (user.security[1].answer);
            $("#question3").val (user.security[2].question);
            $("#answer3").val (user.security[2].answer);
        }

    };

    var saveUser = function (user_index, user) {
        // Save User
        console.log ("Inside saveUser function...");
        console.log ("user_index = " + user_index);
        console.log (user);
        user_index = parseInt (user_index);
        if (user_index != -1) {
            users[user_index] = user;
        } else {
            users.push (user);
        }
        console.log (users);
        chrome.storage.sync.set ({'users': users}, function () {
            getDataFromStorage();
        });
    }

    var addUser = function () {
        // Add user here
        popupToSaveUser(-1);
    };

    $("#add_user").click (addUser);

    var closeModal = function () {
        $("#name").val ("");
        $("#userId").val ("");
        $("#password").val ("");
        $("#question1").val ("");
        $("#answer1").val ("");
        $("#question2").val ("");
        $("#answer2").val ("");
        $("#question3").val ("");
        $("#answer3").val ("");
        $("#myModal").css ("display", "none");
    };

    $("#cancel_button").click (function() {
        closeModal();
    });

    $("#save_user_button").click (function() {
        var user_index = $("#myModal").attr ("user_index");
        console.log ("User Index: " + user_index);
        var user = {
            name: $("#name").val(),
            userId: $("#userId").val(),
            password: $("#password").val(),
            security: [
                {
                    question: $("#question1").val(),
                    answer: $("#answer1").val()
                },
                {
                    question: $("#question2").val(),
                    answer: $("#answer2").val()
                },
                {
                    question: $("#question3").val(),
                    answer: $("#answer3").val()
                }
            ]
        };
        saveUser (user_index, user);
        closeModal();
    });

    
});