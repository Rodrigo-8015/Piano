
// musica libre 
let texto = document.getElementById('notaTecla')

let traduccion = {
  65: 'A',
  83: 'S',
  68: 'D',
  70: 'F',
  71: 'G',
  72: 'H',
  74: 'J',
  75: 'K',
  76: 'L',
  186: 'Ñ',
  88: 'X',
  67: 'C',
  86: 'V',
  66: 'B',
  78: 'N'
}

function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
    let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`); // el $ concatena una funcion. 
    // console.log(key.dataset.key);
    if (!audio) return; // para la funcion cuando tiene el valor null 
    
    texto.innerHTML = traduccion[key.dataset.key]
    console.log(key)
    audio.currenTime =  1; //
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

//TECLAS MAYORES

function a1(){

  let audio = document.querySelector('audio[data-key="72"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="72"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"H"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function a2(){

  let audio = document.querySelector('audio[data-key="86"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="86"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"V"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function b1(){

  let audio = document.querySelector('audio[data-key="74"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="74"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"J"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function b2(){

  let audio = document.querySelector('audio[data-key="66"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="66"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"B"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function c1(){

  let audio = document.querySelector('audio[data-key="65"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="65"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"A"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function c2(){

  let audio = document.querySelector('audio[data-key="75"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="75"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"K"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function c3(){

  let audio = document.querySelector('audio[data-key="78"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="78"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"N"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function d1(){

  let audio = document.querySelector('audio[data-key="83"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="83"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"S"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function d2(){

  let audio = document.querySelector('audio[data-key="76"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="76"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"L"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function e1(){

  let audio = document.querySelector('audio[data-key="68"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="68"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"D"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function e2(){

  let audio = document.querySelector('audio[data-key="192"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="192"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"Ñ"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function f1(){

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

function f2(){

  let audio = document.querySelector('audio[data-key="88"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="88"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"X"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function g1(){

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

function g2(){

  let audio = document.querySelector('audio[data-key="67"]'); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
  let key = document.querySelector('.tecla[data-key="67"]'); // el $ concatena una funcion. 
  if (!audio) return; // para la funcion cuando tiene el valor null 
  texto.innerHTML = '"C"'
  audio.currenTime =  0; //
  audio.play()
  key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

/// Melodias Y Validaciones. ///

//  tecla // funcion-tono // keynote  
//    A       c1          65
//    S       d1          83
//    D       e1          68
//    F       f1          70
//    G       g1          71
//    H       a1          72
//    J       b1          74
//    K       c2          75
//    L       d2          76
//    Ñ       e2          192
//    X       f2          88
//    C       g2          67
//    V       a2          86
//    B       b2          66
//    N       c3          78
    

// melodia 1
let validate1 = ['68'];
let melodia1 =  [e1, f2, g1, a1, b2];
// melodia 2
let validate2 = ['68','88','71','72','66'];
let melodia2 = [e1, f2, g1, a1, b2];
// melodia 3...
let validate3 = ['68','88','71','72','66'];
let melodia3 = [e1, f2, g1, a1, b2];
//melodia 4
let validate4 = ['68','88','71','72','66'];
let melodia4 = [e1, f2, g1, a1, b2];
//melodia 5
let validate5 = ['68','88','71','72','66'];
let melodia5 = [e1, f2, g1, a1, b2];
//melodia 6
let validate6 = ['68','88','71','72','66'];
let melodia6 = [e1, f2, g1, a1, b2];



// funcion de SetTimeOUT con arreglo

function play5teclas (a, b, c, d, e){
  setTimeout(a, 1000);
  setTimeout(b, 2000);
  setTimeout(c, 3000);
  setTimeout(d, 4000);
  setTimeout(e, 5000);
}

// funcion de validacion

 function stop(){
  let btn_game = document.getElementById('melody1');
  btn_game.classList.remove('gamewin');
  btn_game.classList.remove('gameOver');
  btn_game.classList.remove('botn1play');
  btn_game.innerHTML = 1;
 }


let it = 0;
let user =[];

/// Validacion primera melodia 

function check1(e){
  let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
  let val = key.dataset.key;
  let btn_game = document.getElementById('melody1');
      
  // console.log(key.dataset.key)
  user.push(val);
  console.log(user);
  console.log(btn_game);
  if(user[it] !== validate1[it]){
    console.log('perdiste');
    it = 0;
    user = [];
    
    //Boton de reset ROJO regresar al home, falta agregar
    btn_game.classList.add('gameOver');
    btn_game.innerHTML = "Game Over";
    console.log(btn_game);
    window.removeEventListener('keydown', check1);
    setTimeout(stop, 3000);
        
  }else if(user.length === validate1.length){
    console.log('ganaste');
    //Boton de reset VERDE regresar al home, falta agregar
    btn_game.innerHTML = "Ganaste!!!";
    window.removeEventListener('keydown', check1);
    setTimeout(stop, 3000);
  }
  it += 1;
  // console.log(it)
}


// validacion segunda melodia

function check2(e){
    let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
    let val = key.dataset.key;
    // console.log(key.dataset.key);
    user.push(val);
    console.log(user);
    if(user[it] !== validate2[it]){
      console.log('perdiste');
      it = 0;
      user = [];
      }
    if(user.length === validate2.length){
      console.log('ganaste');
      //Boton de reset VERDE regresar al home, falta agregar
    }
    it += 1;
    // console.log(it)
  }
  it += 1;
  // console.log(it)


// validacion tercera melodia

  function check3(e){
    let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
    let val = key.dataset.key;
    // console.log(key.dataset.key);
    user.push(val);
    console.log(user);
    if(user[it] !== validate3[it]){
      console.log('perdiste');
      it = 0;
      user = [];
      //Boton de reset ROJO regresar al home, falta agregar
    }
    if(user.length === validate3.length){
      console.log('ganaste')
      //Boton de reset VERDE regresar al home, falta agregar
    }
    it += 1;
    // console.log(it)
  }
  it += 1;
  // console.log(it)

// validacion cuarta melodia

function check4(e){
  let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
  let val = key.dataset.key;
  let btn_game = document.getElementById('melody4');
      
  // console.log(key.dataset.key)
  user.push(val)
  console.log(user)
  console.log(btn_game)
  if(user[it] !== validate4[it]){
    console.log('perdiste')
    it = 0;
    user = [];
    
    //Boton de reset ROJO regresar al home, falta agregar
    btn_game.classList.add('gameOver');
    btn_game.innerHTML = "Game Over"
    console.log(btn_game);
    window.removeEventListener('keydown', check4);
    setTimeout(stop, 3000);
        
  }else if(user.length === validate3.length){
    console.log('ganaste');
    //Boton de reset VERDE regresar al home, falta agregar
    btn_game.innerHTML = "Ganaste!!!"
    window.removeEventListener('keydown', check4);
    setTimeout(stop, 3000);
    
  }
  it += 1;
  // console.log(it)
}

 // validacion quita melodia  

 function check5(e){
  let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
  let val = key.dataset.key;
  let btn_game = document.getElementById('melody5');
      
  // console.log(key.dataset.key)
  user.push(val)
  console.log(user)
  console.log(btn_game)
  if(user[it] !== validate5[it]){
    console.log('perdiste')
    it = 0;
    user = [];
    
    //Boton de reset ROJO regresar al home, falta agregar
    btn_game.classList.add('gameOver');
    btn_game.innerHTML = "Game Over"
    console.log(btn_game);
    window.removeEventListener('keydown', check5);
    setTimeout(stop, 3000);
        
  }else if(user.length === validate3.length){
    console.log('ganaste');
    //Boton de reset VERDE regresar al home, falta agregar
    btn_game.innerHTML = "Ganaste!!!"
    window.removeEventListener('keydown', check5);
    setTimeout(stop, 3000);
    
  }
  it += 1;
  // console.log(it)
}
// validacion sexta melodia

function check6(e){
  let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
  let val = key.dataset.key;
  let btn_game = document.getElementById('melody6');
      
  // console.log(key.dataset.key)
  user.push(val)
  console.log(user)
  console.log(btn_game)
  if(user[it] !== validate6[it]){
    console.log('perdiste')
    it = 0;
    user = [];
    
    //Boton de reset ROJO regresar al home, falta agregar
    btn_game.classList.add('gameOver');
    btn_game.innerHTML = "Game Over"
    console.log(btn_game);
    window.removeEventListener('keydown', check6);
    setTimeout(stop, 3000);
        
  }else if(user.length === validate6.length){
    console.log('ganaste');
    //Boton de reset VERDE regresar al home, falta agregar
    btn_game.innerHTML = "Ganaste!!!"
    window.removeEventListener('keydown', check6);
    setTimeout(stop, 3000);
    
  }
  it += 1;
  // console.log(it)
}



// funciones de melodias. 

function melody01(){
    play5teclas(...melodia1);
    window.addEventListener('keydown', check1);
    let btn_game = document.getElementById('melody1');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn1play')
    btn_game.innerHTML = "Start"

}

function melody02(){
    play5teclas(...melodia2);
    window.addEventListener('keydown', check2);
    let btn_game = document.getElementById('melody2');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn2play')
    btn_game.innerHTML = "Start"

}

function melody03(){
    play5teclas(...melodia3);
    window.addEventListener('keydown', check3);
    let btn_game = document.getElementById('melody3');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn3play')
    btn_game.innerHTML = "Start"

}
function melody04(){
    play5teclas(...melodia4);
    window.addEventListener('keydown', check4);
    let btn_game = document.getElementById('melody4');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn4play')
    btn_game.innerHTML = "Start"
    


}
function melody05(){
    play5teclas(...melodia5);
    window.addEventListener('keydown', check5);
    let btn_game = document.getElementById('melody5');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn5play')
    btn_game.innerHTML = "Start"

}
function melody06(){
    play5teclas(...melodia6);
    window.addEventListener('keydown', check6);
    let btn_game = document.getElementById('melody6');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn6play')
    btn_game.innerHTML = "Start"

}

//declaramos los botones de melodias. 

let btn_melodia1 = document.getElementById('melody1')
let btn_melodia2 = document.getElementById('melody2')
let btn_melodia3 = document.getElementById('melody3')
let btn_melodia4 = document.getElementById('melody4')
let btn_melodia5 = document.getElementById('melody5')
let btn_melodia6 = document.getElementById('melody6')


btn_melodia1.addEventListener('click', melody01)
btn_melodia2.addEventListener('click', melody02)
btn_melodia3.addEventListener('click', melody03)
btn_melodia4.addEventListener('click', melody04)
btn_melodia5.addEventListener('click', melody05)
btn_melodia6.addEventListener('click', melody06)
