<?php

include "conn.php";

//输出接口
$arr=array();
$result=$conn->query("select * from taobaopic");
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i]=$result->fetch_assoc();
}
echo json_encode($arr);