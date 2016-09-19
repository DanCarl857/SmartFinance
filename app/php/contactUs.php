<?php
$postdata = file_get_contents("php://input");

if ($postdata){
    
    $request = json_decode($postdata);
    //echo $request->obj->email."-".$request->obj->subject."-".$request->obj->message;
    
    
    require 'PHPMailerAutoload.php';
    $mail = new PHPMailer;
									
    $mail->isSMTP();
    $mail->Host = 'ssl://a2plcpnl0165.prod.iad2.secureserver.net';
    $mail->SMTPAuth = true;
    $mail->Username = 'cameroonprogrammingcontest@cameroonpc.xyz';
    $mail->Password = 'v3on580sdF';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 465;
    $mail->setFrom('cameroonprogrammingcontest@cameroonpc.xyz', 'CPC FAQ');
    $mail->addReplyTo($request->obj->email, 'Registrant');
    $mail->addAddress('cameroonprogrammingcontest@cameroonpc.xyz');
    $mail->WordWrap = 50;
    $mail->isHTML(true);

    $mail->Subject = $request->obj->subject;
    $mail->Body = $request->obj->message;

    if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
    echo "Message has been sent";
     }
     

  } else {
    echo "server: no data";
}

?>