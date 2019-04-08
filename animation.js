


function diceAnimationBack() {
 
    document.querySelector('.btn-roll').removeEventListener('click', btnClick);
    
    document.querySelector('#dice0').classList.add('dice0_animation_back');
    document.querySelector('#dice1').classList.add('dice1_animation_back');
    document.querySelector('#dice2').classList.add('dice2_animation_back');
    document.querySelector('#dice3').classList.add('dice3_animation_back');
    document.querySelector('#dice4').classList.add('dice4_animation_back');  

    document.querySelector('#dice0').classList.remove('dice0_final_position');
    document.querySelector('#dice1').classList.remove('dice1_final_position');
    document.querySelector('#dice2').classList.remove('dice2_final_position');
    document.querySelector('#dice3').classList.remove('dice3_final_position');
    document.querySelector('#dice4').classList.remove('dice4_final_position');  

    document.querySelector('#mixer').classList.add('mixer_rotate');

setTimeout(function(){

        document.querySelector('#dice0').style.opacity = 0; ;
        document.querySelector('#dice1').style.opacity = 0; ;
        document.querySelector('#dice2').style.opacity = 0; ;
        document.querySelector('#dice3').style.opacity = 0; ;
        document.querySelector('#dice4').style.opacity = 0; ;  


        document.querySelector('#dice0').classList.add('dice_basic_position');
        document.querySelector('#dice1').classList.add('dice_basic_position');
        document.querySelector('#dice2').classList.add('dice_basic_position');
        document.querySelector('#dice3').classList.add('dice_basic_position');
        document.querySelector('#dice4').classList.add('dice_basic_position');  

    document.querySelector('#dice0').classList.remove('dice0_animation_back');
    document.querySelector('#dice1').classList.remove('dice1_animation_back');
    document.querySelector('#dice2').classList.remove('dice2_animation_back');
    document.querySelector('#dice3').classList.remove('dice3_animation_back');
    document.querySelector('#dice4').classList.remove('dice4_animation_back');  

    document.querySelector('#mixer').classList.remove('mixer_rotate');      
    }, 450);

    setTimeout(function(){

        document.querySelector('.btn-roll').addEventListener('click', btnClick);
    }, 550);
 
}

function mixerAnimation() {

    document.querySelector('.btn-roll').removeEventListener('click', btnClick);  
    document.querySelector('#mixer').classList.add('mixer_animation');
    shakeAudio.play();    

    setTimeout(function(){
        document.querySelector('#mixer').classList.remove('mixer_animation');
       
    }, 1200);

    setTimeout(function(){

        document.querySelector('#dice0').style.opacity = 1; 
        document.querySelector('#dice1').style.opacity = 1; 
        document.querySelector('#dice2').style.opacity = 1; 
        document.querySelector('#dice3').style.opacity = 1; 
        document.querySelector('#dice4').style.opacity = 1;  

        document.querySelector('#dice0').classList.remove('dice_basic_position');
        document.querySelector('#dice1').classList.remove('dice_basic_position');
        document.querySelector('#dice2').classList.remove('dice_basic_position');
        document.querySelector('#dice3').classList.remove('dice_basic_position');
        document.querySelector('#dice4').classList.remove('dice_basic_position');  

        document.querySelector('#dice0').classList.add('dice0_animation');
        document.querySelector('#dice1').classList.add('dice1_animation');
        document.querySelector('#dice2').classList.add('dice2_animation');
        document.querySelector('#dice3').classList.add('dice3_animation');
        document.querySelector('#dice4').classList.add('dice4_animation');    

        document.querySelector('#mixer').classList.add('mixer_rotate');
   
        rollAudio.play();
    }, 1200);

    setTimeout(function(){
        
        document.querySelector('#dice0').classList.add('dice0_final_position');
        document.querySelector('#dice1').classList.add('dice1_final_position');
        document.querySelector('#dice2').classList.add('dice2_final_position');
        document.querySelector('#dice3').classList.add('dice3_final_position');
        document.querySelector('#dice4').classList.add('dice4_final_position');  

        document.querySelector('#mixer').classList.remove('mixer_rotate');

        document.querySelector('#dice0').classList.remove('dice0_animation_back');
        document.querySelector('#dice1').classList.remove('dice1_animation_back');
        document.querySelector('#dice2').classList.remove('dice2_animation_back');
        document.querySelector('#dice3').classList.remove('dice3_animation_back');
        document.querySelector('#dice4').classList.remove('dice4_animation_back'); 
        
    }, 1700);

    setTimeout(function(){

        document.querySelector('#dice0').classList.remove('dice0_animation');
        document.querySelector('#dice1').classList.remove('dice1_animation');
        document.querySelector('#dice2').classList.remove('dice2_animation');
        document.querySelector('#dice3').classList.remove('dice3_animation');
        document.querySelector('#dice4').classList.remove('dice4_animation'); 

        document.querySelector('.btn-roll').addEventListener('click', btnClick);
    }, 2200);

}
    
