/*
    JAVASCRIPT
*/

const icon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const contentDom = document.getElementById('content');
const filtroDom = document.getElementById('filtro');

//Do un colore casuale ad ogni 
icon.forEach(elemento => {
    elemento.color = `#${generaColoreCasuale()}`
});

//Di base mostro tutti i box di tutte le value
icon.forEach(element => {
    contentDom.append(generateIconBox(element));
});

//Al cambio del contenuto della select mostro solo i box che hanno la value selezionata
filtroDom.addEventListener('change', function() {
    contentDom.innerHTML = '';
    if (filtroDom.value == 'animal') {       
        icon.filter(element => {
            if (element.type == 'animal') {
                contentDom.append(generateIconBox(element));
            }
        });
    } else if (filtroDom.value == 'vegetable') {       
        icon.filter(element => {
            if (element.type == 'vegetable') {
                contentDom.append(generateIconBox(element));
            }
        });
    } else if (filtroDom.value == 'user') {       
        icon.filter(element => {
            if (element.type == 'user') {
                contentDom.append(generateIconBox(element));
            }
        });
    } else {
        icon.forEach(element => {
            contentDom.append(generateIconBox(element));
        });
    }
});


//FUNZIONI
// Funzione per creare un box
function generateIconBox(elemento) {
    const box = document.createElement('div');
    box.classList.add('ms_box');
    box.style.color = `${elemento.color}`;
    box.innerHTML = `<div><i class="${elemento.prefix}solid ${elemento.prefix}${elemento.name} fs-3"></i></div>
                    <div class="text-uppercase text-black fw-semibold">${elemento.name}</div>`;
    return box;
}

//funzione per generare un numero casuale
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Funzione per generare un colore casuale
function generaColoreCasuale() {
    return Math.floor(Math.random()*16777215).toString(16);
}