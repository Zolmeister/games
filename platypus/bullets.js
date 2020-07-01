//Author: Zoli Kahan http://schoolapedia.org
function addBullet(x,y) {
	 var ni = document.getElementById('bullets');
	 var divIdName = "bullet"+numbullets;
	 var newdiv = document.createElement('div');
	 newdiv.setAttribute("id",divIdName);
	 newdiv.setAttribute("class","bullet");
	 ni.appendChild(newdiv);
	 movethis=document.getElementById(divIdName).style;
	 movethis.top=y+'px';
	 movethis.left=x+'px';
	 numbullets++;
}
	 
function removeBullet(divNum,x) {
	  var d = document.getElementById('bullets');
	  var olddiv = document.getElementById(divNum);
	  d.removeChild(olddiv);
	  for (i=(x+1);i<numbullets;i++){
		document.getElementById("bullet"+i).id="bullet"+(i-1);
	}
	  numbullets--;
	  
}
function movebullet(){
	for (x=0;x<numbullets;x++){
	a=document.getElementById("bullet"+x).style;
	a.left=a.posLeft+bulletspeed+"px";
	if(a.posLeft>width){
		removeBullet("bullet"+x,x);
	}
	}
}
function addBulletE(type,num) {
	 var ni = document.getElementById('bullets');
	 var divIdName = "bulletE"+numbullets2;
	 var newdiv = document.createElement('div');
	 newdiv.setAttribute("id",divIdName);
	 newdiv.setAttribute("class","bulletE");
	 ni.appendChild(newdiv);
	 movethis=document.getElementById(divIdName).style;
	 if (type=="boss1"){
	 a=document.getElementById(type).style; 
	 y=dudey;
	 }
	 else {
		 a=document.getElementById(type+num).style;
		 y=a.posTop;
	 }
	
	 x=a.posLeft;
	 movethis.top=y+'px';
	 movethis.left=x+'px';
	 numbullets2++;
}
	 
function removeBulletE(divNum,x) {
	  var d = document.getElementById('bullets');
	  var olddiv = document.getElementById(divNum);
	  d.removeChild(olddiv);
	  for (i=(x+1);i<numbullets2;i++){
		document.getElementById("bulletE"+i).id="bulletE"+(i-1);
	}
	  numbullets2--;
	  
}
function movebulletE(){
	for (x=0;x<numbullets2;x++){
	a=document.getElementById("bulletE"+x).style;
	if (dudey>a.posTop){
	a.top=a.posTop+10+"px";
	}
	if (dudey<a.posTop){
		a.top=a.posTop-20+"px";
	}
	a.left=a.posLeft-30+"px";
	if(a.posLeft<0){
		removeBulletE("bulletE"+x,x);
	}
	}
}