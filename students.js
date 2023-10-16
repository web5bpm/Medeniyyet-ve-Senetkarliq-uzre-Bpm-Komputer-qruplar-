let students = document.getElementsByClassName('students')[0];
let nameofstudent = document.getElementsByClassName('nameofstudent')[0];
nameofstudent.innerHTML = "Tələbə: </br></br>" + localStorage.getItem("username") + " " + localStorage.getItem("usersure");
let divofmodul = document.createElement('div');

for (let i = 0; i < localStorage.getItem("lengthOfModul"); i++) {
    const modul = document.createElement('div');
    modul.className = "modul";
    const spanofteacher = document.createElement('span');
    spanofteacher.textContent = localStorage.getItem("teacher" + (i + 1));
    const spanofmodul = document.createElement('span');
    spanofmodul.textContent = localStorage.getItem("modul" + (i + 1));

    modul.appendChild(spanofmodul);
    modul.appendChild(spanofteacher);

    divofmodul.appendChild(modul);
}

students.appendChild(divofmodul);

let hofmodul = document.createElement('h1');
hofmodul.textContent = "Fənn"
students.appendChild(hofmodul);

let divofpoints = document.createElement('table');
let tr1 = document.createElement('tr');
let th1 = document.createElement('th');
th1.textContent = "Kollekvium1";
let th2 = document.createElement('th');
th2.textContent = "Kollekvium2";
let th3 = document.createElement('th');
th3.textContent = "Kollekvium3";
let th4 = document.createElement('th');
th4.textContent = "Davamiyyət";
let th5 = document.createElement('th');
th5.textContent = "Fərdi iş";

tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
tr1.appendChild(th4);
tr1.appendChild(th5);

divofpoints.appendChild(tr1);

if (window.innerWidth < 600) {
    th1.textContent = "kol1";
    th2.textContent = "kol2";
    th3.textContent = "kol3";
    th4.textContent = "dav.b";
    th5.textContent = "f.ish";
}

let tr2 = document.createElement('tr');
let td1 = document.createElement('td');
td1.textContent = "0";
let td2 = document.createElement('td');
td2.textContent = "0";
let td3 = document.createElement('td');
td3.textContent = "0";
let td4 = document.createElement('td');
td4.textContent = "0";
let td5 = document.createElement('td');
td5.textContent = "0";

tr2.appendChild(td1);
tr2.appendChild(td2);
tr2.appendChild(td3);
tr2.appendChild(td4);
tr2.appendChild(td5);

divofpoints.appendChild(tr2);



let resulttoexam = 0, resultofexam=0;

let exam = document.createElement('div');
exam.className = "exam";

let examChild1 = document.createElement('div');
let examChild1_1 = document.createElement('span');
examChild1_1.textContent = "İmtahana qədər";
let examChild1_2 = document.createElement('span');
examChild1_2.textContent = resulttoexam;

let examChild2 = document.createElement('div');
let examChild2_1 = document.createElement('span');
examChild2_1.textContent = "İmtahan balı";
let examChild2_2 = document.createElement('span');
examChild2_2.textContent = resultofexam;

let examChild3 = document.createElement('div');
let examChild3_1 = document.createElement('span');
examChild3_1.textContent = "Nəticə";
let examChild3_2 = document.createElement('span');
examChild3_2.textContent = resulttoexam + resultofexam;

