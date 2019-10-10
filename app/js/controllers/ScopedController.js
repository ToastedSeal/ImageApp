eventApp.controller('ScopedController', ['$scope', function ScopedController($scope) {

    $scope.finalVal = 0;
    $scope.fields = [{value: 0}];

    $scope.resolveExpr = function(expr) {
        
        console.log('Called Immediately!');
        expr = expr.replace(/ /g,'')

        var symStack = [];
        var numStack = [];
        var i = 0;

        while(i < expr.length) {
            if(isNaN(expr[i])) {
                symStack.push(expr[i]);
                numStack.push('');
            }else{
                numStack[symStack.length-1]+=expr[i];
            }
            
            i++;
        }

        for(let i = 0; i < symStack.length; i++) { resolve(parseFloat(numStack[i]), symStack[i]) }
        $scope.fields.push({value: $scope.finalVal})
        $scope.$apply();
        console.log('Finished!');
    }

    function resolve(num, sym) {
        switch(sym) {
            case '+': $scope.finalVal+=num; break;
            case '-': $scope.finalVal-=num; break;
            case '*': $scope.finalVal*=num; break;
            case '/': $scope.finalVal/=num; break;
            case '%': $scope.finalVal%=num; break;
            case '^': $scope.finalVal=Math.pow($scope.finalVal,num); break;
            default: console.log('NOMATCH')
        }
    }
}]);