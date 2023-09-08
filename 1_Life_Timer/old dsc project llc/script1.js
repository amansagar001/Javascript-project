let isDOBopen = false;
let dateofBirth;
const settingcogEl = document.getElementById("settingicon");
const settingcontentEl = document.getElementById("settingcontent")
const initialTextEl = document.getElementById("initialText")
const afterDOBenterEl = document.getElementById("afterDOBenter")
const dobbuttonEl = document.getElementById("dobbutton")
const dobinputEl = document.getElementById("dobinput")

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
 
  
const maketwodigitnumber = (number)=>{
   return number>9? number:`0${number}`;
};


const toggleDOBselector =()=> {
 if(isDOBopen){
    settingcontentEl.classList.add('hide');
 }
 else{
    settingcontentEl.classList.remove('hide');
}
isDOBopen = ! isDOBopen;
console.log("toggle",isDOBopen);
};

const updateAge = () =>{
   const currentdate = new Date;

   const dateDiff = currentdate-dateofBirth;
   const year = Math.floor(dateDiff/(1000*60*60*24*365.25));
   const month = Math.floor(dateDiff/(1000*60*60*24*365.25))%12;
   const day = Math.floor(dateDiff/(1000*60*60*24))%30;// date is one month less.
   const hour = Math.floor(dateDiff/(1000*60*60))%24;
   const minute = Math.floor(dateDiff/(1000*60))%60;
   const second = Math.floor(dateDiff/(1000))%60;

   yearEl.innerHTML=maketwodigitnumber(year);
   monthEl.innerHTML=maketwodigitnumber(month);
   dayEl.innerHTML=maketwodigitnumber(day);
   hourEl.innerHTML=maketwodigitnumber(hour);
   minuteEl.innerHTML=maketwodigitnumber(minute);
   secondEl.innerHTML=maketwodigitnumber(second);

}
// updateAge();

const setDObHandler = ()=>{
const datestring = dobinputEl.value;

dateofBirth = datestring ? new Date(datestring): null;



if (dateofBirth) {

initialTextEl.classList.add("hide")  ;
afterDOBenterEl.classList.remove("hide") ;  

setInterval(() => updateAge(), 1000);
}
else{
afterDOBenterEl.classList.add("hide");
initialTextEl.classList.remove("hide");

}
};

setDObHandler();


settingcogEl.addEventListener("click",toggleDOBselector);
dobbuttonEl.addEventListener("click",setDObHandler);