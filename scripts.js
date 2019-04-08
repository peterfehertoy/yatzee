var diceImages = document.querySelectorAll('img.dice');
var slots = document.querySelectorAll('div.slot');
var round = 3;
var globalRound = 0;
var dice = [0,0,0,0,0];
var selectDice = [0,0,0,0,0];
var sumDice = 0;
var finalResult = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var preResult = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var count = [0,0,0,0,0,0];
var pair = [0,0,0,0,0,0];
var terc = [0,0,0,0,0,0];
var poker = [0,0,0,0,0,0];
var kisSor = 0;
var yatzee = [0,0,0,0,0,0];
var snas = 0;
var finalResult = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var shakeAudio = new Audio('sound/shake.wav');
var rollAudio = new Audio('sound/roll.wav');
var putAudio = new Audio('sound/put.wav');


// START THE GAME
document.getElementById('round').innerHTML = '<p class="round_p">' + round + '</p>';

document.querySelector('.btn-roll').addEventListener('click', btnClick);
   
function btnClick () {
    if (round > 0 ){ 
        roll();  
        round = round - 1; 
        document.getElementById('round').innerHTML = '<p class="round_p">' + round + '</p>';
    }
};

function roll() {
    for (i=0; i < 5; i++) {
        if (selectDice[i] == 0 ){  
            // Dobás generálása
            dice[i] = Math.floor(Math.random() * 6) + 1; 
            diceImages[i].src = 'img/dice-' + dice[i] + '.png';                        
        }      
    } 
        // Kockát össz értéke
        sumDice = 0;
        for (var i = 0; i < dice.length; i++) {
            sumDice += dice[i]
        }  
        if (round == 3){
        mixerAnimation();
        }
        if (round !== 3){
            mixerAnimation2();
        }
}

// KOCKA KIVÁLASZTÁS, VISSZARAKÁS KURVÁRA EGYSZERŰSÍTENI

document.querySelector('#dice0').addEventListener('click', function() { 
    if (selectDice[0] == 0) {   
            putAudio.play();
            document.querySelector('#dice0').classList.add('pick'); selectDice[0] = dice[0];    
            document.getElementById('slot0').innerHTML = '<img src="img/dice-' + dice[0] + '.png" class="dice"></img>';
           zero();
            results();
            document.querySelector('#slot0').addEventListener('click', function() { 
                document.querySelector('#dice0').classList.remove('pick');  selectDice[0] = 0;
                document.getElementById('slot0').innerHTML = '';   
                zero();
                results();              
            });    
        }
});
document.querySelector('#dice1').addEventListener('click', function() { 
    if (selectDice[1] == 0) {   
        putAudio.play();
            document.querySelector('#dice1').classList.add('pick'); selectDice[1] = dice[1];    
            document.getElementById('slot1').innerHTML = '<img src="img/dice-' + dice[1] + '.png" class="dice"></img>';
            zero();
         
            results();
            document.querySelector('#slot1').addEventListener('click', function() { 
                document.querySelector('#dice1').classList.remove('pick');  selectDice[1] = 0;
                document.getElementById('slot1').innerHTML = '';       
                zero();
                results();          
        });
    };

});
document.querySelector('#dice2').addEventListener('click', function() { 
    if (selectDice[2] == 0) {  
        putAudio.play(); 
            document.querySelector('#dice2').classList.add('pick'); selectDice[2] = dice[2];    
            document.getElementById('slot2').innerHTML = '<img src="img/dice-' + dice[2] + '.png" class="dice"></img>';
            zero();
         
            results();
            document.querySelector('#slot2').addEventListener('click', function() { 
                document.querySelector('#dice2').classList.remove('pick');  selectDice[2] = 0;
                document.getElementById('slot2').innerHTML = '';  
                zero();
                results();               
            });    
        }
});
document.querySelector('#dice3').addEventListener('click', function() { 
    if (selectDice[3] == 0) {   
        putAudio.play();
            document.querySelector('#dice3').classList.add('pick'); selectDice[3] = dice[3];    
            document.getElementById('slot3').innerHTML = '<img src="img/dice-' + dice[3] + '.png" class="dice"></img>';
            zero();
            results();
            document.querySelector('#slot3').addEventListener('click', function() { 
                document.querySelector('#dice3').classList.remove('pick');  selectDice[3] = 0;
                document.getElementById('slot3').innerHTML = '';  
                zero();
                results();               
            });    
        }
});
document.querySelector('#dice4').addEventListener('click', function() { 
    if (selectDice[4] == 0) {   
        putAudio.play();
            document.querySelector('#dice4').classList.add('pick'); selectDice[4] = dice[4];    
            document.getElementById('slot4').innerHTML = '<img src="img/dice-' + dice[4] + '.png" class="dice"></img>';
            zero();
            results();
            document.querySelector('#slot4').addEventListener('click', function() { 
                document.querySelector('#dice4').classList.remove('pick');  selectDice[4] = 0;
                document.getElementById('slot4').innerHTML = '';    
                zero();
                results();             
            });    
        }
});

