<?php
header('Content-Type: text/html; charset=UTF-8');
date_default_timezone_set("America/Mexico_City");
?>


<?php
	require 'phpmailer/PHPMailerAutoload.php';
	require 'phpmailer/class.phpmailer.php';
	require 'phpmailer/class.smtp.php';

	$name=$_POST['Nombre'];
	$email=$_POST['Correo'];
	$phone=$_POST['Telefono'];
	$message=$_POST['mensaje'];
    $hora=$_POST['hora'];
    $cita=$_POST['cita'];
    $contenido = "Nombre:". $name. "\nCorreo:". $email. "\nTélefono:". $phone. "\nmensaje:".$message;
	// print_r($_POST);

	$template = str_replace('%Nombre%', $name, $template);
	$template = str_replace('%Correo%', $email, $template);
	$template = str_replace('%Telefono%', $phone, $template);
	$template = str_replace('%mensaje%', $message, $template);

        $mail = new PHPMailer;
		$mail->isSMTP(); 
		$mail->Host = 'smtp.gmail.com';
		$mail->SMTPAuth = true;
	    $mail->Mailer = 'smtp';
		$mail->Username = 'luismondragon545@gmail.com'; // Correo completo a utilizar
		$mail->Password = 'ing12345678'; // Contraseña
        $mail->SMTPSecure = 'tls';
		$mail->Port = 587; // Puerto a utilizar
		$mail->From = 'luismondragon545@gmail.com';
		$mail->FromName = 'CSC | Nuevo correo';
		$mail->AddAddress('luismondragon545@gmail.com'); // Esta es la dirección a donde enviamos
		$mail->isHTML(true);
	    $mail->CharSet = 'UTF-8';
        $mail->MsgHTML($message);
        $mail->SetFrom('luismondragon545@gmail.com', 'CSC');
		$mail->Subject = 'Nuevo Correo'; 
        //$mail->AltBody =($contenido); 
         //var_dump($mail);
		$mail->Body ="
    <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
<link href='https://fonts.googleapis.com/css?family=Petit+Formal+Script' rel='stylesheet'>
<link href='https://fonts.googleapis.com/css?family=Poppins:200' rel='stylesheet'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'/> 
</head>
<body style='margin: 0; padding: 0;'>

<table width='100%' bgcolor='#ffffff' style='border:1px solid #CCCCCC; color: #696969; border-collapse: collapse; padding:15px 10px 20px 10px; margin: 5px 0;'>
<tr>
</tr>

<table align='left' border='0' cellpadding='0' cellspacing='0' width='100%' bgcolor='FFFFFF'>
							<tbody>
                                <tr>
								  <td width='240' align='rigth' valign='top' ><img  src= https://pbs.twimg.com/media/DlOfMhiU0AAvtaM.jpg:large style='display: block; width: 200px; height:100px; margin:10px;'/></td>
                                  <td width='400' align='left' valign='top' style='font-family:Arial, Helvetica, sans-serif;padding-right:10px;'>
                                    <p style='font-size:20px;font-weight:bold;border-bottom:1px solid #CCC;padding-bottom:10px;'>CSC Wellness Center</p>
                                    <p style='font-size:12px;'>Mensaje: <strong> $message</strong></p>
                                 
							  </tr>
							</tbody>
</table>

<table align='left' border='0' cellpadding='0' cellspacing='0' width='100%'>
							<tbody>
								<tr>
									<td align='left' valign='top' bgcolor='d1ae85' style='padding:18px 20px 10px 20px;color:#FFFFFF; font-family:Arial, Helvetica, sans-serif;font-weight:normal; font-size:14px;'>Nombre:<strong> $name</strong>
                                    </td>
                                    <td align='left' valign='top' bgcolor='d1ae85' style='padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:normal;font-size:14px;'>Télefono:<strong> $phone</strong>
                                    </td>
							  </tr>
							  </tr>
							</tbody>
						</table>
                        
<table align='left' border='0' cellpadding='0' cellspacing='0' width='100%'>
							<tbody>
								<tr>
                                     <td align='left' valign='top' bgcolor='d1ae85' style='padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:normal;font-size:14px;'>Fecha de Cita:<strong> $cita</strong>
                                    </td>
                                    
                                    <td align='left' valign='top' bgcolor='d1ae85' style='padding:18px 20px 10px 20px;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-weight:normal;font-size:14px;'>Horario:<strong> $hora</strong>
                                    </td>
							  </tr>
							  </tr>
							</tbody>
						</table>
                        
<table align='center' border='0' cellpadding='0' cellspacing='0' height='176' width='100% padding: 20px'>
							<tbody>
								<tr>
									<td bgcolor='d1ae85' style='display:block; padding-bottom:15px; font-size:12px; font-family:Helvetica, Arial, sans-serif; color:#777777;' valign='top'>
										<div style='text-align: justify; padding:20px; color:#fff;'>
											Este mensaje fue enviado a tu email por ser cliente o suscriptor de nuestra empresa y haber indicado expresamente que deseas que te comuniquemos nuestras novedades y promociones. Nuestra empresa nunca te mandará correos no solicitados ni con otros fines distintos al indicado. Nuestra empresa cumple las normativas para la lucha activa contra el correo no deseado (spam). Si no quieres recibir más emails, puedes darte de baja aquí: cancelar tu suscripción.<br />
											
											<br />
											<br />
											&nbsp;</div>
										
										<br />
										&nbsp;</td>
								</tr>
							</tbody>
						</table>


</tr>
</table>
</body>
</html>";

	 if(!$mail->Send()) {
		 header('Location: ../index.html');
		/*echo 'Mailer Error: ' . $mail->ErrorInfo;*/ 
	} else{
		 header('Location: ../correo.html');
		
	 }


?>

