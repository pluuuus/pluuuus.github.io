$(document).ready(function(){

$("#ropeframe").on('click', function(event){
	console.log("test");
	$("#rope").animate({"bottom": "800px"}, 'slow');
    $("#pic1").attr("src","./img/title-2.png",'slow');
    $("#light00").animate({"bottom": "0"},1000);
    $("#light11").animate({"top": "0"},2200);
    $("#light22").animate({"top": "0"},1500);
    $("#light33").animate({"bottom": "0"},3000);
    $("#designer").fadeIn("slow");
    $("#describe").fadeIn("slow");
});
    
    $(".light0").on('mouseover', function(event){
       $("#light00").attr("src","./img/light0_2.png",'slow');
});
    $(".light1").on('mouseover', function(event){
       $("#light11").attr("src","./img/light1_2.png",'slow'); 
});
     $(".light2").on('mouseover', function(event){
       $("#light22").attr("src","./img/light2_2.png",'slow'); 
});
    $(".light3").on('mouseover', function(event){
       $("#light33").attr("src","./img/light3_2.png",'slow'); 
});
});
