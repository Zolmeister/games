//Author: Zoli Kahan http://schoolapedia.org
function start(){
setvars();
var a = self.setInterval("main()", 50);
tim = self.setInterval("checktime();time++", 1000);
}
function main(){
if(paused==false){
	if (colision==true){
	alert("dead");
	paused=true;
	}
		checkcolision();
		movebullet();
		movebulletE();
		moveenemy();
		updatescore();
	}
}

function pause(){
	if (paused==false){
		paused=true;
		window.clearInterval(tim);
	}
	else {
		paused=false;
		tim = self.setInterval("checktime();time++", 1000);
	}
}
function addEnemy(type,y) {
	if(type=="ship1"){
	x=width;
	aray=0;
	}
	
	if(type=="ship2"){
		x=-ship2width;
		aray=1;
	}
	if(type=="ship3"){
		x=width;
		aray=2;
		}
	if(type=="boss1"){
		x=width;
	}
	  var ni = document.getElementById('enemies');
	  if (type!="boss1"){
		  var divIdName = type+numenemies[aray];
	}
	  if (type=="boss1"){
		  var divIdName = type;
	  }
	  var newdiv = document.createElement('div');
	  newdiv.setAttribute("id",divIdName);
	  newdiv.setAttribute("class",type);
	  ni.appendChild(newdiv);
	  movethis=document.getElementById(divIdName).style;
	  movethis.top=y+'px';
	  movethis.left=x+'px';
	  if (type!="boss1"){
	  numenemies[aray]++;
	  }
}
	 
function removeEnemy(type,divNum,x) {
	  var d = document.getElementById('enemies');
	  var olddiv = document.getElementById(divNum);
	  d.removeChild(olddiv);
	  if (type=="ship1"){
		  y=0;
	  }
	  if(type=="ship2"){
		  y=1;
	  }
	  if(type=="ship3"){
		  y=2;
	  }
	for (i=(x+1);i<numenemies[y];i++){
				document.getElementById(type+i).id=type+(i-1);
		}
	numenemies[y]--;
}

function movedude(x,y){
	dude=document.getElementById("dude").style;
	dude.height=dudeheight+"px";
	dude.width=dudewidth+"px";
	dude.top=y-dudeheight/2+"px";
	dude.left=x-dudewidth/2+"px";
}
function shootfrom(x,y){
	if (shooting==true){
		addBullet(x,y);
	}
}

function updatescore(){
	a=document.getElementById("score").innerHTML="Score: "+score;
}
function shootE(type,num){
	addBulletE(type,num);
}