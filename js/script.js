let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);
  
let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
  computerMove = 'papier';
}
else if (randomNumber == 3){
  computerMove = 'nozyczki';
}
     
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
  }
else if(playerInput == '3'){
    playerMove = 'nozyczki';
  }
printMessage('Twój ruch to: ' + playerMove);
//za duzo tego kodu ponizej , wiem ze da sie to wpisac w trzy petle, jeszcze nie widze rozwiazania
if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if(computerMove == 'kamień' && playerMove == 'nozyczki'){
    printMessage('Wygrał komputer!');
  }
else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
  }
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
