// Project Data
const projects = [
  {
    title: "Hot FM Pakistan – Live Radio Streaming & Music Platform",
    // description: `Live radio streaming platform with multilingual support, user authentication,music streaming, playlist creation, and admin dashboard—developed using full-stack web technologies.`,
    description: `Led backend development for Pakistan's famous live radio streaming platform, Hot FM, delivering secure audio streaming,manage playlist and content management capabilities.
    <br> ------- Key backend features include: <br>
    <b>1-</b> API-driven Live Radio Streaming architecture for real-time, scalable broadcast delivery. <br>
    <b>2-</b>Developed secure APIs to handle music delivery, enabling the mobile application to fetch music files, browse server-side folders, and stream audio content.<br>
    <b>3-</b> Media and Playlist Management, supporting CRUD operations and personalized content saving. <br>
    <b>4-</b> Admin API Layer to power dashboards for analytics, content moderation, and station management. <br>
    <b>5-</b> Optimized Database Schemas for user data, playlists, and streaming logs using relational DB. <br>
    `,
    image: "asset/test img.jpg",
    image2: "asset/hotfm.png",
    technologies: ["Laravel", "Bootstrap", "MySQL", "Googleapis", "FTP", 'APIS'],
    completionDate: "January 2025",
    url: 'https://www.hotfm.com.pk/'
  },
  {
    title: "Falcon Logistics - Always on time",
    description: `Developed the backend system for Falcon Logistics, a web-based courier service platform enabling users to book domestic and international shipments through a Laravel-powered interface.
    <br> ------- Key backend features include: <br>
    <b>1-</b> Shipment Booking System with dynamic routing, location-based charges, and Laravel form validation for both international and domestic parcels. <br>
    <b>2-</b> User Authentication & Role Management using Laravel’s built-in auth system for secure login, registration, and permission control for users and admins. <br>
    <b>3-</b> Real-Time Parcel Tracking through status updates, searchable tracking codes, and server-rendered pages displaying delivery progress. <br>
    <b>4-</b> User Dashboard showing shipment history, active deliveries, and parcel statuses. <br>
    <b>5-</b> Admin Dashboard for managing shipments, updating parcel statuses, viewing customer activity, and generating shipment reports. <br>
    <b>6-</b> MySQL Database Design & Queries for handling logistics data, user accounts, and tracking records efficiently. <br>`,
    image: "asset/falconlogistics.png",
    image2: "asset/falconlogistics.png",
    technologies: ["Laravel", "Bootstrap", "MySQL", 'Wordpress'],
    completionDate: "October 2022",
    url: 'https://falconlogistics.pk/'
  },
  {
    title: "DKT Pakistan - BEHTAR APP , BEHTAR PAKISTAN",
    description: `Dynamic NGO website for reproductive health awareness, built using modern full-stack web technologies with multilingual support, CMS integration, responsive UI, and a secure backend for content and user management, and a live chart pannel for customer service`,
    image: "asset/dktpakistan.png",
    image2: "asset/dktpakistan-2.png",
    technologies: ["Laravel", "Bootstrap", "MySQL", 'Codeigniter', 'Googleapis', 'Google Map', 'Chatify'],
    completionDate: "October 2022",
    url: 'https://www.dktpakistan.org/'
  },
  {
    title: "PLAYUNBRANDED UK ONLINE ORDER SYSTEM",
    description: `Digital order system for PlayUnbranded, a leading UK-based sportswear provider for Clubs, Schools, and Businesses, They needed a robust digital solution to manage their order workflow. I developed a custom online order system using Laravel, Bootstrap, JavaScript, and jQuery.
    <br>
      ------- Key features include:
    <br>
      <b>1- </b>Automated order submission to admin email
    <br>
      <b>2- </b>Zendesk ticket generation for each order
    <br>
      <b>3- </b>Real-time booking with DPD courier API for seamless shipment handling`,
    image: "asset/playunbranded.png",
    image2: "asset/playunbranded order.jpg",
    technologies: ["Laravel", "API integration", "Email Integration", "DPD Uk", 'Zendisk Ticket', 'Bootstrap', 'Javascript', 'Jquery'],
    completionDate: "Feb 2023",
    url: 'https://playunbranded.co.uk/order-form/'
  },
  {
    title: "INDUS VALLEY SCHOOL EVOLUTION SYSTEM",
    description: `Developed a custom web application for Indus Valley School to streamline course and faculty evaluations.
      <br> ------- Key features include: <br> 
      <b>1- </b>Student Panel for view available courses, rate instructors and course quality, and offer suggestions <br>
      <b>2- </b>Admin Panel for Administrators, who can access data-driven reports to evaluate and improve academic performance. <br>
      `,
    image: "asset/ivs.jpg",
    image2: "asset/ivs.jpg",
    technologies: ["Laravel", "Admin Panel", "Student Panel", "Email Signing", "Email Integration", "MySQL", 'User Role & Permission'],
    completionDate: "September 2023",
    url: 'https://indusvalley.edu.pk/'
  },
  {
    title: "HFG CLICK4HAIR (OMS)",
    description: `
      Rebuilt an existing OMS for HFG Click4Hair,a custom wig manufacturer in U.S using latest technology and added advance feature. The system now supports expanded modules and tighter integration with their website for custom order handling.
      <br> ------- Key features include: <br>
      <b>1-</b> Company & Client Management: Manage companies and their point-of-contact clients. <br>
      <b>2-</b> Enhanced Order Flow: Create, approve, and track product orders with invoice generation. <br>
      <b>3-</b> Product Module: Add and manage custom wig products and configurations. <br>
      <b>4-</b> Admin Setup Panel: Centralized control for app-wide settings and system magnitudes. <br>
      <b>5-</b> Website Integration: Orders placed on the public site flow through admin approval before processing. <br>`,
    image: "asset/hfg.png",
    image2: "asset/hfg-1.png",
    technologies: ["Laravel", "Admin Panel", "Student Panel", "Email Signing", "Email Integration", "MySQL", 'User Role & Permission'],
    completionDate: "November 2024",
    url: 'https://indusvalley.edu.pk/'
  },
];

