// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Resume Download Feature
document.getElementById("download-pdf").addEventListener("click", () => {
    const quality = document.getElementById("pdf-size").value;
    const file = 'resume_${quality}.pdf';
    const link = document.createElement("a");
    link.href = file;
    link.download = "My_Resume.pdf";
    link.click();
});

// Skills Progress Animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".progress").forEach(bar => {
        bar.style.width = bar.classList.contains("html")
            ? "90%" : bar.classList.contains("css")
            ? "80%" : "70%";
    });
});
// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

setInterval(() => {
    testimonials[currentTestimonial].classList.remove("active");
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add("active");
});