'use strict';

eventApp.controller('EventController', ['$scope', 'eventService', '$routeParams',
    function EventController($scope, eventService, $routeParams) {

        $scope.imageContainer = [];
        $scope.sampleData = 'Random Input Field!'
        
        let errId = 0;

        $scope.addImage = function() {
            eventService.getRandomUser().then((response) => {
                $scope.imageContainer.push({owner: response.data});
            }, (err) => {
                console.log('Err: ', err)
                $scope.imageContainer.push({owner: {
                    name: `Unable to find owner ${++errId}...`
                }});
            });
        }  

        $scope.removeImage = function() {
            $scope.imageContainer.pop();
        } 

        $scope.getUrl = function(name) {
            return `https://picsum.photos/600.jpg?${name}`
        }

        $scope.goRight = function() {
           $scope.imageContainer.shift()
           $scope.addImage();
        }

        function init() {
            for(let i = 0; i < $routeParams.eventId; i++) {
                $scope.addImage();
            }
        }

        init();
        
    }
]);