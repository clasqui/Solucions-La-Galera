// Codi del la funció "Solucions La Galera Text (Autocorrectors)"
// Autor: Marc Clascà
// (c)2013
// Visiteu pàgina oficial per instalació i més informació mclasca.sytes.net/solucions/


(function () {
    console.log("Script iniciat");
	
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
    

    var solucionsWin = window.open(respostes_pdf_url, "", "location=0, scrollbars=1, status=0, menubar=0, left=10, top=200, width=100, height=100");

    win_title = solucionsWin.document.getElementsByTagName('title')[0];
    win_title.textContent = "Donde esta el coche!";
    

})()