function zero(){
    count = [0,0,0,0,0,0];
    pair = [0,0,0,0,0,0];
    terc = [0,0,0,0,0,0];
    poker = [0,0,0,0,0,0];
    yatzee = [0,0,0,0,0,0];
};


function results(){  
    
// ÖSSZESZÁMOLJA MELYIK ÉrTÉKBŐL MENNYIT DOBTÁL
    for(var i = 0; i < 5; ++i){
        switch(selectDice[i]){  case 1: count[0]++;break;
                                case 2: count[1]++;break;
                                case 3: count[2]++;break;
                                case 4: count[3]++;break;
                                case 5: count[4]++;break;
                                case 6: count[5]++;break;
        } 
    }

// EREDÉNY FELISMERÉSE (Van e pár, terc, poker, yatze)
    for(var i = 0; i < 6; ++i){
          // Párok
        switch (count[i]){case 2: pair[i]=1;break;
                          case 3: pair[i]=1;break;
                          case 4: pair[i]=2;break;
                          case 5: pair[i]=2;break;                
        } // Tercek
        switch (count[i]){case 3: terc[i]=1;break;
            case 4: terc[i]=1;break;
            case 5: terc[i]=1;break;               
        } // Poker
        switch (count[i]){case 4: poker[i]=1;break;
            case 5: poker[i]=1;break;                             
        }//Yatzee
        switch (count[i]){case 5: yatzee[i]=1;break;                           
        }
    };
     
// EREDMÉNYLAPON VALÓ MEGJELENÍTÉS
    
    // FELSŐ SZEKCIÓ
    for(var i = 0; i < 6 ; ++i){
        if(count[i] != 0 && finalResult[i] == 0){
            document.getElementById([i]).innerHTML = '<p>' + ((i+1) * count[i]) + '</p>';
            preResult[i] = ((i+1) * count[i]);

        }
        if(count[i] == 0 && finalResult[i] == 0){
            document.getElementById([i]).innerHTML = '-';
            preResult[i] = 0;
        }
    }   


    // ALSÓ SZEKCIO
    for(var i = 0; i < 6 ; ++i){

    // TERC
        //var firstResult =[0,0,0,0,0];
        if (terc[i] != 0 && finalResult[6] == 0){
                document.getElementById('6').innerHTML = '<p>' + sumDice  + '</p>';
                preResult[6] = sumDice;
             //   firstResult[i] = 1;
            }
        if (terc[0]==0 && terc[1] == 0 && terc[2] == 0 && terc[3] == 0 && terc[4] == 0 && terc[5] == 0){
            document.getElementById('6').innerHTML = '-';
            preResult[6] = 0;
        }

    // POKER
        if (poker[i] != 0 && finalResult[7] == 0){
            document.getElementById('7').innerHTML = '<p>' + sumDice  + '</p>';
            preResult[7] = sumDice;
        }
        if (poker[0]==0 && poker[1] == 0 && poker[2] == 0 && poker[3] == 0 && poker[4] == 0 && poker[5] == 0){
        document.getElementById('7').innerHTML = '-';
        preResult[6] = 7;
        }

    // FULL HOUSE
        var fullHouse = [0,0,0,0,0,0]; 

        if (terc[0] == 1 && (pair[1] == 1|| pair[2] == 1 ||pair[3] == 1 ||pair[4] == 1 || pair[5] == 1 )){
            fullHouse =[1,0,0,0,0,0];
        }
        if (terc[1]  == 1 && (pair[0] == 1|| pair[2] == 1 ||pair[3] == 1 ||pair[4] == 1 || pair[5] == 1 )){
            fullHouse =[0,1,0,0,0,0];
        }
        if (terc[2]  == 1 && (pair[1] == 1|| pair[0] == 1 ||pair[3] == 1 ||pair[4] == 1 || pair[5] == 1 )){
            fullHouse =[0,0,1,0,0,0];
        }
        if (terc[3]  == 1 && (pair[1] == 1|| pair[2] == 1 ||pair[0] == 1 ||pair[4] == 1 || pair[5] == 1 )){
            fullHouse =[0,0,0,1,0,0];
        }
        if (terc[4]  == 1 && (pair[1] == 1|| pair[2] == 1 ||pair[3] == 1 ||pair[0] == 1 || pair[5] == 1 )){
            fullHouse =[0,0,0,0,1,0];
        }
        if (terc[5]  == 1 && (pair[1] == 1|| pair[2] == 1 ||pair[3] == 1 ||pair[4] == 1 || pair[0] == 1 )){
            fullHouse =[0,0,0,0,0,1];
        }
        if (fullHouse[i] != 0 && finalResult[8] == 0){
            document.getElementById('8').innerHTML = '<p>' + 25  + '</p>';
            preResult[8] = 25;
            
        }
        if (fullHouse[0]==0 && fullHouse[1] == 0 && fullHouse[2] == 0 && fullHouse[3] == 0 && fullHouse[4] == 0 && fullHouse[5] == 0){
        document.getElementById('8').innerHTML = '-';
        preResult[8] = 0;
        }
    }
    // KIS SOR
         if ( finalResult[9] == 0){       
            document.getElementById('9').innerHTML = '-';
            preResult[9] = 0;
        }   
        if (count[0]==1 && count[1]==1 && count[2]==1 && count[3]==1 && finalResult[9] == 0){       
            document.getElementById('9').innerHTML = '<p>' + 30  + '</p>';
            preResult[9] = 30;
        }
        if (count[1]==1 && count[2]==1 && count[3]==1 && count[4]==1 && finalResult[9] == 0){       
            document.getElementById('9').innerHTML = '<p>' + 30  + '</p>';
            preResult[9] = 30;
        }
        if (count[2]==1 && count[3]==1 && count[4]==1 && count[5]==1 && finalResult[9] == 0){       
            document.getElementById('9').innerHTML = '<p>' + 30  + '</p>';
            preResult[9] = 30;
        }
         
    // NAGY SOR
        if ( finalResult[10] == 0){
        document.getElementById('10').innerHTML = '-';
        preResult[10] = 0;
        }
        if ((count[0] != 0 && count[1] != 0 && count[2] != 0 && count[3] != 0 && count[4] != 0 && finalResult[9] == 0) ||
            (count[4] != 0 && count[1] != 0 && count[2] != 0 && count[3] != 0 && count[5] != 0 && finalResult[9] == 0) ){
            document.getElementById('10').innerHTML = '<p>' + 40  + '</p>';
            preResult[10] = 40;
        }
    // YATZEE
        if ( finalResult[11] == 0){
        document.getElementById('11').innerHTML = '-';
        preResult[11] = 0;
        }
        for(var i = 0; i < 6 ; ++i){
        if (yatzee[i] == 1){
            document.getElementById('11').innerHTML = '<p>' + 50  + '</p>';
            preResult[11] = 50;
        }
    };
    // Snassz
    if (selectDice[0] != 0 || selectDice[1] != 0 || selectDice[2] != 0 || selectDice[3] != 0 || selectDice[4] != 0 ||selectDice[5] != 0 && finalResult[12] == 0){
        document.getElementById('12').innerHTML =  '<p>' + (selectDice[0] + selectDice[1] + selectDice[2] + selectDice[3] + selectDice[4]) +'</p>';
        preResult[12] = (selectDice[0] + selectDice[1] + selectDice[2] + selectDice[3] + selectDice[4]);
    }

};
// EREDMÉNYEK BEÍRÁSA ÉS KIHÚZÁSA  EGYSZERŰSÍTENI!

