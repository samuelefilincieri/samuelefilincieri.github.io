$(document).ready(function () {
   //Youtube
   $('#youtube-seeAll').click(function () {
      console.log('click');

      $('#youtube').toggleClass('youtube youtubeAll');

      $('#youtube-container').toggleClass('youtube-container youtube-containerAll');
      if($('#youtube').hasClass('youtube')){
        console.log('youtube');
        $("#youtube-seeAll").html("Guarda di più");
      } else{($('#youtube').hasClass('youtubeAll'))
        console.log('youtubeAll');
        $("#youtube-seeAll").html("Guarda di meno");
    }
   });

   $('#articoli-seeAll').click(function () {
      console.log('click');

      $('#articoli').toggleClass('articoli articoliAll');

      if($('#articoli').hasClass('articoli')){
        console.log('articoli');
        $("#articoli-seeAll").html("Guarda di più");
      } else{($('#articoli').hasClass('articoliAll'))
        console.log('articoliAll');
        $("#articoli-seeAll").html("Guarda di meno");
    }

      $('#articoli-container').toggleClass('articoli-container articoli-containerAll');
   });
});
/* MenuResp */
var btn = document.getElementById("btn");
var nav = document.getElementById("navbar");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");

btn.addEventListener("click", function () {
  if (nav.style.display == "block") {
    nav.style.display = "none";
    span1.classList.remove("span1-open");
    span2.classList.remove("span2-open");
    span3.classList.remove("span3-open");
  } else {
    nav.style.display = "block";
    span1.classList.add("span1-open");
    span2.classList.add("span2-open");
    span3.classList.add("span3-open");
  }
});





/* Go Articoli -> index.html */
$('#sviluppo-web').click(function(){
  window.location.href='./articoli/sviluppo-web/index.html';
  if($('#sviluppo-web').hasClass('articoli-card-disactive')){
    window.location.href='/';
  }
})