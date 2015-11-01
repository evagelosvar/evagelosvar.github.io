

 //alert("OK");
  
//$('tr.header' th).append("<div id='test'>ggg</div>");
$( document ).ready(function() {
	
	
	
	
/*
var regex = new RegExp("1047*"); // expression here

var regex = new RegExp("\.*1047"); 
//^(?!hede).*$
$("tr.header th").filter(function () {
	//alert(regex.test($(this).text()));
	//alert($(this).text());
    return regex.test($(this).text()); 
}).css( "text-decoration", "underline" );;
*/	

$('tr').hide();

//alert("pp");

//work on that
$('tr th').each(function() {
    $href = $("a", this).attr("href");
    if (!$(this).text().match(/./i)) 
	{
	$(this).parent().nextUntil('tr.header').remove();
	$(this).parent().remove();
	}
});

$('tr').show();	



//hide from rows image files

$('tr td:contains(".vbs")').parent().remove();
$('tr td:contains(".png")').parent().remove();
$('tr td:contains(".xml")').parent().remove();
$('tr td:contains(".jpg")').parent().remove();
$('tr td:contains(".css")').parent().remove();
$('tr td:contains(".js")').parent().remove();

//remove header-subheader and files
$('tr th:contains("html")').parent().nextUntil('tr.header').remove();
$('tr th:contains("html")').parent().remove();



	
	
//at.each(function( index ) {
  //alert( $( this ).text().length );
  //$( this ).text($( this ).text()+"LLL");
 //alert( this ).text());


//});
	
	
	
	
	
	
$( "h1" ).text("Orthodox Christian Library");
$( "h1" ).prepend("<img src='"+ "logo.jpg'" + "height='50' width='40'>");

$('tr.subheader').hide();
$('tr.hidden').hide();


//css for header
$( "tr.header th:first-child" ).css({"cursor":"pointer","font-size": "20px","text-align": "left","font-weight": "normal","font-family": "'Verdana', Geneva, sans-serif","font-family": "Calibri"});
$( "tr.header th:first-child" ).prepend("<div id='sign'></div>");
//$('#s').text("lll");


//css for subheader
$( "tr.subheader th:first-child" ).css({ "padding-left": "25px","color":"Brown" });
$( "tr.subheader th:first-child" ).css({"font-size": "18px","text-align": "left","font-weight": "normal","font-family": "'Verdana', Geneva, sans-serif","font-family": "Calibri"});

$( "tr.subheader th:first-child" ).prepend("<b>*</b>");
//////////////$( "tr.subheader th:first-child" ).before( "<span>Test</span>" );
	 
	 





//create menu buttons with image,link and click event
$('div.menu').append("<div id='test'></div>");
$('div.menu div').addClass('m');
//$('#test').css({"background-image": "url('expand.png')"});
//$('#test').append("<a href='http://www.w3schools.com'></a>");
$('#test').click(function(){
	// $(this).toggleClass('expand').nextUntil('tr.header').slideToggle(100);
		$('tr.header').toggleClass('expand');
		$('.hidden').toggle();
		$('.subheader').toggle();
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


/////////////////////////////////////////////////////////////////////////////////////////
//$( "div:first" ).nextAll().addClass( "after" );
	
$('tr.header').click(function(){
    $(this).toggleClass('expand').nextUntil('tr.header').slideToggle(100);	
	//$(this).toggleClass('expand').nextUntil('tr.header').slideToggle( "slow" );
	 //$(this).toggleClass('table.header').nextUntil('table.header').slideToggle(100);	
	 // $(this).nextUntil('tr.header').slideToggle(100);
	// $( "#term-1" ).nextUntil( term3, "dd" ).css( "color", "green" );
});
//////////////////////////////////////////////////////////////////////////////////////////
  
	
/**/
//$("a:first").replaceWith("Hello world!");


//google view
$( "a:contains('.doc')" ).each(function( index ) {
  //alert( $( this ).text().length );
  //$( this ).text($( this ).text()+"LLL");
  //ok//var res = $( this ).text().substring(0, $( this ).text().length-5);
//$( this ).text(res);
//$( "a:contains('doc')" ).css( "text-decoration", "underline" );
//alert(res);

//alert($( this ).attr('href'));
var durl=$( this ).attr('href');
//alert(durl);
var vurl="https://docs.google.com/gview?url=https://5b6ce8acb0d4523cc450355d0457f5a628165d5d-www.googledrive.com/host/0B0MaJq6lSGTBUjVwQS11S3dVYjA/library%20of%20Orthodox%20fathers/"+durl;
//alert("<span id='v'><a href="+vurl+" target='_blank'>[view-online]</a> </span>");

$( this ).parent().append("<span id='v'><a href='"+vurl+"' target='_blank'>[view-online]</a> </span>");
//alert(vurl);
//$(this).attr('href',  " ");
//$( this ).attr('href');
//avurl"<a href="+vurl+">[view]</a>";

//alert($( this ).parent().get( 0 ).tagName);

//$( this ).parent().append("<span id='vurl'><a href="+vurl+">[view-online]</a> </span>"+"<span id='durl'><a href="+durl+">[download]</a> </span>");

});

	
//end of document ready
$('div.menu').append("<div id='divslider'></div>");
$('td').hover(function(){
    var currentPosition = $(this).offset();
	//$('#divslider').html(currentPosition.top);
	//$('#divslider').css({border:"1px solid black", position: "absolute", "top": currentPosition.top,"left": currentPosition.left+500 });
});


});