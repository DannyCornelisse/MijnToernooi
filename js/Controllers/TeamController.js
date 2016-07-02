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

			vm.teams.push(vm.newTeam);
			
		}

		vm.removeTeam = function(item){
			var index = vm.teams.indexOf(item);
			vm.teams.splice(index, 1);
		}

	}