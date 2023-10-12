let header1=document.getElementsByClassName('header1')[0];

let logo=document.createElement('img');
logo.className="logo";
logo.setAttribute('src', 'image/logo.png');
logo.setAttribute('style', 'cursor: pointer;');
logo.onclick=function(){
    window.location="first_page.html";
}

let ul=document.createElement('ul');
let li1=document.createElement('li');
let a1=document.createElement('a');
a1.textContent="fənlərin siyahısı";
a1.setAttribute('href', 'second_page.html');
let li2=document.createElement('li');
let a2=document.createElement('a');
a2.textContent="tələbələrin işləri";
a2.setAttribute('href', 'third_page.html');
let li3=document.createElement('li');
let a3=document.createElement('a');
a3.textContent="imtahan tarixləri";
a3.setAttribute('href', 'fourth_page.html');
let li4=document.createElement('li');
let a4=document.createElement('a');
a4.textContent="sillabuslar";
a4.setAttribute('href', 'fifth_page.html');

let open_close = document.createElement('div');
let open_close_menu = document.createElement('i');
open_close_menu.setAttribute('class', 'bx bx-menu');
let open_close_close = document.createElement('i');
open_close_close.setAttribute('class', 'bx bx-x');

open_close.appendChild(open_close_menu);
open_close.appendChild(open_close_close);

header1.appendChild(logo);
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
header1.appendChild(ul);
header1.appendChild(open_close);


open_close_menu.onclick=function(){
    open_close_menu.style.display="none";
    open_close_close.style.display="block";
    ul.style.transform="translateY(0%)";
}
open_close_close.onclick=function(){
    open_close_close.style.display="none";
    open_close_menu.style.display="block";
    ul.style.transform="translateY(-150%)";
}


let passwordforerror = localStorage.getItem("password");

if(passwordforerror == "5vv6ksa" || passwordforerror == "7vv8ksa"){
    a1.setAttribute('href', '#');
    a1.setAttribute('class', 'aa');
    a2.setAttribute('href', '#');
    a2.setAttribute('class', 'aa');
    a3.setAttribute('href', '#');
    a3.setAttribute('class', 'aa');
    a4.setAttribute('href', '#');
    a4.setAttribute('class', 'aa');
}

ul.onclick=function(e){
    if(e.target.className=='aa'){
        let ee=e.target.getAttribute('href');
        if(ee=='#'){
            alert("Bu Bölüm Sizin Üçün Növbəti İl Aktiv Olunacaq");
        }
    }
}