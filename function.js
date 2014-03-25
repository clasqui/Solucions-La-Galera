// Codi del la funció "Solucions La Galera Text (Autocorrectors)"
// Autor: Marc Clascà
// (c)2013
// Visiteu pàgina oficial per instalació i més informació mclasca.sytes.net/solucions/


(function () {
    console.log("Script iniciat");
	
    url = document.URL;

    console.log(url);

    url_array = url.split("/");
    act_code = url_array[2];
    act_code_array = act_code.split("-");
    llibre = act_code_array[0] + "-" + act_code_array[1] + "-" + act_code_array[2];

    console.log(act_code+"\n"+llibre);
    
    if(!(window.open(activitat, "Apunta Aquí les solucions!"))){
    	console.log("No s'ha pogut obrir la finestra.")
    };
})()
