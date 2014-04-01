// Codi del la funció "Solucions La Galera Text (Autocorrectors)"
// Autor: Marc Clascà
// (c)2014
// Visiteu pàgina oficial per instalació i més informació hulehule20.github.io/Solucions-La-Galera


(function () {
    console.log("Script iniciat");

    var fix = false;
    var ua = navigator.userAgent.toLowerCase(); 
    if (ua.indexOf('safari') != -1) { 
        if (ua.indexOf('chrome') > -1) {
            console.log("Browser is Chrome");
            fix = false;
        } else {
            console.warn("Browser is safari");
            fix = true;
        }
    }
	
    url = document.URL;

    console.log(url);
    url_array = url.split("/");
    
    if(url_array[2] != "projecteeso.lagaleratext.cat"){
        console.log("Not in lagalera text, exiting...");
        alert("No estas a la galera text!!");
        return;
    }else if(url_array)

    act_code = url_array[4];
    act_code_array = act_code.split("-");
    llibre = act_code_array[0] + "-" + act_code_array[1] + "-" + act_code_array[2];

    console.log(act_code+"\n"+llibre);

    console.log("data retrieved, builing URL...");

    respostes_pdf_url = "http://projecteeso.lagaleratext.cat/static/llibres/" + llibre + "/MEDIES/" + act_code + "-R.pdf";
    console.log(respostes_pdf_url);

    if(fix){
        console.warn("Executing Safari fix");
        window.prompt("Copia i enganxa en una altra finestra la adreça següent:",respostes_pdf_url);
        return;
    }


    var solucionsWin = window.open(respostes_pdf_url, "_blank", "location=0, scrollbars=1, status=0, menubar=0, left=10, top=200, width=100, height=100");
    
    function closeWin(reason){
        solucionsWin.close();
        console.log("Window closed. Reason: " + reason);
    }

    var timerID = setTimeout(function() {closeWin("3 minutes timeout over");}, 180000);

    solucionsWin.onbeforeunload = function(){
        clearTimeout(timerID);
        closeWin("You closed the window!");
    };

})()
