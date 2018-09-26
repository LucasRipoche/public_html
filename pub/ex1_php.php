<HTML>
<HEAD>
	<TITLE>Premier programme PHP</TITLE>
	<meta charset="UTF-8">
	<style> 
	p {
		font-size: 2em;
		color: red;
		font-family: sans-serif;
	}

</style>
</HEAD>
<BODY>
	<?php

		$IP=$_SERVER['REMOTE_ADDR'];
		$NV=$_SERVER["HTTP_USER_AGENT"];
		echo "<p>Ip address : ".$IP ."<br>";
		echo "Navigateur : ".$NV ."</p><br>";
	?>
</BODY>
</HTML>