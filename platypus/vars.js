//Author: Zoli Kahan http://schoolapedia.org
paused=false;
numenemies=new Array();
numenemies[0]=0;
numenemies[1]=0;
numenemies[2]=0;
shooting=false;
shoot=0;
score=0;
dudex=0;
dudey=0;
numbullets=0;
colision=false;
height=window.innerHeight;
width=window.innerWidth;
time=0;
level=1;
times=1;
bulletspeed=30;
boss1health=25;
boss1=false;
numbullets2=0;

function setvars(){
	dudewidth=58;
	dudeheight=50;
	ship1width=50;
	ship1height=58;
	ship2width=100;
	ship2height=100;
	ship3width=55;
	ship3height=75;
	boss1width=200;
	boss1height=500;
	bulletwidth=50;
	bulletheight=11;
}