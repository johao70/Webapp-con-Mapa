mapa = () => {
    const mymap = L.map('mapa', { zoom: 12, center: [-0.0960491, -78.3062059] });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);
    
    const juan = L.marker([-0.0960491, -78.3062059]).bindPopup("Casa de Juanito"),
        quito = L.marker([-78.5248, -0.225219]).bindPopup("Quito");

    const casas = L.layerGroup([juan, quito]).addTo(mymap);
}