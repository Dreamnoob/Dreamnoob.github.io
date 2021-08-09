<?php

	// проверка, что почта была передана

	if(!isset($_POST['phone']))
	{
		$info = array
		(
			'result'	=> 'error',
			'info'		=> 'not set post',
		);
		echo json_encode($info);
		die;
	}
	
	// адрес почты, куда будет отправлена информация о подписке
	$mail = 'almaty-ws@mail.ru';

	$phone = $_POST['phone'];
	
	$headers = "From: site@shutyres.kz" . "\r\n";
	$headers .= "Content-type: text; charset=utf-8" . "\r\n";
	
	mail($mail, "Обратный звонок", wordwrap("Телефон: $phone"), $headers); 

	$info = array 
	(
		'result'	=> 'ok',
	);
	echo json_encode($info);
	die;

?>