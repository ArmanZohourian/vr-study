// ===== CONFIG: fill these in =====
// Cal.com booking link, e.g. "arman/vr-study" (from https://cal.com/arman/vr-study)
const CAL_LINK = "arman-zohourian-zailvo/xspace-game-lab-group-room-50";
// ==================================
(function(){
  let lang;
  try{lang=localStorage.getItem("lang")}catch(e){}
  if(!lang) lang=(navigator.language||"de").toLowerCase().startsWith("de")?"de":"en";
  const set=l=>{document.documentElement.lang=l;try{localStorage.setItem("lang",l)}catch(e){}
    document.querySelectorAll(".langs button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.set===l));};
  document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll(".langs button").forEach(b=>b.onclick=()=>set(b.dataset.set));
    set(lang);
    const box=document.getElementById("cal");
    if(box && CAL_LINK){
      box.innerHTML='<iframe title="Booking" loading="lazy" src="https://cal.com/'+CAL_LINK+'?embed=true&layout=month_view&date=2026-11-20"></iframe>';
    }
  });
  document.documentElement.lang=lang;
})();
