'use strict';

import angular from 'angular';

import main from './main/index.js';




export default angular.module('dashboard',
    [
        main.name
    ])
    // .service('goodsService', GoodsService)
    // .service('newsService', NewsService)
    // .service('usersService', UsersService)
    // .service('login', Login)
    // .service('registration', Registration)
    // .service('modal', Modal)
    .config($stateProvider => {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                views: {
                    '': {
                        template: require('./template.html')
                    }
                    // 'dashboard-header@dashboard': {
                    //     template: require('./header/template.html'),
                    //     controller: HeaderCtrl,
                    //     controllerAs: 'ctrl'
                    // },
                    // 'dashboard-footer@dashboard': {
                    //     template: require('./footer/template.html')
                    // }
                }
            });
    });
