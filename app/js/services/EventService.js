eventApp.factory('eventService', ['$http', function($http) {

    /**
     * Returns an HttpPromise to a random user generator api
     */
    function getRandomUser() {
        return $http.get('https://uinames.com/api/');
    }

    return {
        getRandomUser: getRandomUser,
    }

}]);