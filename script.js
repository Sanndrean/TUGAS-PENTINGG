const intro=document.querySelector('#intro'),party=document.querySelector('#party'),dontGo=document.querySelector('#dontGo'),btn=document.querySelector('#clickHere'),faces=document.querySelector('#faces');
let entered=false,hadFullscreen=false,goodbye=false;
for(let i=0;i<26;i++){const img=document.createElement('img');img.src='maxim.png';img.className='face';img.style.left=(Math.random()*94-2)+'%';img.style.top=(Math.random()*90)+'%';img.style.setProperty('--t',(1.2+Math.random()*2.5)+'s');img.style.animationDelay=(-Math.random()*2.5)+'s';faces.appendChild(img)}
const code=(' MAXIM.EXE 01001101 DEBORABORA ROOT_ACCESS BLUE_PROTOCOL 01101101 SYSTEM_OVERRIDE ACCESS_GRANTED ');document.querySelector('#codeRain').textContent=code.repeat(160);document.querySelector('#exitCode').textContent=(' ERROR MAXIM_DEBORABORA CONNECTION_LOST 010101 ACCESS_DENIED RECONNECTING ').repeat(180);
function showGoodbye(){if(!entered||goodbye)return;goodbye=true;party.classList.add('hidden');dontGo.classList.remove('hidden')}
btn.addEventListener('click',async()=>{entered=true;intro.classList.add('hidden');party.classList.remove('hidden');try{await document.documentElement.requestFullscreen();hadFullscreen=true}catch(e){hadFullscreen=false}});
document.addEventListener('fullscreenchange',()=>{if(document.fullscreenElement)hadFullscreen=true;else if(entered&&hadFullscreen)setTimeout(showGoodbye,80)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&entered)setTimeout(showGoodbye,100)});
window.addEventListener('beforeunload',e=>{if(entered&&!goodbye){e.preventDefault();e.returnValue=''}});
