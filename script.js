
document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let feedback = document.getElementById("feedback").value;

    let feedbackBox = document.createElement("div");

    feedbackBox.className = "feedback-box";

    feedbackBox.innerHTML =
        "<strong>Name:</strong> " + name + "<br>" +
        "<strong>Email:</strong> " + email + "<br>" +
        "<strong>Course:</strong> " + course + "<br>" +
        "<strong>Feedback:</strong> " + feedback;

    document.getElementById("feedbackList").appendChild(feedbackBox);

    document.getElementById("feedbackForm").reset();
});



