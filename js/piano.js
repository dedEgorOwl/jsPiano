//whiteBtns
const C1 = document.getElementById('pianoBtnMainC1');
const D1 = document.getElementById('pianoBtnMainD1');
const E1 = document.getElementById('pianoBtnMainE1');
const F1 = document.getElementById('pianoBtnMainF1');
const G1 = document.getElementById('pianoBtnMainG1');
const A1 = document.getElementById('pianoBtnMainA1');
const B1 = document.getElementById('pianoBtnMainB1');
const C2 = document.getElementById('pianoBtnMainC2');
const D2 = document.getElementById('pianoBtnMainD2');
const E2 = document.getElementById('pianoBtnMainE2');
const F2 = document.getElementById('pianoBtnMainF2');
const G2 = document.getElementById('pianoBtnMainG2');
const A2 = document.getElementById('pianoBtnMainA2');
const B2 = document.getElementById('pianoBtnMainB2');
const C3 = document.getElementById('pianoBtnMainC3');
const D3 = document.getElementById('pianoBtnMainD3');
const E3 = document.getElementById('pianoBtnMainE3');

//blackBtns
const C1sharp = document.getElementById('Csharp');
const D1sharp = document.getElementById('Dsharp');
const F1sharp = document.getElementById('Fsharp');
const G1sharp = document.getElementById('Gsharp');
const A1sharp = document.getElementById('Asharp');
const C2sharp = document.getElementById('C2sharp');
const D2sharp = document.getElementById('D2sharp');
const F2sharp = document.getElementById('F2sharp');
const G2sharp = document.getElementById('G2sharp');
const A2sharp = document.getElementById('A2sharp');
const C3sharp = document.getElementById('C3sharp');
const D3sharp = document.getElementById('D3sharp');

//audiosWhite
const Csound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/C.wav');
const Dsound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/D.wav');
const Esound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/E.wav');
const Fsound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002890/piano/F.wav');
const Gsound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/G.wav');
const Asound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/A.wav');
const Bsound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/B.wav');

//audiosBlack
const CSsound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Cs.wav');
const DSsound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Ds.wav');
const FSsound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Fs.wav');
const GSsound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Gs.wav');
const ASsound = new Audio('https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/As.wav');

