define(['jquery-ui'], function () {
    return function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                /*
                element.datepicker({
                    dateFormat: 'mm/dd/yy',
                    onSelect: function (date) {
                        scope.date = date;
                        scope.$apply();
                    }
                });
                */
            }
        };
    }
});