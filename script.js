dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
  // Estableciendo posiciones iniciales
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // Se le asigna al terrariumElement
  // un manejador de eventos llamado pointerDrag para el
  // listener onpointerdown
  terrariumElement.onpointerdown = pointerDrag;

  // Funcion pointerDrag
  function pointerDrag(event){
    // Se previene el funcionamiento por defecto
    // Un fantasma de arrastre
    event.preventDefault();
    // Se accedede a la posicion del mouse
    // mediante las propiedades clientX y clientY
    // del evento
    pos3 = event.clientX;
    pos4 = event.clientY;
    // Se crea la funcion de arrastre
    // dentro del estado pointerDrag
    document.onpointermove = elementDrag;
    // Se crea la funcion de soltar
    // dentro del estado pointerDrag
    document.onpointerup = stopElementDrag;

    // Funcion elementDrag
    function elementDrag(eventOnPointerMove){
      // Se calcula la nueva posicion
      // como la diferencia de la posicion 1 (p3,p4)
      // y la posicion actual del mouse
      pos1 = pos3 - eventOnPointerMove.clientX;
      pos2 = pos4 - eventOnPointerMove.clientY;
      // Se actualiza la posicion actual del mouse
      pos3 = eventOnPointerMove.clientX;
      pos4 = eventOnPointerMove.clientY;
      // Se imprimen las posiciones
      console.log(pos1, pos2, pos3, pos4);
      // Se le aplica offset al elemento
      terrariumElement.style.left = `${terrariumElement.offsetLeft - pos1}px`;
      terrariumElement.style.top = `${terrariumElement.offsetTop - pos2}px`;
    }
    //  Función de liberación
    function stopElementDrag() {
      document.onpointerup = null;
      document.onpointermove = null;
    }
  }
}