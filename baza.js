localStorage.setItem("midtermDate", "Aralıq imtahan II </br> 20 noy - 5 dek")

let user = localStorage.getItem("user");

let lengthOfStudent = localStorage.getItem("lengthOfStudent");
let password = localStorage.getItem("password"), listofmodul;
localStorage.setItem("password", password);


let objectofStudent = [
    student1 = {
        NameofStudent: "Nurlan",
        Az_tarixi: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student2 = {
        NameofStudent: "Fuad",
        Az_tarixi: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 8, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student3 = {
        NameofStudent: "Leyla",
        Az_tarixi: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 8, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student4 = {
        NameofStudent: "İbrahim",
        Az_tarixi: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 10, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 9, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 8, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student5 = {
        NameofStudent: "Nəzrin",
        Az_tarixi: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student6 = {
        NameofStudent: "Şükür",
        Az_tarixi: { kolluk1: 8, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 8, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 8, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 8, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student7 = {
        NameofStudent: "Fərid",
        Az_tarixi: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 2, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student8 = {
        NameofStudent: "Həmid",
        Az_tarixi: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 4, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student9 = {
        NameofStudent: "Zəhra.K",
        Az_tarixi: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student10 = {
        NameofStudent: "Sevinc",
        Az_tarixi: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student11 = {
        NameofStudent: "Zəhra.Ə",
        Az_tarixi: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student12 = {
        NameofStudent: "Fatimə",
        Az_tarixi: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 8, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student13 = {
        NameofStudent: "Esmira",
        Az_tarixi: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resultofexam: 0
    },
    student14 = {
        NameofStudent: "Tahir",
        Az_tarixi: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 2, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 2, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 4, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student15 = {
        NameofStudent: "Kəmaləddin",
        Az_tarixi: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 2, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 4, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 4, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student16 = {
        NameofStudent: "Hüseyn",
        Az_tarixi: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 4, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 4, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student17 = {
        NameofStudent: "Ərhan",
        Az_tarixi: { kolluk1: 5, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        Az_dili: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        kes: { kolluk1: 4, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        qrafika: { kolluk1: 6, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        dizayn: { kolluk1: 7, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        photoshop: { kolluk1: 3, kolluk2: 0, kolluk3: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    }
];

objectofStudent.forEach(student => {
    if (user === student.NameofStudent) {
        localStorage.setItem("Kollekvium1_tarix", student.Az_tarixi.kolluk1);
        localStorage.setItem("Kollekvium2_tarix", student.Az_tarixi.kolluk2);
        localStorage.setItem("Kollekvium3_tarix", student.Az_tarixi.kolluk3);
        localStorage.setItem("Davamiyyet_tarix", student.Az_tarixi.davamiyyet);
        localStorage.setItem("Ferdi_tarix", student.Az_tarixi.serbestish);
        localStorage.setItem("resultofexam_tarix", student.Az_tarixi.resultofexam);

        localStorage.setItem("Kollekvium1_az", student.Az_dili.kolluk1);
        localStorage.setItem("Kollekvium2_az", student.Az_dili.kolluk2);
        localStorage.setItem("Kollekvium3_az", student.Az_dili.kolluk3);
        localStorage.setItem("Davamiyyet_az", student.Az_dili.davamiyyet);
        localStorage.setItem("Ferdi_az", student.Az_dili.serbestish);
        localStorage.setItem("resultofexam_az", student.Az_dili.resultofexam);

        localStorage.setItem("Kollekvium1_ing", student.xarici_dil.kolluk1);
        localStorage.setItem("Kollekvium2_ing", student.xarici_dil.kolluk2);
        localStorage.setItem("Kollekvium3_ing", student.xarici_dil.kolluk3);
        localStorage.setItem("Davamiyyet_ing", student.xarici_dil.davamiyyet);
        localStorage.setItem("Ferdi_ing", student.xarici_dil.serbestish);
        localStorage.setItem("resultofexam_ing", student.xarici_dil.resultofexam);

        localStorage.setItem("Kollekvium1_it", student.it.kolluk1);
        localStorage.setItem("Kollekvium2_it", student.it.kolluk2);
        localStorage.setItem("Kollekvium3_it", student.it.kolluk3);
        localStorage.setItem("Davamiyyet_it", student.it.davamiyyet);
        localStorage.setItem("Ferdi_it", student.it.serbestish);
        localStorage.setItem("resultofexam_it", student.it.resultofexam);

        localStorage.setItem("Kollekvium1_th", student.th.kolluk1);
        localStorage.setItem("Kollekvium2_th", student.th.kolluk2);
        localStorage.setItem("Kollekvium3_th", student.th.kolluk3);
        localStorage.setItem("Davamiyyet_th", student.th.davamiyyet);
        localStorage.setItem("Ferdi_th", student.th.serbestish);
        localStorage.setItem("resultofexam_th", student.th.resultofexam);

        localStorage.setItem("Kollekvium1_kes", student.kes.kolluk1);
        localStorage.setItem("Kollekvium2_kes", student.kes.kolluk2);
        localStorage.setItem("Kollekvium3_kes", student.kes.kolluk3);
        localStorage.setItem("Davamiyyet_kes", student.kes.davamiyyet);
        localStorage.setItem("Ferdi_kes", student.kes.serbestish);
        localStorage.setItem("resultofexam_kes", student.kes.resultofexam);

        localStorage.setItem("Kollekvium1_qrafika", student.qrafika.kolluk1);
        localStorage.setItem("Kollekvium2_qrafika", student.qrafika.kolluk2);
        localStorage.setItem("Kollekvium3_qrafika", student.qrafika.kolluk3);
        localStorage.setItem("Davamiyyet_qrafika", student.qrafika.davamiyyet);
        localStorage.setItem("Ferdi_qrafika", student.qrafika.serbestish);
        localStorage.setItem("resultofexam_qrafika", student.qrafika.resultofexam);

        localStorage.setItem("Kollekvium1_dizayn", student.dizayn.kolluk1);
        localStorage.setItem("Kollekvium2_dizayn", student.dizayn.kolluk2);
        localStorage.setItem("Kollekvium3_dizayn", student.dizayn.kolluk3);
        localStorage.setItem("Davamiyyet_dizayn", student.dizayn.davamiyyet);
        localStorage.setItem("Ferdi_dizayn", student.dizayn.serbestish);
        localStorage.setItem("resultofexam_dizayn", student.dizayn.resultofexam);

        localStorage.setItem("Kollekvium1_photoshop", student.photoshop.kolluk1);
        localStorage.setItem("Kollekvium2_photoshop", student.photoshop.kolluk2);
        localStorage.setItem("Kollekvium3_photoshop", student.photoshop.kolluk3);
        localStorage.setItem("Davamiyyet_photoshop", student.photoshop.davamiyyet);
        localStorage.setItem("Ferdi_photoshop", student.photoshop.serbestish);
        localStorage.setItem("resultofexam_photoshop", student.photoshop.resultofexam);
    }
});

let listOfStudentsPuans, listOfStudentsName, listOfStudentsSureN, listOfStudentsGitCover, listOfStudentsGithub, listOfStudentsProfile;

if (password == "1vv2ksa") {
    let radile = 0, ilkane = 0, ayten = 0, rehime = 0, elnur = 0, elmar = 0, nicat = 0, aytac = 0,
        famil = 0, kemaleddin = 0;

    listOfStudentsPuans = [radile, ilkane, ayten, rehime, elnur, elmar, nicat, aytac, famil, kemaleddin];

    listOfStudentsName = ["Rədilə", "İlkanə", "Aytən", "Rəhimə", "Elnur", "Elmar", "Nicat", "Aytac",
        "Famil", "Kəmaləddin"];


    listOfStudentsSureN = ["Musayeva", "Rüstəmova", "Əlimərdanlı", "Həsənova", "Quliyev", "Əzizli", "Quliyev", "Rzaquliyeva",
        "Əşrəfli", "Məmmədli"];

    listOfStudentsGithub = ["", "", "", "", "", "", "", "",
        "", ""];

    listOfStudentsGitCover = ["", "", "", "", "", "", "", "",
        "", ""];

    listOfStudentsProfile = ["image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg",
        "image/prof.jpg", "image/prof.jpg"];
}

else if (password == "3vv4ksa") {
    let puan = 0, i = 0, nurlan, fuad, leyla, ibrahim, nezrin, shukur, ferid, hemid, zehra_k,
        sevinc, zehra_e, fatime, esmira, tahir, kemaleddin, huseyn, erhan;

    listOfStudentsPuans = [nurlan, fuad, leyla, ibrahim, nezrin, shukur, ferid, hemid, zehra_k,
        sevinc, zehra_e, fatime, esmira, tahir, kemaleddin, huseyn, erhan];

    objectofStudent.forEach(a => {

        puan = a.Az_dili.kolluk1 + a.Az_dili.kolluk2 + a.Az_dili.kolluk3 + a.Az_dili.davamiyyet + a.Az_dili.serbestish +
            a.Az_tarixi.kolluk1 + a.Az_tarixi.kolluk2 + a.Az_tarixi.kolluk3 + a.Az_tarixi.davamiyyet + a.Az_tarixi.serbestish +
            a.xarici_dil.kolluk1 + a.xarici_dil.kolluk2 + a.xarici_dil.kolluk3 + a.xarici_dil.davamiyyet + a.xarici_dil.serbestish +
            a.it.kolluk1 + a.it.kolluk2 + a.it.kolluk3 + a.it.davamiyyet + a.it.serbestish +
            a.th.kolluk1 + a.th.kolluk2 + a.th.kolluk3 + a.th.davamiyyet + a.th.serbestish +
            a.kes.kolluk1 + a.kes.kolluk2 + a.kes.kolluk3 + a.kes.davamiyyet + a.kes.serbestish +
            a.qrafika.kolluk1 + a.qrafika.kolluk2 + a.qrafika.kolluk3 + a.qrafika.davamiyyet + a.qrafika.serbestish +
            a.dizayn.kolluk1 + a.dizayn.kolluk2 + a.dizayn.kolluk3 + a.dizayn.davamiyyet + a.dizayn.serbestish +
            a.photoshop.kolluk1 + a.photoshop.kolluk2 + a.photoshop.kolluk3 + a.photoshop.davamiyyet + a.photoshop.serbestish;

        listOfStudentsPuans[i] = puan;
        i++;

    });

    listOfStudentsName = ["Nurlan", "Fuad", "Leyla", "İbrahim", "Nəzrin", "Şükür", "Fərid", "Həmid", "Zəhra.K",
        "Sevinc", "Zəhra.Ə", "Fatimə", "Esmira", "Tahir", "Kəmaləddin", "Hüseyn", "Ərhan"];


    listOfStudentsSureN = ["Mamedov", "Mikayılov", "Leyla", "İbrahim", "Məlikzadə", "Şükürov", "Hüseynov", "Həmid", "Kazımzadə",
        "Sevinc", "Əlixanova", "Əlixanova", "Esmira", "Şirinli", "Kəmaləddin", "Hüseyn", "Abbasov"];

    listOfStudentsGithub = ["https://Mamedovn.github.io/portfolio", "https://Fuadmikayil.github.io/Portfolio", "", "", "", "https://Sukurov.github.io/portfolio", "", "", "", "", "",
        "", "", "", "", "", ""];

    listOfStudentsGitCover = ["image/nurlan-git.png", "image/fuad-git.png", "", "", "", "image/shukur-git.png", "", "", "", "", "",
        "", "", "", "", "", ""];

    listOfStudentsProfile = ["image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg",
        "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg"];
}

else if (password == "7vv8ksa") {
    let abdulla = 8, alpay = 6, ayan = 9, aygun = 6, ayxan = 5, banu_q = 7, banu_v = 5,
        cavid = 8, elxan = 6, esmiralda = 5, eli_e = 8, eli_q = 8, eli_h = 9, fatime = 6,
        ibrahim = 6, ismayil = 6, lale = 8, lamiye = 8, xezer = 9, ziya = 7;

    listOfStudentsPuans = [abdulla, alpay, ayan, aygun, ayxan, banu_q, banu_v,
        cavid, elxan, esmiralda, eli_e, eli_q, eli_h, fatime,
        ibrahim, ismayil, lale, lamiye, xezer, ziya];

    listOfStudentsName = ["Abdulla", "Alpay", "Ayan", "Aygun", "Ayxan", "Banu.Q", "Banu.V",
        "Cavid", "Elxan", "Esmiralda", "Əli.Ə", "Əli.Q", "Əli.H", "Fatimə",
        "İbrahim", "İsmayıl", "Lalə", "Lamiyə", "Xəzər", "Ziya"];



    listOfStudentsSureN = ["", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", ""];

    listOfStudentsGithub = ["", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", ""];

    listOfStudentsGitCover = ["", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", ""];

    listOfStudentsProfile = ["image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg",
        "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg",
        "image/prof.jpg", "image/prof.jpg"];
}
else if (password == "5vv6ksa") {
    let mehemmed = 49*10/13 + 39, adil = 44*10/13 + 0, altay = 36*10/13 + 27, aysel = 63*10/13 + 46, eli = 53*10/13 + 41, elisadir = 16*10/13 + 26, fateh = 53*10/13 + 44,
        govher = 32*10/13 + 31, gullale = 65*10/13 + 49, shelale = 62*10/13 + 40, huseyn = 58*10/13 + 46, inal = 46*10/13 + 35, konul = 42*10/13 + 33,
        murad = 56*10/13 + 48, naile = 53*10/13 + 26, necibe = 58*10/13 + 50, oruc = 57*10/13 + 46, sebine = 42*10/13 + 38, serfi = 48*10/13 + 32, yusif = 39*10/13 + 30;

    listOfStudentsPuans = [mehemmed, adil, altay, aysel, eli, elisadir, fateh,
        govher, gullale, shelale, huseyn, inal, konul,
        murad, naile, necibe, oruc, sebine, serfi, yusif];

    listOfStudentsName = ["Məhəmməd", "Adil", "Altay", "Aysel", "Əli", "Əlisadir", "Fateh",
        "Gövhər", "Güllalə", "Şəlalə", "Hüseyn", "İnal", "Könül",
        "Murad", "Nailə", "Nəcibə", "Oruc", "Səbinə", "Sərfi", "Yusif"];



    listOfStudentsSureN = ["", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", ""];

    listOfStudentsGithub = ["", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", ""];

    listOfStudentsGitCover = ["", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "",
        "", ""];

    listOfStudentsProfile = ["image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg",
        "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg", "image/prof.jpg",
        "image/prof.jpg", "image/prof.jpg"];
}

localStorage.setItem("listname", listOfStudentsName);
localStorage.setItem("listsure", listOfStudentsSureN);
localStorage.setItem("listgithub", listOfStudentsGithub);
localStorage.setItem("listgithcover", listOfStudentsGitCover);
localStorage.setItem("listprofil", listOfStudentsProfile);

let indexofnames = 0;
listOfStudentsName.forEach(names => {
    if (user === names) {
        localStorage.setItem("username", user);
        localStorage.setItem("usersure", listOfStudentsSureN[indexofnames]);
    }
    indexofnames++;
})





let last = lengthOfStudent, great = 0, z = 0, c = 0, newListPuans = [lengthOfStudent], newListNames = [lengthOfStudent], last_place_1, last_place_2;

for (let i = 0; i < lengthOfStudent; i++) {
    for (let j = 0; j < last; j++) {
        if (listOfStudentsPuans[j] >= great) {
            great = listOfStudentsPuans[j];
            z = j;
        }
    }

    newListPuans[c] = great.toFixed(0);
    last_place_1 = listOfStudentsPuans[last - 1];
    listOfStudentsPuans[last - 1] = listOfStudentsPuans[z];
    listOfStudentsPuans[z] = last_place_1;

    newListNames[c] = listOfStudentsName[z];
    last_place_2 = listOfStudentsName[last - 1];
    listOfStudentsName[last - 1] = listOfStudentsName[z];
    listOfStudentsName[z] = last_place_2;

    last--;
    c++;
    great = 0;
}

localStorage.setItem("listofstudentsname", newListNames);
localStorage.setItem("listofstudentspuans", newListPuans);

if (password == "1vv2ksa") {
    let modul1 = {
        teacher: "Vidadi Əlizadə",
        modul: "Layihənin idarə edilməsi",
        date: "45",
        kredit: "3",
        pdfofbook: "#",
        day: "X",
        time: "X",
        pdf: "#"
    },
        modul2 = {
            teacher: "Vidadi Əlizadə",
            modul: "Proqram təminatı testləri",
            date: "60",
            kredit: "4",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "image/proqram_təminatı_testləri_sillabus.pdf"
        },
        modul3 = {
            teacher: "Səma Babayeva",
            modul: "Mobil tətbiqlərin hazırlanması",
            date: "90",
            kredit: "6",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "#"
        },
        modul4 = {
            teacher: "Vidadi Əlizadə",
            modul: "Prototiplərin hazırlanması",
            date: "60",
            kredit: "4",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "image/Prototiplərin_hazırlanması_sillabus.pdf"
        },
        modul5 = {
            teacher: "Vidadi Əlizadə",
            modul: "Front-end proqramlaşdırma",
            date: "90",
            kredit: "6",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "image/Front_end_sillabus.pdf"
        },
        modul6 = {
            teacher: "Səma Babeyva",
            modul: "Back-end proqramlaşdırma",
            date: "120",
            kredit: "8",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "#"
        },
        modul7 = {
            teacher: "Vidadi Əlizadə",
            modul: "Oracle SQL təminatı / 1C",
            date: "60",
            kredit: "4",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "image/sql_oracle_sillabus.pdf"
        }

    listofmodul = [modul1, modul2, modul3, modul4, modul5, modul6, modul7];
}

if (password == "3vv4ksa") {
    let modul1 = {
        teacher: "Pərviz Həmzəyev",
        modul: "Azərbaycan tarixi",
        date: "60",
        kredit: "15/6",
        pdfofbook: "#",
        day: "x",
        time: "x",
        pdf: "#"
    },
        modul2 = {
            teacher: "Zəkiyyə Nuriyeva",
            modul: "Azərbaycan dilində işgüzar və akademik kommunikasiya",
            date: "60",
            kredit: "15/6",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "#"
        },
        modul3 = {
            teacher: "Rahilə Rəhimova",
            modul: "Xarici dildə işgüzar və akademik kommunikasiya I",
            date: "45",
            kredit: "12/4",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "#"
        },
        modul4 = {
            teacher: "Fatma Babayeva",
            modul: "İnformasiya texnologiyaları I",
            date: "30",
            kredit: "8/3",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "#"
        },
        modul5 = {
            teacher: "Fatma Babayeva",
            modul: "Texniki Hesab I",
            date: "30",
            kredit: "8/3",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "#"
        },
        modul6 = {
            teacher: "Səma Babayeva",
            modul: "Komputer əməliyyat sistemləri",
            date: "75",
            kredit: "19/7",
            pdfofbook: "image/Əməliyyat_sistemləri.pptx",
            day: "x",
            time: "x",
            pdf: "#"
        },
        modul7 = {
            teacher: "Vidadi Əlizadə",
            modul: "Komputer Qrafikası",
            date: "60",
            kredit: "15/6",
            pdfofbook: "image/Alqoritm-Peşə.pdf",
            day: "x",
            time: "x",
            pdf: "image/komputer_qrafikasi_sillabus.pdf"
        },
        modul8 = {
            teacher: "Vidadi Əlizadə",
            modul: "Dizayna Giriş",
            date: "60",
            kredit: "15/6",
            pdfofbook: "#",
            day: "x",
            time: "x",
            pdf: "image/Dizayna_giriş_sillabus.pdf"
        },
        modul9 = {
            teacher: "Səma Babayeva",
            modul: "Photoshop I",
            date: "105",
            kredit: "27/10",
            pdfofbook: "image/Photoshop1.pptx",
            day: "x",
            time: "x",
            pdf: "#"
        }

    listofmodul = [modul1, modul2, modul3, modul4, modul5, modul6, modul7, modul8, modul9];
}


if (password == "5vv6ksa") {
    let modul1 = {
        teacher: "?",
        modul: "Fenn1",
        date: "45",
        kredit: "3",
        pdfofbook: "#",
        day: "31.01.2024",
        time: "09:00",
        pdf: "#"
    },
        modul2 = {
            teacher: "?",
            modul: "Fenn1",
            date: "45",
            kredit: "3",
            pdfofbook: "#",
            day: "31.01.2024",
            time: "09:00",
            pdf: "#"
        },
        modul3 = {
            teacher: "?",
            modul: "Fenn1",
            date: "45",
            kredit: "3",
            pdfofbook: "#",
            day: "31.01.2024",
            time: "09:00",
            pdf: "#"
        },
        modul4 = {
            teacher: "?",
            modul: "Fenn1",
            date: "45",
            kredit: "3",
            pdfofbook: "#",
            day: "31.01.2024",
            time: "09:00",
            pdf: "#"
        },
        modul5 = {
            teacher: "?",
            modul: "Fenn1",
            date: "45",
            kredit: "3",
            pdfofbook: "#",
            day: "31.01.2024",
            time: "09:00",
            pdf: "#"
        },
        modul6 = {
            teacher: "?",
            modul: "Fenn1",
            date: "45",
            kredit: "3",
            limit: "3",
            pdfofbook: "#",
            day: "31.01.2024",
            time: "09:00",
            pdf: "#"
        }

    listofmodul = [modul1, modul2, modul3, modul4, modul5, modul6];
}

let countofmodul = 1;
listofmodul.forEach(element => {
    localStorage.setItem("teacher" + countofmodul, element.teacher);
    localStorage.setItem("modul" + countofmodul, element.modul);
    localStorage.setItem("date" + countofmodul, element.date);
    localStorage.setItem("kredit" + countofmodul, element.kredit);
    localStorage.setItem("pdfofbook" + countofmodul, element.pdfofbook);
    localStorage.setItem("day" + countofmodul, element.day);
    localStorage.setItem("time" + countofmodul, element.time);
    localStorage.setItem("pdf" + countofmodul, element.pdf);
    countofmodul++;
});

localStorage.setItem("lengthOfModul", listofmodul.length);
