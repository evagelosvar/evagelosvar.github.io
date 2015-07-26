function init()
{
var array = [".vba", ".png", ".PNG",".xml",".css",".js",".ini"];
var array = [".vba", ".png", ".PNG",".xml",".css",".js",".ini",".jpg",".JPG"];
//".jpg",".JPG"
var title="Library";
$(array).each(function (i) {
$("tr td:contains("+this+")").parent().remove();

});
	
//remove header-subheader and files
$('tr th:contains("html")').parent().nextUntil('tr.header').remove();
$('tr th:contains("html")').parent().remove();

//remove subheader and files be carefull maybe is wrong
//$('tr.subheader th:contains("QUIZ")').parent().nextUntil('tr.header').remove();
//$('tr.subheader th:contains("QUIZ")').parent().remove();

//Correct this
$('tr[class*="subheader"] th:contains("athina")').parent().nextUntil('tr.header').remove();
$('tr[class*="subheader"] th:contains("athina")').parent().remove();
$('tr:contains("athina")').remove();

//Correct this because hides the subheader3
//$('tr[class*="subheader"] th:contains(".files")').parent().nextUntil('tr.header').remove();
//$('tr[class*="subheader"] th:contains(".files")').parent().remove();
//$('tr:contains(".files")').remove();



//$("tr.subheader th:contains("+$.trim($('tr.bheader').text())+")").each(function () {
	

//Correct the subheaders removing -> to all subfolders
//*

//*//

//$('tr th:contains("html")').parent().remove();

$( "h1" ).text( title);
$( "h1" ).prepend("<img src='"+ "logo.jpg'" + "height='50' width='40'>");


//css for header
$( "tr.header th:first-child" ).css({"cursor":"pointer","font-size": "20px","text-align": "left","font-weight": "normal","font-family": "'Verdana', Geneva, sans-serif","font-family": "Calibri"});
$( "tr.header th:first-child" ).prepend("<div id='sign'></div>");
//$('#s').text("lll");


//css for subheader
$( "tr[class*='subheader']  th:first-child" ).css({ "padding-left": "25px","color":"Brown" });
$( "tr[class*='subheader'] th:first-child" ).css({"font-size": "18px","text-align": "left","font-weight": "normal","font-family": "'Verdana', Geneva, sans-serif","font-family": "Calibri"});
$( "tr[class*='subheader'] th:first-child" ).prepend("<b>*</b>");
//////////////$( "tr.subheader th:first-child" ).before( "<span>Test</span>" );	


//Correct the suheader removing ->
$('tr[class*="subheader"] th:contains("->")').each(function () {
	arr = $(this).text().split('->');
	count=arr.length;
	//alert($(this).text());
	
	if (count==2){
	//$(this).text("+ <span class='sign'></span>"+arr[count-1]);
	$(this).html("<span class='sign'></span>"+arr[count-1])
	}
	if (count==3){
	//$(this).text("<span class='sign'></span>"+arr[count-1]);
	$(this).html("<span class='sign'></span>"+arr[count-1])
	}
	
	
	
	
	$(this).css({"color": "gray","text-align": "left","font-weight": "normal","font-family": "'Verdana', Geneva, sans-serif","font-family": "Calibri"});
	//$(this).css({"font-size": 20-(count-1)*3,"padding-left": 15+(count-1)*15});
	$(this).css({"font-size": 20+(count-2)*15,"padding-left":30+(count-2)*50});
	$(this).css({"font-size": 20,"padding-left":30+(count-2)*50});
	});

	$('tr.subheader2 th').css({"color": "red","font-size": 30});
//hide the rows
$('tr[class^="free"]').hide();
$('tr[class^="subheader"]').hide();
		//$('tr.subheader').hide();
$('tr.hidden').hide();
$('div.splash').hide();
}
///////////////////////////////////////////////////////////////////////
 
function link()
{
var data=window.location.search;
data=data.toString();
data = data.substring(1, data.length);
//data = decodeURI(data);
data=decodeURIComponent(data);
//alert(data);
//data="ΜΑΘΗ";

if (data.length!=0)
{
$('tr.header:contains('+data+')').nextUntil('tr.header').slideToggle(100);	
//alert(data.length);
//alert("4111");
$('tr.header:contains('+data+')').nextUntil('tr.header').each(function() {

$trline = $(this);
				
					if ($trline .attr('class') == "slideshow hidden") 	
					{
/*
					//alert($trline.attr('class'));
					//var strNewString=$trline.html().replace(oldWordRegEx, 'img')
					//$trline.html(strNewString);
					var $images=$trline.find('div.slideshow img');
					$images.each(function (i) {
					var href = 	 $(this).attr("src");
					href=href.substring(0,href.length-1)
					//alert(href);
					$(this).attr("src",href);
					//alert("LL");
					});
*/
					}

});
 
}
}
 
