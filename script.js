function openSignupModal(){
    const signupModal = document.getElementById('signupModal');
    signupModal.style.display = 'block';
}

function closeSignupModal(){
    const signupModal = document.getElementById('signupModal')
    signupModal.style.diplay = 'none'
}

const signupButton = document.getElementById("signupButton")
signupButton.addEventListener('click', openSignupModal);

const closeButtons = document.getElementsByClassName('close')
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', closeSignupModal)
}