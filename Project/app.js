let heading = document.querySelectorAll('button').length;
for (let i = 0; i < heading; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function() {
        let text = this.innerHTML;
        document.querySelector('h1').innerHTML = text + ' ' + ' button Click'
    })
}