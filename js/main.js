 (function ($) {

        $(function(){          
            $('#navbarExample').scrollspy();
            $('#marker1').drags();
            $('#marker2').drags();
            $('#marker3').drags();

            $(".b100").click(function () {
              var color = $(this).attr("name");
              var color3 = $(this).css("background-color");
              var color2="";
              $("#marker1").css("background-color",color3) ;
              $("#marker2").css("background-color",color3) ;
              $("#marker3").css("background-color",color3) ;
              $(".fon").css("background-color",color3);
              $(".b100").removeClass("active");
              $(this).toggleClass("active");
              for (var i = 0; i < wizHueColors.length; i++) {
                
                if ( wizHueColors[i][2].toString() == color) {                    
                    color2 = wizHueColors[i][0];
                };
              };
              
              document.getElementById('selname').innerHTML   =color2;
            });


            $('#all').toggleClass($.cookie("the_cookie"));            
            
            $("#per").click(function(e) {
                e.preventDefault();
                $(".ramka").toggleClass("w");
                
                if ($(".ramka").hasClass("w")) {
                    $('#per').text(" << Скрыть");    
                } else{
                    $('#per').text("Выбрать файл");    
                };
            });


            $("a.iz").click(function(e) {
                e.preventDefault();
                $(this).toggleClass('on');
                $('#all').toggleClass($(this).attr("name")); 
                var tempstr = "";
                for (var i = 0; i < wizHueColors.length; i++) {
                    if ($('#all').hasClass(wizHueColors[i][2])) {
                        tempstr = tempstr + '<li><a href="#'+wizHueColors[i][2]+'"><span style="color:#'+wizHueColors[i][2]+'">&#9679;</span> '+wizHueColors[i][0]+'</a></li>';
                    };            
                };
                document.getElementById('izbr').innerHTML = tempstr;      
                
                $.cookie("the_cookie", $('#all').attr("class"));

            })
        })
        


    })(window.jQuery)


      
    // Create variables (in this scope) to hold the API and image size
      var jcrop_api, boundx, boundy;
      
      $('#ferret').Jcrop({
        onChange: updatePreview,
        onSelect: updatePreview,
        aspectRatio: 247/400
      });

      function updatePreview(c)
      {
        if (parseInt(c.w) > 0)
        {
          var rx = 247 / c.w;
          var ry = 400 / c.h;

          $('#preview').css({
            width: Math.round(rx * boundx) + 'px',
            height: Math.round(ry * boundy) + 'px',
            marginLeft: '-' + Math.round(rx * c.x) + 'px',
            marginTop: '-' + Math.round(ry * c.y) + 'px'
          });
        }
      };
      
    ////////////////////////////////////////////////////////////////////////////