document.getElementById(0).addEventListener('click', function (){  x = 0;  writeResult() });
document.getElementById(1).addEventListener('click', function (){  x = 1;  writeResult() });
document.getElementById(2).addEventListener('click', function (){  x = 2;  writeResult() });
document.getElementById(3).addEventListener('click', function (){  x = 3;  writeResult() });
document.getElementById(4).addEventListener('click', function (){  x = 4;  writeResult() });
document.getElementById(5).addEventListener('click', function (){  x = 5;  writeResult() });
document.getElementById(6).addEventListener('click', function (){  x = 6;  writeResult() });
document.getElementById(7).addEventListener('click', function (){  x = 7;  writeResult() });
document.getElementById(8).addEventListener('click', function (){  x = 8;  writeResult() });
document.getElementById(9).addEventListener('click', function (){  x = 9;  writeResult() });
document.getElementById(10).addEventListener('click', function (){  x = 10;  writeResult() });
document.getElementById(11).addEventListener('click', function (){  x = 11;  writeResult() });
document.getElementById(12).addEventListener('click', function (){  x = 12;  writeResult() });

function writeResult() {  
    if (finalResult[x] == 0 && preResult[x] != 0){
    document.getElementById(x).removeEventListener('click', writeResult);       
    document.getElementById(x).innerHTML = preResult[x];
    finalResult[x] = preResult[x]; 
    document.getElementById(x).classList.add("result"); 
    globalRound = ++globalRound ;
    console.log(globalRound); 
    newRound();     
    endGame(); 
}
    if (finalResult[x] == 0 && preResult[x] == 0){
            document.getElementById(x).innerHTML = 'x';
            finalResult[x] = 'x';   
            document.getElementById(x).classList.add("resultx");     
            document.getElementById(x).removeEventListener('click', writeResult);  
            globalRound = ++globalRound ;
            console.log(globalRound); 
            newRound();   
            endGame();       
    }
};

