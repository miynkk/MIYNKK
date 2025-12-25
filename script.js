// =======================================================
// ** IMPORTANT: REPLACE THIS LINK WITH YOUR ACTUAL PAYMENT GATEWAY LINK **
// =======================================================
const PAYMENT_LINK = "https://rzp.io/rzp/pzOFjRB"; 
// **********************************************************************

// --- Modal Pop-up Variables ---
const termsModal = document.getElementById('termsModal');
const termsCheckbox = document.getElementById('termsCheckbox');
const modalContinueBtn = document.getElementById('modalContinueBtn');
// Saare CTA buttons jinpe primary-cta class hai
const ctaButtons = document.querySelectorAll('.primary-cta'); 


// =======================================================
// 1. MODAL POP-UP LOGIC
// =======================================================

// 1.1. CTA button click par modal show karo
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Default link navigation ko rokna
        termsModal.style.display = 'flex'; // Modal ko dikhana
        
        // Reset state har baar pop-up khulte hi
        termsCheckbox.checked = false;
        toggleModalButton();
    });
});

// 1.2. Checkbox state ke hisaab se Continue button ko enable/disable karna
function toggleModalButton() {
    if (termsCheckbox.checked) {
        modalContinueBtn.classList.add('active');
        modalContinueBtn.disabled = false;
    } else {
        modalContinueBtn.classList.remove('active');
        modalContinueBtn.disabled = true;
    }
}

// 1.3. Continue button click hone par user ko payment link par bhejna
modalContinueBtn.addEventListener('click', function() {
    if (modalContinueBtn.classList.contains('active')) {
        window.location.href = PAYMENT_LINK;
    }
});


// =======================================================
// 2. COUNTDOWN TIMER SCRIPT (MERGED AND MODIFIED)
// =======================================================

function startCountdown() {
    // Duration: 10 minutes
    const countdownDuration = 10 * 60 * 1000; 
    const endDate = new Date().getTime() + countdownDuration;
    
    // Timer elements ko select karte hain
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Har second (1000ms) mein update hoga
    const interval = setInterval(function() {
        const now = new Date().getTime();
        let distance = endDate - now;

        if (distance < 0) {
            distance = 0;
        }

        // Calculation sirf minutes aur seconds ke liye
        const minutes = Math.floor(distance / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display with leading zeros
        minutesEl.innerHTML = String(minutes).padStart(2, '0');
        secondsEl.innerHTML = String(seconds).padStart(2, '0');

        // Agar timer khatam ho jaaye
        if (distance === 0) {
            clearInterval(interval);
            // Aapka message jab sale end ho
            document.getElementById("countdown").innerHTML = "SALE ENDED!"; 
            // Optional: Saare CTA buttons ko disable kar sakte hain ya link hata sakte hain
        }
    }, 1000);
}

// Function ko call karte hain jab page load ho jaaye

startCountdown();



