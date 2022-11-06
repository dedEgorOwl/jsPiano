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
  if (event.key == 'q' || event.key == 'Q') {
    C1.classList.add('pianoBtnMainActive');
		Csound.load();
		Csound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 'q' || event.key == 'Q') {
    C1.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == 'w' || event.key == 'W') {
    D1.classList.add('pianoBtnMainActive');
		Dsound.load();
		Dsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 'w' || event.key == 'W') {
    D1.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == 'e' || event.key == 'E') {
    E1.classList.add('pianoBtnMainActive');
		Esound.load();
		Esound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 'e' || event.key == 'E') {
    E1.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == 'r' || event.key == 'R') {
    F1.classList.add('pianoBtnMainActive');
		Fsound.load();
		Fsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 'r' || event.key == 'R') {
    F1.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == 't' || event.key == 'T') {
    G1.classList.add('pianoBtnMainActive');
		Gsound.load();
		Gsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 't' || event.key == 'T') {
    G1.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == 'y' || event.key == 'Y') {
    A1.classList.add('pianoBtnMainActive');
		Asound.load();
		Asound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 'y' || event.key == 'Y') {
    A1.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == 'u' || event.key == 'U') {
    B1.classList.add('pianoBtnMainActive');
		Bsound.load();
		Bsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 'u' || event.key == 'U') {
    B1.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == 'i' || event.key == 'I') {
    C2.classList.add('pianoBtnMainActive');
		Csound.load();
		Csound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 'i' || event.key == 'I') {
    C2.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == 'o' || event.key == 'O') {
    D2.classList.add('pianoBtnMainActive');
		Dsound.load();
		Dsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 'o' || event.key == 'O') {
    D2.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == 'p' || event.key == 'P') {
    E2.classList.add('pianoBtnMainActive');
		Esound.load();
		Esound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 'p' || event.key == 'P') {
    E2.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '[') {
    F2.classList.add('pianoBtnMainActive');
		Fsound.load();
		Fsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '[') {
    F2.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == ']') {
    G2.classList.add('pianoBtnMainActive');
		Gsound.load();
		Gsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == ']') {
    G2.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == 'Backslash') {
    A2.classList.add('pianoBtnMainActive');
		Asound.load();
		Asound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.code == "Backslash") {
    A2.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == 'm' || event.key == 'M') {
    B2.classList.add('pianoBtnMainActive');
		Bsound.load();
		Bsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == 'm' || event.key == 'M') {
    B2.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == ',') {
    C3.classList.add('pianoBtnMainActive');
		Csound.load();
		Csound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == ',') {
    C3.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '.') {
    D3.classList.add('pianoBtnMainActive');
		Dsound.load();
		Dsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '.') {
    D3.classList.remove('pianoBtnMainActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '/') {
    E3.classList.add('pianoBtnMainActive');
		Esound.load();
		Esound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '/') {
    E3.classList.remove('pianoBtnMainActive');
  }
});

//blackBtnsHandle
document.addEventListener("keydown", function(event) {
  if (event.key == '1') {
    C1sharp.classList.add('pianoBtnSharpActive');
		CSsound.load();
		CSsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '1') {
    C1sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '2') {
    D1sharp.classList.add('pianoBtnSharpActive');
		DSsound.load();
		DSsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '2') {
    D1sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '3') {
    F1sharp.classList.add('pianoBtnSharpActive');
		FSsound.load();
		FSsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '3') {
    F1sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '4') {
    G1sharp.classList.add('pianoBtnSharpActive');
		GSsound.load();
		GSsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '4') {
    G1sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '5') {
    A1sharp.classList.add('pianoBtnSharpActive');
		ASsound.load();
		ASsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '5') {
    A1sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '6') {
    C2sharp.classList.add('pianoBtnSharpActive');
		CSsound.load();
		CSsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '6') {
    C2sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '7') {
    D2sharp.classList.add('pianoBtnSharpActive');
		DSsound.load();
		DSsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '7') {
    D2sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '8') {
    F2sharp.classList.add('pianoBtnSharpActive');
		FSsound.load();
		FSsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '8') {
    F2sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '9') {
    G2sharp.classList.add('pianoBtnSharpActive');
		GSsound.load();
		GSsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '9') {
    G2sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '0') {
    A2sharp.classList.add('pianoBtnSharpActive');
		ASsound.load();
		ASsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '0') {
    A2sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '-') {
    C3sharp.classList.add('pianoBtnSharpActive');
		CSsound.load();
		CSsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '-') {
    C3sharp.classList.remove('pianoBtnSharpActive');
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key == '=') {
    D3sharp.classList.add('pianoBtnSharpActive');
		DSsound.load();
		DSsound.play();
  }
});
document.addEventListener("keyup", function(event) {
  if (event.key == '=') {
    D3sharp.classList.remove('pianoBtnSharpActive');
  }
});