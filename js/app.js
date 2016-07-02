angular.module('myApp', []);
angular.module('myApp')

	.controller('TeamController', TeamController);

	function TeamController(){
		var vm = this;

		vm.teams = [
		    "ajax",
		    "feyenoord", 
			"Danny",
			"FC Knudde" 
		];

		vm.newTeam = "";

		vm.addNewTeam = function(){
			console.log(vm.newTeam);
			vm.teams.push(vm.newTeam);
		}

	}