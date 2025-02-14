function DescargarCursoJSON() {
  // Extraer valores de los inputs
  let nombre = document.getElementById("nombre").value;
  let escuela = document.getElementById("escuela").value;
  let tecnologia = document.getElementById("tecnologia").value;
  let fechaInicio = document.getElementById("fechaInicio").value;
  let enlace = document.getElementById("enlace").value;

  //   Crear un array con los valores
  let cursos = new Array();
  cursos.push([nombre, escuela, tecnologia, fechaInicio, enlace]);

  //   Convertir a JSON
  let json = JSON.stringify(cursos);

  //   Convertir de JSON a Blob
  json = [json];
  let blob = new Blob(json, { type: "text/plain;charset=utf-8" });

  //   Guardar en txt

  var url = window.URL || window.webkitURL;
  let link = url.createObjectURL(blob);
  var a = document.createElement("a");
  a.download = "Cursos.txt";
  a.href = link;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  //   var url = window.URL || window.webkitURL;
  //   let link = url.createObjectURL(blob);
  //   console.log("link", link);
  //   var a = document.createElement("a");
  //   a.download = "Cursos.txt";
  //   a.href = link;
  //   console.log("a", a);

  //   window.navigator.msSaveBlob(blob, "Cursos.txt");

  
  //   //Check the Browser.
  //   let isIE = false || !!document.documentMode;
  //   if (isIE) {
  //   } else {
  //     let url = window.URL || window.webkitURL;
  //     let link = url.createObjectURL(blob);
  //     let a = document.createElement("a");
  //     a.download = "Customers.txt";
  //     a.href = link;
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   }
}
let guardarCurso = document.getElementById("guardarCurso");
guardarCurso.addEventListener("click", DescargarCursoJSON);

// function mostrarCursos() {
//   cursos.style.display = "block";
// }

// function guardarCurso() {
//   let nombreCurso = document.getElementById("nombreCurso").value;
//   console.log("nombreCurso", nombreCurso);
//   let curso = {
//     nombre: nombreCurso,
//   };
//   let cursoJson = JSON.stringify(curso);
//   localStorage.setItem("curso", cursoJson);
//   saveas;
// }

// let guardarCursoDOM = document.getElementById("guardarCurso");
// guardarCursoDOM.addEventListener("click", guardarCurso);
// let cursos = document.getElementById("cursos");
