<?php

if(isset($_POST['submit'])) {
	$name = htmlentities($_POST['name']);
	$email = htmlentities($_POST['email']);
	$number = htmlentities($_POST['number']);
	$comments = htmlentities($_POST['comments']);

	if(!empty($name)&&!empty($email)) {

		$email_from = 'benedict.marien@gmail.com';
		$email_subject = 'New Message Katia Ortmann';
		$email_body = 'Name: ' .$name. "\n".
					  'Email: ' .$email. "\n".
					  'Number: ' .$number. "\n".
					  'Comments: ' .$comments;

		$to = 'benedict.marien@gmail.com';
		$headers = "From: $email \r\n";

		mail($to, $email_subject, $email_body, $headers);
		header('location: message-sent.html');
	}	

} else {
    
	echo('Something went wrong');
	exit(0);
	
}

?>