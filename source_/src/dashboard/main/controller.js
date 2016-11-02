'use strict';


export default class MainCtrl { 
    constructor($mdDialog) {
 		this.search = '';
 		this.isOpen = false;
 		this.selectedMode = 'md-fling';
 		this.openModal_ = false;
 		this.show = {};
 		this.show.task = false;
    	this.show.newTask = false;
    	this.show.newProject = false;

    	
    	var originatorEv;
	    this.menuHref = "http://www.google.com/design/spec/components/menus.html#menus-specs";
	    this.openMenu = function($mdOpenMenu, ev) {
	      originatorEv = ev;
	      $mdOpenMenu(ev);
	    };
	    

    }


    openModal(type) {
    	this.openModal_ = true;
    	if (type == 'task') {
    		this.show.task = true;
    		this.show.newTask = false;
    		this.show.newProject = false;
    	}
    	else if (type == 'create_task') {
			this.show.task = false;
    		this.show.newTask = true;
    		this.show.newProject = false;
    	}
    	else {
			this.show.task = false;
    		this.show.newTask = false;
    		this.show.newProject = true;
    	}
    }

}