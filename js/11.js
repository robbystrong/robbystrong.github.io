function buttonClicked()
{
  document.getElementById('button').classList.toggle('transfooorm');
  document.getElementById('button').classList.toggle('roootate');
  console.log('button clacked');
}

function windowLoaded()
{
  document.getElementById('button').addEventListener('click',buttonClicked);
}

window.onload=windowLoaded;
