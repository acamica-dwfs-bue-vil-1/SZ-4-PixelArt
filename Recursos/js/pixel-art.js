var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var indicadorColor = document.getElementById("indicador-de-color");
var whichOne = true;


// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var goma = document.getElementById('goma');

colorPersonalizado.addEventListener('change',
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;

  })
);


function crearPaleta(){
  for(i = 0; i < nombreColores.length; i++){
    var div = document.createElement('div');
    div.style.backgroundColor = nombreColores[i];
    div.className = 'color-paleta';
    paleta.appendChild(div);
  }
}

function crearPixeles(){
  for(i = 0; i <= 1750; i++){
    var pixel = document.createElement('div');
    grillaPixeles.appendChild(pixel);
  }
}

paleta.addEventListener('click', colorNuevo);
function colorNuevo(e){
  whichOne = true;
  var color =  e.target.style.backgroundColor;
  indicadorColor.style.backgroundColor = color;
}

grillaPixeles.addEventListener('click', pintarPixel);
function pintarPixel(pro) {
  if(whichOne == true){
   pro.target.style.backgroundColor = indicadorColor.style.backgroundColor;
 }else {
   pro.target.style.backgroundColor = goma.style.color;
 }
}

var mouse = false;
grillaPixeles.addEventListener('mousedown',function(){
  mouse = true;
});
grillaPixeles.addEventListener('mouseup',function(){
  mouse = false;
});
grillaPixeles.addEventListener('mouseover', mov);
function mov(pro){
  if(mouse === true ){
    pintarPixel(pro);
  }
}

$('#borrar').click(function(){
  $('#grilla-pixeles').children().animate({'background-color': 'white'}, 1000);
});

$('.imgs img').click(function(){
  var heroe = $(this).attr('id');
    if (heroe == "batman"){
      cargarSuperheroe(batman);
    }
    else if (heroe == "wonder"){
      cargarSuperheroe(wonder);
    }
    else if (heroe == "flash"){
      cargarSuperheroe(flash);
    }
    else if (heroe == "invisible"){
      cargarSuperheroe(invisible);
    }
});

$('#guardar').click(guardarPixelArt);

$('#gomacl').click(function(){
  whichOne = false;
})
$('#colorcl').click(function(){
  whichOne = true;
})


crearPaleta();
crearPixeles();
