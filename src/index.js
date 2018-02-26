import ellipsize from 'ellipsize';
import hotel from './hotel';

document.getElementById('root').innerHTML = '<button id="showButton">Show Hotel</button>';

document.getElementById('showButton').addEventListener('click', () => {
    const { name, description } = hotel;
    const html = `<div>
        <h1>${name}</h1>
        <p>${ellipsize(description, 50)}</p>
    </div>`;
    document.getElementById('root').innerHTML = html;
});
