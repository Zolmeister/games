<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<?php
$countnum=1;
$FileName = "counter2.txt";
$FileHandle = fopen($FileName, 'r+') or $FileHandle = fopen($FileName, 'w');
$Data = fread($FileHandle, filesize($FileName));
$Data=(integer)$Data;
$Data=$Data+$countnum;
fclose($FileHandle);
$FileHandle = fopen($FileName, 'w+') or die("can't open file");
fwrite($FileHandle, $Data);
fclose($FileHandle);
echo $Data;
?>
<body>
</body>
</html>
