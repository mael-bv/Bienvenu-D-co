<?php
require_once("src/back/AjoutModel.php"); 

class Message {
//public $erreur = "" ;
public $erreur;
public $succes;


    public function message($submit,$check,$nom,$mail,$num,$message){
        $addBdd = new AjoutBdd();
        $msg = "<h5 style='color:red'>Veuillez remplir tout les champs !</h5>";
        if(isset($submit)){
            //die(var_dump($check));
                if(isset($nom) && isset($mail) && isset($num) && isset($message)){
                    if(!empty($nom) && !empty($mail) &&!empty($num) && !empty($message)){
                        if($check ==! NULL ){
                            if(!empty($check)){
                        if(is_numeric($num)){
                        $email = filter_var($mail,FILTER_VALIDATE_EMAIL);
                        if($email){
                            $name = htmlspecialchars($nom);
                            $numero = htmlspecialchars($num);
                            $mess = htmlspecialchars($message);
                            $date = date("d.m.y");
                            $addBdd->addMessage($name,$email,$numero,$mess,$date,"messagerie");
                            return $succes = "<h5 style='color:green'>Message envoyé avec succès !</h5>";
                        }else {
                            $erreur = "<h5 style='color:red'>Email non valide</h5>";
                            
                        }
                    }else{
                        $erreur = "<h5 style='color:red'>Numéro de téléphone non valide</h5>";
                    }
                    } else {
                        $erreur = "<h5 style='color:red'>Veuillez accepter les conditions de généralitées !</h5>";
                    
                    }
                }else{
                  $erreur  = "<h5 style='color:red'>Veuillez accepter les conditions de généralitées !</h5>";
                
                }
            }else {
                $erreur = $msg;

            }
            }else{
                //echo "Accepter conditions de generalite";
                $erreur = $msg;
            }
        }else {
             $erreur = $msg;
        
        }
return $erreur;

    }



}

?>