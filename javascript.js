let gridRes = 12;
let penColor = 'black';
let bgColor = 'white'
createGrid(gridRes);


document.getElementById('pen-color').onchange = function() {
	penColor = this.value;
	console.log(penColor);
  }

document.getElementById('background-color').onchange = function() {
	bgColor = this.value;
	deleteGrid(gridRes);
	createGrid(gridRes);
}


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
			element.style.backgroundColor = bgColor;
			container.appendChild(element);	
	}
	let pixels = Array.from(document.querySelectorAll('.item'));
	pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
		pixel.style.backgroundColor = penColor;
	}));

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


//event listener for Choose Resolution button
let newRes = document.getElementById('res');
let resDisplay = document.getElementById('res-display');
resDisplay.textContent = 'Resolution: 12x12';
newRes.addEventListener('mouseup', () => {
	//delete current grid with existing value of gridRes
	deleteGrid(gridRes);
	gridRes = document.getElementById('res').value;
	//use gridRes change rows/columns to be used in css class .sketch-container-default
	let cssRoot = document.querySelector(':root');
	cssRoot.style.setProperty('--itemCount', gridRes);
	resDisplay.textContent = `Resolution: ${gridRes}x${gridRes}`;
	//create new grid with current value of gridRes
	createGrid(gridRes);
});	










	



