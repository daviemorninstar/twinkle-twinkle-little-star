const bg=document.getElementById('stars');
for(let i=0;i<150;i++){
  const s=document.createElement('i');
  s.className='bg-star';
  s.style.left=Math.random()*100+'%';
  s.style.top=(-10+Math.random()*110)+'%';
  s.style.opacity=.2+Math.random()*.8;
  s.style.animationDuration=4+Math.random()*12+'s';
  s.style.animationDelay=-Math.random()*14+'s';
  const size=Math.random()<.15?3:2;
  s.style.width=size+'px';s.style.height=size+'px';
  bg.appendChild(s);
}

const screens=[...document.querySelectorAll('.screen')];
let current=0;
function show(n){
  screens[current].classList.remove('active');
  current=n;
  screens[current].classList.add('active');
  window.scrollTo(0,0);
}

const music=document.getElementById('bgMusic');
function startMusic(){
  music.volume=0;
  music.play().then(()=>{
    let v=0;
    const fade=setInterval(()=>{
      v=Math.min(.38,v+.02);
      music.volume=v;
      if(v>=.38)clearInterval(fade);
    },120);
  }).catch(()=>{});
}

document.getElementById('begin').onclick=()=>{
  startMusic();
  const fade=document.getElementById('fade');
  fade.style.opacity=.95;
  setTimeout(()=>show(1),850);
  setTimeout(()=>fade.style.opacity=0,1050);
};

const specialStar = document.getElementById('specialStar');
let specialStarUsed = false;

function openStory() {
  if (specialStarUsed) return;
  specialStarUsed = true;
  const fade = document.getElementById('fade');
  fade.style.opacity = '.55';

  setTimeout(() => show(2), 500);
  setTimeout(() => {
    fade.style.opacity = '0';
  }, 700);
}

specialStar.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  openStory();
}, { passive: false });

specialStar.addEventListener('click', (event) => {
  event.preventDefault();
  openStory();
});

document.querySelectorAll('.next').forEach(b=>{
  b.addEventListener('click',()=>{
    if(b.id==='finalButton') show(5);
    else show(Math.min(current+1,screens.length-1));
  });
});

const constellation=document.getElementById('constellation');
const found=document.getElementById('found');
const finalButton=document.getElementById('finalButton');

const positions=[[7,16],[20,34],[36,9],[53,23],[72,13],[88,31],[14,67],[29,51],[45,72],[63,56],[82,74],[93,51],[5,89],[25,87],[42,42],[58,88],[70,39],[80,91],[50,14],[35,88]];

const messages=[
"Мне нравится твоё дурацкое чувство юмора. Даже когда я закатываю глаза — я всё равно улыбаюсь.",
"Мне нравится, как ты смущаешься. В этом есть что-то невероятно милое.",
"Мне нравится, что ты можешь быть закрытым, но при этом оставаться искренним со мной.",
"Мне нравится, что ты не любишь насилие. В тебе есть мягкость, которую я очень ценю.",
"Мне нравится, что ты смешной. Иногда слишком смешной. Но именно поэтому с тобой хорошо.",
"Мне нравится, что ты учишься на медика. Я горжусь тобой и тем, сколько сил ты в это вкладываешь.",
"Мне нравится твоя целеустремлённость. Если ты решил чему-то научиться — ты действительно идёшь и учишься.",
"Мне нравится, что ты учишь немецкий, даже когда он явно решил усложнить тебе жизнь.",
"Мне нравится твой чёрный чай с молоком. Я не знаю почему, но это кажется мне очень твоим.",
"Мне нравятся огурцы. Не сами огурцы — а то, что у тебя есть свои маленькие странности.",
"Мне до сих пор смешно, что тебе нравятся ледоколы. Это глупенько. И именно поэтому я это люблю.",
"Мне нравится, что у тебя есть вещи, которые интересуют тебя просто потому, что интересуют.",
"Мне нравится твоя серьёзность в важных вещах.",
"Мне нравится, что за твоей закрытостью не пустота, а целый внутренний мир.",
"Мне нравится, что ты умеешь быть искренним даже тогда, когда тебе непросто.",
"Мне нравится, что наше знакомство было таким нелепым. Теперь эта нелепость стала началом чего-то настоящего.",
"Мне нравится называть тебя своим серьёзным мужчиной. В этом есть и нежность, и немного нашей собственной шутки.",
"Мне нравится, что всего за два месяца ты успел стать для меня настолько важным.",
"Мне нравится узнавать тебя дальше. Потому что я хочу знать, каким будет каждый следующий день рядом с тобой.",
"И самая главная: я люблю тебя не за список качеств. Я люблю тебя целиком. Именно тебя."
];

let count=0;
positions.forEach((p,i)=>{
  const b=document.createElement('button');
  b.className='constellation-star';
  b.textContent='✦';
  b.style.left=p[0]+'%';
  b.style.top=p[1]+'%';
  b.onclick=()=>{
    if(b.classList.contains('found'))return;
    b.classList.add('found');
    count++;
    found.textContent=count;
    alert(messages[i]);
    if(count===20)finalButton.classList.remove('hidden');
  };
  constellation.appendChild(b);
});
