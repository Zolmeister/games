document.onkeydown=function(e){
	if(e.keyCode==80){
		pause();
	}
};
 document.onmousedown=function(e){
	 if (paused==false){
	shooting=true;
	shootfrom(dudex,dudey);
	shoot=self.setInterval("shootfrom(dudex,dudey);",250);
	 }
};
document.onmousemove=function(e){
	if (paused==false){
	var e=window.event || e;
	dudex = e.pageX;
	dudey = e.pageY;
	movedude(dudex,dudey);
	//shoot=self.setInterval("shootfrom(tempX,tempY);",500);
	}
};

document.onmouseup=function(e){
	window.clearInterval(shoot);
	shooting=false;
};