let main1 = document.getElementsByClassName('main1')[0];
let pdf_child;

for (let i = 0; i < localStorage.getItem("lengthOfModul"); i++) {
    pdf_child = document.createElement('div');
    const count = document.createElement('span');
    count.textContent = i + 1;
    const pdf_modul = document.createElement('span');
    pdf_modul.textContent = localStorage.getItem("modul" + (i + 1));
    const pdf_link = document.createElement('a');
    pdf_link.setAttribute('href', localStorage.getItem("pdf" + (i + 1)));
    const pdf_icon = document.createElement('i');
    pdf_icon.className = "bx bxs-file-pdf";

    pdf_link.appendChild(pdf_icon);
    pdf_child.appendChild(count);
    pdf_child.appendChild(pdf_modul);
    pdf_child.appendChild(pdf_link);

    main1.appendChild(pdf_child);
}


main1.onclick = function (e) {
    if (e.target.className == "bx bxs-file-pdf") {
        let dd = e.target.parentElement.getAttribute('href');
        if (dd == '#') {
            alert("Bu modul hal-hazırda hazırlanır");
        }
    }
}
