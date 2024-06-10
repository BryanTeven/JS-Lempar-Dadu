
function lempardadu() {
    const jumlahdadu = document.getElementById("jumlahdadu").value;
    const hasil = document.getElementById("hasil");
    const gambardadu = document.getElementById("gambardadu");
    const values = [];
    const gambar = [];

    for (let i = 0; i < jumlahdadu; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        gambar.push(`<img src="./Img/${value}.jpg" alt="Dadu ${value}">`);

    }

    hasil.textContent = `Dadu: ${values.join(', ')}`;
    gambardadu.innerHTML = gambar.join('');

}
