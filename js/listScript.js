var app = angular.module('myApp',[]);

app.controller('testCtrl', function($scope){
     // $scope.items = ["item1", "item2", "item3", "item4", "item5", "item6"];
     $scope.items = [{text: "item1"}, {text: "item2"}, {text: "item3"}, {text: "item4"}, {text: "item5"}, {text: "item6"} ];
});

app.directive('listItem', function($compile){
    return{
        restrict: 'E',
        replace: true,
        scope: {
            item: '='
        },
        template: '<li></li>',
        link: function(scope, element){

            if (angular.isDefined(scope.item)){
                element.append('<h4>{{item.text}}</h4>');
                $compile(element.contents())(scope)
            }
        }
    }
});

app.directive('listManager', function(){
    return{
        restrict: 'E',
        replace: true,
        scope: {
            items: '='
        },
        template: '<ul><list-item ng-repeat="item in items" item="item"></list-item></ul>'
    }
});
