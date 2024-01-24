let table2=document.getElementsByClassName('table2')[0];

let tr_1=document.createElement('tr');
    let th1_1=document.createElement('th');
    th1_1.textContent="";
    th1_1.style.border="none";
    let th2_1=document.createElement('th');
    th2_1.textContent="Fənn";
    let th3_1=document.createElement('th');
    th3_1.textContent="Müəllim";
    let th4_1=document.createElement('th');
    th4_1.textContent="Tarix";
    let th5_1=document.createElement('th');
    th5_1.textContent="Saat";
    
    
    tr_1.appendChild(th1_1);
    tr_1.appendChild(th2_1);
    tr_1.appendChild(th3_1);
    tr_1.appendChild(th4_1);
    tr_1.appendChild(th5_1);
    table2.appendChild(tr_1);

for(let i=0; i<Number(localStorage.getItem("lengthOfModul")); i++){
    let tr_1=document.createElement('tr');
    let td1_1=document.createElement('td');
    td1_1.textContent=i+1;
    let td2_1=document.createElement('td');
    td2_1.textContent=localStorage.getItem("modul"+(i+1));
    let td3_1=document.createElement('td');
    td3_1.textContent=localStorage.getItem("teacher"+(i+1));
    let td4_1=document.createElement('td');
    td4_1.textContent=localStorage.getItem("day"+(i+1));
    let td5_1=document.createElement('td');
    td5_1.textContent=localStorage.getItem("time"+(i+1));
    
    
    tr_1.appendChild(td1_1);
    tr_1.appendChild(td2_1);
    tr_1.appendChild(td3_1);
    tr_1.appendChild(td4_1);
    tr_1.appendChild(td5_1);
    table2.appendChild(tr_1);
}