$( document ).ready(function() {

/////////////////////////////////
//alert("pp");
//////////////////////////

init();


									$('tr th').each(function() {
										$href = $("a", this).attr("href");
										if (!$(this).text().match(/./i)) 
										{
										$(this).parent().nextUntil('tr.header').remove();
										$(this).parent().remove();
										}
									});


									//create menu buttons with image,link and click event
									$('div.menu').append("<div id='test'></div>");
									$('div.menu div').addClass('m');
									//$('#test').css({"background-image": "url('expand.png')"});
									//$('#test').append("<a href='http://www.w3schools.com'></a>");
	
	
	$('#test').click(function(){
	// $(this).toggleClass('expand').nextUntil('tr.header').slideToggle(100);
	$('tr.header').toggleClass('expand');
	$('tr.hidden').toggle();
	$('tr[class*="subheader"]').toggle();
	//alert("wwLL");
	
	var $me=$('tr.header, tr.subheader1,tr.subheader2');
	//var $me=$('tr.header th');
	return;
	$me.each(function (i) {
		//alert(i);
	//alert($me.length);
	//alert($(this).text());
	//$('#test').text($('#test').text()+$(this).text())
	
	$(this).css({"position":"absolute","left":"50px","color": "blue","text-align": "left","font-weight": "normal"});
	$(this).css({"top":+250+i*20});
	});
	
	
	//$(this).text("Hide Books");
	});
								

	

//////////////////////////////////////////////////////////////////////////

$('.hidden').hover(function(){
		$("div.images").remove();
		var folder=$( this ).parent().find('th').text();				
//ok//
////////////$( "<div class='images'>"+folder+"/"+$(this).text().trim()+".jpg"+ "<img src='"+folder+"/"+ $(this).text().trim()+".jpg"+"' alt='Smiley face' height='142' width='142'></div>" ).appendTo( $( this ) );
//ok///			
});

$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  });





$('div.slideshow img').hover(
function(){
	 var currentPosition = $(this).offset();
	$('div.splash').html(currentPosition.top);
	$('div.splash').html(currentPosition.top);
	$('div.splash').css({border:"1px solid black", position: "absolute", "top": currentPosition.top-450,"left": currentPosition.left+250 });
	$('div.splash').css({border:"1px solid black", position: "absolute", "top": currentPosition.top-450,"left": 250 });
   	$('div.splash').show();
	
	var href = $(this).attr("src");
	var mybaseURL = window.location.href;
	
	var dir=mybaseURL.substring( 0, mybaseURL.lastIndexOf( "/" ) + 1)
	var finalurl=dir+href;
	$('div.splash').css({"background-image": "url('"+  finalurl+"')"});
	return;
	
	
	/* //OPEN IMAGE IN BROWSER TAB
	var href = $(this).attr("src");
	var mybaseURL = window.location.href;
	//alert(mybaseURL);
	//alert(href);
	var dir=mybaseURL.substring( 0, mybaseURL.lastIndexOf( "/" ) + 1)
	//alert(dir);
	var finalurl=dir+href;
	//window.location.href =finalurl;					
	window.open(  finalurl,  '_blank' );
	*/
	 }, function() {
    $('div.splash').hide();
	
	});
/////////////////////////////////////////////////////////////////////////////////////////
//$( "div:first" ).nextAll().addClass( "after" );
	


$('tr.subheader2').click(function(){	
	var trsubheader=$(this);
	trsubheader.toggleClass('expandsub2');
	

	var x0=trsubheader.nextUntil('tr.header').length;
	var x1=trsubheader.nextUntil('tr.subheader1').length;
	var x2=trsubheader.nextUntil('tr.subheader2').length;
	//alert(x1);
	//alert(x2);
	if (x0<x1  &  x0<x2)
	{
		trsubheader.nextUntil('tr.header').slideToggle(100);	
	}
	else if (x1<x0  &  x1<x2)
	{
		trsubheader.nextUntil('tr.subheader1').slideToggle(100);
	}
	else 
	{
		trsubheader.nextUntil('tr.subheader2').slideToggle(100);
	}
	
	//return;
	});

$('tr.subheader1').click(function(){

	
	//alert("s");
	var trsubheader=$(this);
	trsubheader.toggleClass('expandsub1');
	//trsubheader.addClass('expanda');
	var x0=trsubheader.nextUntil('tr.header').length;
	var x1=trsubheader.nextUntil('tr.subheader1').length;
	//alert(x1);
	//alert(x2);
	if (x0<x1)
	{
		//trsubheader.nextUntil('tr.header').slideToggle(100);	
		trsubheader.nextUntil('tr.header').each(function() {
			//alert("000");
			$trline = $(this);
			if($trline.is('tr.subheader2') == true ) 
								{
									$trline.toggle();
								}
			if ( $trline.is('tr.hidden') == true &  $trline.is(':visible')==true)
								{
								//alert("s");
								$trline.hide();
								}
			
			
				});
	}
	else
	{
		trsubheader.nextUntil('tr.subheader1').each(function() {
		//alert("111");
		//trsubheader.nextUntil('tr.subheader1').slideToggle(100);
		$trline = $(this);
			if($trline.is('tr.subheader2') == true ) 
								{
									$trline.toggle();
								}
				if ( $trline.is('tr.hidden') == true &  $trline.is(':visible')==true)
								{
								//alert("s");
								$trline.hide();
								}				
		});						
	}
	
	
	//return;
	});
	
