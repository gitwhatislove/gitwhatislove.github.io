'use strict';

import angular from 'angular';

import Api from './api';
import session from './auth/session';
import auth from './auth/auth';
// import localStorage from './auth/localstorage/index';
import dashboard from './dashboard/index';



export default angular.module('app',
    [
        'ui.router',
        'ngAnimate',
        'ngMessages',
        'ngAria',
        'ngMaterial',
        dashboard.name
    ])
    .service('api', Api)
    .service('session', session)
    .service('auth', auth)
    .config(($locationProvider) => {
        $locationProvider.html5Mode(true);
    })
    // .run(($rootScope, $state, session!!!!!!!!!!, auth) => {
    //     $rootScope.$state = $state;
    //     $rootScope.$on('$stateChangeStart', authHandling);

    //     function authHandling(event, toState, session, auth) {
    //         console.log(auth.register());
    //         if (!session.isAuthenticated) {
    //             // auth.register();
    //         }
    //         // if (toState.access) {
    //         //     if (!session.isAuthenticated) {
    //         //         event.preventDefault();
    //         //         NProgress.done();
    //         //         login.open();
    //         //     }
    //         // }
    //     }
    // })
  
    
