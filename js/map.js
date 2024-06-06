ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.917264,41.482953],
            zoom: 6,
			controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([56.917264,47.882953], {
            hintContent: 'Собственный значок метки с контентом',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/map-icon.png',
            // Размеры метки.
            iconImageSize: [28, 36],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
		
		 ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='map-nav__wrapper'>" + "<div id='zoom-in' title='Результат перекодировки появится здесь...'><img src='images/plus.png'/></div>" + "<div id='zoom-out' title='Результат перекодировки появится здесь...'><img src='images/minus.png'/></div>" + "</div></div>", {
              build: function () {
                ZoomLayout.superclass.build.call(this);
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);
                $('#zoom-in').bind('click', this.zoomInCallback);
                $('#zoom-out').bind('click', this.zoomOutCallback);
              },
              clear: function () {
                $('#zoom-in').unbind('click', this.zoomInCallback);
                $('#zoom-out').unbind('click', this.zoomOutCallback);
                ZoomLayout.superclass.clear.call(this);
              },
              zoomIn: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, {
                  checkZoomRange: true
                });
              },
              zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {
                  checkZoomRange: true
                });
              }
            }),
              zoomControl = new ymaps.control.ZoomControl({
                options: {
                  layout: ZoomLayout
                }
              });

    myMap.geoObjects.add(myPlacemarkWithContent);	
	myMap.controls.add(zoomControl);		
});