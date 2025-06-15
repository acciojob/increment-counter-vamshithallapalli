//your JS code here. If required.
const counterParagraph = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");

incrementButton.addEventListener('click', ()=>{
	const currValue = parseInt(counterParagraph.textContent);
	alert(currValue.toString());
	counterParagraph.textContent = currValue+1;
})