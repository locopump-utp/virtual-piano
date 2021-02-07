document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyA') {
        let audioA = new Audio('./audio/A.mp3');
        audioA.load();
        audioA.play();
    } else if (event.code === 'KeyS') {
        let audioS = new Audio('./audio/S.mp3');
        audioS.load();
        audioS.play();
    } else if (event.code === 'KeyD') {
        let audioD = new Audio('./audio/D.mp3');
        audioD.load();
        audioD.play();
    } else if (event.code === 'KeyF') {
        let audioF = new Audio('./audio/F.mp3');
        audioF.load();
        audioF.play();
    } else if (event.code === 'KeyG') {
        let audioG = new Audio('./audio/G.mp3');
        audioG.load();
        audioG.play();
    } else if (event.code === 'KeyH') {
        let audioH = new Audio('./audio/H.mp3');
        audioH.load();
        audioH.play();
    } else if (event.code === 'KeyJ') {
        let audioJ = new Audio('./audio/J.mp3');
        audioJ.load();
        audioJ.play();
    } else if (event.code === 'KeyW') {
        let audioW = new Audio('./audio/W.mp3');
        audioW.load();
        audioW.play();
    } else if (event.code === 'KeyE') {
        let audioE = new Audio('./audio/E.mp3');
        audioE.load();
        audioE.play();
    } else if (event.code === 'KeyT') {
        let audioT = new Audio('./audio/T.mp3');
        audioT.load();
        audioT.play();
    } else if (event.code === 'KeyY') {
        let audioY = new Audio('./audio/Y.mp3');
        audioY.load();
        audioY.play();
    } else if (event.code === 'KeyU') {
        let audioU = new Audio('./audio/U.mp3');
        audioU.load();
        audioU.play();
    } else {
        console.log(`Warning: This key is not available in piano!`);
    }
});