$('tr.header').click(
function(){
			
			var oldWordRegEx = new RegExp('img','g');
			var trheader=$(this);
			trheader.toggleClass('expand');
				//trheader.toggleClass('expand').nextUntil('tr.header').slideToggle(100);	
				trheader.nextUntil('tr.header').each(function() {
				$trline = $(this);
				
					if ($trline .attr('class') == "slideshow hidden") 	
					{
					//alert($trline.attr('class'));
					//var strNewString=$trline.html().replace(oldWordRegEx, 'img')
					//$trline.html(strNewString);
					var $images=$trline.find('div.slideshow img');
					$images.each(function (i) {
					var href = 	 $(this).attr("src");
					href=href.substring(0,href.length-1)
					//alert(href);
					$(this).attr("src",href);
					});

					}
					
							if($trline.is('tr.subheader1') == true ) 
								{
									$trline.toggle();
								}
							
							if($trline.is('tr.subheader2') == true &  $trline.is(':visible')==true ) 
								{
									$trline.toggle();
								}
				
							if ( $trline.is('tr.hidden') == true &  $trline.is(':visible')==true)
								{
								//alert("s");
								$trline.hide();
								}
	
				
				});
				
				
				
				
return;
	
	
/////////////////////
//////////////
////////////////////	
	
	
	
	var trheader=$(this);
	var arr ;
	
	
	
//hides ALL hidden tr
$trheader = $(this);
$trheader.nextUntil('tr.header').each(function() {
								//$('tr[class*="subheader"]').nextUntil('tr[class*="subheader"]').each(function() {
								//alert($(this).text());
								$trline = $(this);
								if ($trline.is('tr.hidden') == true) 
								{
								$trline.toggle();
								//$hidden.hide();
								}
								else if($trline.is('tr.subheader2') == true) 
								{
									$trline.toggle();
								}
								else if($trline.is('tr.subheader3') == true) 
								{
									$trline.toggle();
								}
								else if($trline.is('tr.subheader4') == true) 
								{
									$trline.toggle();
								}
								else if($trline.is('tr.subheader5') == true) 
								{
									$trline.toggle();
								}
								else
								{
								}
								});
								/*
								//unhide tr ubder the main header		
								$(this).nextUntil('tr[class^="xsubheader"]').each(function() {
								//alert($(this).text());
								$hidden = $(this);
								if ($hidden.is('tr.hidden') == true) {
								//$hidden.toggle();
								//$hidden.show();
								}
								else
								{
									//return false;
								}
	
									});
		
		
		
								$n = $(this).next();
								while($n.is('tr.hidden') == true) {
								//alert("wwLL");
								  //$n.toggle();
									$n = $n.next();
								}
			
			*/
			
											//$('tr.hidden').hide();
								});

								
								
//////////////////////////////

