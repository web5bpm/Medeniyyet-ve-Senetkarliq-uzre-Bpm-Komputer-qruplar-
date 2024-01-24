const section_main = document.getElementsByClassName('section-main');

const groups=document.getElementsByClassName('groups')[0];
const form=document.getElementsByClassName('form')[0];

let form1, input1, input2, span1, 
parol10="1vv2ksa", parol30="3vv4ksa", parol57="5vv6ksa", parol54="7vv8ksa", lengthOfStudent=0, countofmodul=0;


input2=document.createElement('input');
input2.setAttribute("type", "button");
input2.setAttribute("value", "Daxil Ol");


groups.onclick=function(e){

    form.style.display="flex";

    form1=document.createElement('form');
    input1=document.createElement('input');
    input1.setAttribute("type", "password");
    input1.setAttribute("placeholder", "Qrup parolunuzu daxil edin");
    span1=document.createElement('span');
    if(e.target.className=="group-10"){
        span1.textContent="Qrup 10";
    }
    else if(e.target.className=="group-30"){
        span1.textContent="Qrup 30";
    }
    else if(e.target.className=="group-54"){
        span1.textContent="Qrup 54";
    }
    else if(e.target.className=="group-57"){
        span1.textContent="Qrup 57";
    }


    form1.appendChild(span1);
    form1.appendChild(input1);
    form1.appendChild(input2);

    form.appendChild(form1);

    
    section_main[1].style.zIndex="9";
};

let close_form=document.getElementsByClassName('close-form')[0];
close_form.onclick=function(){
    form.removeChild(form1);
    form.style.display="none";
    section_main[1].style.zIndex="10";
}


input2.onclick=function(){
    if(span1.textContent=="Qrup 10" && input1.value.trim()==parol10){
        lengthOfStudent=10;
        localStorage.setItem("lengthOfStudent", lengthOfStudent);
        localStorage.setItem("password", parol10);
        window.location="first_page.html";
    }
    else if(span1.textContent=="Qrup 30" && input1.value.trim()==parol30){
        lengthOfStudent=17;
        localStorage.setItem("lengthOfStudent", lengthOfStudent);
        localStorage.setItem("password", parol30);
        window.location="first_page.html";
    }
    else if(span1.textContent=="Qrup 54" && input1.value.trim()==parol54){
        lengthOfStudent=20;
        localStorage.setItem("lengthOfStudent", lengthOfStudent);
        localStorage.setItem("password", parol54);
        window.location="first_page.html";
    }
    else if(span1.textContent=="Qrup 57" && input1.value.trim()==parol57){
        lengthOfStudent=20;
        localStorage.setItem("lengthOfStudent", lengthOfStudent);
        localStorage.setItem("password", parol57);
        window.location="first_page.html";
    }
    else if(input1.value.trim()==""){
        alert("Boş qoya bilməzsiniz");
    }
    else{
        alert("Parol Yanlışdır");
    }
}
