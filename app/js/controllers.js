'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', [ '$http',
    function ($http) {
        var vm = this;
        $http.get('phones/phones.json').success(function (data) {
            vm.phones = data;
        });

        vm.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$routeParams', '$http',
    function ($routeParams, $http) {
        var vm = this;

        $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
            vm.phone = data;
        });
        vm.phoneId = $routeParams.phoneId;
    }]);
