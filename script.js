// Scroll reveal for sections
const sections = document.querySelectorAll('.resume-section');

const reveal = () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) section.classList.add('active');
    });
};

// Animate skill bars
const skillBars = document.querySelectorAll('.progress-bar');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        if(top < window.innerHeight - 50) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }
    });
};

window.addEventListener('scroll', () => { reveal(); animateSkills(); });
window.addEventListener('load', () => { reveal(); animateSkills(); });