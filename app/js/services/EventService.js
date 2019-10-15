eventApp.factory('eventService', ['$http', function($http) {

    /**
     * Returns an HttpPromise to a random user generator api
     */
    function getRandomUser() {
        return $http.get('https://uinames.com/api/');
    }

    function getImageList(num) {
        return $http.get(`https://picsum.photos/v2/list?page=2&limit=${num}`);
    }

    return {
        getRandomUser: getRandomUser,
        getImageList: getImageList
    }

}]);