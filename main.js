
// musica libre 

function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
    let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`); // el $ concatena una funcion. 
    if (!audio) return; // para la funcion cuando tiene el valor null 
    
    audio.currenTime =  0; //
    audio.play()
    console.log(audio)
    key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR

    }
    
    
  
    function removerTransition(e){        
            
        if(e.propertyName !== 'transform' ) return;
        // console.log(e.propertyName);
        this.classList.remove('tocar');
        // console.log(this);


    }
      
      const keys  = document.querySelectorAll('.tecla');
              keys.forEach(key => key.addEventListener('transitionend', removerTransition))



window.addEventListener('keydown', playSound);

// aqui incician las melodias. 

let texto = document.getElementById('notaTecla')



//TECLAS MAYORES

function noteC(){

  let audio = document.querySelector('audio[data-key="65"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="65"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      texto.innerHTML = '"C"'
})
}

function noteD(){

  let audio = document.querySelector('audio[data-key="83"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="83"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      texto.innerHTML = '"D"'
})
}

function noteE(){

  let audio = document.querySelector('audio[data-key="68"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="68"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"E"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
})
}

function noteF(){

  let audio = document.querySelector('audio[data-key="70"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="70"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"F"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
})
}


function noteG(){

  let audio = document.querySelector('audio[data-key="71"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="71"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"G"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
})
}


function noteA(){

  let audio = document.querySelector('audio[data-key="72"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="72"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"A"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
})
}

function noteB(){

  let audio = document.querySelector('audio[data-key="74"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="74"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"B"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
})
}

function noteC(){

  let audio = document.querySelector('audio[data-key="75"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="75"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"C"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
})
}

function noteD(){

  let audio = document.querySelector('audio[data-key="76"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="76"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"D"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
})
}

function noteE(){

  let audio = document.querySelector('audio[data-key="192"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="192"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"E"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
})
}


function noteF(){

  let audio = document.querySelector('audio[data-key="88"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="88"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"F"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
})
}


function noteG(){

  let audio = document.querySelector('audio[data-key="67"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="67"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"G"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
})
}


// TECLAS MENORES



// melodias

var botonStart = document.getElementById('melody1')
var btn_melodia2 = document.getElementById('melody2')

function melody01 (){
  setTimeout(noteA, 1000)
  setTimeout(noteB, 2000)
  setTimeout(noteC, 3000)
  setTimeout(noteD, 4000)
  setTimeout(noteF, 5000)
  
}


function melody02(){
  const array = [noteA(), noteB(), noteC(), noteD(), noteC(), noteE()]
    for (var i = 0; i <= 5; i++){
    setTimeout(array[i](), 1000);
    
  }
}

function melody03(){
var array_of_functions = [
  function() { noteA() },
  function() { noteG() },
  function() { noteB() },
  function() { noteC() }
]

for (i = 0; i < array_of_functions.length; i++) {
  setTimeout(array_of_functions[i](), 10000);
}
}



botonStart.addEventListener('click', melody01)
btn_melodia2.addEventListener('click', melody03)