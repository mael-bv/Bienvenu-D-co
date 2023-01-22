<?php
require_once("src/back/Affichage.php");
require_once("src/controller/Search.php");

$search = new Recherche();
$affiche = new Affichage();

if(!empty($_GET)){
    $affiches = $search->recherche($_GET['submit'],$_GET['value']);
}
if(empty($_GET)){
    $affiches = $affiche->afficheCard("cards");
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/metier.css">
    <title>Métier</title>
</head>
<body>
<style>
         <?php
            $cssHeader = file_get_contents('./style/header.css');
            echo $cssHeader;
            $cssBtn = file_get_contents('./style/btn-top.css');
            echo $cssBtn;
            $cssFooter = file_get_contents('./style/footer.css');
            echo $cssFooter;
         ?>
     </style>
 
<?php
        include("./includes/header.php");
        include("./includes/btn-top.php");
    ?>
      
<br><br><br><br><br><br>
<form action="" method="GET">
    <div class="wrap">
    <div class="search">
        <input type="text" class="searchTerm" placeholder="Rechercher..." name="value">
        <button type="submit" class="searchButton" name="submit">
            <i class="fa fa-search"></i>
        </button>
    </div>
    </div>
</form>
<br><br><br><br><br>
<div class="containers">

<?php 
while($card = $affiches->fetch()){
    
    ?>
<div class="card">
    <div class="card-header">
      <img src="img_card_bdd/<?= $card['image']?>" alt="rover" />
    </div>
    <div class="card-body">
      <h4>
        <?= $card['titre']?>
      </h4>
      <br>
      <p>
      <?= $card['description']?>
      </p>
      <br><br>
    </div>
    <br><br>
  </div>   
  <?php } ?>
</div> 
    
<br><br><br><br><br><br>
<?php
include("./includes/footer.php")
?>



<div class="connected">
    <div class="connec">
        <a href="identification.php">C</a>
    </div>
</div>

<script src="./animation/metier.js"></script>   

</body>
</html>