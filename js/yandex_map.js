ymaps.ready(init);

 var myMap;

function init(){

    myMap = new ymaps.Map("map", {
        center: [55.105011, 82.938773],
        zoom: 16,
        controls: []
    });

    myMap.behaviors.disable("scrollZoom");

    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });

    myMap.behaviors.disable("drag");

   var myPlacemark = new ymaps.Placemark([55.105011, 82.938773] , {
    balloonContent: 'г. Новосибирск,<br> ул. Фадеева, 84 к18'},
        { iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [40, 51],
          iconImageOffset: [-20, -47] });

    myMap.geoObjects.add(myPlacemark);

    // myPlacemark.balloon.open();


};