$('xtr[class*="subheader"]').click(function(){
			/////////here you load the images
			

			
var myclickedSubheader="tr."+$(this).attr('class');
num=parseInt(myclickedSubheader[myclickedSubheader.length-1]);			
//alert(num);	
	
			
var sbh=$(this).attr('class');
$n = $(this).next();
			
for (i = 0; i < 199; i++) 
{ 
myclass="tr."+$n.attr('class');
nextnum=parseInt(myclass[myclass.length-1]);

     if (nextnum==num)
	 {
		 break;
	 }
	  else if(nextnum<num)
	 {
		 break;
	 }
	 else if($n.attr('class')=="header")
	 {
		 break;
	 }
	  else if(num==2)
	 {
		if($n.attr('class')=="hidden"  ||  $n.attr('class')=="slideshow hidden")
			{
			$n.toggle();
			}
		
	 }
	 else if($n.attr('class')=="hidden")
	 {
		
	 }
	 else if($n.attr('class')=="slideshow hidden")
	 {
		 
	 }
	 else
	 {
		 $n.toggle();
	 }
	 
	 $n = $n.next();
	 
	 //alert($n.attr('class'));
}
			
			
	return;		
			
	
});							
								
								
								
								
								
								
								
								
								
								
///////////////////////////////////////////								
								
								
$('xtr[class*="subheader"]').click(function(){


//here you load the images
			//var oldWordRegEx = new RegExp("src",'g');
			//alert($(this).html());
			//alert($(this).next('tr.slideshow').html());
			//alert($(this).nextUntil('tr.header').html());
			//var strNewString = $(this).parent().html().replace(oldWordRegEx, 'src');
			//$(this).parent().html(strNewString);









//$(this).prepend("<span id='sign'>dd</span");
var counta=0;


//return;

$trheader = $(this);

//alert($trheader.attr('class'));
var myclickedSubheader="tr."+$trheader.attr('class');

//alert(myclickedSubheader[myclickedSubheader.length-1]);
num=myclickedSubheader[myclickedSubheader.length-1];
nextSubheader="tr.subheader"+String(parseInt(num)+1);
//alert(nextSubheader);
//$trheader.nextUntil('tr.subheader1').each(function() {
$trheader.nextUntil(myclickedSubheader).each(function() {							
								
								$trline = $(this);
									//$trline.toggle();							
								if ($trline.is(nextSubheader) == true )
								{
								counta=counta+1;			
								$trline.toggle();
								}
								else
								{
								//counta==counta+1;
								//alert(counta);	
								}
								//alert(counta);
								
});	
			
			
			 
			if (counta>0)
			{
				return;
			}
			else
			{
			//alert("LL");
			//alert(counta);
			}
			
			//alert("LL");
			//$(this).next().toggle();
			
			$n = $(this).next();
			while($n.is('tr.hidden') == true) {
			//alert("wwLL");
			$n.toggle();
			$n = $n.next();
			}
			
	
});




//////////////////////////////////////////////////////////////////////////////////////////
  
	
/**/
//$("a:first").replaceWith("Hello world!");
/*
var array = ['John', 'Martin'];

$(array).each(function () {

    $("div:contains(" + this + ")").css("text-decoration", "underline");

});
*/
//google view

  //alert( $( this ).text().length );
  //$( this ).text($( this ).text()+"LLL");
  //ok//var res = $( this ).text().substring(0, $( this ).text().length-5);
//$( this ).text(res);
//$( "a:contains('doc')" ).css( "text-decoration", "underline" );
//alert(res);
$( "a:contains('.doc'), a:contains('.ppt'),a:contains('.xls')" ).each(function( index ) {
//alert($( this ).attr('href'));
var durl=$( this ).attr('href');
var myURL = window.location.href;

//alert(window.location.hostname); 
var myDir = "https://docs.google.com/gview?url="+myURL.substring( 0, myURL.lastIndexOf( "/" ) + 1);	 
var vurl=myDir+durl;

$( this ).parent().append("<span class='vurl'><a href='"+vurl+"' target='_blank'>[view-online]</a> </span>");

});
$('.vurl').css({border:"0px solid black", position: "absolute", left: "60%" });
	

$('div.menu').append("<div id='divslider'></div>");
//$('div.menu div').addClass('img');
$('#divslider').addClass('img');
$('#divslider').hide();

/*
$('td:contains(".jpg")').hover(function(){
	$('#divslider').show();
    var currentPosition = $(this).offset();
	$('#divslider').html(currentPosition.top);
	$('#divslider').css({border:"1px solid black", position: "absolute", "top": currentPosition.top-200,"left": currentPosition.left+250 });
   $('#divslider').css({border:"1px solid black", position: "absolute", "top": 100,"left": 650 });

   var imgurl=$( this ).children('a').attr('href');
	//$('#divslider').css({"background-image": "url('expand.jpg')"});
	$('#divslider').css({"background-image": "url('"+  imgurl+"')"});
	}
	, 
	function() {
    $('#divslider').hide();
  });
*/



var pos=[];
var divlength=$('div.buttonnext');
for (i = 0; i <  divlength.length; i++) 
{ 
pos[i]=0;
}



$('.buttonnext').click(function(){

var index = $( "div.buttonnext" ).index( this );
//alert(index);
pos[index]=pos[index]-200;
$( this ).next().animate({left: pos[index]});

});
$('.buttonprev').click(function(){

var index = $( "div.buttonprev" ).index( this );
pos[index]=pos[index]+200;
$( this ).next().next().animate({left: pos[index]});

});


$('div.slideshow video').click(function(){

var href = $(this).find('source').attr("src");//video has not src attribute
//alert(href);
	var mybaseURL = window.location.href;
	//alert(mybaseURL);
	
	var dir=mybaseURL.substring( 0, mybaseURL.lastIndexOf( "/" ) + 1)
	//alert(dir);
	var finalurl=dir+href;
	//window.location.href =finalurl;
						
	window.open(  finalurl,  '_blank' );
return;






var indexvid = $( ".slideshow video" ).index( this );
pos[index]=pos[index]+200;
$( this ).next().next().animate({left: pos[index]});

});




link();

//end of document ready
});