angular.module('portalApp').directive('displayNote', function(portalUI, $rootScope) {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        link: function(scope) {

        },
        templateUrl: "app/views/displayMessage.html",
        controller: function($scope, portalUI, $rootScope) {
            $scope.init = function() {
                $scope.showWarning = false;
            };

            $scope.hideMessage = function() {
                $scope.showWarning = false;
            }

            $rootScope.$on("display-note", function(signal) {
                $scope.title = portalUI.title;
                $scope.message = portalUI.message;
                $scope.type = portalUI.type;
                $scope.showWarning = true;
                setTimeout(function() {
                    $scope.hideMessage();
                }, 5000);

            });
        }
    }
});