// DOM Loaded
document.addEventListener('DOMContentLoaded', function () {
  // No longer using typing effect (now static text)

  // Initialize projects - showing 6 items initially (2 in first row, 4 in second row)
  renderProjects(6);

  // Initialize view more functionality
  initViewMoreButton();

  // Initialize smooth scrolling
  initSmoothScrolling();

  // Initialize navbar scrolling effect
  initNavbarScrollEffect();

  // Initialize active section highlighting
  initActiveSectionHighlight();

  // Initialize contact form (could connect to backend or email service)
  initContactForm();
});

// Typing Effect - Now removed (using static text instead)

// Render Projects
function renderProjects(limit = 6) {
  const projectsGrid = document.getElementById('projects-grid');
  projectsGrid.innerHTML = '';

  const projectsToShow = projects.slice(0, limit);

  // Create row wrapper divs for alternating row patterns
  let currentRowIndex = 0;
  let currentRowDiv = null;
  let itemsInCurrentRow = 0;

  // Determine how many items to place in each row based on row index
  // Odd rows (0, 2, 4...) get 2 items, even rows (1, 3, 5...) get 4 items
  const getItemsPerRow = (rowIndex) => rowIndex % 2 === 0 ? 2 : 4;

  // Helper function to create and append a new row div
  const createNewRow = () => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'grid-row w-full grid grid-cols-1 md:grid-cols-' +
      (currentRowIndex % 2 === 0 ? '2' : '4') + ' gap-2 mb-6';

    // Add row ID for each row (for row navigation)
    rowDiv.id = 'projects-row-' + currentRowIndex;

    projectsGrid.appendChild(rowDiv);
    return rowDiv;
  };

  projectsToShow.forEach((project, index) => {
    // Determine if we need to start a new row
    const itemsPerCurrentRow = getItemsPerRow(currentRowIndex);

    if (itemsInCurrentRow === 0 || itemsInCurrentRow >= itemsPerCurrentRow) {
      // Create a new row if we've filled the current one or at the beginning
      if (itemsInCurrentRow >= itemsPerCurrentRow) {
        currentRowIndex++;
      }
      currentRowDiv = createNewRow();
      itemsInCurrentRow = 0;
    }

    const projectCard = document.createElement('div');
    projectCard.className = 'glass-effect rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer fadeOut';
    projectCard.dataset.projectIndex = index; // Store the project index

    // We don't need these anymore since we're adding row markers in createNewRow()

    // Create different card styles based on index for variety (alternating between two styles)
    let cardStyle = index % 2;
    let cardHtml = '';
    let shortdesc = project.description.split(" ").slice(0, 25).join(" ");
    switch (cardStyle) {
      case 0: // Style 1: Full background image with gradient overlay
        cardHtml = `
          <div class="relative h-full">
            <img 
              src="${project.image}" 
              alt="${project.title}" 
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent/10 flex flex-col justify-end p-6">
              <span class="text-primary text-xs mb-1">${project.completionDate}</span>
              <h3 class="text-xl font-semibold mb-2 text-white">${project.title}</h3>
              <p class="text-gray-300 text-sm mb-4 line-clamp-3">${shortdesc}</p>
              <div class="flex flex-wrap gap-2 mb-2">
                ${project.technologies.slice(0, 3).map(tech => `
                  <span class="px-2 py-1 bg-primary/30 text-white text-xs rounded-md backdrop-blur-sm">${tech}</span>
                `).join('')}
                ${project.technologies.length > 3 ? `
                  <span class="px-2 py-1 bg-gray-800/50 text-white text-xs rounded-md backdrop-blur-sm">+${project.technologies.length - 3}</span>
                ` : ''}
              </div>
              <div class="flex gap-2">
                <a 
                  href="${project.url}" 
                  onclick="event.preventDefault(); event.stopPropagation();window.open('${project.url}', '_blank');"
                  class="w-8 h-8 rounded-full bg-primary/90 text-white flex items-center justify-center hover:bg-primary transition-all duration-300 hover:transform hover:scale-110"
                >
                  <i class="fas fa-external-link-alt text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        `;
        break;

      case 1: // Style 2: Card with image at top and info below
        cardHtml = `
          <div class="h-full flex flex-col">
            <div class="relative h-60 overflow-hidden">
              <div class="absolute top-0 right-0 mt-3 mr-3 px-2 py-1 bg-primary/80 text-white text-xs rounded-md z-10">
                ${project.completionDate}
              </div>
              <img 
                src="${project.image}" 
                alt="${project.title}" 
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div class="p-5 flex-grow flex flex-col">
              <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
              <p class="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">${shortdesc}</p>
              <div class="mt-auto">
                <div class="flex flex-wrap gap-2 mb-4">
                  ${project.technologies.slice(0, 4).map(tech => `
                    <span class="px-2 py-1 border border-primary/30 bg-gray-800 text-gray-300 text-xs rounded-md">${tech}</span>
                  `).join('')}
                </div>
                <button class="w-full py-2 bg-primary/20 hover:bg-primary/40 text-white text-sm rounded-md transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.03]">
                  View Details
                </button>
              </div>
            </div>
          </div>
        `;
        break;
    }

    projectCard.innerHTML = cardHtml;

    // Add click event to open modal
    projectCard.addEventListener('click', () => openProjectModal(index));

    // Add to the current row instead of directly to the grid
    currentRowDiv.appendChild(projectCard);

    // Increment items counter for current row
    itemsInCurrentRow++;
  });
}

