let next = document.getElementById("next-btn");
let prev = document.getElementById("previous-btn");

let description = document.getElementById("description");

let desArr = ['Add contact details for further communications.',
    'Add shipping address for successfully delivery.',
    'Complete Payment to complete the order.',
    'Ready to get delivered!',
    'Order Delivered successfully!🎉'
]

let count = 1;

function updateButtonStates() {
    prev.disabled = count === 1;
    next.disabled = count === 5;
}

function updateStepStyles() {
    // console.log(count);

    let currentLine = document.getElementById(`line-to-${getStepName(count - 1)}`);
    let currentStep = document.getElementById(`step${count}`);
    let prevStep = document.getElementById(`step${count - 1}`);

    if (currentLine) {
        currentLine.classList.remove('border-gray-300');
        currentLine.classList.add('border-green-700');
    }

    if (currentStep) {
        currentStep.classList.remove('bg-gray-300','text-black');
        currentStep.classList.add('bg-blue-700','text-white');
    }
    
    if (prevStep) {
        prevStep.classList.remove('bg-blue-700');
        prevStep.classList.add('bg-white');
        prevStep.innerHTML = `<img src='./image/check_11601272.png'/>`
    }

    description.textContent = desArr[count-1]
}

function reverseStepStyles() {
    // console.log(count);

    let currentLine = document.getElementById(`line-to-${getStepName(count - 1)}`);
    let currentStep = document.getElementById(`step${count}`);
    let prevStep = document.getElementById(`step${count - 1}`);

    if (currentLine) {
        currentLine.classList.add('border-gray-300');
        currentLine.classList.remove('border-green-700');
    }

    if (currentStep) {
        currentStep.classList.add('bg-gray-300','text-black');
        currentStep.classList.remove('bg-blue-700','text-white');
    }

    if (prevStep) {
        prevStep.classList.add('bg-blue-700');
        prevStep.classList.remove('bg-white');
        prevStep.innerHTML = `<span >${count-1}</span>`;

    }
    description.textContent = desArr[count-2]
}

function getStepName(step) {
    switch (step) {
        case 1:
            return "ship";
        case 2:
            return "payment";
        case 3:
            return "deliver";
        default:
            return "";
    }
}

updateButtonStates();

next.addEventListener('click', () => {
    if (count < 6) {
        count++;
        updateStepStyles();
        updateButtonStates();
    }
    if (count >= 4) {
        next.textContent = "Finish"
    } else {
        next.textContent = "Next"
    }
});

prev.addEventListener('click', () => {
    if (count > 1) {
        reverseStepStyles();
        count--;
        updateButtonStates();
    }
});
