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
	});

////event listener for Choose Resolution button



let newRes = document.querySelector('#choose-resolution');
newRes.addEventListener('click', () => {
	//delete current grid 
	deleteGrid(gridRes);
	//promt user for new resolution, store in gridRes
	gridRes = parseInt(prompt("enter a new res"));
	//use gridRes change rows/columns to be used in css class .sketch-container-default
	let cssRoot = document.querySelector(':root');
	cssRoot.style.setProperty('--itemCount', gridRes);
	//create new grid with current value of gridRes
	createGrid(gridRes);
})	


let gridRes = 12;
createGrid(gridRes);