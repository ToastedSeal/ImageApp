eventApp.factory('eventService', ['$http', function($http) {

    page = 0;
    /**
     * Returns an HttpPromise to a random user generator api
     */
    function getRandomUser() {
        return $http.get('https://uinames.com/api/');
    }

    function getImageList(num) {
        page++;
        return $http.get(`https://picsum.photos/v2/list?page=${page}&limit=${num}`);
    }

    return {
        getRandomUser: getRandomUser,
        getImageList: getImageList
    }

}]);