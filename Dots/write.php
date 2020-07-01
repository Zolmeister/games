<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<?php
$countnum=$_REQUEST["move"];
$FileName = $_REQUEST["file"];
$FileHandle = fopen($FileName, 'r+') or die("can't open file");
fwrite($FileHandle,$countnum);
fclose($FileHandle);
?>
<body>
</body>
</html>
