let datajson =[];
let boton = document.querySelector('.btn');
boton.addEventListener('click',function(){
    let dic = {
        nombre: '',
        inicio: '',
        fin: '',
        importancia: '',
        estado: ''
    };
    let nombreTarea = document.getElementById('nombreTarea').value;
    let fechaInicio = document.getElementById('fechaInicio').value;
    let fechaFin = document.getElementById('fechaFin').value;
    let cumplida = document.getElementById('cumplida').checked;
    let importancia = document.getElementById('importancia').value;
    dic.nombre = nombreTarea;
    dic.inicio = fechaInicio;
    dic.fin = fechaFin;
    dic.importancia = importancia;
    dic.estado = (cumplida) ? 'cumplida': 'fallida';
    datajson.push(dic);
    let li = document.createElement('li');
    li.textContent = nombreTarea;
    if (cumplida) {
        document.getElementById('listaCumplida').appendChild(li);
    }
    else{
        document.getElementById('listaFallida').appendChild(li);
    }
})
