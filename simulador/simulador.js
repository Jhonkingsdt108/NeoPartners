function neoPartner() {
    let numPart = Number(document.getElementById("numPart").value);
    const comiPart = 5 / 100;
    var recomPart = (numPart * comiPart).toFixed(0);
    document.getElementById("numValPart").innerHTML = ('$ ' + recomPart);

    console.log(recomPart);

};
function neoJunior() {
    let numJuni = Number(document.getElementById("numJuni").value);
    const comiJuni = 7 / 100;
    var recomJuni = (numJuni * comiJuni).toFixed(0);
    document.getElementById("numValJun").innerHTML = ('$ ' + recomJuni)
};
// --------constantes--------
const comiPorcen = 10 / 100;
const middAirdrop = 2000000;
const dirSeniorAirdrop = 8000000;
const dirMasterAirdrop = 12000000;
const embaAirdrop = 15000000;

function neoMiddle() {
    let middUno = Number(document.getElementById("middUno").value);
    let middDos = Number(document.getElementById("middDos").value);
    let middEquipo = Number(document.getElementById("middEquipo").value);
    let middDirectos = (middUno * comiPorcen)
    let middVolumen = (middDos * middEquipo).toFixed(0)
    document.getElementById("middDirectos").innerHTML = ('$ ' + middDirectos);
    document.getElementById("middVolumen").innerHTML = ('$ ' + middVolumen);
    if (middVolumen >= 120000000) {
        let middTotal = (middDirectos + middAirdrop).toFixed(0);
        document.getElementById("middAirdrop").innerHTML = ('$ ' + middAirdrop);
        document.getElementById("middTotal").innerHTML = ('$ ' + middTotal);
    } else {
        document.getElementById("middAirdrop").innerHTML = ('$ 0');
        document.getElementById("middTotal").innerHTML = ('$ ' + middDirectos);
    }
};

