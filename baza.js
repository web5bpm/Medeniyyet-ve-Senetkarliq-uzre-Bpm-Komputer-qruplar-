localStorage.setItem("midtermDate", "Semestr imtahan I </br> 11 mart - 1 apr")

let user = localStorage.getItem("user");

let lengthOfStudent = localStorage.getItem("lengthOfStudent");
let password = localStorage.getItem("password"), listofmodul;
localStorage.setItem("password", password);


let objectofStudent = [
    student1 = {
        NameofStudent: "Nurlan",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student2 = {
        NameofStudent: "Fuad",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student3 = {
        NameofStudent: "Leyla",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student4 = {
        NameofStudent: "İbrahim",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student5 = {
        NameofStudent: "Nəzrin",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student6 = {
        NameofStudent: "Şükür",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student7 = {
        NameofStudent: "Fərid",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student8 = {
        NameofStudent: "Həmid",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student9 = {
        NameofStudent: "Zəhra.K",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student10 = {
        NameofStudent: "Sevinc",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student11 = {
        NameofStudent: "Zəhra.Ə",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 19, serbestish: 0, resultofexam: 0 }
    },
    student12 = {
        NameofStudent: "Fatimə",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student13 = {
        NameofStudent: "Esmira",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student14 = {
        NameofStudent: "Tahir",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student15 = {
        NameofStudent: "Kəmaləddin",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student16 = {
        NameofStudent: "Hüseyn",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    },
    student17 = {
        NameofStudent: "Ərhan",
        ProqramMuhendisliyi: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xarici_dil: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        it: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        th: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        xromotologiya: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        sql: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        resmxett: { kolluk1: 0, kolluk1: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 },
        illustrator: { kolluk1: 0, kolluk2: 0, davamiyyet: 0, serbestish: 0, resultofexam: 0 }
    }
];

objectofStudent.forEach(student => {
    if (user === student.NameofStudent) {

        localStorage.setItem("Kollekvium1_pm", student.ProqramMuhendisliyi.kolluk1);
        localStorage.setItem("Kollekvium2_pm", student.ProqramMuhendisliyi.kolluk2);
        localStorage.setItem("Davamiyyet_pm", student.ProqramMuhendisliyi.davamiyyet);
        localStorage.setItem("Ferdi_pm", student.ProqramMuhendisliyi.serbestish);
        localStorage.setItem("resultofexam_pm", student.ProqramMuhendisliyi.resultofexam);

        localStorage.setItem("Kollekvium1_ing", student.xarici_dil.kolluk1);
        localStorage.setItem("Kollekvium2_ing", student.xarici_dil.kolluk2);
        localStorage.setItem("Davamiyyet_ing", student.xarici_dil.davamiyyet);
        localStorage.setItem("Ferdi_ing", student.xarici_dil.serbestish);
        localStorage.setItem("resultofexam_ing", student.xarici_dil.resultofexam);

        localStorage.setItem("Kollekvium1_it", student.it.kolluk1);
        localStorage.setItem("Kollekvium2_it", student.it.kolluk2);
        localStorage.setItem("Davamiyyet_it", student.it.davamiyyet);
        localStorage.setItem("Ferdi_it", student.it.serbestish);
        localStorage.setItem("resultofexam_it", student.it.resultofexam);

        localStorage.setItem("Kollekvium1_th", student.th.kolluk1);
        localStorage.setItem("Kollekvium2_th", student.th.kolluk2);
        localStorage.setItem("Davamiyyet_th", student.th.davamiyyet);
        localStorage.setItem("Ferdi_th", student.th.serbestish);
        localStorage.setItem("resultofexam_th", student.th.resultofexam);

        localStorage.setItem("Kollekvium1_xromo", student.xromotologiya.kolluk1);
        localStorage.setItem("Kollekvium2_xromo", student.xromotologiya.kolluk2);
        localStorage.setItem("Davamiyyet_xromo", student.xromotologiya.davamiyyet);
        localStorage.setItem("Ferdi_xromo", student.xromotologiya.serbestish);
        localStorage.setItem("resultofexam_xromo", student.xromotologiya.resultofexam);

        localStorage.setItem("Kollekvium1_sql", student.sql.kolluk1);
        localStorage.setItem("Kollekvium2_sql", student.sql.kolluk2);
        localStorage.setItem("Davamiyyet_sql", student.sql.davamiyyet);
        localStorage.setItem("Ferdi_sql", student.sql.serbestish);
        localStorage.setItem("resultofexam_sql", student.sql.resultofexam);

        localStorage.setItem("Kollekvium1_resm", student.resmxett.kolluk1);
        localStorage.setItem("Kollekvium2_resm", student.resmxett.kolluk2);
        localStorage.setItem("Davamiyyet_resm", student.resmxett.davamiyyet);
        localStorage.setItem("Ferdi_resm", student.resmxett.serbestish);
        localStorage.setItem("resultofexam_resm", student.resmxett.resultofexam);

        localStorage.setItem("Kollekvium1_illus", student.illustrator.kolluk1);
        localStorage.setItem("Kollekvium2_illus", student.illustrator.kolluk2);
        localStorage.setItem("Davamiyyet_illus", student.illustrator.davamiyyet);
        localStorage.setItem("Ferdi_illus", student.illustrator.serbestish);
        localStorage.setItem("resultofexam_illus", student.illustrator.resultofexam);
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

        puan = a.ProqramMuhendisliyi.kolluk1 + a.ProqramMuhendisliyi.kolluk2 + a.ProqramMuhendisliyi.davamiyyet + a.ProqramMuhendisliyi.serbestish +
            a.xarici_dil.kolluk1 + a.xarici_dil.kolluk2 + a.xarici_dil.davamiyyet + a.xarici_dil.serbestish +
            a.it.kolluk1 + a.it.kolluk2 + a.it.davamiyyet + a.it.serbestish +
            a.th.kolluk1 + a.th.kolluk2 + a.th.davamiyyet + a.th.serbestish +
            a.xromotologiya.kolluk1 + a.xromotologiya.kolluk2 + a.xromotologiya.davamiyyet + a.xromotologiya.serbestish +
            a.sql.kolluk1 + a.sql.kolluk2 + a.sql.davamiyyet + a.sql.serbestish +
            a.resmxett.kolluk1 + a.resmxett.kolluk2 + a.resmxett.davamiyyet + a.resmxett.serbestish +
            a.illustrator.kolluk1 + a.illustrator.kolluk2 + a.illustrator.davamiyyet + a.illustrator.serbestish;

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
    let mehemmed = 65, adil = 55, altay = 50, aysel = 82, eli = 90, elisadir = 55, fateh = 73,
        govher = 58, gullale = 92, shelale = 75, huseyn = 89, inal = 50, konul = 50,
        murad = 90, naile = 70, necibe = 91, oruc = 88, sebine = 60, serfi = 68, yusif = 70;

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
        teacher: "Vidadi Əlizadə",
        modul: "Proqram Mühəndisliyi",
        date: "60",
        kredit: "15/6",
        pdfofbook: "#",
        day: "17.01.2024",
        time: "13:30-15:30",
        pdf: "#"
    },
        modul2 = {
            teacher: "Rahilə Rəhimova",
            modul: "Xarici dildə işgüzar və akademik kommunikasiya II",
            date: "45",
            kredit: "12/4",
            pdfofbook: "#",
            day: "10.01.2024",
            time: "11:00-13:00",
            pdf: "#"
        },
        modul3 = {
            teacher: "Fatma Babayeva",
            modul: "İnformasiya texnologiyaları II",
            date: "30",
            kredit: "8/3",
            pdfofbook: "#",
            day: "12.01.2024",
            time: "13:30-15:30",
            pdf: "#"
        },
        modul4 = {
            teacher: "Fatma Babayeva",
            modul: "Texniki Hesab II",
            date: "30",
            kredit: "8/3",
            pdfofbook: "#",
            day: "15.01.2024",
            time: "11:00-13:00",
            pdf: "#"
        },
        modul5 = {
            teacher: "Səma Babayeva",
            modul: "Xromotologiya",
            date: "75",
            kredit: "19/7",
            pdfofbook: "image/Əməliyyat_sistemləri.pptx",
            day: "16.01.2024",
            time: "11:00-13:00",
            pdf: "#"
        },
        modul6 = {
            teacher: "Vidadi Əlizadə",
            modul: "SQL",
            date: "60",
            kredit: "15/6",
            pdfofbook: "image/Alqoritm-Peşə.pdf",
            day: "09.01.2024",
            time: "11:00-13:00",
            pdf: "image/komputer_qrafikasi_sillabus.pdf"
        },
        modul7 = {
            teacher: "Vidadi Əlizadə",
            modul: "Texniki Rəsmxətt",
            date: "60",
            kredit: "15/6",
            pdfofbook: "#",
            day: "08.01.2024",
            time: "08:30-10:30",
            pdf: "image/Dizayna_giriş_sillabus.pdf"
        },
        modul8 = {
            teacher: "Səma Babayeva",
            modul: "İllustrator",
            date: "105",
            kredit: "27/10",
            pdfofbook: "image/Photosho.pptx",
            day: "13.01.2024",
            time: "13:30-15:30",
            pdf: "#"
        }

    listofmodul = [modul1, modul2, modul3, modul4, modul5, modul6, modul7, modul8];
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
