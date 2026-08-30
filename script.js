const bg = document.getElementById('stars');
for (let i=0;i<120;i++) {
  const s=document.createElement('i');
  s.className='bg-star';
  s.style.left=Math.random()*100+'%';
  s.style.top=Math.random()*100+'%';
  s.style.opacity=(.2+Math.random()*.8);
  s.style.animationDuration=(5+Math.random()*12)+'s';
  s.style.animationDelay=(-Math.random()*15)+'s';
  s.style.transform='scale('+(Math.random()*.9+.4)+')';
  bg.appendChild(s);
}

const screens=[...document.querySelectorAll('.screen')];
let current=0;
function show(n){
  screens[current].classList.remove('active');
  current=n;
  screens[current].classList.add('active');
}
document.getElementById('specialStar').onclick=()=>show(1);
document.querySelectorAll('.next').forEach((b)=>{
  b.addEventListener('click',()=>{
    if(b.id==='finalButton') show(4);
    else show(Math.min(current+1,screens.length-1));
  });
});

const constellation=document.getElementById('constellation');
const found=document.getElementById('found');
const finalButton=document.getElementById('finalButton');
const positions=[
 [8,15],[22,35],[38,10],[54,25],[72,12],[88,30],[15,68],[30,52],[47,70],[65,55],
 [82,75],[92,52],[5,90],[25,88],[42,43],[58,88],[70,40],[80,92],[50,15],[35,88]
];
const messages=[
 "За то, что ты умеешь делать обычные дни особенными.",
 "За твою улыбку.",
 "За все наши разговоры.",
 "За твой голос.",
 "За то, что рядом с тобой мне спокойно.",
 "За твоё упрямство, даже когда оно меня бесит.",
 "За все моменты, которые стали нашими.",
 "За то, что ты остаёшься собой.",
 "За твоё чувство юмора.",
 "За ночи, когда мы не хотели спать.",
 "За твою нежность.",
 "За то, что ты умеешь удивлять меня.",
 "За каждый раз, когда ты был рядом.",
 "За твоё сердце.",
 "За наши маленькие безумства.",
 "За то, что я могу назвать тебя своим мужем.",
 "За то, что ты появился в моей жизни.",
 "За всё, чему ты меня научил.",
 "За то, каким невероятным человеком ты являешься.",
 "И просто за то, что ты — ты."
];
let count=0;
positions.forEach((p,i)=>{
  const b=document.createElement('button');
  b.className='constellation-star';
  b.textContent='✦';
  b.style.left=p[0]+'%'; b.style.top=p[1]+'%';
  b.title='Звезда '+(i+1);
  b.onclick=()=>{
    if(b.classList.contains('found')) return;
    b.classList.add('found'); count++; found.textContent=count;
    alert(messages[i]);
    if(count===20) finalButton.classList.remove('hidden');
  };
  constellation.appendChild(b);
});
