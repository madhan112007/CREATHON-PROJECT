// Loop through each comment form and add event listeners
document.querySelectorAll('.comments-section form').forEach(function(form, index) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get the comment text for the current form
        const commentText = form.querySelector('textarea').value;
        
        // Only add the comment if it's not empty
        if (commentText.trim() !== "") {
            const commentSection = form.closest('.comments-section');
            
            // Create the new comment element
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<p><strong>You:</strong> ${commentText}</p>`;
            
            // Insert the new comment into the comment section
            commentSection.insertBefore(newComment, commentSection.querySelector('form'));
            
            // Clear the textarea after submitting
            form.querySelector('textarea').value = "";
        }
    });
});