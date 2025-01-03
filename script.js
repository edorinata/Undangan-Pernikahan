function confirmAttendance() {
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;

    if (name && attendance) {
        const message = attendance === 'yes' 
            ? `Terima kasih, ${name}. Kami tunggu kehadiran Anda di acara kami.` 
            : `Terima kasih, ${name}. Doa Anda sudah sangat berarti bagi kami.`;
        
        document.getElementById('response').innerText = message;
    } else {
        document.getElementById('response').innerText = "Harap isi semua data.";
    }
}