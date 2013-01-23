// Codi del la funció "Solucions La Galera Text (Autocorrectors)"
// Autor: Marc Clascà
// (c)2013
// Visiteu pàgina oficial per instalació i més informació mclasca.sytes.net/solucions/


(function () {
	
    flash = document.getElementsByTagName('object');

    dataurl = flash[0].getAttribute("data");

    dataurlsp = dataurl.replace("profesor=0", "profesor=1");

    flash[0].setAttribute("data", dataurlsp);

    param = flash[0].getElementsByTagName("param");

    param[2].setAttribute("value", dataurlsp);

})()