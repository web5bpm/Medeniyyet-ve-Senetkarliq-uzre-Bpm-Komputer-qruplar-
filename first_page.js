let result = document.getElementsByClassName('result')[0];

let newListNamesofLocal = localStorage.getItem("listofstudentsname").split(",");
let newListPuansofLocal = localStorage.getItem("listofstudentspuans").split(",");


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
