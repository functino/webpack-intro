document.getElementById('root').innerHTML = '<button id="showButton">Show Hotel</button>';

document.getElementById('showButton').addEventListener('click', function() {
    var html = '<div><h1>' + hotel.name + '</h1><p>' + hotel.description + '</p></div>';
    document.getElementById('root').innerHTML = html;
});
