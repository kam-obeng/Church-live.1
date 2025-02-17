<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Northampton PIWC</title>
  <link rel="icon" type="image/x-icon" href="pics/logo.JPG">
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
  <!-- Font Awesome -->
  <script src="https://kit.fontawesome.com/aca9f57730.js" crossorigin="anonymous"></script>
  <!-- AOS Animation -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#4B93A2',
            secondary: '#317a86',
            accent: '#72b5c1'
          },
          animation: {
            'fade-in': 'fadeIn 0.5s ease-out',
            'slide-up': 'slideUp 0.5s ease-out',
            'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' }
            },
            slideUp: {
              '0%': { transform: 'translateY(20px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' }
            }
          }
        }
      }
    };
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
    
    body {
      font-family: 'Montserrat', sans-serif;
      scroll-behaviour: smooth;
    }

    .glass-effect {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .hero-gradient {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
    }

    .service-time-badge {
      animation: pulse-glow 2s infinite;
    }

    @keyframes pulse-glow {
      0%, 100% { 
        box-shadow: 0 0 5px rgba(75, 147, 162, 0.5);
      }
      50% { 
        box-shadow: 0 0 20px rgba(75, 147, 162, 0.8);
      }
    }

    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  </style>
</head>

<body class="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
  <!-- Header -->
  <header class="fixed w-full top-0 z-50 transition-all duration-300" id="mainHeader">
    <nav class="bg-primary px-6 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <a href="improved-church-website.html" class="flex items-center space-x-3">
          <img src="pics/logo.JPG" alt="Church Logo" class="h-12 w-12 rounded-full shadow-lg">
          <div>
            <h1 class="text-2xl font-bold text-white">Northampton PIWC</h1>
            <p class="text-sm text-white/80">Pentecost International Worship Centre</p>
          </div>
        </a>
        
        <!-- Live Service Indicator -->
        <div class="hidden md:flex items-center space-x-2 service-time-badge px-4 py-2 rounded-full bg-secondary text-white">
          <span class="animate-pulse inline-block h-3 w-3 rounded-full bg-white"></span>
          <span class="text-sm font-medium">Live Now: Sunday Service</span>
        </div>

        <div class="flex items-center space-x-6">
          <nav class="hidden md:flex space-x-6 text-white items-center">
            <a href="improved-church-website.html" class="hover:text-accent transition-colors py-2">Home</a>
            <a href="About us.html" class="hover:text-accent transition-colors py-2">About</a>
            <a href="Ministries.html" class="hover:text-accent transition-colors py-2">Ministries</a>
            <a href="contact.html" class="hover:text-accent transition-colors py-2">Contact</a>
            <a href="give.html" class="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105">Give</a>
          </nav>
          
          <!-- Mobile nav toggle button -->
          <button id="navToggle" class="md:hidden text-white focus:outline-none">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobileNav" class="hidden md:hidden mt-4 rounded-lg overflow-hidden bg-primary">
        <div class="p-4 space-y-4">
          <a href="improved-church-website.html" class="block text-white hover:text-accent py-2 transition-colors">Home</a>
          <a href="About us.html" class="block text-white hover:text-accent py-2 transition-colors">About</a>
          <a href="Ministries.html" class="block text-white hover:text-accent py-2 transition-colors">Ministries</a>
          <a href="contact.html" class="block text-white hover:text-accent py-2 transition-colors">Contact</a>
          <a href="give.html" class="block bg-white text-primary px-6 py-2 rounded-full text-center font-medium hover:bg-gray-100 transition-all">Give</a>
        </div>
      </div>
    </nav>
  </header>

  <!-- Main Content -->
  <main class="flex-grow pt-20">
    <!-- Hero Section -->
    <section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background images -->
      <div id="hero-bg-current" class="absolute inset-0 bg-cover bg-center opacity-100 transition-opacity duration-1000"></div>
      <div id="hero-bg-next" class="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-1000"></div>
      <!-- Overlay gradient -->
      <div class="absolute inset-0 hero-gradient z-10"></div>
      
      <div class="relative z-20 text-center text-white px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Welcome Home</h1>
        <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up">
          Join us in worship every Sunday as we celebrate God's love and grace together.
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="#live" class="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-all transform hover:scale-105 flex items-center">
            <i class="fas fa-play-circle mr-2"></i>
            Watch Live
          </a>
          <a href="test.html" class="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105">
            Service Times
          </a>
        </div>
      </div>
    </section>

    <!-- Quick Access Cards -->
    <section class="relative -mt-20 z-30 container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="test.html" class="block">
          <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all">
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <i class="fas fa-church text-primary text-2xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg">New Here?</h3>
                <p class="text-gray-600">Learn what to expect</p>
              </div>
            </div>
          </div>
        </a>
    
        <a href="test.html" class="block">
          <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all">
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <i class="fas fa-hands-helping text-primary text-2xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg">Get Involved</h3>
                <p class="text-gray-600">Join our ministries</p>
              </div>
            </div>
          </div>
        </a>
    
        <a href="test.html" class="block">
          <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all">
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <i class="fas fa-pray text-primary text-2xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg">Prayer Request</h3>
                <p class="text-gray-600">Submit your request</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  </main>

 <!-- Footer -->
<footer class="bg-gray-900 text-white">
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-4">About Us</h3>
        <p class="text-gray-400">
          Northampton PIWC is a vibrant community of believers dedicated to spreading God's love.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-4">Quick Links</h3>
        <ul class="space-y-2 text-gray-400">
          <li><a href="Ministries.html" class="hover:text-white transition-colors">Ministries</a></li>
          <li><a href="test.html" class="hover:text-white transition-colors">Events</a></li>
          <li><a href="test.html" class="hover:text-white transition-colors">Sermons</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-4">Connect</h3>
        <div class="flex space-x-4">
          <a href="https://www.facebook.com/" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://www.instagram.com/" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.youtube.com/" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-youtube text-2xl"></i>
          </a>
        </div>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-4">Newsletter</h3>
        <form class="space-y-4" onsubmit="event.preventDefault(); 
        const email = document.getElementById('user-email').value; 
        window.location.href = 'mailto:Kobeng909@gmail.com?subject=Subscribe&body=' + encodeURIComponent('Email: ' + email);">
        <input id="user-email" type="email" placeholder="Your email" required class="w-full px-4 py-2 rounded-full bg-gray-800 text-white border-none focus:ring-2 focus:ring-primary">
        <button type="submit" class="w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colours">
          Subscribe
        </button>
      </form>
          
      </div>
    </div>
    <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
      <p>&copy; 2025 Northampton PIWC. All Rights Reserved.</p>
    </div>
  </div>
</footer>
  <!-- Back to Top Button -->
  <button id="backToTop" class="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-colors hidden transform hover:scale-110">
    <i class="fas fa-arrow-up"></i>
  </button>

  <!-- Background Image Carousel Script -->
  <script>
    const bgImages = [
      'pics/image1.1.JPG',
      'pics/image2.1.JPG',
      'pics/image3.1.JPG',
      'pics/image4.1.JPG'
    ];
    let currentIndex = 0;
    
    // Preload images
    bgImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    const currentBg = document.getElementById('hero-bg-current');
    const nextBg = document.getElementById('hero-bg-next');
    
    // Set the initial background image
    currentBg.style.backgroundImage = `url('${bgImages[currentIndex]}')`;
    
    function changeBackground() {
      const nextIndex = (currentIndex + 1) % bgImages.length;
      nextBg.style.backgroundImage = `url('${bgImages[nextIndex]}')`;
      nextBg.classList.remove('opacity-0');
      nextBg.classList.add('opacity-100');
      
      setTimeout(() => {
        currentBg.style.backgroundImage = `url('${bgImages[nextIndex]}')`;
        nextBg.classList.remove('opacity-100');
        nextBg.classList.add('opacity-0');
        currentIndex = nextIndex;
      }, 1000);
    }
    
    setInterval(changeBackground, 5000);
  </script>
  
  <!-- Mobile Navigation Toggle & Back to Top Script -->
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const navToggle = document.getElementById('navToggle');
      const mobileNav = document.getElementById('mobileNav');
      const backToTop = document.getElementById('backToTop');

      // Toggle mobile navigation menu
      navToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('hidden');
      });

      // Show or hide the back-to-top button on scroll
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
          backToTop.classList.remove('hidden');
        } else {
          backToTop.classList.add('hidden');
        }
      });

      // Smooth scroll back to top
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  </script>
</body>
</html>