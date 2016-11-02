'use strict';

import angular from 'angular'; 
import MainCtrl from './controller.js';
import MainService from './service.js';

export default angular.module('dashboard.main', [
])
    .service('mainService', MainService)
    .config(function ($stateProvider,$mdIconProvider) {
        $stateProvider
            .state('dashboard.main', {
                template: require('./template.html'),
                url: '/',
                controller: MainCtrl,
                controllerAs: 'ctrl',
                resolve: {
                }
            });
        $mdIconProvider
        .iconSet("call", 'img/resources/img/plus.svg', 24)
        .iconSet("social", 'img/resources/img/plus.svg', 24);    
    });
    // .config(function($mdIconProvider) {
    //     $mdIconProvider
    //     .iconSet("call", 'img/resources/img/dots.svg', 24)
    //     .iconSet("social", 'img/resources/img/dots.svg', 24);
    // })
