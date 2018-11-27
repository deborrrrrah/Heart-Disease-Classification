<?php
  $command = escapeshellcmd('python main.py');
  $output = shell_exec($command);
  echo $output;
  //header("Content-type:application/json");
  //echo json_encode($output);
?>