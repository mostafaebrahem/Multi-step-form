let personalInformation=document.getElementById("info1")
let planSection=document.getElementById("info2")
let pickAdd=document.getElementById("info3")
let finishing=document.getElementById("info4")
let thank=document.getElementById("thank")
let userName=document.getElementById("name")

let firstStep=document.getElementById("firstStep")
let secondStep=document.getElementById("secondStep")
let thirdStep=document.getElementById("thirdStep")
let forthStep=document.getElementById("forthStep")

let personalButton= document.getElementById("personalInfo")
let yourPlan= document.getElementById("yourPlan")
let goBackToProfile= document.getElementById("goBackTo1")
let goBackToPlan= document.getElementById("goBackTo2")
let goBackTopick= document.getElementById("goBackTo3")
let profile= document.getElementById("profile")
let last= document.getElementById("last")

let nameReg=/(^[A-Z]{1}[a-z]{3,13})/;
let nameValidation1=document.getElementById('nameValidation1')
let nameValidation2=document.getElementById('nameValidation2')

console.log(nameReg.test("Mostafa"),"test")
userName.addEventListener("keydown",()=>{
    console.log(nameReg.test(userName.value))
    if(nameReg.test(userName.value)==false){
        nameValidation1.style.display="block"
        nameValidation2.style.display="none"
    }else{
        nameValidation2.style.display="block"
        nameValidation1.style.display="none"
    }
})



personalButton.addEventListener("click",()=>{
    personalInformation.style.display="none";
    planSection.style.display="block"
    console.log(1)
    secondStep.style.backgroundColor="red";
    firstStep.style.backgroundColor="transparent";

})
yourPlan.addEventListener("click",()=>{
    planSection.style.display="none";
    pickAdd.style.display="block";
    console.log(1)
    thirdStep.style.backgroundColor="red";
    secondStep.style.backgroundColor="transparent";
})
goBackToProfile.addEventListener("click",()=>{
    planSection.style.display="none";
    personalInformation.style.display="block";
    console.log(1)
    firstStep.style.backgroundColor="red";
    secondStep.style.backgroundColor="transparent";
})
goBackToPlan.addEventListener("click",()=>{
    pickAdd.style.display="none";
    planSection.style.display="block";
    console.log(1)
    secondStep.style.backgroundColor="red";
    thirdStep.style.backgroundColor="transparent";
})
goBackTopick.addEventListener("click",()=>{
    finishing.style.display="none";
    pickAdd.style.display="block";
    console.log(1)
    thirdStep.style.backgroundColor="red";
    forthStep.style.backgroundColor="transparent";
})
profile.addEventListener("click",()=>{
    pickAdd.style.display="none";
    finishing.style.display="block";
    console.log(1)
    forthStep.style.backgroundColor="red";
    thirdStep.style.backgroundColor="transparent";
})
last.addEventListener("click",()=>{
    finishing.style.display="none";
    thank.style.display="block";
    console.log(1)
    // firstStep.style.backgroundColor="red";
    forthStep.style.backgroundColor="transparent";
})
