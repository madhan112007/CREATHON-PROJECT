document.addEventListener('DOMContentLoaded', () => {
  // Display current date and time for each post
  const now = new Date();
  document.getElementById('post-date1').textContent = now.toLocaleString();
  document.getElementById('post-date2').textContent = now.toLocaleString();
  document.getElementById('post-date3').textContent = now.toLocaleString();

  // Like functionality
  const likeButtons = document.querySelectorAll('.like-btn');
  const likeCounts = [0, 0, 0]; // Array to track likes for each post

  likeButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          likeCounts[index]++;
          button.querySelector('span').textContent = likeCounts[index];
      });
  });

  // Comment functionality
  const commentInput = document.getElementById('comment-input');
  const postCommentButton = document.getElementById('post-comment');
  const commentsList = document.getElementById('comments-list');

  postCommentButton.addEventListener('click', () => {
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
          const commentItem = document.createElement('li');
          commentItem.textContent = commentText;
          commentsList.appendChild(commentItem);
          commentInput.value = '';
      } else {
          alert('Please enter a comment.');
      }
  });
});
function toggleReactions(button) {
    const reactionPopup = button.nextElementSibling;
    reactionPopup.style.display =
        reactionPopup.style.display === "block" ? "none" : "block";
}

function addReaction(reactionElement, reaction) {
    const likeCountSpan = reactionElement.closest('.actions').querySelector('.like-count');
    const currentLikes = parseInt(likeCountSpan.textContent) || 0;
    likeCountSpan.textContent = `${currentLikes + 1} Likes`;
    
    // Optionally, log the chosen reaction for analytics or server storage.
    console.log(`Reaction added: ${reaction}`);
    
    // Hide the reaction popup after a reaction is chosen.
    reactionElement.parentElement.style.display = "none";
}

// Hide reaction popup when clicking outside (optional).
document.addEventListener("click", function (event) {
    const reactionPopups = document.querySelectorAll(".reaction-popup");
    reactionPopups.forEach((popup) => {
        if (!popup.contains(event.target) && !popup.previousElementSibling.contains(event.target)) {
            popup.style.display = "none";
        }
    });
});
function toggleLike(button) {
    let likeCountElement = button.nextElementSibling;
    let likeCount = parseInt(likeCountElement.textContent);
    
    if (button.classList.contains('liked')) {
        // Remove like
        button.classList.remove('liked');
        likeCount--;
    } else {
        // Add like
        button.classList.add('liked');
        likeCount++;
    }
    
    likeCountElement.textContent = likeCount;
}