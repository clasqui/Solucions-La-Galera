// Codi del la funció "Solucions La Galera Text (Autocorrectors)"
// Autor: Marc Clascà
// (c)2013
// Visiteu pàgina oficial per instalació i més informació mclasca.sytes.net/solucions/


(function () {
    console.log("Script iniciat");
	
    flash = document.getElementsByTagName('object');

    dataurl = flash[0].getAttribute("data");

    if(!(dataurlsp = dataurl.replace("profesor=0", "profesor=1"))){
    	console.log("No s'ha pogut canviar variable profesor.");
    };

    if(!(flash[0].setAttribute("data", dataurlsp))){
    	console.log("No s'ha pogut aplicar canvi de variables al flash.")
    };

    param = flash[0].getElementsByTagName("param");

    param[2].setAttribute("value", dataurlsp);
    console.log("Obrint finestra nova...")
    activitat = window.location;
    
    if(!(window.open(activitat, "Apunta Aquí les solucions!"))){
    	console.log("No s'ha pogut obrir la finestra.")
    };
})()
