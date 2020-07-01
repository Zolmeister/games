//Author: Zoli Kahan http://schoolapedia.org
function moveenemy(){
	type="ship1";
	veloc = 40;
	amp = 25;
	freq = .05;
	for (x=0;x<numenemies[0];x++){
		as=times*veloc;
	bs=amp*Math.sin(freq*times*2*Math.PI);
		a=document.getElementById(type+x).style;
		a.left=a.posLeft-10+"px";
		a.top=bs+a.posTop+"px";
		if(a.posLeft<0){
			removeEnemy(type,type+x,x);
		}
		}
	times++;
	type="ship2";
	for (x=0;x<numenemies[1];x++){
		a=document.getElementById(type+x).style;
		a.left=a.posLeft+8+"px";
		if(a.posLeft>width){
			removeEnemy(type,type+x,x);
		}
		}
	type="ship3";
	for (x=0;x<numenemies[2];x++){
		a=document.getElementById(type+x).style;
		dist=Math.floor(width-width/6)-40;
		if (a.posLeft > dist+40){
		a.left=a.posLeft-3+"px";
		}
		if (a.posLeft >= dist){
			a.left=a.posLeft-2+"px";
			}
		else {
			a.top=a.posTop-20+"px";
		}
		if (a.posLeft >= dist+4 && a.posLeft < dist+6){
			shootE("ship3",x);
			}
		
		if(a.posTop<0){
			removeEnemy(type,type+x,x);
		}
		}
	type="boss1";
	if(boss1==true){
	a=document.getElementById(type).style;
	if (a.posLeft>=width-200){
	a.left=a.posLeft-5+"px";
	}
	else {
		var rand=Math.floor(Math.random()*20);
		if (rand>=15){
			shootE("boss1",0);
		}
	}
	}
}