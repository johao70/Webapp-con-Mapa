const http = new XMLHttpRequest();

const API_URL = "http://localhost:3000/estudiantes";

mapa = () => {
    http.open('GET', API_URL);
    http.send();
    http.onload = () => {
        if (http.status === 200) {    
            const datos = (http.response);
            console.log(datos)
        }
    }

    const quito = [ -0.178810, -78.468893]

    const mymap = L.map('mapa', { zoom: 12, center: quito });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);
    
    const juan = L.marker([-0.0960491, -78.3062059]).bindPopup("Casa Juanito"),
        johao = L.marker([-0.220071, -78.506284]).bindPopup("Casa Johao");

    const ubicacionCaidas = L.layerGroup([juan, johao]).addTo(mymap);
}