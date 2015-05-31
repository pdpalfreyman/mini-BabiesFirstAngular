var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){

	$scope.friends = ["Wes", "Lacey", "Rusty", "Kayla"]

	$scope.addFriend = function(name){
		$scope.friends.push(name);
		$scope.newFriend = "";
	};
});