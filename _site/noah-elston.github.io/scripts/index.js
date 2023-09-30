// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Function to change the header text
    function changeHeader() {
        const header = document.getElementById("myHeader");
        header.textContent = "Header changed after 10 seconds";
    }

    // Set a timeout to call the function after 10 seconds
    setTimeout(changeHeader, 10000); // 10000 milliseconds = 10 seconds
});
