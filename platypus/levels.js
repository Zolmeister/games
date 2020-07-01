//Author: Zoli Kahan http://schoolapedia.org
function checktime(){
	rand2=new Array();
	rand3=new Array();
	rand4=new Array();
	rand=Math.floor(Math.random()*(height-150));
	for (i=0;i<60;i++){
	rand2[i]=Math.floor(Math.random()*21);
	}
	for (i=0;i<25;i++){
		rand3[i]=Math.floor(Math.random()*21);
	}
	for (i=0;i<30;i++){
		rand4[i]=Math.floor(Math.random()*21);
	}
	if (paused==false){
	if (level==1){
		makeship1(20);
		if (time==25){ 
			nextlvl();
	}
	}
	if (level==2){
		makeship1(30);
		makeship2(10);
		if (time==25){ 
			nextlvl();
		}
	}
	if (level==3){
		makeship1(35);
		makeship2(15);
		makeship3(10);
		if (time==25){ 
			nextlvl();
		}
	}
	if (level==4){
		makeship1(45);
		makeship2(25);
		makeship3(15);
		if (time==30){ 
			nextlvl();
		}
	}
	if (level==5){
		if(time==1){
		alert("Boss incoming");
		addEnemy("boss1",height/2-boss1height/2);
		boss1=true;
		}
		if (time>5 && boss1==false){
			nextlvl();
			alert("Winner!");
		}
	}
	}
}
function makeship1(x){
	for (i=0;i<x;i++){	
		if (time==rand2[i]){
			addEnemy("ship1",rand);
		}
		}
}
function makeship2(x){
	for (i=0;i<x;i++){	
		if (time==rand3[i]){
			addEnemy("ship2",rand+25);
			addEnemy("ship2",rand+25);
		}
		}
}
function makeship3(x){
	for (i=0;i<x;i++){	
		if (time==rand4[i]){
			addEnemy("ship3",rand+25);
		}
		}
}
function nextlvl(){
	level++;
	time=0;
	window.clearInterval(shoot);
	shooting=false;
	alert("level "+level);
}