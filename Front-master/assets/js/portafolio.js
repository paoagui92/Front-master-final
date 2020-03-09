// --------init Masonry---------
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
//--------Fin Masonry-----------

//-------------Variables-------------
const elem = document.getElementsByClassName("grid-item");
const btnVer = document.getElementsByClassName("btn-primary");
console.log(btnVer);

//--------Event listener-------------
CargarEventListeners();

function CargarEventListeners() {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("mousemove", overFunction);
    elem[i].addEventListener("mouseout", outFunction);
    var item = elem[i];
  }
  return item;
}


//----------Funciones----------------
//----------Over Function------------
function overFunction(item) {
    const l = item.target;
    console.log(l);
    l.style.opacity="0.3";
    const b = l.parentElement.getElementsByTagName("a");
    b[0].setAttribute("style","z-index:1;");
    const pr = l.parentElement.getElementsByTagName("p");
    pr[0].setAttribute("style","z-index:1;");
    
}

//----------Out Function------------
function outFunction(item) {
  const l = item.target;
  l.style.opacity="1";  
  const b = l.parentElement.getElementsByTagName("a");
  b[0].setAttribute("style","z-index:-1;");
  const pr = l.parentElement.getElementsByTagName("p");
  pr[0].setAttribute("style","z-index:-1;");
}

