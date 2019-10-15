'use strict';

eventApp.controller('EventController', ['$scope', 'eventService', '$routeParams',
    function EventController($scope, eventService) {

        $scope.imageContainer = [];
        $scope.sampleData = 'Random Input Field!'
        
        let pos = 0;

        $scope.removeImage = function() {
            $scope.imageContainer.pop();
        } 

        $scope.getUrl = function(name) {
            return `https://picsum.photos/600.jpg?${name}`
        }

        $scope.initList = function(num) {
            eventService.getImageList(num).then((response) => {
                $scope.imageContainer = response.data;
                console.log('IMAGECONT: ', $scope.imageContainer[0])
            });
        }

        $scope.addToList = function(num) {
            eventService.getImageList(num).then((response) => {
                response.data.forEach(element => {
                    $scope.imageContainer.push(element);
                });
            });
        }

        
        $scope.goRight = function() {
            pos++;
            if((pos % 8) === 0) {
                $scope.addToList(8)
             }
            $scope.imageContainer.shift()
         }
 

        function init() {
            //for(let i = 0; i < $routeParams.eventId; i++) {
                $scope.initList(24);
                //$scope.addImage();
            //}
        }

        init();
        
    }
]);