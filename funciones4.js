function cantidadHijos(divId) {
    let div = document.getElementById(divId);
    alert(`La cantidad de hijos del div ${divId} es: ${div.childNodes.length}`);
}

function cantidadHijosElemento(divId) {
    let div = document.getElementById(divId);
    alert(`La cantidad de hijos de tipo elemento del div ${divId} es: ${div.children.length}`);
}
