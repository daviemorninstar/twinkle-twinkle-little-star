const bg=document.getElementById('stars');
for(let i=0;i<145;i++){
 const s=document.createElement('i'); s.className='bg-star';
 s.style.left=Math.random()*100+'%'; s.style.top=Math.random()*100+'%';
 s.style.opacity=.2+Math.random()*.8;
 s.style.animationDuration=5+Math.random()*13+'s';
 s.style.animationDelay=-Math.random()*16+'s';
 bg.appendChild(s);
}
const screens=[...document.querySelectorAll('.screen')];
let current=0;
function show(n){
 screens[current].classList.remove('active');
 current=n; screens[current].classList.add('active');
 window.scrollTo(0,0);
}
document.getElementById('birthStar').onclick=()=>{
 const music=document.getElementById('bgMusic');
 music.volume=0;
 music.play().then(()=>{
   let v=0;
   const fade=setInterval(()=>{
     v=Math.min(.42,v+.025);
     music.volume=v;
     if(v>=.42) clearInterval(fade);
   },120);
 }).catch(()=>{});
 const f=document.getElementById('flash'); f.style.opacity=.18;
 setTimeout(()=>f.style.opacity=0,450); show(1);
};
document.querySelectorAll('.next').forEach(b=>b.onclick=()=>{
 if(b.id==='finalButton') show(5);
 else show(Math.min(current+1,screens.length-1));
});
const constellation=document.getElementById('constellation');
const found=document.getElementById('found');
const finalButton=document.getElementById('finalButton');
const positions=[[7,16],[20,34],[36,9],[53,23],[72,13],[88,31],[14,67],[29,51],[45,72],[63,56],[82,74],[93,51],[5,89],[25,87],[42,42],[58,88],[70,39],[80,91],[50,14],[35,88]];
const messages=[
"Мне нравится твоё совершенно дурацкое чувство юмора. Даже когда я закатываю глаза — я всё равно улыбаюсь.",
"Мне нравится, как ты смущаешься. В этом есть что-то невероятно милое.",
"Мне нравится, что ты можешь быть закрытым, но при этом оставаться искренним со мной.",
"Мне нравится, что ты не любишь насилие. В тебе есть мягкость, которую я очень ценю.",
"Мне нравится, что ты смешной. Иногда слишком смешной. Но именно поэтому с тобой хорошо.",
"Мне нравится, что ты учишься на медика. Я горжусь твоей головой и тем, сколько сил ты в это вкладываешь.",
"Мне нравится твоя целеустремлённость. Если ты решил чему-то научиться — ты действительно идёшь и учишься.",
"Мне нравится, что ты учишь немецкий. Даже если он решил усложнить тебе жизнь.",
"Мне нравится твой чёрный чай с молоком. Я не знаю, почему именно это кажется мне таким твоим.",
"Мне нравятся огурцы. Не сами огурцы — а то, что у тебя есть свои маленькие странности.",
"Мне до сих пор смешно, что тебе нравятся ледоколы. Это глупенько. И именно поэтому я это люблю.",
"Мне нравится, что у тебя есть вещи, которые интересуют тебя просто потому, что интересуют. Не всё должно иметь смысл.",
"Мне нравится твоя серьёзность в важных вещах.",
"Мне нравится, что за твоей закрытостью не пустота, а целый внутренний мир.",
"Мне нравится, что ты умеешь быть искренним даже тогда, когда тебе непросто.",
"Мне нравится, что наше знакомство было таким нелепым. Потому что теперь эта нелепость стала началом чего-то настоящего.",
"Мне нравится называть тебя своим серьёзным мужчиной. В этом есть и нежность, и немного нашей собственной шутки.",
"Мне нравится, что всего за два месяца ты успел стать для меня настолько важным.",
"Мне нравится не только то, какой ты сейчас. Мне интересно узнавать, каким ты будешь дальше.",
"И самая главная: я люблю тебя не за список качеств. Я люблю тебя целиком. Именно тебя, Юра."
];
let count=0;
positions.forEach((p,i)=>{
 const b=document.createElement('button'); b.className='constellation-star'; b.textContent='✦';
 b.style.left=p[0]+'%'; b.style.top=p[1]+'%';
 b.setAttribute('aria-label','Звезда '+(i+1));
 b.onclick=()=>{
   if(b.classList.contains('found')) return;
   b.classList.add('found'); count++; found.textContent=count;
   alert(messages[i]);
   if(count===20) finalButton.classList.remove('hidden');
 };
 constellation.appendChild(b);
});
