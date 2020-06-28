'use strict';

 /**
  * @type {Sea} Список всех кораблей и пристаней 
  */

 const sea = {
 	ships: [],
 	docks: [],
 };

 window['sea'] = sea;

 /**
  * @typedef {Object} Ship
  * @property {string} name
  * @property {string} model
  * @property {object} position
  * @property {number} distance
  * @property {number} speed
  * @property {boolean} isAnchorDroped
  */

  /**
  * @typedef  {Object} Dock
  * @property {string} name
  * @property {object} position
  * @property {number} ships
  */ 