//whiteBtnsHandle
document.addEventListener("keydown", function(event) {
  if (event?.repeat) {
    return;
  }

  switch(event.key.toLowerCase()){
    case('q'):
      C1.classList.add('pianoBtnMainActive');
      new Audio(Csound.src).play();
      break;
    case('w'):
      D1.classList.add('pianoBtnMainActive');
      new Audio(Dsound.src).play();
      break;
    case('e1'):
      E1.classList.add('pianoBtnMainActive');
      new Audio(Esound.src).play();
      break;
    case('r'):
      F1.classList.add('pianoBtnMainActive');
      new Audio(Fsound.src).play();
      break;
    case('t'):
      G1.classList.add('pianoBtnMainActive');
      new Audio(Gsound.src).play();
      break;
    case('y'):
      A1.classList.add('pianoBtnMainActive');
      new Audio(Asound.src).play();
      break;
    case('u'):
      B1.classList.add('pianoBtnMainActive');
      new Audio(Bsound.src).play();
      break;
    case('i'):
      C2.classList.add('pianoBtnMainActive');
      new Audio(Csound.src).play();
      break;
    case('o'):
      D2.classList.add('pianoBtnMainActive');
      new Audio(Dsound.src).play();
      break;
    case('p'):
      E2.classList.add('pianoBtnMainActive');
      new Audio(Esound.src).play();
      break;
    case('['):
      F2.classList.add('pianoBtnMainActive');
      new Audio(Fsound.src).play();
      break;
    case(']'):
      G2.classList.add('pianoBtnMainActive');
      new Audio(Gsound.src).play();
      break;
    case('n'):
      A2.classList.add('pianoBtnMainActive');
      new Audio(Asound.src).play();
      break;
    case('m'):
      B2.classList.add('pianoBtnMainActive');
      new Audio(Bsound.src).play();
      break;
    case(','):
      C3.classList.add('pianoBtnMainActive');
      new Audio(Csound.src).play();
      break;
    case('.'):
      D3.classList.add('pianoBtnMainActive');
      new Audio(Dsound.src).play();
      break;
    case('/'):
      E3.classList.add('pianoBtnMainActive');
      new Audio(Esound.src).play();
      break;
  }
});
document.addEventListener("keyup", function(event) {
  switch(event.key.toLowerCase()) {
    case('q'):
      C1.classList.remove('pianoBtnMainActive');
      break;
    case('w'):
      D1.classList.remove('pianoBtnMainActive');
      break;
    case('e'):
      E1.classList.remove('pianoBtnMainActive');
      break;
    case('r'):
      F1.classList.remove('pianoBtnMainActive');
      break;
    case('t'):
      G1.classList.remove('pianoBtnMainActive');
      break;
    case('y'):
      A1.classList.remove('pianoBtnMainActive');
      break;
    case('u'):
      B1.classList.remove('pianoBtnMainActive');
      break;
    case('i'):
      C2.classList.remove('pianoBtnMainActive');
      break;
    case('o'):
      D2.classList.remove('pianoBtnMainActive');
      break;
    case('p'):
      E2.classList.remove('pianoBtnMainActive');
      break;
    case('['):
      F2.classList.remove('pianoBtnMainActive');
      break;
    case(']'):
      G2.classList.remove('pianoBtnMainActive');
      break;
    case('n'):
      A2.classList.remove('pianoBtnMainActive');
      break;
    case('m'):
      B2.classList.remove('pianoBtnMainActive');
      break;
    case(','):
      C3.classList.remove('pianoBtnMainActive');
      break;
    case('.'):
      D3.classList.remove('pianoBtnMainActive');
      break;
    case('/'):
      E3.classList.remove('pianoBtnMainActive');
      break;
  }
});

//blackbtns handle
document.addEventListener("keydown", function(event) {
  switch(event.key.toLowerCase()){
    case('1'):
      C1sharp.classList.add('pianoBtnSharpActive');
      new Audio(CSsound.src).play();
      break;
    case('2'):
      D1sharp.classList.add('pianoBtnSharpActive');
      new Audio(DSsound.src).play();
      break;
    case('3'):
      F1sharp.classList.add('pianoBtnSharpActive');
      new Audio(FSsound.src).play();
      break;
    case('4'):
      G1sharp.classList.add('pianoBtnSharpActive');
      new Audio(GSsound.src).play();
      break;
    case('5'):
      A1sharp.classList.add('pianoBtnSharpActive');
      new Audio(ASsound.src).play();
      break;
    case('6'):
      C2sharp.classList.add('pianoBtnSharpActive');
      new Audio(CSsound.src).play();
      break;
    case('7'):
      D2sharp.classList.add('pianoBtnSharpActive');
      new Audio(DSsound.src).play();
      break;
    case('8'):
      F2sharp.classList.add('pianoBtnSharpActive');
      new Audio(FSsound.src).play();
      break;
    case('9'):
      G2sharp.classList.add('pianoBtnSharpActive');
      new Audio(GSsound.src).play();
      break;
    case('0'):
      A2sharp.classList.add('pianoBtnSharpActive');
      new Audio(ASsound.src).play();
      break;
    case('-'):
      C3sharp.classList.add('pianoBtnSharpActive');
      new Audio(CSsound.src).play();
      break;
    case('='):
      D3sharp.classList.add('pianoBtnSharpActive');
      new Audio(DSsound.src).play();
      break;
  }
});
document.addEventListener("keyup", function(event) {
  switch(event.key.toLowerCase()){
    case('1'):
      C1sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('2'):
      D1sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('3'):
      F1sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('4'):
      G1sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('5'):
      A1sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('6'):
      C2sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('7'):
      D2sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('8'):
      F2sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('9'):
      G2sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('0'):
      A2sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('-'):
      C3sharp.classList.remove('pianoBtnSharpActive');
      break;
    case('='):
      D3sharp.classList.remove('pianoBtnSharpActive');
      break;
  }
});
