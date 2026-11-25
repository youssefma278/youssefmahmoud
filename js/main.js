const $$=s=>[...document.querySelectorAll(s)],rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
$$(".grid,.stats,.tl,.lang,.chips").forEach(g=>[...g.children].forEach((c,i)=>c.style.setProperty("--i",i)));
const cnt=e=>{const n=+e.dataset.c,fm=v=>e.dataset.f?v.toLocaleString("en-US"):v;if(rm){e.textContent=fm(n);return}const t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1400);e.textContent=fm(Math.round(n*(1-Math.pow(1-k,3))));if(k<1)requestAnimationFrame(f)})(t0)};
if("IntersectionObserver" in window){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const x=e.target;x.classList.add("on");x.querySelectorAll("[data-c]").forEach(cnt);x.querySelectorAll("[data-w]").forEach(b=>b.style.width=b.dataset.w+"%");io.unobserve(x)}),{threshold:.15});
 $$(".rv").forEach(x=>io.observe(x));
 const ls=$$("nav a"),so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(a=>a.classList.toggle("act",a.getAttribute("href")=="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
 $$("section[id]").forEach(s=>so.observe(s));
}else{$$("[data-c]").forEach(cnt);$$("[data-w]").forEach(b=>b.style.width=b.dataset.w+"%")}
const nv=document.querySelector("nav"),gl=document.querySelector(".globe");
addEventListener("scroll",()=>{const h=document.documentElement;nv.style.setProperty("--p",h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100+"%");gl.style.transform="translateY(calc(-50% + "+Math.min(scrollY,700)*.22+"px))"},{passive:true});
$$(".card").forEach(c=>c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}));
const fr=document.getElementById("fr"),ph=fr.parentElement;
if(!rm&&matchMedia("(hover:hover)").matches){ph.addEventListener("pointermove",e=>{const r=ph.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;fr.style.transform=`rotateY(${x*10}deg) rotateX(${-y*8}deg)`});ph.addEventListener("pointerleave",()=>fr.style.transform="")}
const R=["طالب حقوق – جامعة الإسكندرية","مهتم بالقانون الدولي والتحكيم والسلك الدبلوماسي","خبير في استخدام الذكاء الاصطناعي","أُجيد التصميم والمونتاج والتصوير","أتحدث الإنجليزية والألمانية"],ro=document.getElementById("role");let ri=0;
if(!rm)setInterval(()=>{ro.classList.add("out");setTimeout(()=>{ri=(ri+1)%R.length;ro.textContent=R[ri];ro.classList.remove("out")},450)},2800);
const mb=document.getElementById("mb");mb.onclick=()=>{const o=nv.classList.toggle("open");mb.setAttribute("aria-expanded",o)};$$("nav a").forEach(a=>a.addEventListener("click",()=>{nv.classList.remove("open");mb.setAttribute("aria-expanded","false")}));
