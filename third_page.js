let listnameLocal = localStorage.getItem("listname").split(",");
let listsureLocal = localStorage.getItem("listsure").split(",");
let listgithubLocal = localStorage.getItem("listgithub").split(",");
let listgithcoverLocal = localStorage.getItem("listgithcover").split(",");
let listprofilLocal = localStorage.getItem("listprofil").split(",");


let main1 = document.getElementsByClassName('main1')[0];

for (let i = 0; i < lengthOfStudent; i++) {
    if (listgithubLocal[i] != "") {
        let workofs = document.createElement('section');

        let profilofs = document.createElement('img');
        profilofs.setAttribute('src', listprofilLocal[i]);

        let inforofs = document.createElement('div');
        let inforofs_name = document.createElement('span');
        inforofs_name.textContent = listnameLocal[i];
        let inforofs_sure = document.createElement('span');
        inforofs_sure.textContent = listsureLocal[i];
        let inforofs_job = document.createElement('span');
        inforofs_job.textContent = "Web Developer";
        let inforofs_gitLink = document.createElement('a');
        inforofs_gitLink.textContent = listgithubLocal[i];
        inforofs_gitLink.setAttribute('href', listgithubLocal[i]);
        inforofs_gitLink.setAttribute('target', '_blank');

        let git_cover_link = document.createElement('a');
        git_cover_link.setAttribute('href', listgithubLocal[i]);
        git_cover_link.setAttribute('target', '_blank');
        let git_cover = document.createElement('img');
        git_cover.setAttribute('src', listgithcoverLocal[i]);

        inforofs.appendChild(inforofs_name);
        inforofs.appendChild(inforofs_sure);
        inforofs.appendChild(inforofs_job);
        inforofs.appendChild(inforofs_gitLink);

        git_cover_link.appendChild(git_cover);

        workofs.appendChild(profilofs);
        workofs.appendChild(inforofs);
        workofs.appendChild(git_cover_link);

        main1.appendChild(workofs);
    }
}