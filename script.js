// Mobile Dropdown Menu Controls
function hamburg() {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown) {
        dropdown.classList.add("active");
    }
}

function cancel() {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown) {
        dropdown.classList.remove("active");
    }
}

// Active Link Highlight on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav .links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// Source Code Viewer Modal Logic
const codeModal = document.getElementById("codeModal");
const viewCodeBtn = document.getElementById("viewCodeBtn");
const closeCodeBtn = document.getElementById("closeCodeBtn");
const codeContent = document.getElementById("codeContent");
const codeTabs = document.querySelectorAll(".code-tab");

// Code Content Snippets
const codeSnippets = {
    html: '<!-- HTML Hero Snippet -->\n<section id="home">\n  <div class="main-container">\n    <div class="content">\n      <h1>Hello, I\'m <br><span>Tevon Bartley</span></h1>\n      <h2>I\'m an <span>IT Support Student</span></h2>\n    </div>\n    <div class="image-wrapper">\n      <div class="glow-ring"></div>\n      <div class="image">\n        <img src="images/IMG_8605 (1).PNG" alt="Tevon Bartley">\n      </div>\n    </div>\n  </div>\n</section>',
    css: '/* CSS Glow Ring & Baby Blue Theme */\n.content h1 {\n  color: #89CFF0;\n}\n\n.glow-ring {\n  width: 380px;\n  height: 380px;\n  border: 4px solid #89CFF0;\n  box-shadow: 0 0 60px rgba(137, 207, 240, 0.8);\n}',
    js: '// JavaScript Interaction\nfunction hamburg() {\n  document.getElementById("dropdownMenu").classList.add("active");\n}'
};

// Open Source Code Viewer Modal
if (viewCodeBtn && codeModal && codeContent) {
    viewCodeBtn.addEventListener("click", () => {
        codeModal.classList.add("show");
        codeModal.setAttribute("aria-hidden", "false");
        codeContent.textContent = codeSnippets.html;
    });
}

// Close Source Code Viewer Modal
if (closeCodeBtn && codeModal) {
    closeCodeBtn.addEventListener("click", () => {
        codeModal.classList.remove("show");
        codeModal.setAttribute("aria-hidden", "true");
    });
}

// Tab Switching in Source Code Modal
codeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        codeTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        
        const fileType = tab.getAttribute("data-file");
        if (codeSnippets[fileType] && codeContent) {
            codeContent.textContent = codeSnippets[fileType];
        }
    });
});