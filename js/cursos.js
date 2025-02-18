let listaCursos = [];

function DescargarCursoJSON() {
  // Extraer valores de los inputs
  let nombre = document.getElementById("nombre").value;
  let escuela = document.getElementById("escuela").value;
  let tecnologia = document.getElementById("tecnologia").value;
  let fecha = document.getElementById("fecha").value;
  let enlace = document.getElementById("enlace").value;

  //   Crear un array con los valores
  let cursos = new Array();
  cursos.push([nombre, escuela, tecnologia, fecha, enlace]);

  //   Convertir a JSON
  let json = JSON.stringify(cursos);

  //   Convertir de JSON a Blob
  json = [json];
  let blob = new Blob(json, { type: "text/plain;charset=utf-8" });

  //   Guardar en txt

  var url = window.URL || window.webkitURL;
  let link = url.createObjectURL(blob);
  var a = document.createElement("a");
  a.download = "Cursos.json";
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

function mostrarCursos() {
  let nombreCurso = document.getElementById("nombreCurso");
  let escuelaCurso = document.getElementById("escuelaCurso");
  let tecnologiaCurso = document.getElementById("tecnologiaCurso");
  let fechaCurso = document.getElementById("fechaCurso");
  let enlaceCurso = document.getElementById("enlaceCurso");

  fetch("./listaCursos/cursos.json")
    .then((response) => response.text())
    .then((data) => {
      let cursos = data.replace(/\\/g, "");
      console.log('cursos', cursos)
      cursos = cursos.replace(/\[/g, "");
      cursos = cursos.replace(/\]/g, "");
      cursos = cursos.replace(/\"/g, "");
      cursos = cursos.split(",");

      console.log("cursos", cursos);

      let td = document.createElement("td");
      cursos.forEach((curso) => {
        listaCursos.push(curso);
        // console.log('curso', curso)

        // td.textContent = curso;
        // nombreCurso.appendChild(td);

        // let cursoArray = curso.split(",");
        // let li = document.createElement("li");
        // li.textContent = cursoArray[0];
        // listaCursos.appendChild(li);
      });
    });
  cursos.style.display = "block";
}
console.log("listaCursos", listaCursos);
console.log("listaCursos", typeof listaCursos);
console.log("listaCursos", typeof listaCursos[0]);

mostrarCursos();

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
