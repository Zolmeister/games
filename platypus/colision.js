//Author: Zoli Kahan http://schoolapedia.org
function checkcolision(){
	colisionenemy("ship1");
	colisionenemy("ship2");
	colisionenemy("ship3");
	for (x=0;x<numbullets2;x++){
		a=document.getElementById("bulletE"+x).style;	
		b=document.getElementById("dude").style;
		if(a.posLeft<=b.posLeft+dudewidth && a.posLeft>=b.posLeft && a.posTop<=b.posTop+dudeheight && a.posTop+bulletheight>=b.posTop){
			colision=true;
			x=numbullets2;
		}
		}
	type="boss1";
	if (boss1==true){
	c=document.getElementById(type).style;
	if(dudex+dudewidth/2>=c.posLeft && dudex-dudewidth/2<=c.posLeft+boss1width && dudey+dudeheight/2>=c.posTop && dudey-dudeheight/2<=c.posTop+boss1height){
	colision=true;
	}
	for (x=0;x<numbullets;x++){
	a=document.getElementById("bullet"+x).style;	
	b=document.getElementById(type).style;
	if(a.posLeft<=b.posLeft && a.posLeft+bulletwidth>=b.posLeft && a.posTop<=b.posTop+boss1height && a.posTop+bulletheight>=b.posTop){
		removeBullet("bullet"+x,x);
		boss1health--;
		if (boss1health==0){
			boss1=false;
		removeEnemy(type,type,0);
		score+=100;
		}
	}
	}
	}
	
	
	if(dudex>=width-25){
		colision=true;
		}
	if(dudey>=height-25) {
		colision=true;
		}
	if(dudex<=-1){
		colision=true;
		}
	if(dudey<=-1) {
		colision=true;
		}
}
function colisionenemy(type){
	if (type=="ship1") {
		y=0;
		shipwidth=ship1width;
		shipheight=ship1height;
		}
	if (type=="ship2") {
		y=1;
		shipwidth=ship2width;
		shipheight=ship2height;
		}
	if (type=="ship3") {
		y=2;
		shipwidth=ship3width;
		shipheight=ship3height;
		}
	for (z=0;z<numenemies[y];z++){
		
		c=document.getElementById(type+z).style;
		if(dudex+dudewidth/2>=c.posLeft && dudex-dudewidth/2<=c.posLeft+shipwidth && dudey+dudeheight/2>=c.posTop && dudey-dudeheight/2<=c.posTop+shipheight){
		colision=true;
		}
		for (x=0;x<numbullets;x++){
		a=document.getElementById("bullet"+x).style;	
		b=document.getElementById(type+z).style;
		if(a.posLeft<=b.posLeft && a.posLeft+bulletwidth>=b.posLeft && a.posTop<=b.posTop+shipheight && a.posTop+bulletheight>=b.posTop){
			removeBullet("bullet"+x,x);
			removeEnemy(type,type+z,z);
			score++;
		}
		}
		
	}
	
}