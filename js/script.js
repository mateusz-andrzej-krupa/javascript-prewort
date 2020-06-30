{
const playGame = function (playerInput) {
  clearMessages();
  const getMoveName = function (argMoveId){
    if(argMoveId == 1){
      const kamień = document.getElementById('rock');
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

  const displayResult = function (argComputerMove, argPlayerMove){
    console.log('jesli to wydzisz to funkcja sie wykonuje!', 'komp>>>', argComputerMove, ' ty>>>', argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      score = 'Wygrałeś :)';
    }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'nozyczki'){
      score = 'Przegrałeś :*(';
      }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      score = 'Remis :|';
      }
    else if(argComputerMove == 'nozyczki' && argPlayerMove == 'nozyczki'){
      score = 'Remis :|';
      }
    else if(argComputerMove == 'nozyczki' && argPlayerMove == 'papier'){
      score = 'Przegrałeś :*(';
      }
    else if(argComputerMove == 'nozyczki' && argPlayerMove == 'kamień'){
      score = 'Wygrałeś :)';
      }
    else if(argComputerMove == 'nozyczki' && argPlayerMove == 'nozyczki'){
      score = 'Przegrałeś :*(';
      }
    else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
      score = 'Remis :|';
      }
    else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      score = 'Przegrałeś :*(';
      }
    else if(argComputerMove == 'papier' && argPlayerMove == 'nozyczki'){
      score = 'Wygrałeś :)';
      }
    else {
      score = 'Nieznany ruch.';
    }
    printMessage(score);
    console.log('koniec funkcji displayResult');
    return score;
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);
    
  const argComputerMove = getMoveName(randomNumber);

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
      
  printMessageComp(argComputerMove); //Komputer wybrał;

  //let playerInput = prompt('Wybierz swój ruch: 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  const argPlayerMove = getMoveName(playerInput);

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
  //printMessage('Ty wybrałeś: ' + argPlayerMove);

  const wynik = displayResult(argComputerMove, argPlayerMove)

  console.log('wynik to: ' + wynik);

  //printMessage('Wynik gry (wyświetlone z końcówki kodu): ' + wynik);
}
//playGame(2);
document.getElementById('rock').addEventListener('click', function(){playGame(1);console.log('gracz nacisnal kamien');});
document.getElementById('paper').addEventListener('click', function(){playGame(2);console.log('gracz nacisnal papier');});
document.getElementById('scissors').addEventListener('click', function(){playGame(3);console.log('gracz nacisnal nozyczki')});
}