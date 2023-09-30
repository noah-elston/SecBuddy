// script.js

// Assuming you have an array of content objects with a 'title' and 'description' property.
var contentData = [
    { title: 'Penetration Testing Basics', description: 'Learn the fundamentals of penetration testing.' },
    { title: 'Web Application Security', description: 'Explore security measures for web applications.' },
    // Add more content objects as needed
];

// Listen for input changes on the search input field
$('#search').on('input', function() {
    // Get the text entered by the user
    var searchText = $(this).val();

    // Perform a search and get filtered results
    var searchResults = performSearch(searchText);

    // Update the search results container with the filtered results
    $('#search-results').html(searchResults);
});

// Function to perform the search and filter content
function performSearch(text) {
    // Create an empty HTML string to store the search results
    var resultsHTML = '';

    // Iterate through the content data and filter based on the search text
    contentData.forEach(function(item) {
        // Check if the title or description contains the search text (case insensitive)
        if (
            item.title.toLowerCase().includes(text.toLowerCase()) ||
            item.description.toLowerCase().includes(text.toLowerCase())
        ) {
            // If it matches, construct HTML for the result
            resultsHTML += '<div class="search-result">';
            resultsHTML += '<h2>' + item.title + '</h2>';
            resultsHTML += '<p>' + item.description + '</p>';
            resultsHTML += '</div>';
        }
    });

    // Check if there are no results
    if (resultsHTML === '') {
        resultsHTML = '<p>No results found.</p>';
    }

    return resultsHTML;
}
