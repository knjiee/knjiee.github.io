/* ============================================
   JavaScript for Kenjie Lucy Portfolio
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Smooth scrolling for hero section buttons
    const heroButtons = document.querySelectorAll('.hero-section a[href^="#"]');
    heroButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveNav);

    // Modern navbar glassmorphism effect on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu enhancements
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbarCollapse) {
        // Close menu when clicking on backdrop
        navbarCollapse.addEventListener('click', function (e) {
            if (e.target === this) {
                const bsCollapse = bootstrap.Collapse.getInstance(this);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });

        // Close menu when clicking nav links on mobile
        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });

        // Prevent body scroll when menu is open on mobile
        navbarCollapse.addEventListener('show.bs.collapse', function () {
            if (window.innerWidth < 992) {
                document.body.style.overflow = 'hidden';
            }
        });

        navbarCollapse.addEventListener('hide.bs.collapse', function () {
            document.body.style.overflow = '';
        });

        // Handle window resize
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 992) {
                document.body.style.overflow = '';
            }
        });
    }

    // Contact form handling (Frontend only - no backend)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (since this is frontend only)
            // In a real application, you would send this data to a backend server
            showFormMessage('Thank you for your message! (Note: This is a demo form. To make it functional, connect it to a backend service.)', 'success');

            // Reset form after 3 seconds
            setTimeout(() => {
                contactForm.reset();
                formMessage.textContent = '';
                formMessage.className = '';
            }, 3000);
        });
    }

    // Helper function to show form messages
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = type;
    }

    // Modern scroll animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // Stagger animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards and skill cards for fade-in effect
    const animatedElements = document.querySelectorAll('.project-card, .skill-card, .about-content');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Animate section headings
    const sectionHeadings = document.querySelectorAll('section h2');
    const headingObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, { threshold: 0.5 });

    sectionHeadings.forEach(heading => {
        heading.style.opacity = '0';
        headingObserver.observe(heading);
    });

    // Add smooth parallax effect to hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection && scrolled < heroSection.offsetHeight) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // ============================================
    // Project Gallery Lightbox Functionality (Dynamic)
    // ============================================

    const galleryModal = new bootstrap.Modal(document.getElementById('projectGalleryModal'));
    let currentImages = [];
    let currentIndex = 0;
    let projectsData = {};
    const MAX_IMAGES_PER_PROJECT = 50; // Maximum images to detect per project
    const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif'];

    // Load projects configuration
    async function loadProjectsData() {
        // Check if we're using file:// protocol (local files)
        const isLocalFile = window.location.protocol === 'file:';

        if (isLocalFile) {
            console.warn('⚠️ Using file:// protocol. projects.json may not load. Using fallback.');
            createFallbackProjectsData();
            return false;
        }

        try {
            const response = await fetch('projects.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            projectsData = await response.json();
            console.log('✅ Projects data loaded:', projectsData);
            return true;
        } catch (error) {
            console.error('❌ Error loading projects.json:', error);
            console.warn('⚠️ Gallery will use fallback folder structure');
            // Create fallback structure from project IDs in HTML
            createFallbackProjectsData();
            return false;
        }
    }

    // Create fallback projects data from HTML attributes
    function createFallbackProjectsData() {
        const triggers = document.querySelectorAll('.clickable-gallery');
        triggers.forEach(trigger => {
            const projectId = trigger.getAttribute('data-project');
            const projectTitle = trigger.getAttribute('data-title');
            const mainImage = trigger.querySelector('.project-main-image');

            if (projectId && !projectsData[projectId]) {
                projectsData[projectId] = {
                    title: projectTitle || projectId,
                    folder: `images/projects/${projectId}`,
                    mainImage: mainImage ? mainImage.src : `images/${projectId}.jpg`
                };
            }
        });
        console.log('📁 Fallback projects data created:', projectsData);
    }

    // Dynamically detect images from project folder (optimized with parallel checking)
    async function detectProjectImages(projectId) {
        const project = projectsData[projectId];
        if (!project) {
            console.warn(`Project ${projectId} not found in projects.json`);
            return [];
        }

        const folder = project.folder;
        const detectedImages = [];

        // Check images sequentially for more reliable detection
        // Start from 1 and go up until we hit 3 consecutive failures
        let consecutiveFailures = 0;
        const maxConsecutiveFailures = 3;

        for (let i = 1; i <= MAX_IMAGES_PER_PROJECT; i++) {
            let imageFound = false;

            // Try each extension for this number
            for (const ext of IMAGE_EXTENSIONS) {
                const imagePath = `${folder}/${i}.${ext}`;
                const exists = await checkImageExists(imagePath);

                if (exists) {
                    detectedImages.push(imagePath);
                    imageFound = true;
                    consecutiveFailures = 0;
                    break; // Found image with this number, move to next
                }
            }

            // If no image found for this number
            if (!imageFound) {
                consecutiveFailures++;

                // If we haven't found any images yet and this is the first few attempts, continue
                if (detectedImages.length === 0 && i <= 5) {
                    continue; // Keep trying for first 5 numbers
                }

                // Stop after max consecutive failures
                if (consecutiveFailures >= maxConsecutiveFailures) {
                    break;
                }
            }
        }

        console.log(`Detected ${detectedImages.length} images for ${projectId}:`, detectedImages);
        return detectedImages;
    }

    // Check if an image exists by attempting to load it
    function checkImageExists(url) {
        return new Promise((resolve) => {
            const img = new Image();
            let resolved = false;

            img.onload = () => {
                if (!resolved) {
                    resolved = true;
                    resolve(true);
                }
            };

            img.onerror = () => {
                if (!resolved) {
                    resolved = true;
                    resolve(false);
                }
            };

            // Use longer timeout for local file access (file:// protocol)
            const isLocalFile = window.location.protocol === 'file:';
            const timeout = isLocalFile ? 5000 : 3000; // 5 seconds for local, 3 for web

            img.src = url;

            setTimeout(() => {
                if (!resolved) {
                    resolved = true;
                    resolve(false);
                }
            }, timeout);
        });
    }

    // Get all clickable gallery elements
    const galleryTriggers = document.querySelectorAll('.clickable-gallery');

    galleryTriggers.forEach(trigger => {
        trigger.addEventListener('click', async function () {
            const projectId = this.getAttribute('data-project');
            const projectTitle = this.getAttribute('data-title');

            if (!projectId) {
                console.error('Project ID is missing');
                return;
            }

            // Ensure projects data is loaded
            if (Object.keys(projectsData).length === 0) {
                console.warn('Projects data not loaded yet, loading now...');
                const loaded = await loadProjectsData();
                if (!loaded) {
                    // If JSON failed, use fallback
                    createFallbackProjectsData();
                }
            }

            // Show loading state
            showGalleryLoading();

            try {
                console.log(`Detecting images for project: ${projectId}`);
                const project = projectsData[projectId];

                if (!project) {
                    console.error(`Project ${projectId} not found. Creating fallback...`);
                    // Create fallback project data
                    const mainImage = this.querySelector('.project-main-image');
                    project = {
                        title: projectTitle || projectId,
                        folder: `images/projects/${projectId}`,
                        mainImage: mainImage ? mainImage.src : `images/${projectId}.jpg`
                    };
                    projectsData[projectId] = project;
                    console.log('Created fallback project:', project);
                }

                console.log(`Project folder: ${project.folder}`);

                // Detect images dynamically
                currentImages = await detectProjectImages(projectId);
                currentIndex = 0;

                // If no images found, try fallback: check if main image exists
                if (currentImages.length === 0 && project.mainImage) {
                    console.log('No numbered images found, trying main image as fallback...');
                    const mainImageExists = await checkImageExists(project.mainImage);
                    if (mainImageExists) {
                        currentImages = [project.mainImage];
                        console.log('Using main image as fallback');
                    }
                }

                if (currentImages.length === 0) {
                    hideGalleryLoading();
                    const folderPath = project.folder || `images/projects/${projectId}`;
                    const message = `No images found for this project.\n\n` +
                        `Please add images to:\n${folderPath}\n\n` +
                        `Name them sequentially: 1.jpg, 2.jpg, 3.jpg, etc.\n\n` +
                        `Supported formats: .jpg, .jpeg, .png, .webp, .gif\n\n` +
                        `Check browser console (F12) for more details.`;

                    alert(message);
                    console.log('=== Gallery Debug Info ===');
                    console.log('Project ID:', projectId);
                    console.log('Expected folder:', folderPath);
                    console.log('Full path example:', `${folderPath}/1.jpg`);
                    console.log('Current URL:', window.location.href);
                    console.log('Protocol:', window.location.protocol);
                    return;
                }

                // Update modal title
                document.getElementById('projectGalleryModalLabel').textContent = projectTitle;

                // Hide loading and open gallery
                hideGalleryLoading();
                openGallery();
            } catch (error) {
                console.error('Error loading gallery images:', error);
                hideGalleryLoading();
                alert('Error loading gallery. Please check the console (F12) for details.');
                console.error('Full error:', error);
            }
        });
    });

    function showGalleryLoading() {
        const mainImage = document.getElementById('galleryMainImage');
        const modalBody = document.querySelector('.gallery-modal-body');

        let loadingOverlay = document.getElementById('galleryLoadingOverlay');
        if (!loadingOverlay) {
            loadingOverlay = document.createElement('div');
            loadingOverlay.id = 'galleryLoadingOverlay';
            loadingOverlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(15, 23, 42, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                border-radius: 24px;
            `;
            loadingOverlay.innerHTML = `
                <div style="text-align: center; color: white;">
                    <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <p class="mt-3">Loading gallery...</p>
                </div>
            `;
            modalBody.appendChild(loadingOverlay);
        }
        loadingOverlay.style.display = 'flex';
    }

    function hideGalleryLoading() {
        const loadingOverlay = document.getElementById('galleryLoadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.style.display = 'none';
        }
    }

    function openGallery() {
        updateGalleryImage();
        updateThumbnails();
        updateImageCounter();
        galleryModal.show();
    }

    function updateGalleryImage() {
        const mainImage = document.getElementById('galleryMainImage');
        if (currentImages[currentIndex]) {
            mainImage.src = currentImages[currentIndex];
            mainImage.alt = `Project image ${currentIndex + 1}`;

            // Fade effect
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 150);
        }
    }

    function updateThumbnails() {
        const thumbnailsContainer = document.getElementById('galleryThumbnails');
        thumbnailsContainer.innerHTML = '';

        currentImages.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'gallery-thumbnail' + (index === currentIndex ? ' active' : '');
            thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${index + 1}" loading="lazy">`;

            thumbnail.addEventListener('click', () => {
                currentIndex = index;
                updateGalleryImage();
                updateThumbnails();
                updateImageCounter();
            });

            thumbnailsContainer.appendChild(thumbnail);
        });
    }

    function updateImageCounter() {
        document.getElementById('currentImageIndex').textContent = currentIndex + 1;
        document.getElementById('totalImages').textContent = currentImages.length;
    }

    // Navigation buttons
    document.getElementById('galleryPrevBtn').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = currentImages.length - 1; // Loop to last image
        }
        updateGalleryImage();
        updateThumbnails();
        updateImageCounter();
    });

    document.getElementById('galleryNextBtn').addEventListener('click', () => {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop to first image
        }
        updateGalleryImage();
        updateThumbnails();
        updateImageCounter();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        const modal = document.getElementById('projectGalleryModal');
        if (modal.classList.contains('show')) {
            if (e.key === 'ArrowLeft') {
                document.getElementById('galleryPrevBtn').click();
            } else if (e.key === 'ArrowRight') {
                document.getElementById('galleryNextBtn').click();
            } else if (e.key === 'Escape') {
                galleryModal.hide();
            }
        }
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    const galleryMainImage = document.getElementById('galleryMainImage');

    galleryMainImage.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    galleryMainImage.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next image
                document.getElementById('galleryNextBtn').click();
            } else {
                // Swipe right - previous image
                document.getElementById('galleryPrevBtn').click();
            }
        }
    }

    // Load projects data immediately and wait for it
    (async () => {
        await loadProjectsData();
        // If loading failed, create fallback immediately
        if (Object.keys(projectsData).length === 0) {
            createFallbackProjectsData();
        }
    })();

    // Console message for developers
    console.log('%c👋 Welcome to Kenjie Lucy Portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
    console.log('%cModern design built with HTML, CSS, JavaScript, and Bootstrap 5.', 'color: #8b5cf6; font-size: 12px;');
    console.log(`%cDynamic Gallery: Automatically detects up to ${MAX_IMAGES_PER_PROJECT} images per project.`, 'color: #10b981; font-size: 11px;');
    console.log('%cImage naming: 1.jpg, 2.jpg, 3.jpg, etc. in each project folder.', 'color: #10b981; font-size: 11px;');

});
