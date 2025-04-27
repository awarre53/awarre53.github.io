/** Navigation Bar across all webpages zooms in when hovered over*/
const navLinks = document.querySelectorAll('.nav-bar a');
    
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.2)';
        link.style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

/** Submit button for contact webpage*/
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmationMessage").style.display = "block";
    document.getElementById("contactForm").reset();
});

/** CSS webpage style changer */
function runCssCode() {
    const cssCode = document.getElementById("cssEditor").value;
    const style = document.createElement("style");
    style.innerHTML = cssCode;
    document.head.appendChild(style);
}

/** HTML editor and output change */
function runHtmlCode() {
    const editor = document.getElementById("htmlEditor").value;
    const output = document.getElementById("htmlOutput");
    output.srcdoc = editor;
}

/** JS editor to practice using the alert function */
function runJsCode() {
    const code = document.getElementById("jsEditor").value;
    const output = document.getElementById("jsOutput");
    try {
        const result = eval(code);
        output.textContent = result === undefined ? 'Code ran successfully.' : result;
    } catch (err) {
        output.textContent = "Error: " + err.message;
    }
}

/** Update quiz grade after submission with animation*/
function gradeQuiz() {
    const answers = {
        q1: "a",
        q2: "c",
        q3: "a",
        q4: "b",
        q5: "c",
        q6: "b",
    };
    
    let score = 0;

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    const resultDiv = document.getElementById("quizResults");

    resultDiv.classList.remove("pop-animation");
    void resultDiv.offsetWidth; // re-trigger the animation
    resultDiv.classList.add("pop-animation");

    resultDiv.innerHTML = `<h3>You scored ${score} out of 6!</h3>`;

    if (score === totalQuestions) {
        resultDiv.innerHTML += "<p>Perfect score! Great job! 🎉</p>";
    } else if (score >= 4) {
        resultDiv.innerHTML += "<p>Good work! Keep practicing!</p>";
    } else {
        resultDiv.innerHTML += "<p>Don't worry, review the material and try again!</p>";
    }
}