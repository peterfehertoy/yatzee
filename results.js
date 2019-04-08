var selectDice = [2,2,4,4,6];
var count = [0,0,0,0,0,0];
var pair = [0,0,0,0,0,0];
var terc = [0,0,0,0,0,0];
var poker = [0,0,0,0,0,0];
var yatzee = [0,0,0,0,0,0];
var snas = 0;



// Egyes dobókockákból mennyi van ?
for(var i = 0; i < selectDice.length; ++i){
    switch(selectDice[i]){  case 1: count[0]++;break;
                            case 2: count[1]++;break;
                            case 3: count[2]++;break;
                            case 4: count[3]++;break;
                            case 5: count[4]++;break;
                            case 6: count[5]++;break;
    } // Snassz meghatározása
    snas += selectDice[i];
};


// KOMBINÁCIÓK KISZÁMÍTÁSA
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
    

console.log('Kijelölt kockák : ' + selectDice);
console.log('Melyik kockából mennyi van : ' + count);

// Kombináció eredményeinek kiírása
    for(var i = 0; i < 6; ++i){
        if(count[i] != 0){
            console.log([i + 1] + ' ) kockából: ' + count[i] + ' db van. Pontja: ' + (count[i] * (i+1)));
        }
        if (pair[i] != 0){
            console.log([i + 1] + ' ) pár: ' + pair[i] + ' db van. Pontja: ' +  2 *[i+1] * pair[i]);
        }
        if (terc[i] != 0){
            console.log([i + 1] + ' ) terc: ' + terc[i] + ' db van. Pontja: ' + terc[i] * (count[i] * (i+1)));
        }
        if (terc[i] != 0 && pair[i] != 0 && poker[i] == 0){
            console.log([i + 1] + ' ) Full House: ' + terc[i] + ' db van. Pontja: ' + 25);
        }
        if (poker[i] != 0 ){
            console.log([i + 1] + ' ) Poker: ' + poker[i] + ' db van. Pontja: ' + (4 * (i + 1)));
        }
        if (yatzee[i] != 0 ){
            console.log([i + 1] + ' ) Yatzee: ' + yatzee[i] + ' db van. Pontja: ' + 50);
        }
        if (count[0] != 0 && count[1] != 0 && count[2] != 0 && count[3] != 0  && count[4] != 0 ){
            console.log( 'Kis Sor 1 db van. Pontja: ' + 30);
        }
        if (count[1] != 0 && count[2] != 0 && count[3] != 0 && count[4] != 0 && count[5] != 0) {
            console.log( 'Nagy Sor 1 db van. Pontja: ' + 40);
        }
};
console.log('A Snasz Pontja : ' + snas);
console.log('**************************************************');