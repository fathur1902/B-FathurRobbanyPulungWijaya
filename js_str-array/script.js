let antrian = ['ray', 'fiki', 'fadhila', 'farah'];

function updateQueue() {
    antrian.push('nabila');
    antrian.push('maza', 'elsi');
    antrian.pop();//elsi plg
    antrian.pop();//maza plg
    antrian.shift();//ray selesai belanja
    antrian.shift();//fiki selesai belanja
    antrian.unshift('tomi');//dtg tomi nyerobot

    displayQueue();
}

function displayQueue() {
    const antrianDiv = document.getElementById('antrian');
    antrianDiv.innerHTML = 'Antrian saat ini: ' + antrian.join(',');

}
displayQueue();