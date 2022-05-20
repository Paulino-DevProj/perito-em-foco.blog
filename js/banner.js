var banners = ["img/elon-musk2.jpg", "img/obs.jpg"];
var bannerAtual = 0;
function trocaBanner (){
	bannerAtual = (bannerAtual + 1) % 2;
	$('.titulo-principal').url=banners[bannerAtual];
}
setInterval(trocaBanner, 2000);