// Function to initialize carousel navigation - removed as we now use grid layout

// Initialize View More Button
function initViewMoreButton() {
  const viewMoreBtn = document.getElementById('view-more-btn');
  const viewLessBtn = document.getElementById('view-less-btn');
  const viewMoreContainer = document.getElementById('view-more-container');
  const viewButtonsContainer = document.getElementById('view-buttons-container');

  if (projects.length <= 6) {
    viewButtonsContainer.style.display = 'none';
    return;
  }

  // Initially hide the View Less button when starting with 6 items
  viewLessBtn.style.display = 'none';

  // Calculate how many projects to show for each row expansion
  // Row 1: 2 items, Row 2: 4 items, Row 3: 2 items, etc.
  const calculateProjectLimit = (numRows) => {
    let total = 0;
    for (let i = 0; i < numRows; i++) {
      total += (i % 2 === 0) ? 2 : 4;
    }
    return total;
  };

  // Track how many rows we're currently showing
  let currentRows = 2; // Starting with 2 rows (2 items in first row, 4 in second)

  viewMoreBtn.addEventListener('click', function () {
    // Add one more row
    currentRows++;

    // Calculate how many projects to show with the new row
    const newLimit = calculateProjectLimit(currentRows);

    // Render projects with the new limit
    renderProjects(Math.min(newLimit, projects.length));

    // Show View Less button once we've expanded
    viewLessBtn.style.display = 'inline-flex';

    // Hide View More if we've shown all projects
    if (newLimit >= projects.length) {
      viewMoreBtn.style.display = 'none';
    }

    // Scroll to the newly added row
    setTimeout(() => {
      const newRowId = 'projects-row-' + (currentRows - 1); // Row IDs are 0-based
      const newRow = document.getElementById(newRowId);
      if (newRow) {
        newRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  });

  viewLessBtn.addEventListener('click', function () {
    // Remove one row
    currentRows--;

    // Calculate the new limit with one fewer row
    const newLimit = calculateProjectLimit(currentRows);

    // Render projects with the new limit
    renderProjects(newLimit);

    // Hide View Less button if we're back to the initial state
    if (currentRows <= 2) {
      viewLessBtn.style.display = 'none';
    }

    // Always show View More when we've removed a row
    viewMoreBtn.style.display = 'inline-flex';

    // Scroll to the projects section
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  });
}

// Initialize Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Initialize Navbar Scroll Effect
function initNavbarScrollEffect() {
  const navbar = document.getElementById('navbar');

  // Apply navbarScrolled class initially if already scrolled
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  mobileMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  });

  closeMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    document.body.style.overflow = ''; // Re-enable scrolling
  });

  // Close mobile menu when clicking a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      document.body.style.overflow = ''; // Re-enable scrolling
    });
  });
}

