let table1=document.getElementsByClassName('table1')[0];

let tr=document.createElement('tr');
    let th1=document.createElement('th');
    th1.textContent="";
    th1.style.border="none";
    let th2=document.createElement('th');
    th2.textContent="Fənn";
    let th3=document.createElement('th');
    th3.textContent="Müəllim";
    let th4=document.createElement('th');
    th4.textContent="Saat";
    let th5=document.createElement('th');
    th5.textContent="Limit";
    let th6=document.createElement('th');
    th6.textContent="PDF";
    
    
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    table1.appendChild(tr);

for(let i=0; i<Number(localStorage.getItem("lengthOfModul")); i++){
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    td1.textContent=i+1;
    let td2=document.createElement('td');
    td2.textContent=localStorage.getItem("modul"+(i+1));
    let td3=document.createElement('td');
    td3.textContent=localStorage.getItem("teacher"+(i+1));
    let td4=document.createElement('td');
    td4.textContent=localStorage.getItem("date"+(i+1));
    let td5=document.createElement('td');
    td5.textContent=localStorage.getItem("kredit"+(i+1));
    let td6=document.createElement('td');

    const th6_child = document.createElement('a');
    th6_child.setAttribute('href', localStorage.getItem("pdfofbook" + (i + 1)));
    const pdf_icon1 = document.createElement('i');
    pdf_icon1.className = "bx bxs-file-pdf";
    
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    th6_child.appendChild(pdf_icon1);
    td6.appendChild(th6_child);
    tr.appendChild(td6);
    table1.appendChild(tr);
}



table1.onclick = function (e) {
    if (e.target.className == "bx bxs-file-pdf") {
        let dd = e.target.parentElement.getAttribute('href');
        if (dd == '#') {
            alert("Bu modul hal-hazırda hazırlanır");
        }
    }
}
