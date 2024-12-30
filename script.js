function showLoveMessage() {
    const messageElement = document.querySelector('.message');
    messageElement.style.opacity = 1;
}

function showYearsTogether() {
    const yearsMessage = document.getElementById('yearsMessage');
    yearsMessage.style.display = 'block'; // Yazıyı görünür hale getir
}

function extendRibbon() {
    const ribbon = document.querySelector('.ribbon');
    const ribbonMessage = document.getElementById('ribbonMessage');
    
    // Kurdelenin uzama animasyonunu başlat
    ribbon.style.animation = 'ribbonExpand 2s ease-in-out forwards';
    
    // Kurdele uzadıktan sonra yazıyı göster
    setTimeout(() => {
        ribbonMessage.style.display = 'block';
    }, 2000); // 2 saniye sonra yazıyı göster
}
