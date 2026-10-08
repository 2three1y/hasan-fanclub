(function(){
  "use strict";
  // Live fan counter
  var el=document.getElementById("fanCount");
  var n=8000000001;
  function fmt(x){return x.toLocaleString("en-US");}
  setInterval(function(){
    n+=Math.floor(Math.random()*7)+1;
    if(el) el.textContent=fmt(n);
  },900);

  // Confetti
  var canvas=document.getElementById("confetti");
  var ctx=canvas.getContext("2d");
  var parts=[];var running=false;
  var colors=["#ffcf3f","#ff3d8b","#8a5cff","#3fe0ff","#ffffff"];
  var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function size(){var d=window.devicePixelRatio||1;canvas.width=innerWidth*d;canvas.height=innerHeight*d;ctx.setTransform(d,0,0,d,0,0);}
  size();addEventListener("resize",size);
  function burst(x,y,count){
    if(reduce) return;
    for(var i=0;i<count;i++){
      var a=Math.random()*Math.PI*2,s=4+Math.random()*9;
      parts.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-6,w:6+Math.random()*6,h:8+Math.random()*8,
        r:Math.random()*6,vr:(Math.random()-.5)*.4,c:colors[i%colors.length],life:0,emoji:Math.random()<.08});
    }
    if(!running){running=true;requestAnimationFrame(tick);}
  }
  function tick(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(var i=parts.length-1;i>=0;i--){
      var p=parts[i];p.vy+=.28;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.life++;
      if(p.y>innerHeight+40||p.life>260){parts.splice(i,1);continue;}
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);
      if(p.emoji){ctx.font="22px serif";ctx.fillText("⭐",-11,8);}
      else{ctx.fillStyle=p.c;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);}
      ctx.restore();
    }
    if(parts.length){requestAnimationFrame(tick);}else{running=false;ctx.clearRect(0,0,innerWidth,innerHeight);}
  }
  function fromEl(e){var r=e.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2];}

  var hype=0;
  var lines=[
    "Celebrated 0 times this session. Rookie numbers.",
    "1 celebration. Hasan has been notified. (He hasn't.)",
    "2! The fan club is shaking.",
    "3. Scientists are concerned. Keep going.",
    "4. This is now a medical event.",
    "5! You are officially a Platinum Fan."
  ];
  var hb=document.getElementById("hypeBtn"),hc=document.getElementById("hypeCount");
  if(hb) hb.addEventListener("click",function(){
    hype++;var c=fromEl(hb);burst(c[0],c[1],140);
    if(navigator.vibrate){navigator.vibrate(30);}
    hc.textContent=hype<lines.length?lines[hype]:(hype+" celebrations. Honestly? Not enough. Hasan deserves "+(hype*10)+".");
    n+=1000*hype;if(el) el.textContent=fmt(n);
  });

  var jb=document.getElementById("joinBtn"),jm=document.getElementById("joinedMsg");
  var joined=false;
  if(jb) jb.addEventListener("click",function(){
    var c=fromEl(jb);burst(c[0],c[1],180);
    if(!joined){joined=true;n+=1;if(el) el.textContent=fmt(n);
      jm.textContent="Welcome, Fan #"+fmt(n)+". Your badge is imaginary and perfect.";
      jb.textContent="You're in. Press again to celebrate ✨";}
    else{jm.textContent="Still a fan. Always a fan.";}
  });

  // a little welcome burst
  setTimeout(function(){burst(innerWidth/2,innerHeight*0.32,90);},600);
})();
