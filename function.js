// Codi del la funci� "Solucions La Galera Text (Autocorrectors)"
// Autor: Marc Clasc�
// (c)2013
// Visiteu p�gina oficial per instalaci� i m�s informaci� mclasca.sytes.net/solucions/


(function () {
	
    flash = document.getElementsByTagName('object');

    dataurl = flash[0].getAttribute("data");

    dataurlsp = dataurl.replace("profesor=0", "profesor=1");

    flash[0].setAttribute("data", dataurlsp);

    param = flash[0].getElementsByTagName("param");

    param[2].setAttribute("value", dataurlsp);
    
    activitat = window.location;
    
    window.open(activitat, "Apunta Aqu� les solucions!");
})()
