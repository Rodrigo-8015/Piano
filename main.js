
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
  90: 'Z',
  88: 'X',
  67: 'C',
  86: 'V',
  66: 'B',
  78: 'N'
}

function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`); 
    if (!audio) return; 
    texto.innerHTML = traduccion[key.dataset.key]
    audio.currenTime =  1; 
    audio.play()
    key.classList.add('tocar'); 
    setTimeout(delnner, 4000)
    
}
     
function removerTransition(e){               
        if(e.propertyName !== 'transform' ) return;
        // console.log(e.propertyName);
        this.classList.remove('tocar');
        // console.log(this);
        
}

function delnner(){
 texto.innerHTML = "";
}

const keys  = document.querySelectorAll('.tecla');
keys.forEach(key => key.addEventListener('transitionend', removerTransition))

window.addEventListener('keydown', playSound);



// aqui inician las melodias. 

//TECLAS MAYORES

function a1(){

  let audio = document.querySelector('audio[data-key="72"]');
  let key = document.querySelector('.tecla[data-key="72"]'); 
  if (!audio) return; 
  texto.innerHTML = '"H"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function a2(){

  let audio = document.querySelector('audio[data-key="86"]'); 
  let key = document.querySelector('.tecla[data-key="86"]'); 
  if (!audio) return; 
  texto.innerHTML = '"V"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function b1(){

  let audio = document.querySelector('audio[data-key="74"]'); 
  let key = document.querySelector('.tecla[data-key="74"]'); 
  if (!audio) return; 
  texto.innerHTML = '"J"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function b2(){

  let audio = document.querySelector('audio[data-key="66"]'); 
  let key = document.querySelector('.tecla[data-key="66"]'); 
  if (!audio) return; 
  texto.innerHTML = '"B"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function c1(){

  let audio = document.querySelector('audio[data-key="65"]'); 
  let key = document.querySelector('.tecla[data-key="65"]'); 
  if (!audio) return; 
  texto.innerHTML = '"A"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function c2(){

  let audio = document.querySelector('audio[data-key="75"]'); 
  let key = document.querySelector('.tecla[data-key="75"]'); 
  if (!audio) return; 
  texto.innerHTML = '"K"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function c3(){

  let audio = document.querySelector('audio[data-key="78"]'); 
  let key = document.querySelector('.tecla[data-key="78"]'); 
  if (!audio) return; 
  texto.innerHTML = '"N"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function d1(){

  let audio = document.querySelector('audio[data-key="83"]'); 
  let key = document.querySelector('.tecla[data-key="83"]'); 
  if (!audio) return; 
  texto.innerHTML = '"S"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function d2(){

  let audio = document.querySelector('audio[data-key="76"]'); 
  let key = document.querySelector('.tecla[data-key="76"]'); 
  if (!audio) return; 
  texto.innerHTML = '"L"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function e1(){

  let audio = document.querySelector('audio[data-key="68"]');
  let key = document.querySelector('.tecla[data-key="68"]'); 
  if (!audio) return; 
  texto.innerHTML = '"D"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function e2(){

  let audio = document.querySelector('audio[data-key="90"]'); 
  let key = document.querySelector('.tecla[data-key="90"]'); 
  if (!audio) return; 
  texto.innerHTML = '"Z"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function f1(){

  let audio = document.querySelector('audio[data-key="70"]'); 
  let key = document.querySelector('.tecla[data-key="70"]'); 
  if (!audio) return; 
  texto.innerHTML = '"F"'
  audio.currenTime =  0;
  audio.play()
  key.classList.add('tocar');
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function f2(){

  let audio = document.querySelector('audio[data-key="88"]'); 
  let key = document.querySelector('.tecla[data-key="88"]');
  if (!audio) return; 
  texto.innerHTML = '"X"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function g1(){

  let audio = document.querySelector('audio[data-key="71"]'); 
  let key = document.querySelector('.tecla[data-key="71"]');
  if (!audio) return; 
  texto.innerHTML = '"G"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

function g2(){

  let audio = document.querySelector('audio[data-key="67"]');
  let key = document.querySelector('.tecla[data-key="67"]'); 
  if (!audio) return; 
  texto.innerHTML = '"C"'
  audio.currenTime =  0; 
  audio.play()
  key.classList.add('tocar'); 
  audio.addEventListener('ended', () => {
      key.classList.remove('tocar')
      
  })
}

/// Melodias Y Validaciones. ///

//  tecla // funcion-tono // keynote  
//    A       c1          65*
//    S       d1          83
//    D       e1          68
//    F       f1          70*
//    G       g1          71
//    H       a1          72*
//    J       b1          74
//    K       c2          75
//    L       d2          76
//    Z       e2          90
//    X       f2          88
//    C       g2          67
//    V       a2          86
//    B       b2          66
//    N       c3          78*
    

// melodia 1
let validate1 = ['68','88','71','72','66'];
let melodia1 =  [e1, f2, g1, a1, b2];
// melodia 2
let validate2 = ['65','88','74','67','66'];
let melodia2 = [c1, f2, b1, g2, b2];
// melodia 3...
let validate3 = ['78','65','90','70','72'];
let melodia3 = [c3, c1, e2, f1, a1];
//melodia 4
let validate4 = ['70','66','75','72','76'];
let melodia4 = [f1, b2, c2, a1, d2];
//melodia 5
let validate5 = ['83','75','71','72','88'];
let melodia5 = [d1, c2, g1, a1, f2];
//melodia 6
let validate6 = ['78','68','88','75','72'];
let melodia6 = [c3, e1, f2, c2, a1];




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
  texto.innerHTML = "";
  it = 0;
  user = [];
 }

function stop2(){
  let btn_game = document.getElementById('melody2');
  btn_game.classList.remove('gamewin');
  btn_game.classList.remove('gameOver');
  btn_game.classList.remove('botn2play');
  btn_game.innerHTML = 2;
  texto.innerHTML = "";
  it = 0;
  user = [];
 }

 function stop3(){
  let btn_game = document.getElementById('melody3');
  btn_game.classList.remove('gamewin');
  btn_game.classList.remove('gameOver');
  btn_game.classList.remove('botn3play');
  btn_game.innerHTML = 3;
  texto.innerHTML = "";
  it = 0;
  user = [];
 }

 function stop4(){
  let btn_game = document.getElementById('melody4');
  btn_game.classList.remove('gamewin');
  btn_game.classList.remove('gameOver');
  btn_game.classList.remove('botn4play');
  btn_game.innerHTML = 4;
  texto.innerHTML = "";
  it = 0;
  user = [];
 }

 function stop5(){
  let btn_game = document.getElementById('melody5');
  btn_game.classList.remove('gamewin');
  btn_game.classList.remove('gameOver');
  btn_game.classList.remove('botn5play');
  btn_game.innerHTML = 5;
  texto.innerHTML = "";
  it = 0;
  user = [];
 }

 function stop6(){
  let btn_game = document.getElementById('melody6');
  btn_game.classList.remove('gamewin');
  btn_game.classList.remove('gameOver');
  btn_game.classList.remove('botn6play');
  btn_game.innerHTML = 6;
  texto.innerHTML = "";
  it = 0;
  user = [];
 }

let it = 0;
let user =[];

/// Validacion primera melodia 

function check1(e){
  let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
  let val = key.dataset.key;
  let btn_game = document.getElementById('melody1');
      

  user.push(val);
  // console.log(user);
  // console.log(btn_game);
  if(user[it] !== validate1[it]){
    // console.log('perdiste');
    it = 0;
    user = [];
    

    btn_game.classList.add('gameOver');
    btn_game.innerHTML = "Game Over";
    // console.log(btn_game);
    window.removeEventListener('keydown', check1);
    setTimeout(stop, 3000);
        
  }else if(user.length === validate1.length){
    // console.log('ganaste');
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
  let btn_game = document.getElementById('melody2');
      
  // console.log(key.dataset.key)
  user.push(val);
  // console.log(user);
  // console.log(btn_game);
  if(user[it] !== validate2[it]){
    // console.log('perdiste');
    it = 0;
    user = [];
    
    //Boton de reset ROJO regresar al home, falta agregar
    btn_game.classList.add('gameOver');
    btn_game.innerHTML = "Game Over";
    // console.log(btn_game);
    window.removeEventListener('keydown', check2);
    setTimeout(stop2, 3000);
        
  }else if(user.length === validate2.length){
    // console.log('ganaste');
    //Boton de reset VERDE regresar al home, falta agregar
    btn_game.innerHTML = "Ganaste!!!";
    window.removeEventListener('keydown', check2);
    setTimeout(stop2, 3000);
  }
  it += 1;
  // console.log(it)
}

// validacion tercera melodia

function check3(e){
  let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
  let val = key.dataset.key;
  let btn_game = document.getElementById('melody3');
      
  // console.log(key.dataset.key)
  user.push(val);
  // console.log(user);
  // console.log(btn_game);
  if(user[it] !== validate3[it]){
    // console.log('perdiste');
    it = 0;
    user = [];
    
    //Boton de reset ROJO regresar al home, falta agregar
    btn_game.classList.add('gameOver');
    btn_game.innerHTML = "Game Over";
    // console.log(btn_game);
    window.removeEventListener('keydown', check3);
    setTimeout(stop3, 3000);
        
  }else if(user.length === validate3.length){
    // console.log('ganaste');
    //Boton de reset VERDE regresar al home, falta agregar
    btn_game.innerHTML = "Ganaste!!!";
    window.removeEventListener('keydown', check3);
    setTimeout(stop3, 3000);
  }
  it += 1;
  // console.log(it)
}

// validacion cuarta melodia

function check4(e){
  let key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
  let val = key.dataset.key;
  let btn_game = document.getElementById('melody4');
      
  // console.log(key.dataset.key)
  user.push(val);
  // console.log(user);
  // console.log(btn_game);
  if(user[it] !== validate4[it]){
    // console.log('perdiste');
    it = 0;
    user = [];
    
    //Boton de reset ROJO regresar al home, falta agregar
    btn_game.classList.add('gameOver');
    btn_game.innerHTML = "Game Over";
    // console.log(btn_game);
    window.removeEventListener('keydown', check4);
    setTimeout(stop4, 3000);
        
  }else if(user.length === validate4.length){
    // console.log('ganaste');
    //Boton de reset VERDE regresar al home, falta agregar
    btn_game.innerHTML = "Ganaste!!!";
    window.removeEventListener('keydown', check4);
    setTimeout(stop4, 3000);
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
  user.push(val);
  // console.log(user);
  // console.log(btn_game);
  if(user[it] !== validate5[it]){
    // console.log('perdiste');
    it = 0;
    user = [];
    
    //Boton de reset ROJO regresar al home, falta agregar
    btn_game.classList.add('gameOver');
    btn_game.innerHTML = "Game Over";
    // console.log(btn_game);
    window.removeEventListener('keydown', check5);
    setTimeout(stop5, 3000);
        
  }else if(user.length === validate5.length){
    // console.log('ganaste');
    //Boton de reset VERDE regresar al home, falta agregar
    btn_game.innerHTML = "Ganaste!!!";
    window.removeEventListener('keydown', check5);
    setTimeout(stop5, 3000);
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
  user.push(val);
  // console.log(user);
  // console.log(btn_game);
  if(user[it] !== validate6[it]){
    // console.log('perdiste');
    it = 0;
    user = [];
    
    //Boton de reset ROJO regresar al home, falta agregar
    btn_game.classList.add('gameOver');
    btn_game.innerHTML = "Game Over";
    // console.log(btn_game);
    window.removeEventListener('keydown', check6);
    setTimeout(stop6, 3000);
        
  }else if(user.length === validate6.length){
    // console.log('ganaste');
    //Boton de reset VERDE regresar al home, falta agregar
    btn_game.innerHTML = "Ganaste!!!";
    window.removeEventListener('keydown', check6);
    setTimeout(stop6, 3000);
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
    btn_game.innerHTML = "Playing"

}

function melody02(){
    play5teclas(...melodia2);
    window.addEventListener('keydown', check2);
    let btn_game = document.getElementById('melody2');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn2play')
    btn_game.innerHTML = "Playing"

}

function melody03(){
    play5teclas(...melodia3);
    window.addEventListener('keydown', check3);
    let btn_game = document.getElementById('melody3');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn3play')
    btn_game.innerHTML = "Playing"

}

function melody04(){
    play5teclas(...melodia4);
    window.addEventListener('keydown', check4);
    let btn_game = document.getElementById('melody4');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn4play')
    btn_game.innerHTML = "Playing"
    


}

function melody05(){
    play5teclas(...melodia5);
    window.addEventListener('keydown', check5);
    let btn_game = document.getElementById('melody5');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn5play')
    btn_game.innerHTML = "Playing"

}

function melody06(){
    play5teclas(...melodia6);
    window.addEventListener('keydown', check6);
    let btn_game = document.getElementById('melody6');
    btn_game.classList.remove('gameOver')
    btn_game.classList.add('botn6play')
    btn_game.innerHTML = "Playing"

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
