sizex=15;
sizey=10;
turn="p1";
height=window.innerHeight;
width=window.innerWidth;
var a;
function main(){
a=self.setInterval("loadXMLDoc()", 1000);
drawGrid(sizex,sizey);
//createUrl();
}
function loadXMLDoc()
{
if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
  if (xmlhttp.readyState==4 && xmlhttp.status==200){
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
 };
xmlhttp.open("GET","test.txt",true);
xmlhttp.send();
}
url="write.php";
parameters="1";
function makePOSTRequest(url, parameters) {
	if (window.XMLHttpRequest) http_request=new XMLHttpRequest();
	http_request.onreadystatechange=function(){
	  if (http_request.readyState==4 && http_request.status==200){
   /* http_request.open('POST', url, true);
    http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http_request.setRequestHeader("Content-length", parameters.length);
    http_request.setRequestHeader("Connection", "close");
    http_request.send(parameters);*/
		  http_request.open("GET", "write.php?move=arr", true);
		  http_request.send();
		}
	};
 }
function drawGrid(x,y){
	placex=width/10;
	placey=height/5;
	spaced=width/(sizex*2);
	for(z=0;z<y;z++){
	for(i=0;i<x;i++){
		var newdiv = document.createElement('div');
		var ni = document.getElementById('grid');
		  newdiv.setAttribute("id",i+","+z);
		  newdiv.setAttribute("class","gridp");
		  ni.appendChild(newdiv);
		  movethis=document.getElementById(i+","+z).style;
		  movethis.top=placey+'px';
		  movethis.left=placex+'px';
		  if (i+1!=x){
		  var newdiv = document.createElement('div');
			var ni = document.getElementById('grid');
			  newdiv.setAttribute("id","x"+i+","+z);
			  newdiv.setAttribute("class","gridL");
			  newdiv.setAttribute("onmouseover","over('"+"x"+i+","+z+"')");
			  newdiv.setAttribute("onmouseout","out('"+"x"+i+","+z+"')");
			  newdiv.setAttribute("onmousedown","action('"+"x"+i+","+z+"')");
			  ni.appendChild(newdiv);
			  movethis=document.getElementById("x"+i+","+z).style;
			  movethis.width=spaced+'px';
			  movethis.top=placey+'px';
			  movethis.left=placex+5+'px';
		  }
		  if (z+1!=y){
			  var newdiv = document.createElement('div');
				var ni = document.getElementById('grid');
				  newdiv.setAttribute("id","y"+i+","+z);
				  newdiv.setAttribute("class","gridL");
				  newdiv.setAttribute("onmouseover","over('"+"y"+i+","+z+"')");
				  newdiv.setAttribute("onmouseout","out('"+"y"+i+","+z+"')");
				  newdiv.setAttribute("onmousedown","action('"+"y"+i+","+z+"')");
				  ni.appendChild(newdiv);
				  movethis=document.getElementById("y"+i+","+z).style;
				  movethis.height=spaced+'px';
				  movethis.top=placey+5+'px';
				  movethis.left=placex+'px';
		  }
		  placex+=spaced;
	}
	placey+=spaced;
	placex=width/10;
	}
}
function over(x){
	document.getElementById(x).style.backgroundColor="#000000";
}
function out(x){
	document.getElementById(x).style.backgroundColor="#F2F2F2";
}
function action(x){
	div=document.getElementById(x);
	div.setAttribute("onmouseover","");
	div.setAttribute("onmouseout","");
	div.setAttribute("onmousedown","");
	//div.setAttribute("id","s"+x);
	checksq();
	changeTurns();
	makePOSTRequest("write.php", "1");
}
function changeTurns(){
if(turn=="p1") turn="p2";
else if(turn=="p2") turn="p1";

}
function checksq(){
	for(z=0;z<sizey-1;z++){
	for(i=0;i<sizex-1;i++){
		x1=document.getElementById("x"+i+","+z).style.backgroundColor;
		x2=document.getElementById("x"+i+","+(z+1)).style.backgroundColor;
		y1=document.getElementById("y"+i+","+z).style.backgroundColor;
		y2=document.getElementById("y"+(i+1)+","+z).style.backgroundColor;
		if ((x1=="rgb(0, 0, 0)" || x1=="rgb(0, 0, 1)") && (x2=="rgb(0, 0, 0)" || x2=="rgb(0, 0, 1)") && (y1=="rgb(0, 0, 0)" || y1=="rgb(0, 0, 1)") && (y2=="rgb(0, 0, 0)" || y2=="rgb(0, 0, 1)")){
			if (x1=="rgb(0, 0, 0)" || x2=="rgb(0, 0, 0)" || y1=="rgb(0, 0, 0)" || y2=="rgb(0, 0, 0)"){
				document.getElementById("x"+i+","+z).style.backgroundColor="rgb(0, 0, 1)";
				document.getElementById("x"+i+","+(z+1)).style.backgroundColor="rgb(0, 0, 1)";
				document.getElementById("y"+i+","+z).style.backgroundColor="rgb(0, 0, 1)";
				document.getElementById("y"+(i+1)+","+z).style.backgroundColor="rgb(0, 0, 1)";
				ty=document.getElementById("x"+i+","+z).style.posTop;
				lx=document.getElementById("x"+i+","+z).style.posLeft;
				//alert(ty+" "+lx);
				var newdiv = document.createElement('div');
				var ni = document.getElementById('grid');
				  newdiv.setAttribute("id","c"+i+","+z);
				  newdiv.setAttribute("class","gridC");
				  ni.appendChild(newdiv);
				  movethis=document.getElementById("c"+i+","+z).style;
				  movethis.height=spaced-4+'px';
				  movethis.width=spaced-4+'px';
				  movethis.top=ty+5+'px';
				  movethis.left=lx+'px';
				  if(turn=="p1"){
					  movethis.backgroundColor="rgb(255, 0, 0)";
				  }
				  if(turn=="p2"){
					  movethis.backgroundColor="rgb(0, 0, 256)";
				  }
			}
		}
	}
}
}