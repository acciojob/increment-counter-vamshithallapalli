//your JS code here. If required.
const counterParagraph = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");

incrementButton.addEventListener('click', ()=>{
	const currValue = parseInt(counterParagraph.textContent);
	alert(`Current value: ${currValue}`);
	counterParagraph.textContent = currValue+1;
})