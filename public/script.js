document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    } else {
        console.error('Hamburger menu element not found');
    }

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 60;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars on scroll
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage;
        });
    };

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    window.addEventListener('scroll', () => {
        const skillsSection = document.querySelector('#skills');
        if (isElementInViewport(skillsSection)) {
            animateSkillBars();
        }
    });

    // Initialize AOS
    AOS.init();

    // Skills charts
    const languagesChart = new Chart(document.getElementById('languagesChart'), {
        type: 'radar',
        data: {
            labels: ['Python', 'R', 'SQL', 'Java', 'JavaScript'],
            datasets: [{
                label: 'Programming Languages',
                data: [90, 80, 85, 70, 75],
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                borderColor: 'rgb(74, 144, 226)',
                pointBackgroundColor: 'rgb(74, 144, 226)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(74, 144, 226)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    const toolsChart = new Chart(document.getElementById('toolsChart'), {
        type: 'bar',
        data: {
            labels: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy'],
            datasets: [{
                label: 'Data Science & ML Tools',
                data: [85, 80, 90, 95, 95],
                backgroundColor: 'rgba(80, 200, 120, 0.2)',
                borderColor: 'rgb(80, 200, 120)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    const webDevChart = new Chart(document.getElementById('webDevChart'), {
        type: 'polarArea',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express'],
            datasets: [{
                label: 'Web Development Skills',
                data: [90, 85, 80, 75, 70, 65],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    // Projects
    const projects = [
        { 
            title: 'Flower Image Classification Model', 
            description: 'Developed a deep learning model for flower image classification using TensorFlow and Keras. Achieved 95% accuracy on a custom dataset.',
            image: 'https://m.media-amazon.com/images/I/410499JF0FL.png',
            link: 'https://github.com/Tommybass/Flower-recognition'
        },
        { 
            title: 'Mental Health Prediction', 
            description: 'This repository focuses on predicting mental health outcomes using machine learning and deep learning algorithms. It includes comprehensive datasets, data preprocessing steps, exploratory data analysis (EDA), and various predictive models. The project aims to identify patterns and make predictions that can aid in early detection and better management of mental health conditions. By leveraging advanced algorithms, this repository provides tools and insights for improving mental health care and outcomes.',
            image: 'https://news.mit.edu/sites/default/files/images/202201/WomanSilhouette-MentalHealth.jpg',
            link: 'https://github.com/Tommybass/Mental_Health_Prediction'
        },
        { 
            title: 'Time Series Forecasting', 
            description: 'Implemented an ARIMA model and LSTM neural network for predicting stock prices. Compared performance and deployed the best model as a web service.',
            image: 'https://www.marktechpost.com/wp-content/uploads/2023/02/stock-market-chart-virtual-screen-with-woman-s-hand-digital-remix-scaled.jpg',
            link: 'https://github.com/Tommybass/Time-series-Forecast-repo'
        },
        { 
            title: 'Skin Lesions Detection', 
            description: 'This repository focuses on detecting skin diseases using advanced machine learning and deep learning techniques. It includes datasets of various skin lesions, data preprocessing scripts, and notebooks for model training and evaluation. The goal is to develop a model that can accurately classify different types of skin lesions, aiding in early diagnosis and treatment. This project highlights the application of Convolutional Neural Networks (CNN) and other algorithms in the field of medical image analysis, demonstrating their potential in healthcare technology',
            image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/derm_-_hero_image_2_1.width-1300.jpg',
            link: 'https://github.com/Tommybass/skin-lesions-Skin-disease-detection-'
        },
        { 
            title: 'Health Data Analysis', 
            description: 'This repository contains all the necessary data and Jupyter notebooks for predicting patient hospital stay durations. It includes datasets, data preprocessing steps, exploratory data analysis (EDA), and machine learning models aimed at accurately forecasting how long a patient is likely to remain hospitalized. The project aims to provide valuable insights and predictive tools to improve hospital resource management and patient care.',
            image: 'https://www.graymatteranalytics.com/wp-content/uploads/2020/12/healthcare-analytics.jpeg',
            link: 'https://github.com/Tommybass/Health-Analysis'
        },
        { 
            title: 'Protein Classifications in Humans', 
            description: 'This repository focuses on the classification of proteins using machine learning and deep learning techniques. It includes datasets of various protein sequences, scripts for data preprocessing, and notebooks for model training and evaluation. The aim is to develop models that can accurately classify proteins into their respective categories, which is essential for understanding their functions and interactions. This project demonstrates the application of advanced computational techniques in bioinformatics, contributing to the field of biological research and molecular biology.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/1bkv_collagen_02.png/512px-1bkv_collagen_02.png',
            link: 'https://github.com/Tommybass/Protein-classifications'
        },
        { 
            title: 'Spam Email Classification', 
            description: 'This repository utilizes Long Short-Term Memory (LSTM) networks and other machine learning techniques to identify and classify spam emails. It includes datasets of spam and non-spam emails, data preprocessing scripts, and notebooks for model training and evaluation. The goal is to develop a robust model that can effectively distinguish between spam and legitimate emails, enhancing email security and filtering systems. This project showcases the application of LSTM networks in natural language processing (NLP) tasks and the broader field of cybersecurity',
            image: 'https://editor.analyticsvidhya.com/uploads/32086heading.jpeg',
            link: 'https://github.com/Tommybass/Spam-mail'
        },
        { 
            title: 'IT Service Classification', 
            description: 'This repository focuses on classifying IT services into five distinct groups using machine learning techniques. It includes datasets, data preprocessing scripts, and notebooks for model training and evaluation. The aim is to develop models that can accurately categorize IT services, improving organization and management within IT departments. This project demonstrates the application of classification algorithms in the IT service industry, contributing to more efficient and effective service delivery.',
            image: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/111893/s960_trade-mark-classification.jpg',
            link: 'https://github.com/Tommybass/Classify_IT_Service'
        }
    ];

    const projectGrid = document.getElementById('projectGrid');
projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.setAttribute('data-aos', 'fade-up');
    projectCard.setAttribute('data-aos-delay', `${index * 100}`);
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">View Project <i class="fas fa-external-link-alt"></i></a>
    `;
    projectGrid.appendChild(projectCard);
});

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(result => {
            console.log('Success:', result);
            alert('Message sent successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
