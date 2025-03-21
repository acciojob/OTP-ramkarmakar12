//your JS code here. If required.
const con = document.querySelector('#cont');
const inputs = document.querySelectorAll('#cont input');

// Autofocus the first input on page load
window.onload = () => {
    //inputs[0].focus(); 
};

// Handle click event for focusing input
con.addEventListener('click', (e) => {
    e.target.focus();
});



// Handle keydown event for navigation and modification
con.addEventListener('keydown', (e) => {
    const currentIndex = parseInt(e.target.dataset.ind);

    // Handle Backspace
    if (e.key === 'Backspace' && currentIndex > 0) {
        e.preventDefault();
        e.target.value = ''; // Clear current input
        inputs[currentIndex - 1].focus(); // Move focus to previous input
    }

    // Handle ArrowLeft
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        inputs[currentIndex - 1].focus();
    }

    // Handle ArrowRight
    if (e.key === 'ArrowRight' && currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
    }

    // Handle numeric input 
    if (!isNaN(parseInt(e.key))) {
        e.target.value = e.key; // Set numeric key value
        if (currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
			if(inputs[currentIndex + 1].value===''){
			inputs[currentIndex + 1].value='';
			}// Move focus to next input
        }
    }
});
const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
	let v = '';
	inputs.forEach((e)=>{
		v+=e.value;
	});
	document.getElementById('otp').innerText = `Entered OTP is ${v}`;
});