function newRound(){

    for(var i = 0; i < 13 ; ++i){
        if (finalResult[i] === 0){
            document.getElementById(i).innerHTML =  '' ;
        };
    };

    round = 3;
    dice = [0,0,0,0,0];
    selectDice = [0,0,0,0,0];
    preResult = [0,0,0,0,0,0,0,0,0,0,0,0,0];

    document.getElementById('round').innerHTML = '<p class="round_p">' + round + '</p>';

    diceAnimationBack ();
    
    document.querySelector('#dice0').classList.remove('pick');  selectDice[0] = 0;
    document.getElementById('slot0').innerHTML = '';  
    document.querySelector('#dice1').classList.remove('pick');  selectDice[0] = 0;
    document.getElementById('slot1').innerHTML = '';  
    document.querySelector('#dice2').classList.remove('pick');  selectDice[0] = 0;
    document.getElementById('slot2').innerHTML = '';  
    document.querySelector('#dice3').classList.remove('pick');  selectDice[0] = 0;
    document.getElementById('slot3').innerHTML = '';  
    document.querySelector('#dice4').classList.remove('pick');  selectDice[0] = 0;
    document.getElementById('slot4').innerHTML = '';  
};

function endGame(){
    if (globalRound === 13) {
        alert("VÉGE A JÁTÉKNAK PONTOZÁS DESIGN KÉSŐBB...");
    }
}