function neoDirJunior() {
    let dirJunUno = Number(document.getElementById("dirJunUno").value);
    let dirJunDos = Number(document.getElementById("dirJunDos").value);
    let dirJunEquipo = Number(document.getElementById("dirJunEquipo").value);
    let dirJunDirectos = dirJunUno * comiPorcen;
    let dirJunVolumen = (dirJunDos * dirJunEquipo).toFixed(0);
    document.getElementById("dirJunDirectos").innerHTML = ('$ ' + dirJunDirectos);
    document.getElementById("dirJunVolumen").innerHTML = ('$ ' + dirJunVolumen);
    document.getElementById("dirJunAPM").innerHTML = ('$ ' + dirJunAPM)
    if (dirJunVolumen >= 220000000) {
        let dirJunVol = dirJunVolumen
        let dirJunAirdrop = 5000000;
        let dirJunTotal;
        let dirJunAPM = dirJunVol * 0.005
        let dirJunRenMes = dirJunAPM
        dirJunTotal = dirJunAirdrop + dirJunDirectos + dirJunAPM
        document.getElementById("dirJunAirdrop").innerHTML = ('$ ' + dirJunAirdrop);
        document.getElementById("dirJunTotal").innerHTML = ('$ ' + dirJunTotal);
        document.getElementById("dirJunAPM").innerHTML = ('$ ' + dirJunRenMes)
    } else {
        let dirJunVol1 = dirJunVolumen
        let dirJunTotal1;
        let dirJunAPM1 = dirJunVol1 * 0.005
        let dirJunRenMes1 = dirJunAPM1
        dirJunTotal1 = dirJunDirectos + dirJunAPM1
        document.getElementById("dirJunTotal").innerHTML = ('$ ' + dirJunTotal1);
        document.getElementById("dirJunAirdrop").innerHTML = ('$ 0');
        document.getElementById("dirJunAPM").innerHTML = ('$ ' + dirJunRenMes1)
    }
}
function neoDirSenior() {
    let dirSenUno = Number(document.getElementById("dirSenUno").value);
    let dirSenDos = Number(document.getElementById("dirSenDos").value);
    let dirSenEquipo = Number(document.getElementById("dirSenEquipo").value);
    let dirSenDirectos = dirSenUno * comiPorcen;
    let dirSenVolumen = (dirSenDos * dirSenEquipo).toFixed(0);
    document.getElementById("dirSenDirectos").innerHTML = ('$ ' + dirSenDirectos);
    document.getElementById("dirSenVolumen").innerHTML = ('$ ' + dirSenVolumen);
    document.getElementById("dirSenAPM").innerHTML = ('$ ' + dirSenAPM)
    if (dirSenVolumen >= 320000000) {
        let dirSenVol = dirSenVolumen
        let dirSenAirdrop = 8000000;
        let dirSenTotal;
        let dirSenAPM = dirSenVol * 0.006
        let dirSenRenMes = dirSenAPM
        dirSenTotal = dirSenAirdrop + dirSenDirectos + dirSenAPM
        document.getElementById("dirSenAirdrop").innerHTML = ('$ ' + dirSenAirdrop);
        document.getElementById("dirSenTotal").innerHTML = ('$ ' + dirSenTotal);
        document.getElementById("dirSenAPM").innerHTML = ('$ ' + dirSenRenMes)
    } else {
        let dirSenVol1 = dirSenVolumen
        let dirSenTotal1;
        let dirSenAPM1 = dirSenVol1 * 0.006
        let dirSenRenMes1 = dirSenAPM1
        dirSenTotal1 = dirSenDirectos + dirSenAPM1
        document.getElementById("dirSenTotal").innerHTML = ('$ ' + dirSenTotal1);
        document.getElementById("dirSenAirdrop").innerHTML = ('$ 0');
        document.getElementById("dirSenAPM").innerHTML = ('$ ' + dirSenRenMes1)
    }
}
function neoDirMaster() {
    let dirMasUno = Number(document.getElementById("dirMasUno").value);
    let dirMasDos = Number(document.getElementById("dirMasDos").value);
    let dirMasEquipo = Number(document.getElementById("dirMasEquipo").value);
    let dirMasDirectos = dirMasUno * comiPorcen;
    let dirMasVolumen = (dirMasDos * dirMasEquipo).toFixed(0);
    document.getElementById("dirMasDirectos").innerHTML = ('$ ' + dirMasDirectos);
    document.getElementById("dirMasVolumen").innerHTML = ('$ ' + dirMasVolumen);
    document.getElementById("dirMasAPM").innerHTML = ('$ ' + dirSenAPM)
    if (dirMasVolumen >= 450000000) {
        let dirMasVol = dirMasVolumen
        let dirMasAirdrop = 12000000;
        let dirMasTotal;
        let dirMasAPM = dirMasVol * 0.007
        let dirMasRenMes = dirMasAPM
        dirMasTotal = dirMasAirdrop + dirMasDirectos + dirMasAPM
        document.getElementById("dirMasAirdrop").innerHTML = ('$ ' + dirMasAirdrop);
        document.getElementById("dirMasTotal").innerHTML = ('$ ' + dirMasTotal);
        document.getElementById("dirMasAPM").innerHTML = ('$ ' + dirMasRenMes)
    } else {
        let dirMasVol1 = dirMasVolumen
        let dirMasTotal1;
        let dirMasAPM1 = dirMasVol1 * 0.007
        let dirMasRenMes1 = dirMasAPM1
        dirMasTotal1 = dirMasDirectos + dirMasAPM1
        document.getElementById("dirMasTotal").innerHTML = ('$ ' + dirMasTotal1);
        document.getElementById("dirMasAirdrop").innerHTML = ('$ 0');
        document.getElementById("dirMasAPM").innerHTML = ('$ ' + dirMasRenMes1)
    }
}
function neoEmbajador() {
    let embaUno = Number(document.getElementById("embaUno").value);
    let embaDos = Number(document.getElementById("embaDos").value);
    let embaEquipo = Number(document.getElementById("embaEquipo").value);
    let embaDirectos = embaUno * comiPorcen;
    let embaVolumen = (embaDos * embaEquipo).toFixed(0);
    document.getElementById("embaDirectos").innerHTML = ('$ ' + embaDirectos);
    document.getElementById("embaVolumen").innerHTML = ('$ ' + embaVolumen);
    document.getElementById("embaAPM").innerHTML = ('$ ' + embaAPM)
    if (embaVolumen >= 600000000) {
        let embaVol = embaVolumen
        let embaAirdrop = 15000000;
        let embaTotal;
        let embaAPM = embaVol * 0.008
        let embaRenMes = embaAPM
        embaTotal = embaAirdrop + embaDirectos + embaAPM
        document.getElementById("embaAirdrop").innerHTML = ('$ ' + embaAirdrop);
        document.getElementById("embaTotal").innerHTML = ('$ ' + embaTotal);
        document.getElementById("embaAPM").innerHTML = ('$ ' + embaRenMes)
    } else {
        let embaVol1 = embaVolumen
        let embaTotal1;
        let embaAPM1 = embaVol1 * 0.008
        let embaRenMes1 = embaAPM1
        embaTotal1 = embaDirectos + embaAPM1
        document.getElementById("embaTotal").innerHTML = ('$ ' + embaTotal1);
        document.getElementById("embaAirdrop").innerHTML = ('$ 0');
        document.getElementById("embaAPM").innerHTML = ('$ ' + embaRenMes1)
    }
}

