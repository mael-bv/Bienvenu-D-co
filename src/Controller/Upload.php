<?php
require_once("src/back/AjoutModel.php");
class Upload {
public $erreur;
public $succes;
public function ajoutImage($submit,$image,$nameBdd){
    $ajout = new AjoutBdd();
    if(isset($submit)){
        if(!empty($image) AND !empty($nameBdd)){
            $nameBase = $nameBdd;
            $file_name = $image['name'];
            $file_type = $image['type'];
            $file_size = $image['size'];
            $file_tmp = $image['tmp_name'];
            $file_error = $image['error'];
            $file_extension = strrchr($file_name,".");
            $extension_secu = explode('.',$file_name); //TEST FACTIVE
            $extensions_autorise = array('.png','.PNG','.jpg','.JPG','.jpeg','.JPEG','.gif');
            $size = 100000000;
            $find = "file";
           // $file_dest = 'files/'.$file_name;
            $file_dest = $nameBase.$file_name;
            if(in_array($file_extension,$extensions_autorise)){
                if(count($extension_secu) <= 2){
                echo "la okkkk";
                    if($file_size < $size && $file_error == 0){
                        echo"erro okman";
                        if(move_uploaded_file($file_tmp,$file_dest)){
                        echo'fichier envoyé';
                           $verif = substr($file_dest,0,4);
                           if($verif ==="file"){
                            $ajout->addImages($file_name,$file_dest,"filesimages");
                            $erreur = "Image enregistré dans la galerie";
                            header("Location: ajoutImage.php");
                           }else{
                            $ajout->addImages($file_name,$file_dest,"carousselfile");
                            $erreur = "Image enregistré dans le caroussel";
                            header("Location: ajoutImage.php");
                           }
                           
                        }
                    }else{
                        $erreur ="taille volumineuse ou interdite, type autorisé : png, jpg, jpeg, gif";
                    }
                }
            }else{
                $erreur =  'Aucune image ou type selectionnée !';
            } 
            

        } else {

            $erreur = "Aucune image ou type selectionnée !";
        }

        return $erreur;
    }


   /*  if(isset($submit)){

            if(!empty($image)){
                $nameFile = $image['name'];
                $typeFile = $image['type'];
                $sizeFile = $image['size'];
                $tmpFile =$image['tmp_name'];
                $errFile =$image['error'];

                $extensions = ['jpg','jpeg','png','gif'];
                $type = ['image/jpg','image/jpeg','image/png','image/gif'];

                $extension = explode('.',$nameFile);
                $maxSize = 1000000;

                if(in_array($typeFile,$type)){
                    if(count($extension) <= 2 && in_array(strtolower(end($extension)),$extensions)){
                        var_dump('debut okkk');
                        if($sizeFile <= $maxSize && $errFile == 0){
                            var_dump('size ok');
                            if(move_uploaded_file($tmpFile , './public/upload' . uniqid() . '.' . strtolower(end($extension)))){
                                echo "enregistrement effectué";
                                var_dump('ok');
                            }else{
                                echo "Erreur d'enregistrement";
                            }
                        }else{
                            echo "image trop volumineuse";
                            var_dump("image trop voluminsuese");
                        }
                    }else {
                        echo "Merci de mettre une image";
                    }

                    
                }else {
                    echo"type non autorisé";
                }


            }
        }
    } */


    }

}


?>