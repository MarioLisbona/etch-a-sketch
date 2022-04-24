//create a grid with new resolution
function createGrid(res) {
	//updte golbal variable gridRes:
	//used by deleteGrid to delete the current size grid before generating a new res grid
	gridRes = res;
	//setting the new rows/columns to be used in css class .sketch-container-default
	let cssRoot = document.querySelector(':root');
	cssRoot.style.setProperty('--itemCount', res);
	//create new grid size based on user entered resolution
	//add the correct amount of css class .item to the grid
	for (let x = 0; x < res ** 2; x++) {
			const container = document.querySelector('.sketch-container-default');
			let element = document.createElement('div');
			element.classList.add('item');
			container.appendChild(element);	
	}
	listen();
}

//delete the current grid elements
function deleteGrid(res) {
	if((document.querySelector('.item'))) {
		for (let x = 0; x < res ** 2; x++) {
			const container = document.querySelector('.sketch-container-default');
			let element = document.querySelector('.item');
			container.removeChild(element);
		}
	}
}


//event listener for Reset Grid button
//when clicked first delete current grid, then create default grid
let resetRes = document.querySelector('#reset');
resetRes.addEventListener('click', () => {
	deleteGrid(gridRes);
	createGrid(12);
	listen();
});

//event listener for Choose Resolution button
let newRes = document.getElementById('set-res');
newRes.addEventListener('click', () => {
	//delete current grid with existing value of gridRes
	deleteGrid(gridRes);
	gridRes = document.getElementById('res').value;
	//promt user for new resolution, store in gridRes
	// gridRes = parseInt(prompt("enter a new res"));
	//use gridRes change rows/columns to be used in css class .sketch-container-default
	let cssRoot = document.querySelector(':root');
	cssRoot.style.setProperty('--itemCount', gridRes);
	//create new grid with current value of gridRes
	createGrid(gridRes);
});	



let gridRes = 12;
createGrid(gridRes);
listen()


function listen() {
let pixels = Array.from(document.querySelectorAll('.item'));
pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
		console.log(pixel);
		pixel.classList.add('item-test');
	
}));
}




//need to create a change color function to be called on set background button
//change class with new color and call create grid with new class


// let backgroundColor = document.getElementById('background-color-button');
// backgroundColor.addEventListener('click', () => {
// 	var bgColor = document.getElementById('background-color').value;
// 	console.log(bgColor);
// 	let cssRoot = document.querySelector(':root');
// 	cssRoot.style.setProperty('--itemNewBg', bgColor);
// 	let element = document.querySelector('.item');
// 	element.classList.remove('item-new-bg');
// 	element.classList.add('item-new-bg');
// })







	



