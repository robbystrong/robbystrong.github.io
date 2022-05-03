const button=document.getElementById('js-ip');

const txt=document.getElementById('js-txt');

button.addEventListener('click',getImg);

async function getImg()
{
  console.log('button click');
  document.querySelector('#js-txt').textContent="";
  txt.style.opacity=0;
  try
  {
    const response=await fetch(endpoint);

    if(!response.ok)
    {
      throw Error(response.statusText);
    }
    const json=await response.json();
    console.log(json);
    displayIp(json.ip);
  }

  catch(err)
  {
    console.log(err);
    alert('failed');
  }
}

function displayIp(ip)
{
  const ippp = document.querySelector('#js-txt');
  ippp.textContent = ip;
  txt.style.opacity=1;
}

const endpoint = 'https://ip-fast.com/api/ip/?format=json';

// button.addEventListener('click',function()
// {
//   fetch("https://random.dog/woof.json")
//   .then(res=>res.json())
//   .then(result=>
//     {
//       console.log(result)
//       image.src=result.message
//     })
//     .catch(err=>console.log(err))
// })
