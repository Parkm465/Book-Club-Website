/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById('theme-button');
let isDark = false;
// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    // This section will run whenever the button is clicked
    isDark = isDark ? false : true
    themeButton.textContent = isDark ? 'Dark Mode ON' : 'Dark Mode OFF'
    document.body.classList.toggle("dark-mode");
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener('click', toggleDarkMode);


let motionButton = document.getElementById('motion-button')
let containsMotions = true;
const toggleMotion = () => {
  containsMotions = containsMotions == true ? false : true
  motionButton.textContent = containsMotions ? `Reduce Motion OFF` : 'Reduce Motion ON'
}
motionButton.addEventListener('click', toggleMotion)
/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const container = document.querySelector('.rsvp-participants')
let rsvpButton = document.getElementById("rsvp-button")
let count = 3;
const addParticipant = (event, person) => {
  console.log(person.name.value, ":", person.studentId.value, "with", person.email.value)

  let firstParargraph = container.querySelector('p')
  if (firstParargraph) {
    firstParargraph.remove();
  }

  const paragraph = document.createElement("p")
  paragraph.textContent = `📚 ${person.name.value} has RSVP'd`
  const participantDiv = document.querySelector(".participants")
  participantDiv.appendChild(paragraph)

  let rsvpCount = document.getElementById("rsvp-count")
  rsvpCount.remove()
  count = count + 1;
  let newCount = document.createElement("p")
  newCount.id = "rsvp-count"
  newCount.textContent = "⭐" + count + " people have RSVP'd to this event!"
  participantDiv.appendChild(newCount)

  event.preventDefault();
}


/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  const person = {
    name: rsvpInputs[0],
    studentId: rsvpInputs[1],
    email: rsvpInputs[2]
  }
  // TODO: Loop through all inputs
  for (let i = 0; i < 3; i++) {
    console.log(`Elements: ${rsvpInputs[i].value}`)
    // TODO: Inside loop, validate the value of each input
    if (rsvpInputs[i].value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error")
    } else {
      rsvpInputs[i].classList.remove("error")
    }
  }
  if (!person.email.value.includes("@")) {
    console.log("@ is not included in email")
    containsErrors = true;
    person.email.classList.add("error")
  }
  console.log("Has Error? " + containsErrors);

  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors == false) {
    addParticipant(event, person)
    toggleModal(person)
    console.log("Clearing Errors")
    person.email.value = ""
    person.name.value = ""
    person.studentId.value = ""
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener('click', validateForm)
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/
let modal = document.getElementById("success-modal")
let modalContent = document.getElementById("modal-text")
const closeModal = () => {
  modal.style.display = "none"
}
let closeModalButton = document.getElementById("modal-button")
closeModalButton.addEventListener('click', closeModal)
const toggleModal = (person) => {
  

  // TODO: Update modal display to flex
  modal.style.display = "flex";

  // TODO: Update modal text to personalized message
  console.log(person.name.value)
  modalContent.textContent = `Thank's for RSVPing,\n ${person.name.value}`

  // Set modal timeout to 5 seconds
    let intervalId = setInterval(animateImage, 500)
  setTimeout(() => {
    closeModal()
      clearInterval(intervalId)
  }, 4500)
}

// TODO: animation variables and animateImage() function
let rotateFactor = 20
let modalImage = document.getElementById("modal-image")
const animateImage = () => {
  if (containsMotions) {
    rotateFactor = rotateFactor == 20 ? -40 : 20

    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
  }
}



