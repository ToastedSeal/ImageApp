eventApp.directive('lineCalcDirective', function() {
    return {
        restrict: 'E',
        templateUrl: '../../templates/directiveTemplates/ScopedDirective.html',
        scope: {
            value: "=",
            line:"=",
            calc: "&"
        },
        link: function(scope, element, attrs, controller) {
            element.on('keydown', function(event) {
                if(event.originalEvent.key === "Enter" && scope.value != '' && scope.value.length > 1) {
                    scope.calc();
                }
            });
        },
        
    }
});