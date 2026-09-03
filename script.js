const shopBtn = document.querySelector(".hero-content button");
const products = document.querySelector(".products");

shopBtn.addEventListener("click", function () {
    products.scrollIntoView({
        behavior: "smooth"
    });
});

const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();

    productCards.forEach((card) => {
        const name = card.querySelector('.product-name').textContent.toLowerCase();
        if (name.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

const categoryButtons = document.querySelectorAll('.categories button');

categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedCategory = button.textContent.trim();

        categoryButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        productCards.forEach((card) => {
            const cardCategory = card.dataset.category; 

            if (selectedCategory === 'All' || cardCategory === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const shopNowButton = document.querySelector('.hero-content button');
const productsSection = document.querySelector('.products');

shopNowButton.addEventListener('click', () => {
    productsSection.scrollIntoView({ behavior: 'smooth' });
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterMessage = document.getElementById('newsletterMessage');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const email = newsletterEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        newsletterMessage.textContent = "Thanks! You're subscribed.";
        newsletterMessage.className = 'newsletter-message success';
        newsletterForm.reset();
    } else {
        newsletterMessage.textContent = 'Please enter a valid email.';
        newsletterMessage.className = 'newsletter-message error';
    }
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});