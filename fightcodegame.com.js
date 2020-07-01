//clone
//search field efficiently for enemy (main, ignore any clones)
//on found:
//fire at them
//clone moves 300 units away from bot
//turn parallel to them
//move forward/backward (if wall hit then switch)
//continuously track enemy position
//if lose position (not found within next firing position), go back to finding algo
//calculate enemy trajectory
//when can fire another round, fire using calculated trajectory

//on hit other robot, rotate 90 deg, go forward 100, then search for enemy again
//on hit wall, flip movement direction

var Robot = function(robot) {
	robot.clone();
	this.robo = {
		moveDir : 1,
		tracking : false,
		ticker : 0
	}
	this.clo = {
		moveDir : -1,
		tracking : false,
		ticker : 0
	}
};
Robot.prototype.onIdle = function(ev) {
	var robot = ev.robot;
	c = robot.parentId != undefined ? 'clo' : 'robo'
	o = c == 'robo' ? 'clo' : 'robo'
	this[c].x = robot.position.x
	this[c].y = robot.position.x
	this[c].gunCoolDownTime = robot.gunCoolDownTime
	this[c].angle = robot.angle
	this[c].cannonAngle = robot.cannonAbsoluteAngle
	/*if (this[o].tracking && !this[c].tracking) {
		this[c].tracking = true
		this[c].searching = false
		var tar = this[o].target
		this[c].target = tar
		var p1 = this[c]
		var p2 = tar
		c12 = p1.x * p2.x + p1.y * p2.y
		s12 = p1.x * p2.y - p1.y * p2.x
		a12 = Math.atan2(s12, c12)
		if (a12 > 180)
			robot.rotateCannon((a12 - 180) * -1)
		else
			robot.rotateCannon(a12)
	}*/
	if(this[o].target && !this[c].target){
		this[c].target=this[o].target
	}
	if (!this[c].searching && !this[c].tracking && !this[c].target) {
		//this[c].searching = true
		if (c == 'robo') {
			if (this[c].y > robot.arenaHeight + 200 / 2) {//on top half, so turn down
				if (this[c].angle < 90 || this[c].angle > 270) {
					robot.rotateCannon(360)
				} else
					robot.rotateCannon(-360)
			} else if (this[c].y < robot.arenaHeight + 200 / 2 - 200) {//on bottom half so turn up
				if (this[c].angle < 90 || this[c].angle > 270) {
					robot.rotateCannon(-360)
				} else
					robot.rotateCannon(360)
			} else if (this[c].x > robot.arenaWidth / 2) {//on right half, so start turning left
				if (this[c].angle < 180) {
					robot.rotateCannon(-360)
				} else
					robot.rotateCannon(360)
			} else {//on left half, so start turning right
				if (this[c].angle < 180) {
					robot.rotateCannon(360)
				} else
					robot.rotateCannon(-360)
			}
		} else {
			if (this[c].x > robot.arenaWidth / 2 + 200) {//on right half, so start turning left
				if (this[c].angle < 180) {
					robot.rotateCannon(-360)
				} else
					robot.rotateCannon(360)
			} else if (this[c].x < robot.arenaWidth / 2 - 200) {//on left half, so start turning right
				if (this[c].angle < 180) {
					robot.rotateCannon(360)
				} else
					robot.rotateCannon(-360)
			} else if (this[c].y > robot.arenaHeight / 2) {//on top half, so turn down
				if (this[c].angle < 90 || this[c].angle > 270) {
					robot.rotateCannon(360)
				} else
					robot.rotateCannon(-360)
			} else {//on bottom half so turn up
				if (this[c].angle < 90 || this[c].angle > 270) {
					robot.rotateCannon(-360)
				} else
					robot.rotateCannon(360)
			}
		}

	} else {
		if (this[c].target && this[c].gunCoolDownTime == 0) {
			//get my angle, and the position of the target
			var p1 = this[c]
			var p2 = this[c].target
			c12 = p1.x * p2.x + p1.y * p2.y
			s12 = p1.x * p2.y - p1.y * p2.x
			a12 = Math.atan2(s12, c12)*180/Math.PI
			
			robot.rotateCannon((a12)*(Math.abs(a12-this[c].angle)>180?-10:1))
			//console.log(a12-this[c].angle)
			//turn cannon to face target
		}
		this[c].ticker += 1
		if (this[c].ticker > 1000) {
			this[c].searching = false
			this[c].tracking = false
			this[c].ticker=0
			this[c].target = undefined
		}
	}
	/*if(this[c].tracking){
	 //console.log("tracking")
	 this[c].trackCount+=1
	 if(this[c].trackCount>1000){
	 console.log("tracking voer")
	 this[c].tracking=false
	 this[c].searching=true
	 }
	 if(this[c].gunCoolDownTime==0){
	 //robot.rotateCannon(this[c].moveDir*360)
	 }
	 robot.ahead(10*this[c].moveDir)

	 }*/
};
Robot.prototype.onWallCollision = function(ev) {
	var robot = ev.robot;
	c = robot.parentId != undefined ? 'clo' : 'robo'
	console.log("HIT WALL")
	this[c].moveDir *= -1
	robot.ahead(1000 * this[c].moveDir)
};
Robot.prototype.onRobotCollision = function(ev) {
	var robot = ev.robot, collidedRobot = ev.collidedRobot;
	c = robot.parentId != undefined ? 'clo' : 'robo'
	this[c].moveDir *= -1
	robot.ahead(1000 * this[c].moveDir)
};
Robot.prototype.onHitByBullet = function(ev) {
};
Robot.prototype.onScannedRobot = function(ev) {
	var robot = ev.robot, scannedRobot = ev.scannedRobot;
	if (robot.id == scannedRobot.parentId || robot.parentId == scannedRobot.id) {
		return;
	}
	if (scannedRobot.parentId) {//found a clone
		return
	}
	c = robot.parentId != undefined ? 'clo' : 'robo'
	if (!this[c].tracking) {
		robot.stop()
		robot.fire();
		//robot.turn(scannedRobot.angle-180)
	} else {
		robot.fire();
	}
	robot.ahead(30 * this[c].moveDir)
	this[c].tracking = false
	this[c].trackCount = 0
	this[c].ticker = 0
	this[c].searching = false
	this[c].target = {
		x : scannedRobot.position.x,
		y : scannedRobot.position.y
	}
};
