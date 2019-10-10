eventApp.directive('blockKey', function() {
    return {
        restrict: "A",
        link: function(scope, element, attrs, controller) {
            element.on('keydown', (event) => {
                return validKey(event.originalEvent.key);
            })
        }
    }

    function validKey(key) {
        if(!isNaN(key)) return true;

        switch(key) {
            case "%": return true;
            case "/": return true;
            case "^": return true;
            case "*": return true;
            case "+": return true;
            case "-": return true;
            case "Backspace": return true;
            case "Enter": return true;
            default: return false;
        }
    }
});