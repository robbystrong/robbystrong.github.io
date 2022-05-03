var songs=["https://www.youtube.com/embed/_MwCNkiWe_A","https://www.youtube.com/embed/JoxdbbpndxA","https://www.youtube.com/embed/KRp6bbt1HBI","https://www.youtube.com/embed/805xuL3fmYo","https://www.youtube.com/embed/41hw9A5209Y"]
  // [","./musik/caprichio.mp4","./musik/lagrima.mp4","./musik/pavana.mp4","./musik/sor.mp4"]

var prevVal=undefined;

function buttonClicked()
{
  console.log(prevVal);
  if(prevVal==undefined)
  {
    var random=Math.floor((Math.random()*songs.length));
  }
  else
  {
    var random=Math.floor((Math.random()*songs.length));

    if(random==prevVal)
    {
      while(random==prevVal)
      {
        random=Math.floor((Math.random()*songs.length));
      }
    }
  }
  prevVal=random;
  var smileyFace=document.getElementById('songVid');
  var info=document.getElementById('songInfo');
  if(random==0)
  {
    info.innerText='This is Adelita.';
  }
  else if(random==1)
  {
    info.innerText='This is Capricho arabe. I am aware that it needs a lot of work, but I think it is still enjoyable to listen to, flops and all.';
  }
  else if(random==2)
  {
    info.innerText='This is Lágrima, Spanish for "tear".'
  }
  else if(random==3)
  {
    info.innerText='This is Pavana.';
  }
  else if(random==4)
  {
    info.innerText='This one has a funny name. It is Op. 31, No. 2, Andante.';
  }
  smileyFace.src=songs[random];
  console.log(random);
  console.log('button clacked');
}

function windowLoaded()
{
  document.getElementById('music-box').addEventListener('click',buttonClicked);
}

window.onload=windowLoaded;
