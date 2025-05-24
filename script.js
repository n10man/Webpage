document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.getElementById('enter-btn');
    if (enterBtn) {
        enterBtn.addEventListener('click', function() {
            document.body.classList.add('fade-out');
            setTimeout(function() {
                window.location.href = 'preface.html';
            }, 700); // Match the CSS animation duration
        });
    }
    // Info button navigation (no bounce)
    const infoBtn = document.getElementById('info-btn');
    if (infoBtn) {
        infoBtn.addEventListener('click', function() {
            document.body.classList.add('fade-out');
            setTimeout(function() {
                window.location.href = 'password.html';
            }, 700);
        });
    }
});

function handleButtonClick(buttonNumber) {
    switch (buttonNumber) {
        case 1:
            // No longer used for Enter
            break;
        case 2:
            // Navigate to password page
            window.location.href = 'password.html';
            break;
        case 3:
            // Navigate to letters page
            window.location.href = 'letters.html';
            break;
    }
} 
// Listen for Enter key press on the password input
document.getElementById('password').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    submitPassword();
  }
});
