console.log("Welcome to Spotify");

//intialise the variables

let songindex=0;
let masterplay= document.getElementById('masterplay');
let myprogressbar= document.getElementById('myprogressbar');
let gif= document.getElementById('gif'); 
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[

    {songnames: "Let's Always Blue-Legion",filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songnames: "Trap Cartel",filePath:"songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songnames: "They Mad-Lowenki Pesci",filePath:"songs/3.mp3" , coverPath:"covers/3.jpg"},
    {songnames: "Rich the Kid-Plug Walk",filePath:"songs/4.mp3" , coverPath:"covers/4.jpg"},
    {songnames: "Back It Up",filePath:"songs/5.mp3" , coverPath:"covers/6.jpg"},
    {songnames: "Ambient Piano &amp,Strings",filePath:"songs/6.mp3" , coverPath:"covers/13.jpg"},
    {songnames: "Water-Fluid",filePath:"songs/7.mp3" , coverPath:"covers/12.jpg"},

];

songitems.forEach((element,i)=>{
//    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText = songs[i].songnames;

})

let audioElement =new Audio;
audioElement.play();
//list to events
//handle play pause 
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {  audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');     
        gif.style.opacity=1; 
    }
    else 
    {  audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;     
    }
})

audioElement.addEventListener('timeupdate',()=>
{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('click',()=>{
audioElement.currentTime=(myprogressbar.value * audioElement.duration)/100;

})

 const makeallplay = ()=>{
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

})
}



Array.from(document.getElementsByClassName('startitemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
     makeallplay();
    //console.log(e.target);
    songindex=parseInt(e.target.id);
   
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');

audioElement.src=`songs/${songindex}.mp3`;
audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

})

document.getElementById('next').addEventListener('click',()=>{

if(songindex>7)
{
    songindex=0; 
}
else
{
    songindex+=1;
}
audioElement.src=`songs/${songindex}.mp3`;
audioElement.currentTime=0;
    audioElement.play();
-    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{

    if(songindex<=0)
    {
        songindex=0;
    }
    else
    {
        songindex+=1;
    }
    audioElement.src=`songs/${songindex}.mp3`;
    audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    
    })