// Initialize Active Section Highlight
function initActiveSectionHighlight() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-menu');

  window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  });
}

// Project Modal Functions
function openProjectModal(projectIndex) {
  const project = projects[projectIndex];
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');

  // Create modal content
  let m_html = `
    <div class="mb-6">
      <div class="relative h-60 rounded-xl overflow-hidden mb-6">
        <img src="${project.image2}" alt="${project.title}" class="">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent py-6">
          <div class="px-6">
            <span class="bg-primary/80 text-white text-xs py-1 px-3 rounded-full backdrop-blur-sm">
              Completed: ${project.completionDate}
            </span>
          </div>
        </div>
      </div>
      <h2 class="text-2xl font-bold gradient-text mb-2">${project.title}</h2>
      <p class="text-gray-300 mb-6">${project.description}</p>
      
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">Technologies Used</h3>
        <div class="flex flex-wrap gap-2">
          ${project.technologies.map(tech => `
            <span class="px-3 py-1 bg-primary/20 rounded-full text-sm text-white">${tech}</span>
          `).join('')}
        </div>
      </div>
      
      <div class="flex gap-4">
        <a 
          href="javascript:;" 
          onclick="event.preventDefault();window.open('${project.url}', '_blank');"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-medium py-2 px-4 rounded-full transition-transform hover:scale-105"
        >
          <i class="fas fa-external-link-alt"></i>
          <span>Live Demo</span>
        </a>`;
  if (project.code_url) {
    m_html += `<a 
                href="#" 
                onclick="event.preventDefault();window.open('${project.code_url ?? ''}', '_blank');"
                class="inline-flex items-center gap-2 bg-gray-700 text-white font-medium py-2 px-4 rounded-full transition-transform hover:scale-105"
              >
                <i class="fab fa-github"></i>
                <span>View Code</span>
              </a>
            </div>
          </div>
        `;
  }
  else {
    m_html += `<a 
                  href="#" 
                  onclick="event.preventDefault()"
                  class="inline-flex items-center gap-2 bg-gray-700 text-white font-medium py-2 px-4 rounded-full transition-transform hover:scale-105"
                >
                  <i class="fab fa-github"></i>
                  <span>View Code</span>
                </a>
              </div>
            </div>
          `;
  }
  modalContent.innerHTML = m_html

  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open

  // Set up event listeners
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');

  closeModalBtn.addEventListener('click', closeProjectModal);
  modalBackdrop.addEventListener('click', closeProjectModal);

  // Close on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = ''; // Re-enable scrolling
}

// Initialize Contact Form
function initContactForm() {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

        console.log(message);

    $.ajax({
      type: "POST",
      url: "https://formsubmit.co/535a321cf707312480da55f20b17bef9",
      data: { "name": name, "email": email, "message": message,"_captcha":false,"_template":"table","_autoresponse":"Thank you for your message!"},
      success: function (response) {
        name = "";
        email = "";
        subject = "";
        message = "";
        $('#formSuccess').removeClass('hidden')
        if (response.success === "true") {
        }else{
          console.log("Something went wrong: " + (response.message || "Unknown error."));
        }
      },
      error: function (response) {
        console.log(response);
      },
    });
    // Reset form
    // contactForm.reset();
  });
}