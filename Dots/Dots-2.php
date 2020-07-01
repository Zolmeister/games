<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Dots</title>
<script src="main.js"></script>
<style type="text/css">
<!--
.gridp {
	background-color: #000000;
	height: 5px;
	width: 5px;
	position: absolute;
	left: 0px;
	top: 0px;
}
.gridL {
	background-color: #F2F2F2;
	height: 5px;
	width: 5px;
	position: absolute;
	left: 0px;
	top: 0px;
}
.gridC {
	background-color: #FF0000;
	height: 1px;
	width: 1px;
	position: absolute;
	left: 0px;
	top: 0px;
}
-->
</style>
</head>
<?php
$player=$_REQUEST["player"];
echo "<script>player=".$player.";</script>";
?>

<body onload="main();" onunload="clearf();">
<div id="myDiv"></div>
<h1>Dots</h1>
<?php if ($player==1) echo "p2 URL="; ?> <div id="URL"></div>
<div id="grid"></div>
</body>
</html>
