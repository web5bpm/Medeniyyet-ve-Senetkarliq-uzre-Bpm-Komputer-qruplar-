let result = document.getElementsByClassName('result')[0];

let mainofsite = document.getElementsByClassName('main')[0];

let newListNamesofLocal = localStorage.getItem("listofstudentsname").split(",");
let newListPuansofLocal = localStorage.getItem("listofstudentspuans").split(",");

let resultforteacher = document.getElementsByClassName('resultforteacher')[0];

for (let i = 0; i < lengthOfStudent; i++) {
    let result_child = document.createElement('div');

    let nameofstudent = document.createElement('span');
    nameofstudent.textContent = newListNamesofLocal[i];

    let puanofstudent = document.createElement('span');
    puanofstudent.textContent = newListPuansofLocal[i];

    result_child.appendChild(nameofstudent);
    result_child.appendChild(puanofstudent);

    result.appendChild(result_child);
}


let c_b = document.getElementsByClassName('carosel-back')[0],

    c_h = document.getElementsByClassName('carosel-head')[0];

c_h.innerHTML = localStorage.getItem("midtermDate");


if (passwordforerror == "1vv2ksa" || passwordforerror == "3vv4ksa") {
    result.innerHTML = "";
    let form2 = document.createElement('form');
    let input1_Form2 = document.createElement('input');
    input1_Form2.setAttribute("type", "text");
    input1_Form2.setAttribute("placeholder", "parolu daxil et: ");

    let input2_Form2 = document.createElement('input');
    input2_Form2.setAttribute("type", "button");
    input2_Form2.setAttribute("value", "Elektron Jurnala daxil ol");

    form2.appendChild(input1_Form2);
    form2.appendChild(input2_Form2);

    resultforteacher.appendChild(form2);


    let elektronJurnal = document.createElement('div');
    elektronJurnal.className = "EJ";

    let chixish = document.createElement('span');
    elektronJurnal.appendChild(chixish);
    chixish.setAttribute("class", "chixish");
    chixish.textContent = "Pəncərəni bağla";

    let modulsnameforEJ = ["ProqramMuhendisliyi", "xarici_dil", "it", "th", "xromotologiya", "sql", "resmxett", "illustrator"];

    for (let i = 0; i < localStorage.getItem("lengthOfModul"); i++) {
        let EJChildModul = document.createElement('div');
        let EJChildModul_student = document.createElement('div');

        let EJChildModul_name = document.createElement('span');
        EJChildModul_name.textContent = "Tələbələr";
        let EJChildModul_k1 = document.createElement('span');
        EJChildModul_k1.textContent = "kol1";
        let EJChildModul_k2 = document.createElement('span');
        EJChildModul_k2.textContent = "kol2";
        let EJChildModul_dav = document.createElement('span');
        EJChildModul_dav.textContent = "dav.bal";
        let EJChildModul_ser = document.createElement('span');
        EJChildModul_ser.textContent = "ser.ish";

        EJChildModul_student.appendChild(EJChildModul_name);
        EJChildModul_student.appendChild(EJChildModul_k1);
        EJChildModul_student.appendChild(EJChildModul_k2);
        EJChildModul_student.appendChild(EJChildModul_dav);
        EJChildModul_student.appendChild(EJChildModul_ser);

        let modulName = document.createElement('h1');
        modulName.textContent = localStorage.getItem("modul" + (i + 1));
        EJChildModul.appendChild(modulName);
        EJChildModul.appendChild(EJChildModul_student);

        elektronJurnal.appendChild(EJChildModul);

        for (let j = 0; j < lengthOfStudent; j++) {
            let EJChildModul_student = document.createElement('div');

            let EJChildModul_name = document.createElement('span');
            EJChildModul_name.textContent = objectofStudent[j].NameofStudent;
            let EJChildModul_k1 = document.createElement('span');
            EJChildModul_k1.textContent = objectofStudent[j][modulsnameforEJ[i]].kolluk1;
            let EJChildModul_k2 = document.createElement('span');
            EJChildModul_k2.textContent = objectofStudent[j][modulsnameforEJ[i]].kolluk2;
            let EJChildModul_dav = document.createElement('span');
            EJChildModul_dav.textContent = objectofStudent[j][modulsnameforEJ[i]].davamiyyet;
            let EJChildModul_ser = document.createElement('span');
            EJChildModul_ser.textContent = objectofStudent[j][modulsnameforEJ[i]].serbestish;

            EJChildModul_student.append(EJChildModul_name, EJChildModul_k1, EJChildModul_k2, EJChildModul_dav, EJChildModul_ser);

            EJChildModul.appendChild(EJChildModul_student);

            elektronJurnal.appendChild(EJChildModul);

        }

    }
    mainofsite.appendChild(elektronJurnal);


    input2_Form2.onclick = function () {
        if (input1_Form2.value == "EJ") {
            elektronJurnal.style.display = "flex";
        }
        else {
            alert("Hörmətli müəllim, parolu yanlış daxil etdiniz");
        }
    }

    chixish.onclick = function () {
        elektronJurnal.style.display = "none";
    }
}

if (passwordforerror == "3vv4ksa") {
    const form = document.createElement('form');
    const user = document.createElement('input');
    user.setAttribute("type", "text");
    user.setAttribute("placeholder", "İstifadəçi adını daxil et: ");

    const passwordofuser = document.createElement('input');
    passwordofuser.setAttribute("type", "password");
    passwordofuser.setAttribute("placeholder", "Parolu daxil et: ");

    const enter = document.createElement('input');
    enter.setAttribute("type", "button");
    enter.setAttribute("value", "Daxil ol");

    form.appendChild(user);
    form.appendChild(passwordofuser);
    form.appendChild(enter);

    result.appendChild(form);

    enter.onclick = function () {
        if (user.value == "Nurlan" && passwordofuser.value == "N123") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Fuad" && passwordofuser.value == "F178") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Leyla" && passwordofuser.value == "L146") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "İbrahim" && passwordofuser.value == "İ132") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Nəzrin" && passwordofuser.value == "N190") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Həmid" && passwordofuser.value == "H212") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Şükür" && passwordofuser.value == "Ş267") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Fərid" && passwordofuser.value == "F123") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Zəhra.K" && passwordofuser.value == "Z256") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Sevinc" && passwordofuser.value == "S289") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Fatimə" && passwordofuser.value == "F278") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Zəhra.Ə" && passwordofuser.value == "Z340") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Esmira" && passwordofuser.value == "E201") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Tahir" && passwordofuser.value == "T120") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Hüseyn" && passwordofuser.value == "H390") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Ərhan" && passwordofuser.value == "Ə407") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else if (user.value == "Kəmaləddin" && passwordofuser.value == "K489") {
            localStorage.setItem("user", user.value);
            window.location = "students.html";
        }
        else {
            alert("Məlumatları doğru daxil edin!");
        }
    }
}
