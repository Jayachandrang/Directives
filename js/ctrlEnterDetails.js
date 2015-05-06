portalApp.controller('ctrlEnterDetails',
    function($scope, $location, $rootScope, localDataService,portalUI,userData) {
        $scope.initialize = function() {
            $scope.initSettings();
        };

        $scope.initSettings = function() {

        };
        $scope.onEnterClick = function(details) {
            $scope.addRelation.submitted = true;

            if ($scope.addRelation.$valid) {
                console.log(details);
                $scope.save(details);
            } else {
                console.log('Errors in form data');
            }
        };

        $scope.save = function(details) {
            var randomNum = Math.floor((Math.random() * 10) + 1);
            details.candID = randomNum;
            localDataService.storeCandidate(details);
            var currentdate = new Date();
            var datetime = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + "," + currentdate.getHours() + ":" + currentdate.getMinutes();
            var user= userData.getUserData();
            var log = {
                "user":user.name,
                "activity": " has added a new Profile ",
                "time": datetime
            };
            $scope.model = {};
            localDataService.storeLogData(log)
            portalUI.display({
                "type":"alert-success",
                "title":"Details has been entered successfully",
                "message":""
            });
        };

        
    }
);
