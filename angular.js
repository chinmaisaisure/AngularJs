let myapp= angular.module("Myapp",[]);




let mycontroller = function($scope){

$scope.message = "Hello World";

}

myapp.controller("MyController", mycontroller);




let JSONController = function($scope){

let Student ={

FirstName : "Chinmayi",

LastName : "sure",

email : "s533977",

}

$scope.Student=Student;

}

myapp.controller("Student", JSONController);