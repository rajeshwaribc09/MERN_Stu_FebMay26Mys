const question = document.getElementById("question");
const answer = document.getElementById("answer");
const message = document.getElementById("message");
const faqContainer = document.getElementById("faqContainer");

document.getElementById("addBtn").addEventListener("click", function () {

    if (!question.value) {
        message.textContent = "Question is required";
        question.focus();
        return;
    }

    if (question.value.length < 5) {
        message.textContent = "Question must be at least 5 characters long.";
        question.focus();
        return;
    }

    if (answer.value.length < 15) {
        message.textContent = "Answer must be at least 15 characters long.";
        answer.focus();
        return;
    }

    message.textContent = "";

    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = question.value;
    p.textContent = answer.value;

    faqContainer.appendChild(h2);
    faqContainer.appendChild(p);

    question.value = "";
    answer.value = "";
});

document.getElementById("removeBtn").addEventListener("click", function () {

    if (faqContainer.lastElementChild) {
        faqContainer.removeChild(faqContainer.lastElementChild);
    } else {
        message.textContent = "No FAQ to delete";
    }

});