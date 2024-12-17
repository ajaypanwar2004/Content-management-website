// Selecting Elements
const addBtn = document.getElementById("addBtn");
const contentTitle = document.getElementById("contentTitle");
const contentBody = document.getElementById("contentBody");

// Add Button Click Event
if (addBtn) {
    addBtn.addEventListener("click", () => {
        const title = contentTitle.value.trim();
        const body = contentBody.value.trim();

        if (title && body) {
            // Save data to localStorage
            localStorage.setItem("contentTitle", title);
            localStorage.setItem("contentBody", body);

            // Redirect to content page
            window.location.href = "content.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
}

// Display Content on content.html
const displayTitle = document.getElementById("displayTitle");
const displayBody = document.getElementById("displayBody");

if (displayTitle && displayBody) {
    const title = localStorage.getItem("contentTitle");
    const body = localStorage.getItem("contentBody");

    displayTitle.innerText = title || "No Title Provided";
    displayBody.innerText = body || "No Content Provided";
}
