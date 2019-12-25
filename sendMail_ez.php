<?php

//===========================================================================//
//======================== Verification Ajax ================================//
//==========================================================================//
$contact_val = array("nameOf" => "",
                  "mailOf" => "",
                  "messageOf" => "",
                  "nameOf_error" => "",
                  "mailOf_error" => "",
                  "messageOf_error" => "",
                        "isSuccess" => false);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $contact_val["nameOf"] = $_POST["nameOf"];
  $contact_val["mailOf"] = $_POST["mailOf"];
  $contact_val["messageOf"] = $_POST["messageOf"];
  $contact_val["isSuccess"] = true;
  if(empty($contact_val["nameOf"])){
    $contact_val["nameOf_error"] = "Please complete the field name";
    $contact_val["isSuccess"] = false;
  }
  if(empty($contact_val["mailOf"])){
    $contact_val["mailOf_error"] = "Please complete the field mail";
    $contact_val["isSuccess"] = false;
  }
  if(empty($contact_val["messageOf"])){
    $contact_val["messageOf_error"] = "Please complete the field message";
    $contact_val["isSuccess"] = false;
  }
  header('Content-type: application/json');
  echo json_encode($contact_val);

  //=====Envoi de l'e-mail.
  if ($contact_val['isSucces']) {
    $alaligne = "\n";
    $to = "victor.barlier@outlook.fr";
    $sujet = "un message de vote PortoFolio !";
    $message = $_POST['nameOf'] . "a essayé de vous contactez" . $alaligne;
    $message .= "mail du contact: " . $_POST['mailOf'] . $alaligne;
    $message .= "message : " . $_POST['messageOf'] . $alaligne;
    mail($to,$sujet,$message);
  }
};
 ?>
