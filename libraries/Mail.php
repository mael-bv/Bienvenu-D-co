<?php
require 'mailjet/src/Mailjet/Ressources.php';
use \Mailjet\Resources;
define('API_USER','ee2eb93918b973f08ae7dd9e072036f8');
define('API_LOGIN','3eb8cea0a010a32e02a4e1b1a91c948d');
$mj = new \Mailjet\Client(API_USER,API_LOGIN,true,['version' => 'v3.1']);


 class Mail{
    public function __construct(){
    }
    
    
    public function sendMail($submit,$prenom,$nom,$societe,$mail,$mess){
        if(isset($submit)){
            if(isset($prenom) && isset($nom) && isset($societe) && isset($mail) && isset($mess)){
                if(!empty($prenom) &&!empty($nom) && !empty($mail) && !empty($mess)){
                    $prenomF = htmlspecialchars($prenom);
                    $nomF = htmlspecialchars($nom);
                    $societeF = htmlspecialchars($societe);
                    $email = htmlspecialchars($mail);
                    $message = htmlspecialchars($mess);
                    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                        $body = [
                            'Messages' => [
                                [
                                    'From' => [
                                        'Email' => "maeldelagny77400@gmail.com",
                                        'Name' => "mael"
                                    ],
                                    'To' => [
                                        [
                                            'Email' => "maeldelagny77400@gmail.com",
                                            'Name' => "mael"
                                        ],
                                        [
                                            'Email' => "passenger2@mailjet.com",
                                            'Name' => "passenger 2"
                                        ]
                                    ],
                                    'Cc' => [
                                        [
                                            'Email' => "copilot@mailjet.com",
                                            'Name' => "Copilot"
                                        ]
                                    ],
                                    'Bcc' => [
                                        [
                                            'Email' => "air-traffic-control@mailjet.com",
                                            'Name' => "Air traffic control"
                                        ]
                                    ],
                                    'Subject' => "demande de renseignement",
                                    'TextPart' => "$email,$message",
                                ]
                            ]
                        ];
                        echo"Email envoyer avec succès";
                        header('Location : facebook.fr');
                    }else{
                        $erreur ="Email non validate";
                    }
                }else{
                    $erreur ="Veuillez remplir tout les champs !";
                }
            }else{
                $erreur = "Veuillez remplir tout les champs !";
            }
        }

    }


}


?>