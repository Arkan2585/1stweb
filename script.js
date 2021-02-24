
/*var loading=document.getElementById("#preloader1");
//var loading=$("#preloader1");
function myfun()
{
	loading.style.display="none";
	
}*/

/*$(window).load(function() {
   $('#preloader1').fadeOut(5000);
	 
});*/

$(window).on('load', function() { 
 $('#preloader1').fadeOut(5000);
});
$("document").ready(function(){
	
	$(".Food_Container").hide();
	$(".Food_Container").show(1500);
	$(".Box").hide();
	$(".Box").fadeIn(7000);
	$("img").click(function(){
		var x=$(this).attr('src');
		if(x=="logo.jpg")
		{
			
		}
		else
		{
		//x=$(this).attr('src');
		window.location.href=x;
		}
	});
	$("#ORDER").click(function(){
		
		alert("This Button is not working Currently");
	});
	
	$(".items").click(function(){
			window.location.href="index.html";
	});
	$(".btn-primary").click(function(){
		alert("Reserved Successfully");	
	});
	$("#logo").dblclick(function()
	{
		window.location.href="index.html";
	});
	
	$("#Book_Now").click(function()
	{
		window.location.href="Book.html";
	});
	$("#NavButton").click(function(){
				$("#NavRight").toggle(600);
				//$("#NavRight").css("Color","white");
			$("#Search").toggle(600);
			$("Food_Container").css('position','relative');
			$("Food_Container").css('z-index','-1');
			//	$(".trend").css("src","Res_Trend\cafed.png")			
				//$("#NavButton").css("visibility","visible");
				//NavClick();
	});
$(".Box").click(function()
			{
				window.location.href="Restaurants_Cafe.html";			
			});
$("#NavButton1").click(function(){
				$("#NavRight").slideToggle(600);
				$("#Search").toggle(600);
			$("Food_Container").css("position","relative");
					$("Food_Container").css("z-index","1");
				//$("#NavRight").css("Color","white");
		//		$("Food_Container").css("z-index","99");
			$("Food_Container").css("position","relative");
					$("Food_Container").css("z-index","1");
	//			$(".trend").css("src","Res_Trend\cafed.png")			
				
				//$("#NavButton").css("visibility","visible");
				//NavClick();

});
$("#NavButton1").click(function(){
				$("#NavRight").toggle();
				
				//$("#NavButton").css("visibility","visible");
				//NavClick();

});
});
function NavClick()
{
//	document.getElementById("#Navigation li").css("backgroundColor" ,"rgba(0,0,0,0.5"));
}