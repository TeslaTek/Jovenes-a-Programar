
function Reloj(){
// Set the date we're counting down to
var  tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate()+1);
tomorrow.setHours(0,0,0,0);

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = tomorrow - now;
    
    // Time calculations for  hours, minutes and seconds
  
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("CountDown").innerHTML = hours + " H "
    + minutes + " M " + seconds + " S  restantes";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("CountDown").innerHTML = "-- EXPIRED --";
    }
}, 1000);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.mathes('#busca')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

 if (document.addEventListener){
        window.addEventListener('load',banner(),false);
    } else {
        window.attachEvent('onload',banner());
    }

function banner(){
    switch( Math.floor((Math.random() * 10) + 1)) {
    case 1:
        document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/Banner900200.jpg')"; 
        break;
    case 2
         document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/BannerDollar.jpg')"; 
        break:
    case 3
         document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/BannerMoney.jpg')"; 
        break;
    case 4
        document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/BannerOrange.jpg')"; 
        break;
    case 5
        document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/CityBanner.jpg')"; 
        break;
    case 6
        document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/illusion.jpg')"; 
        break;
    case 7
        document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/OfertaBanner.jpg')"; 
        break;
    case 8
        document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/passage.jpg')"; 
        break;
    case 9
        document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/ArtBanner.jpg')"; 
        break;
    case 10
        document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/TechnoBanner.jpg')"; 
        break;   
    default:
        document.getElementById("Banner").style.backgroundImage = "url('images/RandomBanner/ArtBanner.jpg')"; 
        break;
} 
