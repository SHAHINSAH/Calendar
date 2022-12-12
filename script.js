const curDate=document.querySelector(".current-date");
dayTag= document.querySelector(".days");
lr= document.querySelectorAll(".icons span");

let date=new Date(),
curYr=date.getFullYear(),
curMn=date.getMonth();

const months=["January","February","March","April","May","June","July","August","September","Octobet","November","December"];
               

const renderCal = () => {
    let firstDofM= new Date(curYr, curMn ,1).getDay();
    let lastDtofM= new Date(curYr, curMn +1,0).getDate();
    let lastDayofM= new Date(curYr, curMn ,lastDtofM).getDay();
    let lastDofLM= new Date(curYr, curMn ,0).getDate();
    let liTag="";

    for(let i=firstDofM; i >0;i--){
        liTag +=`<li class="inactive">${lastDofLM - i + 1}</li>`;
    }
    for(let i=1; i<=lastDtofM;i++){
        let isToday = i ===date.getDate() && curMn === new Date().getMonth() && curYr ===new Date().getFullYear() ? "active":"";

        liTag +=`<li class="${isToday}">${i}</li>`;
    }
    for(let i=lastDayofM;i<6;i++){
        liTag +=`<li class="inactive">${i-lastDayofM + 1}</li>`;
    }
    

    curDate.innerText = `${months[curMn]} ${curYr}`;
    dayTag.innerHTML = liTag;
}
renderCal();

lr.forEach(icon =>{
    icon.addEventListener("click",()=>{
        curMn=icon.id==="prev" ? curMn - 1 :curMn + 1;
        if(curMn<0 || curMn>11){
            date=new Date(curYr,curMn);
            curYr=date.getFullYear();
            curMn=date.getMonth();
        }else{
            date = new Date();
        }
        renderCal();
    });
});
