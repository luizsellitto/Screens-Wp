function ReloadNavBar() {
    fetch('navbarcopy.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
}

ReloadNavBar();

//falta adicionar a classe active

