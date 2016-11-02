'use strict';

import angular from 'angular';
import config from './config';

export default class AuthService {
    constructor(api, session, $rootScope) {
        this.api = api;
        this.session = session;
        this.$rootScope = $rootScope;

    }
    register(credentials) {
        return this.api.post('/signup', credentials).then(response => {
            this.initSession(response);
        })
        // return this.api.post('/signup').then(response => {
        //     this.initSession(response);
        //     return this.session;
        // }).catch(response => {
        //     throw response.data;
        // });
    }

    // login(credentials) {
    //     return this.api.post('/users/sign_in', credentials).then(response => {
    //         this.initSession(response);
    //         return this.session;
    //     }).catch(response => {
    //         throw response.data;
    //     });
    // }

    initSession(response) {
        console.log(response);
        // this.session.token = response.data.user.auth_token;
        // this.session.user = Object.assign(this.session.user, response.data.user);
        // this.session.isAuthenticated = true;
    }

    isGuest(){
        return this.session.user.isGuest();
    }

    // updateSetting() {
    //     return this.api.get('/settings/parse').then((res) => {
    //         return res.data;
    //     })
    // }
    // sendPrice() {
    //     return this.api.get('/settings/delivery').then((res) => {
    //         return res.data;
    //     })
    // }
    // getDate() {
    //     return this.api.get('/settings/upddate').then((res) => {
    //         return res.data;
    //     })
    // }
}