wizHueColors = [
    ["Кармин", "Carmine", "960018"],
    ["Кардинал", "Cardinal", "c41e3a"],
    ["Тициановый", "Titian", "d53e07"],
    ["Красный", "Red", "ff0000"],
    ["Алый", "Scarlet", "ff2400"],
    ["Карминово-красный", "Carmine red", "ff0033"],
    ["Киноварь", "Vermilion", "ff4d00"],
    ["Международный оранжевый", "International orange", "ff4f00"],
    ["Ализариновый", "Alizarin", "e32636"],
    ["Малиновый", "Crimson", "dc143c"],
    ["Каштановый", "Chestnut", "cd5c5c"],
    ["Темно-коралловый", "Dark coral", "cd5b45"],
    ["Морковный", "Carrot", "f36223"],
    ["Сиена жженая", "Burnt Siena", "e97451"],
    ["Коралловый", "Coral", "ff7f50"],
    ["Лососевый", "Salmon", "ff8c69"],
    ["Темно-лососевый", "Dark salmon", "e9967a"],
    ["Оранжево-розовый", "Pink-orange", "ff9966"],
    ["Розовый", "Pink", "ffc0cb"],
    ["Бледно-розовый", "Pale pink", "fadadd"],
    ["Розовато-лавандовый", "Lavender Blush", "fff0f5"],
    ["Бледно-песочный", "Pale Sandy Brown", "fdeaa8"],
    ["Циннвальдитовый", "Zinnwaldite", "ebc2af"],
    ["Бледно-коричневый", "Pale brown", "987654"],
    ["Темно-каштановый", "Dark chestnut", "986960"],
    ["Красновато-коричневый", "Russet", "755a57"],
    ["Кофейный", "Coffee", "442d25"],
    ["Бистр", "Bistre", "3d2b1f"],
    ["Темно-коричневый", "Dark brown", "654321"],
    ["Коричный", "Cinnamon", "7b3f00"],
    ["Сепия", "Sepia", "704214"],
    ["Умбра", "Umber", "734a12"],
    ["Кирпичный", "Brick", "884535"],
    ["Терракотовый", "Terracotta", "904d30"],
    ["Коричневый", "Brown", "964b00"],
    ["Краснобуро-оранжевый", "Tenne", "cd5700"],
    ["Выгоревший оранжевый", "Burnt Orange", "cc5500"],
    ["Шоколадный", "Chocolate", "d2691e"],
    ["Охра", "Ochre", "cc7722"],
    ["Медный", "Copper", "b87333"],
    ["Светло-коричневый", "Light brown", "cd853f"],
    ["Рыжий", "Reddish-brown", "d77d31"],
    ["Бронзовый", "Bronze", "cd7f32"],
    ["Темно-золотой", "Dark goldenrod", "b8860b"],
    ["Золотисто-березовый", "Goldenrod", "daa520"],
    ["Гуммигут", "Gamboge", "e49b0f"],
    ["Сиена", "Siena", "e28b00"],
    ["Темно-мандариновый", "Dark tangerine", "ea7500"],
    ["Тыквенный", "Pumpkin", "ff7518"],
    ["Мандариновый", "Tangerine", "ff8800"],
    ["Сигнальный оранжевый", "Safety Orange", "ff9900"],
    ["Оранжевый", "Orange", "ffa500"],
    ["Отборный желтый", "Selective yellow", "ffba00"],
    ["Янтарный", "Amber", "ffbf00"],
    ["Яндекса", "Yandex", "ffcc00"],
    ["Желтого школьного автобуса", "School bus yellow", "ffd800"],
    ["Золотой", "Gold", "ffd700"],
    ["Горчичный", "Mustard", "ffdb58"],
    ["Песочный", "Sandy brown", "fcdd76"],
    ["Кожи буйвола", "Buff", "f0dc82"],
    ["Старого льна", "Flax", "eedc82"],
    ["Оранжево-персиковый", "Peach orange", "ffcc99"],
    ["Белый навахо", "Navajo white", "ffdead"],
    ["Темно-персиковый", "Dark Peach", "ffdab9"],
    ["Желто-персиковый", "Peach yellow", "fadfad"],
    ["Пшеничный", "Wheat", "f5deb3"],
    ["Персиковый", "Peach", "ffe5b4"],
    ["Желто-розовый", "Yellow Pink", "ffe4b2"],
    ["Побега папайи", "Papaya whip", "ffefd5"],
    ["Морской пены", "Seashell", "fff5ee"],
    ["Белый", "White", "ffffff"],
    ["Бежевый", "Beige", "f5f5dc"],
    ["Льняной", "Linen", "faf0e6"],
    ["Бедра испуганной нимфы", "Scared nymph", "faeedd"],
    ["Сливочный", "Light cream", "f2e8c9"],
    ["Желто-коричневый", "Tan", "d2b48c"],
    ["Темный желто-коричневый", "Dark tan", "918151"],
    ["Хаки", "Khaki", "806b2a"],
    ["Темный хаки", "Dark Khaki", "4c3c18"],
    ["Оливковый", "Olive", "808000"],
    ["Нежно-оливковый", "Olive Drab", "6b8e23"],
    ["Латунный", "Brass", "b5a642"],
    ["Темно-грушевый", "Dark pear", "d8a903"],
    ["Старого золота", "Old Gold", "cfb53b"],
    ["Шафрановый", "Saffron", "f4c430"],
    ["Грушевый", "Pear", "efd334"],
    ["Желтый", "Yellow", "ffff00"],
    ["Лимонный", "Lemon", "fde910"],
    ["Детской неожиданности", "Child's surprise", "f7f21a"],
    ["Кукурузный", "Corn", "fbec5d"],
    ["Лимонно-кремовый", "Lemon Cream", "fffacd"],
    ["Слоновой кости", "Ivory", "fffddf"],
    ["Кремовый", "Cream", "f2ddc6"],
    ["Серого зеленого чая", "Gray Tea Green", "cadaba"],
    ["Болотный", "Swamp green", "acb78e"],
    ["Cпаржи", "Asparagus", "7ba05b"],
    ["Защитный", "Camouflage green", "78866b"],
    ["Темно-оливковый", "Dark Olive", "556832"],
    ["Зеленого папоротника", "Fern green", "4f7942"],
    ["Травяной", "Grass", "5da130"],
    ["Зеленый", "Green", "00ff00"],
    ["Ярко-зеленый", "Bright green", "66ff00"],
    ["Ядовито-зеленый", "Viridian", "7fff00"],
    ["Лаймовый", "Lime", "ccff00"],
    ["Фисташковый", "Pistachio", "bef574"],
    ["Желто-зеленый", "Green-yellow", "adff2f"],
    ["Салатовый", "Chartreuse", "99ff99"],
    ["Зеленой мяты", "Mint Green", "98ff98"],
    ["Зеленого чая", "Tea Green", "d0f0c0"],
    ["Темного зеленого чая", "Dark Tea Green", "badbad"],
    ["Зеленого мха", "Moss green", "addfad"],
    ["Серо-зеленый", "Celadon", "ace1af"],
    ["Бледно-зеленый", "Pale green", "77dd77"],
    ["Зелено-морской", "Sea Green", "2e8b57"],
    ["Темно-зеленый", "Dark green", "013220"],
    ["Темный весенне-зеленый", "Dark spring green", "177245"],
    ["Нефритовый", "Jade", "00a86b"],
    ["Изумрудный", "Emerald", "50c878"],
    ["Темный пастельно-зеленый", "Dark pastel green", "03c03c"],
    ["Малахитовый", "Malachite", "0bda51"],
    ["Весенне-зеленый", "Spring Green", "00ff7f"],
    ["Аквамариновый", "Aquamarine", "7fffd4"],
    ["Панг", "Pang", "c7fcec"],
    ["Лягушки в обмороке", "Fainted frog", "7b917b"],
    ["Маренго", "Marengo", "4c5866"],
    ["Серой спаржи", "Gray Asparagus", "465945"],
    ["Аспидно-серый", "Dark slate gray", "2f4f4f"],
    ["Темно-бирюзовый", "Dark turquoise", "116062"],
    ["Мурена", "Moray", "1c6b72"],
    ["Зеленой сосны", "Pine Green", "01796f"],
    ["Cине-зеленый", "Teal", "008080"],
    ["Яйца дрозда", "Robin egg blue", "00cccc"],
    ["Бирюзовый", "Turquoise", "30d5c8"],
    ["Небесный", "Sky", "7fc7ff"],
    ["Ярко-бирюзовый", "Bright turquoise", "08e8de"],
    ["Морской волны", "Aqua", "00f0f0"],
    ["Циан", "Cyan", "00ffff"],
    ["Электрик", "Electric", "7df9ff"],
    ["Бледно-синий", "Pale Blue", "afeeee"],
    ["Серебристый", "Silver", "c0c0c0"],
    ["Светло-серый", "Light Grey", "bbbbbb"],
    ["Серого шифера", "Slate gray", "708090"],
    ["Серый", "Gray", "808080"],
    ["Мокрого асфальта", "Wet asphalt", "505050"],
    ["Антрацитовый", "Anthracite", "464451"],
    ["Черный", "Black", "000000"],
    ["Берлинской лазури", "Prussian blue", "003153"],
    ["Сапфировый", "Sapphire", "082567"],
    ["Полуночно-синий", "Midnight Blue", "003366"],
    ["Темно-синий", "Navy blue", "000080"],
    ["Ультрамариновый", "Ultramarine", "120a8f"],
    ["Темно-лазурный", "Dark cerulean", "08457e"],
    ["Синей пыли", "Powder blue", "003399"],
    ["Синий", "Blue", "0000ff"],
    ["Кобальтовый", "Cobalt", "0047ab"],
    ["Лазурно-синий", "Cerulean blue", "2a52be"],
    ["Джинсовый", "Denim", "1560bd"],
    ["Королевский синий", "Royal Blue", "4169e1"],
    ["Лазурно-серый", "Cerulean grey", "007ba7"],
    ["Синий Клейна", "Klein Blue", "3a75c4"],
    ["Синей стали", "Steel blue", "4682b4"],
    ["Воды пляжа Бонди", "Bondi Blue", "0095b6"],
    ["Лазурный", "Azure", "007fff"],
    ["Защитно-синий", "Dodger blue", "1e90ff"],
    ["Васильковый", "Cornflower blue", "6495ed"],
    ["Голубой", "Light Blue", "42aaff"],
    ["Бледно-васильковый", "Pale cornflower blue", "abcdef"],
    ["Барвинковый", "Periwinkle", "ccccff"],
    ["Лавандовый", "Lavender", "e6e6fa"],
    ["Чертополоховый", "Thistle", "d8bfd8"],
    ["Сиреневый", "Lilac", "c8a2c8"],
    ["Глициниевый", "Wisteria", "c9a0dc"],
    ["Аметистовый", "Amethyst", "9966cc"],
    ["Фиолетовый", "Violet", "8b00ff"],
    ["Персидский синий", "Persian blue", "6600ff"],
    ["Темно-фиолетовый", "Dark violet", "423189"],
    ["Темный индиго", "Dark Indigo", "310062"],
    ["Индиго", "Indigo", "4b0082"],
    ["Темно-пурпурный", "Purple", "660099"],
    ["Сливовый", "Plum", "660066"],
    ["Фиолетово-баклажанный", "Violet-eggplant", "991199"],
    ["Орхидеевый", "Orchid", "da70d6"],
    ["Гелиотроповый", "Heliotrope", "df73ff"],
    ["Фиалковый", "Violaceous", "ea8df7"],
    ["Бледно-пурпурный", "Pale magenta", "f984e5"],
    ["Фуксии", "Fuchsia", "f754e1"],
    ["Пурпурный", "Magenta", "ff00ff"],
    ["Ярко-розовый", "Hot pink", "fc0fc0"],
    ["Ярко-фиолетовый", "Bright violet", "cd00cd"],
    ["Баклажановый", "Eggplant", "990066"],
    ["Розовато-лиловый", "Mauve", "993366"],
    ["Фиолетово-красный", "Red violet", "c71585"],
    ["Вишневый", "Cherry", "d62b60"],
    ["Светло-вишневый", "Cerise", "de3163"],
    ["Темно-розовый", "Dark pink", "e75480"],
    ["Лиловый", "Pale red-violet", "db7093"],
    ["Бледно-каштановый", "Pale chestnut", "ddadaf"],
    ["Красновато-коричневый", "Puce", "cc8899"],
    ["Розовый Маунтбэттена", "Mountbatten pink", "997a8d"],
    ["Бледный розовато-лиловый", "Pale mauve", "996666"],
    ["Умбра жженая", "Burnt umber", "8a3324"],
    ["Бурый", "Fulvous", "45161c"],
    ["Темно-алый", "Dark Scarlet", "560319"],
    ["Бургундский", "Burgundy", "900020"],
    ["Коричнево-малиновый", "Maroon", "800000"],
    ["Сангиновый", "Sanguine", "92000a"],
    ["Бордовый", "Wine red", "9b2d30"],
    ["Бледно-карминный", "Pale carmine", "af4035"],
    ["Ржаво-коричневый", "Rust", "b7410e"]
];
        var ss = document.getElementById('content');
        var sss = '';
            
             var tempstr = "";
                for (var i = 0; i < wizHueColors.length; i++) {
                    if ($('#all').hasClass(wizHueColors[i][2])) {
                        tempstr = tempstr + '<li><a href="#'+wizHueColors[i][2]+'"><span style="color:#'+wizHueColors[i][2]+'">&#9679;</span> '+wizHueColors[i][0]+'</a></li>';
                    };            
                };
                document.getElementById('izbr').innerHTML = tempstr; 
          

      for (var i = 0; i < wizHueColors.length; i++) {
      
              rgb = wizHueColors[i][2];
              sss+='<div id="' + i +'" class="span12 b100" style="background-color:#' + rgb + '" name="' + rgb + '"><span class="met"></span><span>'+wizHueColors[i][0] ;
                if ($('#all').hasClass(wizHueColors[i][2])) {
                    sss+='</span><a class="iz on" title="Удалить из избранного" name="'+ rgb+'"></a></div>';                               
                } 
                else
                {
                    sss+='</span><a href="#"  class="iz" title="Добавить в избранное" name="'+ rgb+'"></a>  </div>';            
                };
                
             
          }         
      ss.innerHTML = sss;
          