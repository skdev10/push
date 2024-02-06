<?php 

$xml = new DOMDocument;
$xml->load('data.xml');


if ($xml->validate()) {
  echo "Its is Valid";
}else{
  echo"Its not Valid";
}
?>