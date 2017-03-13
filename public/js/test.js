
var bear = angular.module('bear', []);

function mainController($scope, $http) {
    $scope.formData = {};
    $http.get('/api/bears')
    .success(function(data) {
            $scope.bears = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}

const header = document.querySelector('h1');

const bleh = [ {name:'joey'} , {name: 'bobby'}];

function changeText() {
	header.innerText = "my new text! 🤔" + bleh[1].name;
}


function User(){
    var username, password;

    function doLogin(user,pw) {
        username = user;
        password = pw;

        // do the rest of the login work
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

// create a `User` module instance
var fred = User();

//fred.login( "fred", "12Battery34!" );