<?php
//require_once("includes/isConnected.php");
require_once("src/Controller/InscriptionController.php");


if(!empty($_POST)){
    $inscription = new InscriptionController();
    $inscription->inscription($_POST['submit'],$_POST['email'],$_POST['email2'],$_POST['motdepasse'],$_POST['motdepasse2']);
    $erreur = $inscription->inscription($_POST['submit'],$_POST['email'],$_POST['email2'],$_POST['motdepasse'],$_POST['motdepasse2']);

}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/identification.css">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    <title>Document</title>
</head>
<body>
<a href="centreControle.php">   
    <span class="material-symbols-outlined back">
        chevron_left 
    </span>
</a>
    <form method="post" action=""  class="form">
            <div class="title">Welcome</div>
            <div class="subtitle">Création de compte</div>
            <div class="input-container ic2">
                <input id="email" class="input" type="text" name="email" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder"  >Email</>
            </div>
            <div class="input-container ic2">
                <input id="email" class="input" type="text" name="email2" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder"  >confirmation mail</>
            </div>
            <div class="input-container ic2">
                <input id="lastname" class="input" type="password" name="motdepasse" placeholder=" " />
                <div class="cut"></div>
                <label for="lastname" class="placeholder" >Mot de passe</label>
            </div>
            <div class="input-container ic2">
                <input id="lastname" class="input" type="password" name="motdepasse2" placeholder=" " />
                <div class="cut"></div>
                <label for="lastname" class="placeholder" >Confirmation Mot de passe</label>
            </div>
            <button type="submit" name="submit" class="submit">inscription</button>

            <?php
                if(isset($erreur)){
            ?>
                <h5 class="erreur" style="color : red"> <?php echo $erreur ?></h5>
            <?php
                }
            ?>
    </form>
</body>
</html>