function mixerAnimation2() {
  
    document.querySelector('.btn-roll').removeEventListener('click', btnClick);
    
    document.querySelector('#dice0').classList.add('dice0_animation_back');
    document.querySelector('#dice1').classList.add('dice1_animation_back');
    document.querySelector('#dice2').classList.add('dice2_animation_back');
    document.querySelector('#dice3').classList.add('dice3_animation_back');
    document.querySelector('#dice4').classList.add('dice4_animation_back');  

    document.querySelector('#dice0').classList.remove('dice0_final_position');
    document.querySelector('#dice1').classList.remove('dice1_final_position');
    document.querySelector('#dice2').classList.remove('dice2_final_position');
    document.querySelector('#dice3').classList.remove('dice3_final_position');
    document.querySelector('#dice4').classList.remove('dice4_final_position');  

    document.querySelector('#mixer').classList.add('mixer_rotate');

    setTimeout(function(){

        document.querySelector('#dice0').style.opacity = 0; ;
        document.querySelector('#dice1').style.opacity = 0; ;
        document.querySelector('#dice2').style.opacity = 0; ;
        document.querySelector('#dice3').style.opacity = 0; ;
        document.querySelector('#dice4').style.opacity = 0; ;  

        document.querySelector('#dice0').classList.add('dice_basic_position');
        document.querySelector('#dice1').classList.add('dice_basic_position');
        document.querySelector('#dice2').classList.add('dice_basic_position');
        document.querySelector('#dice3').classList.add('dice_basic_position');
        document.querySelector('#dice4').classList.add('dice_basic_position');  

        document.querySelector('#mixer').classList.remove('mixer_rotate');      
    }, 500);

    setTimeout(function(){
       
        document.querySelector('#dice0').classList.remove('dice0_animation');
        document.querySelector('#dice1').classList.remove('dice1_animation');
        document.querySelector('#dice2').classList.remove('dice2_animation');
        document.querySelector('#dice3').classList.remove('dice3_animation');
        document.querySelector('#dice4').classList.remove('dice4_animation');  

        document.querySelector('#dice0').classList.remove('dice0_animation_back');
        document.querySelector('#dice1').classList.remove('dice1_animation_back');
        document.querySelector('#dice2').classList.remove('dice2_animation_back');
        document.querySelector('#dice3').classList.remove('dice3_animation_back');
        document.querySelector('#dice4').classList.remove('dice4_animation_back');  
       
        document.querySelector('#mixer').classList.add('mixer_animation'); 
    }, 800);

    setTimeout(function(){

        document.querySelector('#mixer').classList.remove('mixer_animation');
        document.querySelector('#mixer').classList.add('mixer_rotate');

        document.querySelector('#dice0').style.opacity = 1; 
        document.querySelector('#dice1').style.opacity = 1; 
        document.querySelector('#dice2').style.opacity = 1; 
        document.querySelector('#dice3').style.opacity = 1; 
        document.querySelector('#dice4').style.opacity = 1;  

        document.querySelector('#dice0').classList.add('dice0_animation');
        document.querySelector('#dice1').classList.add('dice1_animation');
        document.querySelector('#dice2').classList.add('dice2_animation');
        document.querySelector('#dice3').classList.add('dice3_animation');
        document.querySelector('#dice4').classList.add('dice4_animation');   
       
    }, 1500);
    setTimeout(function(){
    document.querySelector('#dice0').classList.remove('dice_basic_position');
    document.querySelector('#dice1').classList.remove('dice_basic_position');
    document.querySelector('#dice2').classList.remove('dice_basic_position');
    document.querySelector('#dice3').classList.remove('dice_basic_position');
    document.querySelector('#dice4').classList.remove('dice_basic_position');  
    }, 1400);

    setTimeout(function(){
        document.querySelector('#dice0').classList.add('dice0_final_position');
        document.querySelector('#dice1').classList.add('dice1_final_position');
        document.querySelector('#dice2').classList.add('dice2_final_position');
        document.querySelector('#dice3').classList.add('dice3_final_position');
        document.querySelector('#dice4').classList.add('dice4_final_position');  

        document.querySelector('#dice0').classList.remove('dice0_animation');
        document.querySelector('#dice1').classList.remove('dice1_animation');
        document.querySelector('#dice2').classList.remove('dice2_animation');
        document.querySelector('#dice3').classList.remove('dice3_animation');
        document.querySelector('#dice4').classList.remove('dice4_animation'); 
        
        document.querySelector('#mixer').classList.remove('mixer_rotate');

        document.querySelector('.btn-roll').addEventListener('click', btnClick);
    }, 2000);
};




