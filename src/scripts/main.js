AOS.init(); 

const dataEventon = new Date("May 28, 2025 12:00:00");
const timeEvento = dataEventon.getTime();


const contasAsHoras = setInterval(function() {
    const agora = new Date();
    const timeAtual = agora.getTime();
    
    const distanciaEvento = timeEvento - timeAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasEvento = Math.floor(distanciaEvento % diaEmMs / horaEmMs);
    const minutosEvento = Math.floor(distanciaEvento % horaEmMs / minutoEmMs);
    const segundosEvento = Math.floor(distanciaEvento % minutoEmMs / (1000));

    document.getElementById('contador').innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`

    if (distanciaEvento <= 0) {
        clearInterval(contasAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    } 
}, 1000)