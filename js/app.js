$(function() {

jQuery.support.cors = true;//For IE 8+

var loadImages = function(searchInput, e){
	if (e && typeof e != 'undefined') {
		e.preventDefault();
	}

	//Очищаем предыдущие результаты поиска
	//$('.item').remove();

	//var $searchInput = $('#searchId').val();
	
//Добавляем ключевое слово поиска к URL запроса and KEY
	var APIkey = '2968420-d00a0636cd5a05d99ce5547d4';
	var urlik = "https://pixabay.com/api/?key="+APIkey+"&q="+ searchInput + "&per_page=12";
  

	$.ajax({
		url : urlik,
		dataType : 'jsonp'
	}).success(
		function(data){
			$('.isotope').remove(); //очищаем от картинок, которые были загружены дефолтно или в предыдущем поиске
			$('.isotope-contaner').append($('<div class="isotope">'));

			var container = $('.isotope');
			var dataset = data.hits;
			for (i=0; i<dataset.length; i++) {
				var url = dataset[i].webformatURL;
				var title = dataset[i].tags;

				var imageContainer = $('<div></div>');
				imageContainer.addClass('item');
				var subItemsContainer = $('<div></div>');
				subItemsContainer.addClass('item-image-wrapper');
				imageContainer.append(subItemsContainer);

				var image = $('<img/>');
				image.attr('src', url);
				image.attr('alt', title);
				subItemsContainer.html('<a href="'+url+'" title="'+title+'">'+title+"</a>");

				subItemsContainer.append(image);
				container.append(imageContainer);
			}

		// инициализация Isotope после того как все картинки были загружены (imagesLoaded)
			var images = container.find('img');
			var imagesToLoad = images.length;

			(function (images, container, jQuery) {
				images.load(function () {
					imagesToLoad--;
					if (imagesToLoad <= 0) {
						container.isotope({
							masonry: {  }
						});

						$(window).smartresize(function(){
							container.isotope({
								masonry: {

								}
							});
						});
					}
				});
			})(images, container, $);

		});//ajax
};//loadImage

//Рэндомный набор слов для картинок первой загрузки страницы
var randomCategories = [
		'cat',
		'Thailand+travelling',
		'sport+wealth',
		'wellness+SPA',
		'universe+cosmos'
	];


//Событие при нажатии кнопки Поиск или Enter (в обеих случаях срабатывает событие click)
	$('#searchPictureForm').submit(function (e) {
		loadImages($('#searchId').val(), e);
	});

//Рендомно определяем категорию картинок, которая отобразится при первой загрузке страницы
var randomIndex = Math.round(randomCategories.length * Math.random());
	randomIndex = randomIndex
		 ? randomIndex
		 : 1;

	var initializeCategory = randomCategories[randomIndex - 1];

	loadImages(initializeCategory);

});;
$(function() {
    $('.jcarousel').jcarousel({
        // Конфигурация инициализации карусели
        wrap: 'circular'
    });

    $('.leftArrow').jcarouselControl({ target: '-=1' });
    $('.rightArrow').jcarouselControl({ target: '+=1' });

//Подключен дополнительный плагин jQuery Touchwipe для перелистывания на тачскрине
 var $step1 = $('#step1');//Переменные для каждого блока со слайдером
 var $step2 = $('#step2');
 var $step3 = $('#step3');

  $step1.touchwipe({
    wipeLeft: function(event, direction, distance, duration, fingerCount) {   
      $step1.jcarousel('scroll', '+=1');
    },

    wipeRight: function(event, direction, distance, duration, fingerCount) {
      $step1.jcarousel('scroll', '-=1');
    }
  });

  $step2.touchwipe({
    wipeLeft: function(event, direction, distance, duration, fingerCount) {   
      $step2.jcarousel('scroll', '+=1');
    },
    wipeRight: function(event, direction, distance, duration, fingerCount) {
      $step2.jcarousel('scroll', '-=1');
    }
  });

  $step3.touchwipe({
    wipeLeft: function(event, direction, distance, duration, fingerCount) {   
      $step3.jcarousel('scroll', '+=1');
    },
    wipeRight: function(event, direction, distance, duration, fingerCount) {
      $step3.jcarousel('scroll', '-=1');
    }
  });


});























// window.onload = function(){

     

//     var block = window.document.getElementById("test"), // элемент

//         anim,                                   // таймаут

//         start,                                  // время старта

//         now,                                        // текущее время

//         duration = 1000,                            // продолжительность

//         from = 0,                                   // стартовая позиция

//         to = window.innerWidth/2,                   // финишная позиция

//         progress = 0,                               // прогресс анимации

//         x;                                      // позиция в текущий момент времени

     

//     // закон приращения аргумента (easing)

//     function delta(param){

//         return param;

//     };

     

//     // рендер

//     function render(){

//         now = new Date().getTime();

//         progress = (now-start)/duration;

//         x = (to - from)*delta(progress) + from;

         

//         test.style.left = x+"px";

         

//         // если не конец выполняем анимацию еще

//         if (progress < 1) anim = setTimeout(arguments.callee, 0)

//             // иначе заканчиваем анимацию

//             else

//             {

//                 clearTimeout(anim);

//                 progress = 0;

//             };

//     };

     

//     window.onclick = function(){

//         start = new Date().getTime();

//         render();

//     };

 

// };
