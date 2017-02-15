var welcome = "Välkommen!";
var news = "Nyheter!";
$('#navbar li').click(function() {
    $(this).addClass('active').siblings('li').removeClass('active');
});