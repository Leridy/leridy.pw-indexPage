<?php 
    $str=file_get_contents('http://cn.bing.com/HPImageArchive.aspx?idx=0&#038;n=1');
    if(preg_match("/<url-->(.+?)&lt;\/url&gt;/ies",$str,$matches)){
        $imgurl='http://cn.bing.com'.$matches[1];
    }
    if($imgurl){
        header('Content-Type: image/JPEG');
        @ob_end_clean();
        @readfile($imgurl);
        @flush(); @ob_flush();
        exit();
    }else{
        exit('error');
    }
?>