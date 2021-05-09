//Háromszög
function hSzamol() {

    var ha = parseFloat(document.getElementById("ha").value);
    var hb = parseFloat(document.getElementById("hb").value);
    var hc = parseFloat(document.getElementById("hc").value);
    var hma = parseFloat(document.getElementById("hma").value);

    if(ha<=0 || hb<=0 || hc<=0 || hma<=0){
        document.getElementById("hKerEred").value = "hiba".toLocaleString();
        document.getElementById("hTerEred").value = "hiba".toLocaleString();
        alert("Az oldalak hossza nem lehet nulla vagy annál kisseb")
    }
    if(ha+hb<hc || hb+hc<ha || ha+hc<hb){
        document.getElementById("hKerEred").value = "hiba".toLocaleString();
        document.getElementById("hTerEred").value = "hiba".toLocaleString();
        alert("Két oldal összeségének a hossza nem lehet rövidebb mint a harmadik oldalnak")
    }
    
    var hKer = (ha+hb+hc).toFixed(2);
    var hTer = (ha*hma/2).toFixed(2);

    document.getElementById("hKerEred").value =
        hKer.toLocaleString();
    
    document.getElementById("hTerEred").value =
        hTer.toLocaleString();
}
//Ötszög
function öSzamol() {
    var öa = parseFloat(document.getElementById("öa").value);
    var ör = parseFloat(document.getElementById("ör").value);

    if(öa<=0 || ör<=0){
        document.getElementById("hKerEred").value = "hiba".toLocaleString();
        document.getElementById("hTerEred").value = "hiba".toLocaleString();
        alert("Az oldalak hossza nem lehet nulla vagy annál kisseb")
    }


    var öKer = (öa*5).toFixed(2);
    var öTer = (5*((öa*ör)/2)).toFixed(2);

    document.getElementById("öKerEred").value =
        öKer.toLocaleString();
    document.getElementById("öTerEred").value =
    öTer.toLocaleString();
}
    //Henger
function HSzamol() {
    var Hr = parseFloat(document.getElementById("Hr").value);
    var Hm = parseFloat(document.getElementById("Hm").value);

    if(Hr<=0 || Hm<=0){
        document.getElementById("HTér").value = "hiba".toLocaleString();
        document.getElementById("HFelsz").value = "hiba".toLocaleString();
        alert("Az oldalak hossza nem lehet nulla vagy annál kisseb")
    }

    var HTér = ((Math.PI*Hr*Hr*Hm)).toFixed(2);
    var HFelsz = (2*Math.PI*Hr*(Hr+Hm)).toFixed(2);

    document.getElementById("HTér").value =
        HTér.toLocaleString();
    document.getElementById("HFelsz").value =
    HFelsz.toLocaleString();
}
//Gúla
function GSzamol(){
    var Ga = parseFloat(document.getElementById("Ga").value);
    var Gs = parseFloat(document.getElementById("Gs").value);
  
    if(Ga<=0 || Gs<=0){
        document.getElementById("HTér").value = "hiba".toLocaleString();
        document.getElementById("HFelsz").value = "hiba".toLocaleString();
        alert("Az oldalak hossza nem lehet nulla vagy annál kisseb")
    }

    var GAT = (4*Ga).toFixed(2);
    var GATF = (Math.sqrt(Ga * Ga + Ga * Ga)).toFixed(2);
    var GM = (Math.sqrt(Gs * Gs - (GATF / 2) * (GATF / 2))).toFixed(2);
    var GPT = ((Math.sqrt(Gs*Gs-(Ga/2)*(Ga/2))*Ga/2)).toFixed(2);
     
    var GFelsz = GAT+GPT;
    var GTér = (GAT*GM)/3;

    document.getElementById("GTér").value =
    GTér.toLocaleString();
    document.getElementById("GFelsz").value =
    GFelsz.toLocaleString();
}
