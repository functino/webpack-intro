var hotel = {
    id: '1aa4c4ad-f9ea-3367-a163-8a3a6884d450',
    name: 'Dana Beach Resort',
    description: 'Das modern ausgestattete 5-Sterne-Hotel Dana Beach Resort liegt direkt am eigenen Sandstrand, erbaut in einem einzigartigen Stil, mit hohem Komfort, mit bestem Service und einem umfangreichen Sport- & Freizeitangebot.'
};

document.getElementById('root').innerHTML = '<button id="showButton">Show Hotel</button>';

document.getElementById('showButton').addEventListener('click', function() {
    var html = '<div><h1>' + hotel.name + '</h1><p>' + hotel.description + '</p></div>';
    document.getElementById('root').innerHTML = html;
});
