'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', [ 'Phone',

    function (Phone) {
        var vm = this;
        vm.phones = Phone.query();
        vm.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$routeParams', 'Phone',
    function ($routeParams, Phone) {
        var vm = this;
        vm.phone = Phone.get({
                phoneId: $routeParams.phoneId
            },
            function(phone){
                vm.mainImageUrl = phone.images[0]
            }
        )
        vm.phoneId = $routeParams.phoneId;

        vm.setImage = function (imageUrl) {
            vm.mainImageUrl = imageUrl;
        }

    }]);
