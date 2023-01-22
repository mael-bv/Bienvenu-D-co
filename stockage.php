<?php
session_start();
if(!isset($_SESSION['mail']) && !isset($_SESSION['mdp']) && empty($_SESSION['mail']) && empty($_SESSION['mdp'])){
    header("Location: recrutement.php");
}
$bdd = new PDO('mysql:host=127.0.0.1;dbname=xnbienparticle;charset=utf8', 'root' ,'');

$pdoStat = $bdd->prepare('SELECT * FROM articl ORDER BY `articl`.`id` DESC');
$executeIsOk = $pdoStat->execute();

$art = $pdoStat->fetchAll()
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/stockage.css">
    <title>Document</title>
</head>
<body>
<div class="retour">
    <a href="article.php"> <span>&#8592 </span>Article</a>
</div>
    <h1>Stockage Article</h1>
<br><br><br><br><br>

<div class="contenu">
<?php foreach($art as $a):?> 
    <div class="ensemble">
        <div class="titre">
            <p><?php echo $a['titre']?></p>
        </div>
        <div class="societe">
            <p><?php echo $a['societe']?></p>
        </div>
        <div class="lieu">
            <p><?php echo $a['lieu']?></p>
        </div>
        <div class="mess">
        <p><?php echo $a['mess']?></p>
        </div>
        <div class="date_b">
            <div class="date">
                <p><?php echo $a['date_time_publication']?></p>
            </div>
            <div class="bt">
                <div class="suppr">
                    <a href="delete.php?numArt=<?= $a['id'] ?>">Supprimer</a>
                </div>
                <div class="modi">
                <a href="redaction.php?numRedac=<?= $a['id'] ?>">Modifier</a>
                </div>
            </div>
        </div>
    </div>
    <br><br><br><br><br>
    <?php endforeach; ?> 
</div> 
</body>
</html>