
let runners = {
    dog: {
        "name": "dog",
        "id": "dog",
        "voice": "woof",
        "img": "dog.gif",
        "step": 50,
        "end point":0
    },
    horse: {
        "name": "horse",
        "id": "horse",
        "voice": "neigh",
        "img": "horse.gif",
        "step": 70,
        "end point":0
    },
    duck: {
        "name": "duck",
        "id": "duck",
        "voice": "quack",
        "img": "duck.gif",
        "step": 40,
        "end point":0
    },
    chick: {
        "name": "chick",
        "id": "chick",
        "voice": "cheap",
        "img": "chick.gif",
        "step": 30,
        "end point":0
    }
};

let startBt=document.getElementById("startBt");
startBt.addEventListener("click",startGame);

let chooseBt=document.getElementById("chooseBt");
chooseBt.addEventListener("click",chooseAnimal);

let x;

let dogStepOriginal=50;
let horseStepOriginal=70;
let duckStepOriginal=40;
let chickStepOriginal=30;

//לחיצה על התחלת המשחק
function startGame(){
    let displayAnimal=document.getElementById("imgdiv");
    let displayEnd=document.getElementById("startGame");
    displayEnd.style="display: flex"
    displayAnimal.style="display: flex ; flex-direction:column;";
    setTimeout(function(){document.getElementById('chooseBt').style="display: flex";
    document.getElementById('label').style="display: flex";},800);
}

function chooseAnimal(){
    //בחירת חיה ברנדומליות
    let animalArr=[runners.dog,runners.horse,runners.duck,runners.chick];
    let random=Math.floor(Math.random()*4);

    //פה יש  את החיה הנבחרת
    let choosenAnimal=animalArr[random];

    //שמירה על עניין ואיזון בתחרות ע"י
    // עיכוב גדול יותר לחיה עם כמות צעדים גדולה יותר
    // עד להגעה של יעד מסוים מהמהירות המקורית בהתאמה
 switch (choosenAnimal.name) {
    case 'dog':
        if(choosenAnimal.step>dogStepOriginal/1.8)
        {
        choosenAnimal.step-=5;
        console.log(`choosesteps- ${choosenAnimal.step}`);
        }
        break;
         case 'horse':
         if(choosenAnimal.step>horseStepOriginal/2.3)
             {
        choosenAnimal.step-=10;
        console.log(`choosesteps- ${choosenAnimal.step}`);
        }
        break;
         case 'duck':
             if(choosenAnimal.step>duckStepOriginal/1.4)
             {
        choosenAnimal.step-=2;
        console.log(`choosesteps- ${choosenAnimal.step}`);
        }
        break;
         case 'chick':
             if(choosenAnimal.step>chickStepOriginal/1.2)
             {
        choosenAnimal.step-=1;
        console.log(`choosesteps- ${choosenAnimal.step}`);
        }

 }
    
    //פה מקדם את מס' הצעדים שנצברו לחיה
     choosenAnimal["end point"]+=choosenAnimal.step;
    document.getElementById("choosenAnimal").innerHTML=`<b>${choosenAnimal.name}</b> and he went <b>${choosenAnimal["end point"]}</b> steps`;

     //בדיקה האם החיה הגיעה ליעד או לא, אם לא- ממשיך לקדם. אם כן- מפסיקה התחרות ומכריזים מי המנצח
    if(choosenAnimal["end point"]<=1000){
      console.log(choosenAnimal["end point"],choosenAnimal.name);
      setTimeout(function()
      {
         document.getElementById(`${choosenAnimal.name}`).style=`transform: translate(${choosenAnimal["end point"]}px);`;
         x=document.getElementById(`audio${choosenAnimal.name}`);
         playVoice(x);
        setTimeout(pauseVoice,1500) ;
      }
      ,1000);
   
    }else{
        console.log(choosenAnimal["end point"],choosenAnimal.name);
        document.getElementById(`${choosenAnimal.name}`).style=`transform: translate(${choosenAnimal["end point"]}px);`;
        x=document.getElementById(`audio${choosenAnimal.name}`);
        playVoice(x);
        
        document.getElementById("win").innerHTML=`Congratulations! The ${choosenAnimal.name} is win!!!`;
        chooseBt.style.display="none";
    }

}

//השמעת קול החיה
    function playVoice(x){
     x.play();
    }

    function pauseVoice(){
     x.pause();
    }

