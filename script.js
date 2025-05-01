// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');
const searchBtn = document.getElementById('search-btn');
const searchForm = document.querySelector('.search-form');
const userBtn = document.getElementById('user-btn');
const loginForm = document.querySelector('.login-form-container');
const closeLoginBtn = document.getElementById('close-login-btn');
const productGrid = document.querySelector('.product-grid');

// Featured Products Data
const featuredProducts = [
    {
        id: 1,
        title: "Quantum X Pro Smartphone",
        category: "Smartphones",
        price: 899,
        oldPrice: 999,
        rating: 4.8,
        reviews: 124,
        badge: "new",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1367&q=80"
    },
    {
        id: 2,
        title: "Nebula Ultra Laptop",
        category: "Laptops",
        price: 1499,
        oldPrice: 1799,
        rating: 4.7,
        reviews: 89,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    },
    {
        id: 3,
        title: "Cosmic Noise-Cancelling Headphones",
        category: "Headphones",
        price: 299,
        oldPrice: 349,
        rating: 4.9,
        reviews: 215,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 4,
        title: "Galaxy Pro Smart Watch",
        category: "Smart Watches",
        price: 399,
        oldPrice: null,
        rating: 4.6,
        reviews: 76,
        badge: null,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80"
    },
    {
        id: 5,
        title: "Aurora 4K Smart TV",
        category: "Televisions",
        price: 1299,
        oldPrice: 1499,
        rating: 4.5,
        reviews: 187,
        badge: "sale",
        image: "https://cdn.pixabay.com/photo/2017/04/07/12/58/lion-2210947_1280.jpg"
    },
    {
        id: 6,
        title: "Thunder X Gaming Console",
        category: "Gaming",
        price: 499,
        oldPrice: null,
        rating: 4.9,
        reviews: 342,
        badge: "new",
        image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"
    },
    {
        id: 7,
        title: "Marshal Speaker",
        category: "Wireless Speaker",
        price: 899,
        oldPrice: null,
        rating: 4.9,
        reviews: 542,
        badge: "new",
        image: "https://cdn.pixabay.com/photo/2020/09/13/11/08/marshal-5567979_1280.jpg"
    },
    {
        id: 8,
        title: "crypto shine Keyboard",
        category: "Keyboard",
        price: 199,
        oldPrice: null,
        rating: 4.9,
        reviews: 642,
        badge: "new",
        image: "https://media.istockphoto.com/id/2168972818/photo/close-up-of-computer-keyboard.jpg?s=612x612&w=0&k=20&c=qvFjmej7YcYmxHJpxj76YnXnZihXMggh5FCw0Gf3Z-I="
    }
];
// Toggle Mobile Menu
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});

// Toggle Search Form
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.toggle('active');
});

// Toggle Login Form
userBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('active');
});

closeLoginBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// Close Search and Login Forms when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-form') && !e.target.closest('#search-btn')) {
        searchForm.classList.remove('active');
    }
    
    if (e.target === loginForm) {
        loginForm.classList.remove('active');
    }
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Display Featured Products
function displayProducts() {
    productGrid.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Sale' : 'New'}</span>` : ''}
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-actions">
                    <a href="#" class="product-action-btn"><i class="fas fa-heart"></i></a>
                    <a href="#" class="product-action-btn"><i class="fas fa-eye"></i></a>
                    <a href="#" class="product-action-btn"><i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>
            <div class="product-content">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                        ${product.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    </div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Initialize Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update Cart Count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Add to Cart
function addToCart(productId) {
    const product = featuredProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show added to cart notification
    alert(`${product.title} has been added to your cart!`);
}

// Event Delegation for Add to Cart Buttons
productGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        e.preventDefault();
        const productId = parseInt(e.target.getAttribute('data-id'));
        addToCart(productId);
    }
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            newsletterForm.reset();
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();
});
  // Audio control
  const audio = document.getElementById('bgAudio');
  const audioControl = document.getElementById('audioControl');
  let audioPlaying = false;
  
  // Try to play audio automatically (may not work due to browser policies)
  const playAudio = () => {
      audio.play()
          .then(() => {
              audioPlaying = true;
              audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
          })
          .catch(error => {
              console.log('Auto-play prevented:', error);
              // Show play button to let user start audio
              audioControl.style.display = 'flex';
          });
  };
  
  // Attempt to play audio after user interacts with page
  document.body.addEventListener('click', function firstInteraction() {
      if (!audioPlaying) {
          playAudio();
      }
      document.body.removeEventListener('click', firstInteraction);
  }, { once: true });
  
  // Audio control button
  audioControl.addEventListener('click', function() {
      if (audioPlaying) {
          audio.pause();
          audioPlaying = false;
          audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
      } else {
          audio.play();
          audioPlaying = true;
          audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
      }
  });