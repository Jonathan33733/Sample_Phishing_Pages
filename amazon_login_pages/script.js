function goToStep1() {
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('newToAmazonDivider').style.display = 'block'; 
    document.getElementById('createAccountBtn').style.display = 'block'; 
    // Ensure help options are reset/hidden when going back to step 1
    const helpOptionsStep1 = document.getElementById('helpOptions');
    const arrowStep1 = document.querySelector('#step1 .need-help-toggle .arrow-right');
    if (helpOptionsStep1) helpOptionsStep1.style.display = 'none';
    if (arrowStep1) arrowStep1.classList.remove('arrow-down');

    const helpOptionsStep2 = document.getElementById('helpOptionsPassword');
    const arrowStep2 = document.querySelector('#step2 .need-help-toggle .arrow-right');
    if (helpOptionsStep2) helpOptionsStep2.style.display = 'none';
    if (arrowStep2) arrowStep2.classList.remove('arrow-down');

    return false; 
}

function goToStep2() {
    const emailInput = document.getElementById('email');
    const displayedEmail = document.getElementById('displayedEmail');
    if (emailInput.value.trim() === '') {
        emailInput.focus();
        return false; 
    }
    displayedEmail.textContent = emailInput.value;
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('newToAmazonDivider').style.display = 'none';
    document.getElementById('createAccountBtn').style.display = 'none';
    document.getElementById('password').focus(); 
    return false; 
}

function signIn() {
    alert('Sign-in button clicked. This is a demo.');
    return false; 
}

function toggleHelp() {
    const helpOptions = document.getElementById('helpOptions');
    const arrow = document.querySelector('#step1 .need-help-toggle .arrow-right');
    if (helpOptions.style.display === 'none') {
        helpOptions.style.display = 'block';
        if (arrow) arrow.classList.add('arrow-down');
    } else {
        helpOptions.style.display = 'none';
        if (arrow) arrow.classList.remove('arrow-down');
    }
}

function toggleHelpPassword() {
    const helpOptions = document.getElementById('helpOptionsPassword');
    const arrow = document.querySelector('#step2 .need-help-toggle .arrow-right');
    if (helpOptions.style.display === 'none') {
        helpOptions.style.display = 'block';
        if (arrow) arrow.classList.add('arrow-down');
    } else {
        helpOptions.style.display = 'none';
        if (arrow) arrow.classList.remove('arrow-down');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    goToStep1(); 

    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('input-focus');
        });
        input.addEventListener('blur', function() {
            this.classList.remove('input-focus');
        });
    });
});
