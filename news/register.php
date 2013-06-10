<?php

//Dades de conexió a la BD

include_once("database.php");

//Si no hi ha dades des de POST sortim

if (!$_SERVER["REQUEST_METHOD"] == "POST") {
	
	header("location: http://mclasca.sytes.net/solucions/");
	exit(0);
	
}

//Guardem les dades de POST en variables

$name = $_POST["nom"];
$email = $_POST["correu"];

//Conectem a la base de dades

mysql_connect($database["host"], $database["username"], $database["password"]);
mysql_select_db($database["database"]) or die("Error");

//Inserim les dades a la base de dades: taula "llista solucions" columnes "name, email"

$sSQL = "insert into llista_solucions (name,email) values ('$name','$email')";
mysql_query($sSQL);

//Enviament de correu com a notificació a mi
//Primer inserim les dades necessaries en una array: destinatari, subjecte i missatge

$mail_data = array(

	'to' => 'hulehule20@gmail.com',
	'subject' => 'Registre a la llista Solucions',
	'message' => '
	Hi ha un nou registre a la llista de correu de les Solucions.  Aquesta &eacute;s la informaci&oacute;:
	
	<br>Nom: ' + $name + '<br>Correu: ' + $email + '<br>Correu enviat automàticament desde <a href="http://mclasca.sytes.net/solucions">Solucions la Galera</a>'
	);
	
//Finalment enviem el correu

mail($mail_data["to"], $mail_data["subject"], $mail_data["message"]);

 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title></title>
	
	<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<link rel="stylesheet" href="style.css" type="text/css" media="screen" />
</head>
<body>
<div class="wrapper">

<h1>Registrat correctament!</h1>

	Correu: <span class="data"><?= $email ?></span><br />
	Nom: <span class="data"><?= $name ?></span>

</div>
</body>
</html>