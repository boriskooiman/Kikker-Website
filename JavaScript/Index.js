/*https://codepen.io/zuraizm/pen/vGDHl*/
jQuery(document).ready(function ($) {

  Start();
  
  function Start(){
    setInterval(function () {
        //moveRight();
    }, 3000);

    setInterval(function(){
      Repeat();
    }, 15)
  }

  //USEFUL VARIABLES TO SET
  var milisecondsBetweenSlides = 5000;
  var slideDuration = 300;

  var time = 0;

  function Repeat(){
    time = time + 15;
    var loadBar = document.getElementById("loadBar");

    var scale = lerp(loadBar.getBoundingClientRect().width / loadBar.offsetWidth, time/(milisecondsBetweenSlides - 5), 0.4);
    var scaleString = "scale(" + (scale).toString() + ", 1)";
    
    $('#loadBar').css({ transform: scaleString });


    if(time - milisecondsBetweenSlides < 14 && time - milisecondsBetweenSlides > - 14){
      moveRight();
      time = 0;
    }
  }

  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, slideDuration, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, slideDuration, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
        time = 0; 
    });

    $('a.control_next').click(function () {
        moveRight();
        time = 0;
    });

    $('a.cuteSound').click(function () {
      window.scroll(0, document.documentElement.scrollHeight * 0.5)
      StartVideo();
    });
});    

function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}

//YOUTUBE EMBED

// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'cBkWhkAZ9ds',
          playerVars: {
            'playsinline': 1
          },
        });
      }

      function StartVideo(){
        player.playVideo();
      }