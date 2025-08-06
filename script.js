// Smooth scroll navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function toggleContent() {
            var content = document.getElementById("extraContent");
            var icon = document.getElementById("toggleIcon");

            content.classList.toggle("show");

            // تغيير الرمز حسب الحالة
            if (content.classList.contains("show")) {
                icon.textContent = "-";
            } else {
                icon.textContent = "+";
            }
        }
