
// musica libre 

function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
    let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`); // el $ concatena una funcion. 
    console.log(key.dataset.key);
    if (!audio) return; // para la funcion cuando tiene el valor null 
    
    audio.currenTime =  0; //
    audio.play()
    // console.log(audio)
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

// aqui inician las melodias. 

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

let btn_melodia1 = document.getElementById('melody1')
let btn_melodia2 = document.getElementById('melody2')
let btn_melodia3 = document.getElementById('melody3')
let btn_melodia4 = document.getElementById('melody4')
let btn_melodia5 = document.getElementById('melody5')
let btn_melodia6 = document.getElementById('melody6')



let validate1 = ['72','74','65','76','88'];
let validate2 = [];
let it = 0;
let user =[];

function melody01 (){
  setTimeout(noteA, 1000)
  setTimeout(noteB, 2000)
  setTimeout(noteC, 3000)
  setTimeout(noteD, 4000)
  setTimeout(noteF, 5000)
 
  window.addEventListener('keydown', check1);
}
function check1(e){
  let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
  let val = key.dataset.key;
  console.log(key.dataset.key)
  user.push(val)
  console.log(user)
  if(user[it] !== validate1[it]){
    console.log('perdiste')
    it = 0;
    user = [];
    //Boton de reset ROJO regresar al home, falta agregar
  }
  if(user.length === validate1.length){
    console.log('ganaste')
    //Boton de reset VERDE regresar al home, falta agregar
  }
  it += 1;
  // console.log(it)
}


function melody02(){
  setTimeout(noteC, 1000)
  setTimeout(noteB, 2000)
  setTimeout(noteC, 3000)
  setTimeout(noteD, 4000)
  setTimeout(noteE, 5000)
  }


function melody03(){
  setTimeout(noteG, 1000)
  setTimeout(noteA, 2000)
  setTimeout(noteC, 3000)
  setTimeout(noteD, 4000)
  setTimeout(noteE, 5000)
}

function melody04(){
  setTimeout(noteA, 1000)
  setTimeout(noteG, 2000)
  setTimeout(noteG, 3000)
  setTimeout(noteD, 4000)
  setTimeout(noteE, 5000)
}

function melody05(){
  setTimeout(noteA, 1000)
  setTimeout(noteF, 2000)
  setTimeout(noteC, 3000)
  setTimeout(noteD, 4000)
  setTimeout(noteA, 5000)
}

function melody06(){
  setTimeout(noteG, 1000)
  setTimeout(noteD, 2000)
  setTimeout(noteA, 3000)
  setTimeout(noteB, 4000)
  setTimeout(noteF, 5000)
}



btn_melodia1.addEventListener('click', melody01)
btn_melodia2.addEventListener('click', melody02)
btn_melodia3.addEventListener('click', melody03)
btn_melodia4.addEventListener('click', melody04)
btn_melodia5.addEventListener('click', melody05)
btn_melodia6.addEventListener('click', melody06)
