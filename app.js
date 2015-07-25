

$(document).ready(function(){ 
var one="";
var two="";
var three="";
var four="";
var five="";
var six="";
var seven="";
var eight="";
var nine="";
var total="";
var totaltwo="";

var display=function(select, value){
$(select).on('click', function(){
total+=value;
$(".display").html('<b>'+total+'</b>');
});
}

<!--buttons-->
display('.one',1);
display('.two',2);
display('.three', 3);
display('.four', 4);
display('.five', 5);
display('.six', 6);
display('.seven', 7);
display('.eight', 8);
display('.nine', 9);

<!--clear-->
$(".c").click(function(){
location.reload();
});


<!--add-->
$(".add").click(function(){	$(".display").html('<b>'+totaltwo+'</b>');

function remove(what){
    $(what).off('click');}
	remove(".one");
	remove(".two");
	remove(".three");
	remove(".four");
	remove(".five");
	remove(".six");
	remove(".seven");
	remove(".eight");
	remove(".nine");
	function add(select,val){
	$(select).click(function(){
	totaltwo+=val;
	$(".display").html('<b>'+totaltwo+'</b>');
	}); }
	add(".one",1);
	add(".two",2);
	add(".three",3);
	add(".four",4);
	add(".five",5);
	add(".six",6);
	add(".seven",7);
	add(".eight",8);
	add(".nine",9);
	


});

$(".subtract").click(function(){	$(".display").html('<b>'+totaltwo+'</b>');

function remove(what){
    $(what).off('click');}
	remove(".one");
	remove(".two");
	remove(".three");
	remove(".four");
	remove(".five");
	remove(".six");
	remove(".seven");
	remove(".eight");
	remove(".nine");
	function add(select,val){
	$(select).click(function(){
	totaltwo+=val;
	$(".display").html('<b>'+totaltwo+'</b>');
	}); }
	add(".one",1);
	add(".two",2);
	add(".three",3);
	add(".four",4);
	add(".five",5);
	add(".six",6);
	add(".seven",7);
	add(".eight",8);
	add(".nine",9);
	
	
    $(".equal").off("click");
	
	$(".equal").click(function(){
var a=parseInt(total);
var b=parseInt(totaltwo);
var c=a-b;

$(".display").html('<b>'+c+'</b>');
setTimeout(function(){ location.reload();
 }, 1000);

});


});


$(".time").click(function(){	$(".display").html('<b>'+totaltwo+'</b>');

function remove(what){
    $(what).off('click');}
	remove(".one");
	remove(".two");
	remove(".three");
	remove(".four");
	remove(".five");
	remove(".six");
	remove(".seven");
	remove(".eight");
	remove(".nine");
	function add(select,val){
	$(select).click(function(){
	totaltwo+=val;
	$(".display").html('<b>'+totaltwo+'</b>');
	}); }
	add(".one",1);
	add(".two",2);
	add(".three",3);
	add(".four",4);
	add(".five",5);
	add(".six",6);
	add(".seven",7);
	add(".eight",8);
	add(".nine",9);
	
	
    $(".equal").off("click");
	
	$(".equal").click(function(){
var a=parseInt(total);
var b=parseInt(totaltwo);
var c=a*b;

$(".display").html('<b>'+c+'</b>');
setTimeout(function(){ location.reload();
 }, 1000);

});


});

$(".divide").click(function(){	$(".display").html('<b>'+totaltwo+'</b>');

function remove(what){
    $(what).off('click');}
	remove(".one");
	remove(".two");
	remove(".three");
	remove(".four");
	remove(".five");
	remove(".six");
	remove(".seven");
	remove(".eight");
	remove(".nine");
	function add(select,val){
	$(select).click(function(){
	totaltwo+=val;
	$(".display").html('<b>'+totaltwo+'</b>');
	}); }
	add(".one",1);
	add(".two",2);
	add(".three",3);
	add(".four",4);
	add(".five",5);
	add(".six",6);
	add(".seven",7);
	add(".eight",8);
	add(".nine",9);
	
	
    $(".equal").off("click");
	
	$(".equal").click(function(){
var a=parseInt(total);
var b=parseInt(totaltwo);
var c=a/b;

$(".display").html('<b>'+c+'</b>');
setTimeout(function(){ location.reload();
 }, 1000);

});


});

$(".equal").click(function(){
var a=parseInt(total);
var b=parseInt(totaltwo);
var c=a+b;

$(".display").html('<b>'+c+'</b>');
setTimeout(function(){ location.reload();
 }, 1000);

});




});