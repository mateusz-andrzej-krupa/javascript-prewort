function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nozyczki';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove){
  console.log('jesli to wydzisz to funkcja sie wykonuje!', 'komp>>>', argComputerMove, ' ty>>>', argPlayerMove);
  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    score = 'Ty wygrywasz';
  }
  else if(argComputerMove == 'kamień' && argPlayerMove == 'nozyczki'){
    score = 'Wygrał komputer!';
    }
  else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    score = 'Remis';
    }
  else if(argComputerMove == 'nozyczki' && argPlayerMove == 'nozyczki'){
    score = 'Remis';
    }
  else if(argComputerMove == 'nozyczki' && argPlayerMove == 'papier'){
    score = 'Wygrał komputer!';
    }
  else if(argComputerMove == 'nozyczki' && argPlayerMove == 'kamień'){
    score = 'Ty wygrywasz!';
    }
  else if(argComputerMove == 'nozyczki' && argPlayerMove == 'nozyczki'){
    score = 'Wygrał komputer!';
    }
  else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    score = 'Remis';
    }
  else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    score = 'Wygrał komputer!';
    }
  else if(argComputerMove == 'papier' && argPlayerMove == 'nozyczki'){
    score = 'Ty wygrywasz!';
    }
  else {
    score = 'Nieznany ruch.';
  }
  printMessage('Wynik (wyswietlone z poziomu funkcji): ' + score);
  console.log('koniec funkcji displayResult');
  return score;
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);
  
let argComputerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
  computerMove = 'papier';
}
else if (randomNumber == 3){
  computerMove = 'nozyczki';
}
*/
     
printMessage('Komputer wylosował: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch: 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
  }
else if(playerInput == '3'){
    playerMove = 'nozyczki';
  }
*/
printMessage('Ty wybrałeś: ' + argPlayerMove);

var wynik = displayResult(argComputerMove, argPlayerMove)

console.log('wynik to: ' + wynik);

printMessage('Wynik gry (wyświetlone z końcówki kodu): ' + wynik);

//za duzo tego kodu ponizej , wiem ze da sie to wpisac w trzy petle, jeszcze nie widze rozwiazania
/*
if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if(computerMove == 'kamień' && playerMove == 'nozyczki'){
    printMessage('Wygrał komputer!');
  }
else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
  }noto
else if(computerMove == 'nozyczki' && playerMove == 'nozyczki'){
    printMessage('Remis');
  }
else if(computerMove == 'nozyczki' && playerMove == 'papier'){
    printMessage('Wygrał komputer!');
  }
else if(computerMove == 'nozyczki' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
else if(computerMove == 'nozyczki' && playerMove == 'nozyczki'){
    printMessage('Wygrał komputer!');
  }
else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
  }
else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrał komputer!');
  }
else if(computerMove == 'papier' && playerMove == 'nozyczki'){
    printMessage('Ty wygrywasz!');
  }
else {
    printMessage('Nieznany ruch.');
  }
  */