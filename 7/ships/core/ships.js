'use strict';

 function Ship(name, model, position = { x: 0, y: 0 }) {
     let _isAnchorDroped = false;

     this.name     = name;
     this.model    = model;
     this.position = position;
     this.distance = 0;
     this.speed    = 0;

     this.move  = function (direction) {
     	if (_isAnchorDroped)
     		throw new Error('You need to rise anchor');

     	if (!['n', 'e', 's', 'w'].includes(direction))
     		throw new Error('Direction is invalid');

       switch(direction) {
       	case 'n':
       		this.position.y += 1;
       		break;
       	case 'e':
       		this.position.x += 1;
       		break;
       	case 's':
       		this.position.y -= 1;
       		break;
       	case 'w':
       		this.position.x -= 1;
       		break;
       }

       this.distance += 1;

       return true;
     }

     this.moveTo = function (position) {
       if (_isAnchorDroped)
         throw new Error('You need to rise anchor');

       let prevPosition = { x: this.position.x, y: this.position.y };

       this.position = {
           x: position.x,
           y: position.y,
       }

       this.distance += this.calculateDistance(prevPosition);

       return true;
     };

     this.dropAnchor = () => {
         if (this.speed !== 0)
             throw new Error('Speed must be 0');

         _isAnchorDroped = true;

         return true; 
     };

     this.riseAnchor = () => {
       if (!_isAnchorDroped)
         throw new Error('Anchor is already rised');

       _isAnchorDroped = false;

       return true;    
     };

     this.isAnchorDroped = function () {
       return _isAnchorDroped;
     };

     this.calculateDistance = function (prevPosition) {
     	let distanceX = this.position.x - prevPosition.x;
     	let distanceY = this.position.y - prevPosition.y;
      let distance  = Math.round(Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)));

     	return distance;
     }
 }
