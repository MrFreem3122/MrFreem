

const form = document.getElementById("contactForm");
  const btn = document.getElementById("sendBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    btn.innerText = "Sending...";

    emailjs
      .sendForm(
        "default_service",      // service ID
        "template_9y7b94e",      // template ID
        this
      )
      .then(
        () => {
          btn.innerText = "Send Message ✉️";
          alert("Message sent successfully ✅");
          form.reset();
        },
        (error) => {
          btn.innerText = "Send Message ✉️";
          alert("Failed ❌ : " + error.text);
        }
      );
  });




document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});


const toggle = document.getElementById("darkToggle");
const body = document.body;

/* ICONS */
const github = document.getElementById("githubIcon");
const instagram = document.getElementById("instgamIcon");
const gmail = document.getElementById("gmailIcon");
const linkedin = document.getElementById("linkedinIcon");
const download = document.getElementById("downloadIcon");

/* FUNCTION TO SWITCH ICONS */
function updateIcons(isDark) {
  if (isDark) {
    github.src = "images/github-dark.svg";
    instagram.src = "images/instagram-dark.svg";
    gmail.src = "images/gmail-dark.svg";
    linkedin.src = "images/linkedin-dark.svg";
    download.src = "images/download-dark.svg";
  } else {
    github.src = "images/github.svg";
    instagram.src = "images/instagram.svg";
    gmail.src = "images/gmail.svg";
    linkedin.src = "images/linkedin.svg";
    download.src = "images/download.svg";
  }
}

/* LOAD SAVED THEME */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
  updateIcons(true);
}

/* TOGGLE */
toggle.addEventListener("change", () => {
  body.classList.toggle("dark");

  const isDark = body.classList.contains("dark");

  updateIcons(isDark);

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
