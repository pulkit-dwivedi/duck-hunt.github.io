
let sc = 0;
const time=document.getElementById('time');
let startingtime=5;
let totaltime=startingtime*60;
const result=document.getElementById('result');
const cut=document.getElementById('cut');
const h1=document.getElementById('h1');
const h2=document.getElementById('h2');

const playagain=document.getElementById('playagain');

const audio=document.querySelector("#shootsound");
const btn = document.querySelector("#btn");
const duck = document.querySelector(".duck");
const duck1 = document.querySelector(".duck1");
const target = document.querySelector('#target');
const blood = document.querySelector('#blood');
// console.log(btn, duck, target, blood);
const body = document.querySelector('body');
const screenwidth = body.offsetWidth;
const screenheight = body.offsetHeight;
console.log(screenheight,screenwidth);
target.style.display = 'none';
duck.style.display = 'none';
duck1.style.display = 'none';

                                                            //for starting the game

btn.addEventListener('click', function () {
   setInterval(() => {
   let minute=Math.floor(totaltime/60);
   let second=totaltime%60;
   if(minute!=0 || second!=0){totaltime--;}
   if(minute==0 && second==0){
       result.style.display='block';
       h2.innerHTML=sc;
       duck.style.display='none';
       duck1.style.display='none';
       btn.style.display='none';
       playagain.addEventListener('click',function(){
           result.style.display='none';
           location.reload();
       })
   }
   time.innerHTML=`${minute}`+':'+`${second}`;
   console.log(minute,second);
}, 1000);
   body.style.cursor='none';
   window.addEventListener('click', function (e) {
       btn.style.left = '1130px';
       btn.style.top = '50px';
       btn.style.width = '11rem';
       btn.style.fontSize = '1rem';
       btn.innerHTML = 'SCORE:' + sc;
       target.style.display = 'block';
       duck.style.display = 'block';
       duck1.style.display = 'block';
       //for moving the duck 
       setInterval(function () {
           randleft = Math.floor(Math.random() * 1200);
           randtop = Math.floor(Math.random() * 600) ;
           console.log(randleft,randtop);
           duck.style.left = randleft + 'px';
           duck.style.top = randtop + 'px';

           rand1left = Math.random() * 1500 ;
           rand1top = Math.random() * 800;
           //console.log(rand1left,rand1top);
           duck1.style.left = rand1left + 'px';
           duck1.style.top = rand1top + 'px';
       }, 1000)
   })

   // for getting the target position
   window.addEventListener('mousemove', function (e) {
       target.style.left = e.pageX + 'px';
       target.style.top = e.pageY + 'px';
   })
   // for getting blood position 
   window.addEventListener('mousemove', function (e) {
       blood.style.left = e.pageX + 'px';
       blood.style.top = e.pageY + 'px';
   })
   // for displaying the blood position
   blood.style.display = 'none';
   window.addEventListener('click', function (e) {
       // console.log(e.target);
       if (e.target.classList.contains('duck') || e.target.classList.contains('duck1') ) {
           audio.play();
           sc++;
           blood.style.display = 'block';
           setTimeout(function () {
               blood.style.display = 'none';
           }, 500);
       }


   })

});