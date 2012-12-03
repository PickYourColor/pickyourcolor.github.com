



$(document).ready(function() {
	
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}


function getHexRGBColor(color)
{
  color = color.replace(/\s/g,"");
  var aRGB = color.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);

  if(aRGB)
  {
    color = '';
    for (var i=1;  i<=3; i++) color += Math.round((aRGB[i][aRGB[i].length-1]=="%"?2.55:1)*parseInt(aRGB[i])).toString(16).replace(/^(.)$/,'0$1');
  }
  else color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, '$1$1$2$2$3$3');
  
  return  color;
}
	
/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSV representation
 */
function rgbToHsv(r, g, b){
    r = r/255, g = g/255, b = b/255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if(max == min){
        h = 0; // achromatic
    }else{
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, v];
}

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The RGB representation
 */
function hsvToRgb(h, s, v){
    var r, g, b;

    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch(i % 6){
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return [r * 255, g * 255, b * 255];
}
	

$(".colorbox").click(function () {
  var color = $(this).css("background-color");
  $("#marker1").css("background-color",color) ;
  $("#marker2").css("background-color",color) ;
  $("#marker3").css("background-color",color) ;
  $("#ramka").css("background-color",color) ;
  //alert(getHexRGBColor(color));
  //alert(hexToR(getHexRGBColor(color)));
  //alert(rgbToHsv(hexToR(getHexRGBColor(color)),hexToG(getHexRGBColor(color)),hexToB(getHexRGBColor(color))));
  
window.addEventListener('load', function () {
  // Get the canvas element.
  var elem = document.getElementById('myCanvas');
  if (!elem || !elem.getContext) {
    return;
  }

  // Get the canvas 2d context.
  var context = elem.getContext('2d');
  if (!context || !context.getImageData || !context.putImageData || !context.drawImage) {
    return;
  }

  // Create a new image.
  var img = new Image();

  // Once it's loaded draw the image on canvas and invert the colors.
  img.addEventListener('load', function () {
    var x = 0, y = 0;

    // Draw the image on canvas.
    context.drawImage(this, x, y);

    // Get the pixels.
    var imgd = context.getImageData(x, y, this.width, this.height);
    var pix = imgd.data;

    // Loop over each pixel and invert the color.
    for (var i = 0, n = pix.length; i < n; i += 4) {
      pix[i  ] = pix[i ]; // red
      pix[i+1] = 255 - pix[i+1]; // green
      pix[i+2] = 255 - pix[i+2]; // blue
      // i+3 is alpha (the fourth element)
    }

    // Draw the ImageData object.
    context.putImageData(imgd, x, y);
  }, false);

  img.src = 'sss.png';
}, false);

  
  
  
  
});

    // Консоль
    var console = $("#console");

    // Инфа о выбранных файлах
    var countInfo = $("#info-count");
    var sizeInfo = $("#info-size");

    // Стандарный input для файлов
    var fileInput = $('#file-field');
    
    // ul-список, содержащий миниатюрки выбранных файлов
    var imgList = $('div#img-list');
    
    // Контейнер, куда можно помещать файлы методом drag and drop
    var dropBox = $('#img-container');

    // Счетчик всех выбранных файлов и их размера
    var imgCount = 0;
    var imgSize = 0;
    
    
    ////////////////////////////////////////////////////////////////////////////


    // Вывод в консоль
    function log(str) {
        $('<p/>').html(str).prependTo(console);
    }
    //boundx = $('#ferret').width();
    //boundy = $('#ferret').height();
    // Вывод инфы о выбранных
    function updateInfo() {
        countInfo.text( (imgCount == 0) ? 'Изображений не выбрано' : ('Изображений выбрано: '+imgCount));
        sizeInfo.text(Math.round(imgSize / 1024));
        
    }

    // Обновление progress bar'а
    function updateProgress(bar, value) {
        var width = bar.width();
        var bgrValue = -width + (value * (width / 100));
        bar.attr('rel', value).css('background-position', bgrValue+'px center').text(value+'%');
    }



    // Отображение выбраных файлов и создание миниатюр
    function displayFiles(files) {
        var imageType = /image.*/;
        var num = 0;
        
        $.each(files, function(i, file) {
            
            // Отсеиваем не картинки
            if (!file.type.match(imageType)) {
                log('Файл отсеян: `'+file.name+'` (тип '+file.type+')');
                return true;
            }
            
            num++;
            
            imgList.empty();
            
            // Создаем элемент li и помещаем в него название, миниатюру и progress bar,
            // а также создаем ему свойство file, куда помещаем объект File (при загрузке понадобится)
            
           //$('<div/>').text(file.name).appendTo(li);
            var img = $('<img/>').appendTo(imgList);
            //$('<div/>').addClass('progress').attr('rel', '0').text('0%').appendTo(li);
            imgList.get(0).file = file;
			
            // Создаем объект FileReader и по завершении чтения файла, отображаем миниатюру и обновляем
            // инфу обо всех файлах
            var reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {                	 
                	 //$('#ferret').imgAreaSelect({$.cancelSelection() });
                	aImg.attr('src', e.target.result);
                    //aImg.attr('style','background: url(' + e.target.result+') no-repeat; width: 400px; height: 400px;');
                    //aImg.attr('width', '250');
                    aImg.attr('id', 'ferret');                    
                    log('Картинка добавлена: `'+file.name + '` (' +Math.round(file.size / 1024) + ' Кб)');
                    imgCount++;
                    imgSize += file.size;
                    
                   

					         updateInfo();
                  $('#preview').attr('src', e.target.result);
                  $('#ferret').Jcrop({
                    onChange: updatePreview,
                    onSelect: updatePreview,
                    aspectRatio: 247/400
                  });
                };
                
            })(img);
                 
            reader.readAsDataURL(file);
            
        });
    }



    // Обработка события выбора файлов через стандартный input
    // (при вызове обработчика в свойстве files элемента input содержится объект FileList,
    //  содержащий выбранные файлы)
    fileInput.bind({
        change: function() {
            log(this.files.length+" файл(ов) выбрано через поле выбора");
            displayFiles(this.files);
        }
    });

    
    // Проверка поддержки File API в браузере
    if(window.FileReader == null) {
        log('Ваш браузер не поддерживает File API!');
    }
    
    
    
    

    
});



    jQuery(function($){

      
    });































