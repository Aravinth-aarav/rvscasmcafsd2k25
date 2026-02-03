// Function to show About or Services
function showSection(sectionId) {
  document.getElementById("home").style.display = "none";
  document
    .querySelectorAll(".dynamic-section")
    .forEach((s) => s.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
  window.scrollTo({ top: 100, behavior: "smooth" });
}

// Function to return to Home
function hideAll() {
  document.getElementById("home").style.display = "flex";
  document
    .querySelectorAll(".dynamic-section")
    .forEach((s) => s.classList.add("hidden"));
  document.getElementById("resource-details").classList.add("hidden");
}

// Function to handle Resource button clicks
function showResource(type) {
  const details = document.getElementById("resource-details");
  const text = document.getElementById("resource-text");

  const info = {
    curriculum:
      "<h3>MCA Curriculum</h3><p>Includes MERN Stack, and AI Ethics.</p>",
    labs: "<h3>Tech Labs</h3><p>Equipped with 100+ high-end systems and high-speed fiber internet.</p>",
    placements:
      "<h3>Placement Cell</h3><p>95% placement rate with top MNCs like Zoho and TCS.</p>",
  };

  text.innerHTML = info[type];
  details.classList.remove("hidden");
  details.scrollIntoView({ behavior: "smooth" });
}

function closeResource() {
  document.getElementById("resource-details").classList.add("hidden");
}

