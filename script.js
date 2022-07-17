
const add = () => {
	let lista = document.querySelector('ul');
	let newElement = document.createElement('li')
	let input = document.querySelector('input').value

	newElement.innerText = input;
	lista.appendChild(newElement)


	let closeButton = document.createElement('button')
	closeButton.innerText = 'X'
	newElement.appendChild(closeButton)
	
	
	closeButton.addEventListener('click', function closeIt(){
		let div = this.parentElement
		div.style.display = 'none'
		})		
	
}



		

	



