// Script for Dropdown Navigation
document.addEventListener("DOMContentLoaded", () => {
    // Handle dropdown menu hover for touch devices
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", () => {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        if (dropdownMenu.style.display === "block") {
          dropdownMenu.style.display = "none";
        } else {
          dropdownMenu.style.display = "block";
        }
      });
  
      // Close dropdown menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
          const dropdownMenu = dropdown.querySelector(".dropdown-menu");
          if (dropdownMenu) dropdownMenu.style.display = "none";
        }
      });
    });
  });
  
  // Smooth Scroll to Sections
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Optional: Console Greeting
  console.log("Cup of Jo - Interactive Features Loaded!");
  