divofmodul.onclick = function (e) {
    if (e.target.textContent === "Azərbaycan tarixi") {
        hofmodul.textContent = e.target.textContent;
        td1.textContent = localStorage.getItem("Kollekvium1_tarix");
        td2.textContent = localStorage.getItem("Kollekvium2_tarix");
        td3.textContent = localStorage.getItem("Kollekvium3_tarix");
        td4.textContent = localStorage.getItem("Davamiyyet_tarix");
        td5.textContent = localStorage.getItem("Ferdi_tarix");
        resultofexam = localStorage.getItem("resultofexam_tarix");
    }

    else if (e.target.textContent === "Azərbaycan dilində işgüzar və akademik kommunikasiya") {
        hofmodul.textContent = e.target.textContent;
        td1.textContent = localStorage.getItem("Kollekvium1_az");
        td2.textContent = localStorage.getItem("Kollekvium2_az");
        td3.textContent = localStorage.getItem("Kollekvium3_az");
        td4.textContent = localStorage.getItem("Davamiyyet_az");
        td5.textContent = localStorage.getItem("Ferdi_az");
        resultofexam = localStorage.getItem("resultofexam_az");
    }

    else if (e.target.textContent === "Xarici dildə işgüzar və akademik kommunikasiya I") {
        hofmodul.textContent = e.target.textContent;
        td1.textContent = localStorage.getItem("Kollekvium1_ing");
        td2.textContent = localStorage.getItem("Kollekvium2_ing");
        td3.textContent = localStorage.getItem("Kollekvium3_ing");
        td4.textContent = localStorage.getItem("Davamiyyet_ing");
        td5.textContent = localStorage.getItem("Ferdi_ing");
        resultofexam = localStorage.getItem("resultofexam_ing");
    }

    else if (e.target.textContent === "İnformasiya texnologiyaları I") {
        hofmodul.textContent = e.target.textContent;
        td1.textContent = localStorage.getItem("Kollekvium1_it");
        td2.textContent = localStorage.getItem("Kollekvium2_it");
        td3.textContent = localStorage.getItem("Kollekvium3_it");
        td4.textContent = localStorage.getItem("Davamiyyet_it");
        td5.textContent = localStorage.getItem("Ferdi_it");
        resultofexam = localStorage.getItem("resultofexam_it");
    }

    else if (e.target.textContent === "Texniki Hesab I") {
        hofmodul.textContent = e.target.textContent;
        td1.textContent = localStorage.getItem("Kollekvium1_th");
        td2.textContent = localStorage.getItem("Kollekvium2_th");
        td3.textContent = localStorage.getItem("Kollekvium3_th");
        td4.textContent = localStorage.getItem("Davamiyyet_th");
        td5.textContent = localStorage.getItem("Ferdi_th");
        resultofexam = localStorage.getItem("resultofexam_th");
    }

    else if (e.target.textContent === "Komputer əməliyyat sistemləri") {
        hofmodul.textContent = e.target.textContent;
        td1.textContent = localStorage.getItem("Kollekvium1_kes");
        td2.textContent = localStorage.getItem("Kollekvium2_kes");
        td3.textContent = localStorage.getItem("Kollekvium3_kes");
        td4.textContent = localStorage.getItem("Davamiyyet_kes");
        td5.textContent = localStorage.getItem("Ferdi_kes");
        resultofexam = localStorage.getItem("resultofexam_kes");
    }

    else if (e.target.textContent === "Komputer Qrafikası") {
        hofmodul.textContent = e.target.textContent;
        td1.textContent = localStorage.getItem("Kollekvium1_qrafika");
        td2.textContent = localStorage.getItem("Kollekvium2_qrafika");
        td3.textContent = localStorage.getItem("Kollekvium3_qrafika");
        td4.textContent = localStorage.getItem("Davamiyyet_qrafika");
        td5.textContent = localStorage.getItem("Ferdi_qrafika");
        resultofexam = localStorage.getItem("resultofexam_qrafika");
    }

    else if (e.target.textContent === "Dizayna Giriş") {
        hofmodul.textContent = e.target.textContent;
        td1.textContent = localStorage.getItem("Kollekvium1_dizayn");
        td2.textContent = localStorage.getItem("Kollekvium2_dizayn");
        td3.textContent = localStorage.getItem("Kollekvium3_dizayn");
        td4.textContent = localStorage.getItem("Davamiyyet_dizayn");
        td5.textContent = localStorage.getItem("Ferdi_dizayn");
        resultofexam = localStorage.getItem("resultofexam_dizayn");
    }

    else if (e.target.textContent === "Photoshop I") {
        hofmodul.textContent = e.target.textContent;
        td1.textContent = localStorage.getItem("Kollekvium1_photoshop");
        td2.textContent = localStorage.getItem("Kollekvium2_photoshop");
        td3.textContent = localStorage.getItem("Kollekvium3_photoshop");
        td4.textContent = localStorage.getItem("Davamiyyet_photoshop");
        td5.textContent = localStorage.getItem("Ferdi_photoshop");
        resultofexam = localStorage.getItem("resultofexam_photoshop");
    }

    resulttoexam = Number(td1.textContent) + Number(td2.textContent) + Number(td3.textContent) + Number(td4.textContent) + Number(td5.textContent);

    examChild1_2.textContent = resulttoexam;
    examChild2_2.textContent = resultofexam;
    examChild3_2.textContent = resulttoexam + Number(resultofexam);

    if((Number(resultofexam)<18 && Number(resultofexam>0))){
        students.style.backgroundColor="red";
        alert("Çox təəssüf imtahanı keçə bilmədinizzz :(");
    }
    else if ((Number(examChild3_2.textContent)>0 && Number(examChild3_2.textContent)<51) && (Number(examChild3_2.textContent)!=resulttoexam)){
        students.style.backgroundColor="red";
        alert("Çox təəssüf imtahanı keçə bilmədinizzz :(");
    }
    else if(Number(resultofexam)>17 && Number(examChild3_2.textContent)>50){
        students.style.backgroundColor="#10ABAB";
        alert("Təbriklər keçdiniz! :)")
    }
    else{
        students.style.backgroundColor="#10ABAB";
    }
}


examChild1.appendChild(examChild1_1);
examChild1.appendChild(examChild1_2);


examChild2.appendChild(examChild2_1);
examChild2.appendChild(examChild2_2);

examChild3.appendChild(examChild3_1);
examChild3.appendChild(examChild3_2);

exam.appendChild(examChild1);
exam.appendChild(examChild2);
exam.appendChild(examChild3);

students.appendChild(divofpoints);
students.appendChild(exam);
