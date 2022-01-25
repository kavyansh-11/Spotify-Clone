let index=0;
let audio=new Audio("tumse bhi zyada.mp3");
let masterPlay=document.getElementById('songPlaying');
let progressBar=document.getElementById("progress");
let arr=["tumse bhi zyada","mera yaar","tujhe kitna chahne lage","bekhayali","let me love you","naatu naatu","faded","jugnu"];
let songName=["Tumse Bhi Zyada","Mera Yaar","Tujhe Kitna Chahne Lage","Bekhayali","Let Me Love You","Naatu Naatu","Faded","Jugnu"];
masterPlay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0)
    {
        audio.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add("fa-pause-circle");
        // songitem.classList.remove('fa-play-circle');
        // songitem.classList.add("fa-pause-circle");
        document.getElementById('gifOpacity').style.display="inline";
        document.getElementById("gifOpacity").style.opacity="1";
    }
    else
    {
        audio.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        // songitem.classList.remove('fa-play-circle');
        // songitem.classList.add("fa-pause-circle");
        document.getElementById('gifOpacity').style.display="none";
        document.getElementById("gifOpacity").style.opacity="0";
    }
})

audio.addEventListener('timeupdate',()=>{
    let progressValue=((audio.currentTime/audio.duration)*100);
    progressBar.value=progressValue;
    if(progressValue==100)
    {
        audio.currentTime=0;
        index=index+1;
    let len=document.querySelectorAll('.song').length;
    console.log(len);
    if(index>=len)
    {
        index=len-1;
    }
    document.getElementById('songTitle').innerHTML=songName[index];
    audio.currentTime=0;
    audio.src=arr[index]+".mp3";
    audio.play();
    }
});

progressBar.addEventListener('change',()=>{
    audio.currentTime=(progressBar.value * audio.duration)/100;
})

// arr.forEach((e)=>{
//     console.log(e);
// })


for(let element of document.querySelectorAll('.song'))
{
    element.addEventListener('click',function(e){
        index=parseInt(e.target.id);
        let i;
        for(i=1;i<=document.querySelectorAll(".song").length;i++)
        {
            document.getElementById(index).style.opacity="1";
        }
        document.getElementById(index).style.opacity="0.4";
        index=index-1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        document.getElementById("gifOpacity").style.opacity="1";
        audio.currentTime=0;
        audio.src="C:/xampp new/htdocs/kavya/spotify songs/"+arr[index]+".mp3";
        audio.play();
        document.getElementById('songTitle').innerHTML=songName[index];
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById('gifOpacity').style.display="inline";
    })
}

document.getElementById('prev').addEventListener('click',function(){
    if(index>0)
    {
        document.getElementById(index+1).style.opacity="1";
        document.getElementById(index).style.opacity="0.4";
    }
    index=index-1;
    if(index<0)
    {
        index=0;
    }
    document.getElementById('songTitle').innerHTML=songName[index];
    document.getElementById("gifOpacity").style.opacity="1";
    document.getElementById('gifOpacity').style.display="inline";
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    audio.currentTime=0;
    audio.src=arr[index]+".mp3";
    audio.play();
    console.log(index);
})

document.getElementById('next').addEventListener('click',()=>{
    if(index<document.querySelectorAll('.song').length-1)
    {
        document.getElementById(index+1).style.opacity="1";
        document.getElementById(index+2).style.opacity="0.4";
    }
    index=index+1;
    let len=document.querySelectorAll('.song').length;
    console.log(len);
    if(index>=len)
    {
        index=len-1;
    }
    document.getElementById('songTitle').innerHTML=songName[index];
    document.getElementById("gifOpacity").style.opacity="1";
    document.getElementById('gifOpacity').style.display="inline";
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    audio.currentTime=0;
    audio.src=arr[index]+".mp3";
    audio.play();
})