document.querySelectorAll('.status').forEach(cell => {
    cell.addEventListener('click', function () {
        if (this.classList.contains('green')) {
            this.classList.remove('green');
            this.classList.add('amber');
        } else if (this.classList.contains('amber')) {
            this.classList.remove('amber');
            this.classList.add('red');
        } else if (this.classList.contains('red')) {
            this.classList.remove('red');
        } else {
            this.classList.add('green');
        }
    });
});
