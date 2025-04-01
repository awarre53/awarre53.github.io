let outputDiv = document.getElementById('output');
const nameInput = document.getElementById("name");
const mascotInput = document.getElementById("mascot");
const imageInput = document.getElementById("image");
const imageCaptionInput = document.getElementById("caption");
const personalBackgroundInput = document.getElementById("personal");
const professionalBackgroundInput = document.getElementById('professional');
const academicBackgroundInput = document.getElementById("academic");
const backgroundWebDevInput = document.getElementById("web-development");
const computerInput = document.getElementById("platform");
const funnyThingInput = document.getElementById("funny");
const anythingInput = document.getElementById("anything");
const agreementCheckbox = document.getElementById("agreement");
const coursesTakingDiv = document.getElementById("courses-taking");
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const addBtn = document.getElementById('add');
const inputs = [nameInput, mascotInput, imageInput, imageCaptionInput, personalBackgroundInput, professionalBackgroundInput, academicBackgroundInput, backgroundWebDevInput, computerInput, funnyThingInput, anythingInput];

document.addEventListener('DOMContentLoaded', () => {
    // Get all the remove buttons inside the courses-taking div
    const removeButtons = document.querySelectorAll('#courses-taking button');
    
    // Loop through each remove button and attach a click event listener
    removeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Get the input field that is the previous sibling of the button
            const inputField = button.previousElementSibling;
            
            // Remove the input field and the button
            inputField.remove();
            button.remove();
        });
    });
});

addBtn.addEventListener('click', () => {
    const courseDiv = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'text';
    courseDiv.appendChild(input);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        courseDiv.remove();
        // Remove the course input from our courseInputs array
        courseInputs = courseInputs.filter((course) => course !== input);
    });
    
    courseDiv.append(removeBtn);
    coursesTakingDiv.append(courseDiv);
    // Add the course input to our courseInputs array
    courseInputs.push(input);
});

resetBtn.addEventListener('click', () => {
    if (!confirm('Reset the form?')) return;
    inputs = null;
    courses = null;
    outputDiv.innerHTML = '';
});

const addCourses = () => {
    const courseInputs = [...coursesTakingDiv.querySelectorAll('input')]; 
    return `<ul>${courseInputs.map((course) => `<li>${course.value}</li>`).join('')}</ul>`;
};

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    outputDiv.innerHTML = '';

    if (inputs.some((input) => input.value.trim() === '')) {
        alert('One of the above fields is empty.');
        return;
    }
    if (!agreementCheckbox.checked) {
        alert('You must agree to the above statement.');
        return;
    }
    document.getElementById('byo-form').style.display = 'none';


    // Extract values
    const name = nameInput.value;
    const mascot = mascotInput.value;
    const image = URL.createObjectURL(imageInput.files[0]);
    const caption = imageCaptionInput.value;
    const personal = personalBackgroundInput.value;
    const professional = professionalBackgroundInput.value;
    const academic = academicBackgroundInput.value;
    const webDev = backgroundWebDevInput.value;
    const platform = computerInput.value;
    const funny = funnyThingInput.value;
    const anything = anythingInput.value;

    outputDiv.innerHTML = `
        <div class="results-container">
            <h2>Introduction</h2>
            <h2>${name} || ${mascot}</h2>
            <figure>
                <img src="${image}" alt="Photo of ${name}">
                <figcaption><em>${caption}</em></figcaption>
            </figure>
            <ul>
                <li><strong>Personal Background:</strong> ${personal}</li>
                <li><strong>Professional Background:</strong> ${professional}</li>
                <li><strong>Academic Background:</strong> ${academic}</li>
                <li><strong>ackground in this Subject:</strong> ${webDev}</li>
                <li><strong>Primary Computer Platform:</strong> ${platform}</li>
                <li><strong>Courses I'm Taking &amp; Why:</strong></li>
                ${addCourses()}
                <li><strong>Funny/Interesting Item to Remember me by:</strong> ${funny}</li>
                <li><strong>I'd also like to Share:</strong> ${anything}</li>
            </ul>
            <button id="reset-page">Reset</button>
        </div>
    `;

    // Reset Functionality
    document.getElementById("reset-page").addEventListener("click", () => {
        location.reload();
    });
});