'use strict';

import angular from 'angular';
import localStorage from './service';

export default angular.module('localStorage', [])
    .service('localStorage', localStorage)
    .config(($localStorageProvider) => {
        $localStorageProvider.setKeyPrefix('unity-dana-');
    });
