//HEADER

const toggleButton = document.getElementById('toggleButton');
    const navigationMenu = document.querySelector('.navigation-menu-mobile');

    toggleButton.addEventListener('click', () => {
      console.log("hamburger");
        if (navigationMenu.style.transform === 'translateX(200px)') {
            navigationMenu.style.transform = 'translateX(0px)';
        } else {
            navigationMenu.style.transform = 'translateX(200px)';
        }
    });

//IN my Services Chaning the definition if mobile
    document.querySelector('.circle-btn-web').addEventListener('click', function() {
        document.querySelector('.df-title.services-titles').innerText = 'Web Developement';
        document.querySelector('.definition.services-info-by-title').innerText = 'Looking to elevate your online presence? I\'m a web developer passionate about crafting user-centric and visually stunning web experiences that not only resonate with your brand but also achieve your specific goals.';
    });
    
    document.querySelector('.circle-btn-soft').addEventListener('click', function() {
        document.querySelector('.df-title.services-titles').innerText = 'Software Development';
        document.querySelector('.definition.services-info-by-title').innerText = 'Looking for a custom software solution to solve a business challenge? I specialize in creating tailored applications to streamline processes and enhance user experiences. Let\'s work together to craft a solution that fits your needs perfectly.';
    });
    
    document.querySelector('.circle-btn-graphic').addEventListener('click', function() {
        document.querySelector('.df-title.services-titles').innerText = 'Graphic Designing';
        document.querySelector('.definition.services-info-by-title').innerText = 'Have you ever considered adding a touch of visual flair to your app or website?  I\'m passionate about graphic design and use tools like Photoshop and animation software to help bring your ideas to life. ';
    });

//Desktop devices
const homeButton = document.getElementById('homebtnID');
const aboutButton = document.getElementById('aboutbtnID');
const projectsButton = document.getElementById('projectsbtnID');
const skillsButton = document.getElementById('skillsbtnID');
const servicesButton = document.getElementById('servicesbtnID');
const experienceButton = document.getElementById('experiencebtnID');
const portfolioButton = document.getElementById('portfoliobtnID');
const contactButton = document.getElementById('contactbtnID');

const homeMain = document.querySelector('.home-main');
const aboutMain = document.querySelector('.about-main');
const projectsMain = document.querySelector('.projects-main');
const skillsMain = document.querySelector('.skills-main');
const servicesMain = document.querySelector('.services-main');
const experienceMain = document.querySelector('.experience-main');
const portfolioMain = document.querySelector('.portfolio-main');
const contactMain = document.querySelector('.contact-main');
const mobileButtons = document.querySelectorAll('.mobile-home-button, .mobile-about-button, .mobile-projects-button, .mobile-skills-button, .mobile-services-button, .mobile-experience-button, .mobile-portfolio-button, .mobile-contact-button');
const desktopButtons = [
    { button: homeButton, main: homeMain },
    { button: aboutButton, main: aboutMain },
    { button: projectsButton, main: projectsMain },
    { button: skillsButton, main: skillsMain },
    { button: servicesButton, main: servicesMain },
    { button: experienceButton, main: experienceMain },
    { button: portfolioButton, main: portfolioMain },
    { button: contactButton, main: contactMain }
];

const exploreButton = document.getElementById('explorenbtnID');

exploreButton.addEventListener('click', () => {
    homeMain.style.display = 'none';
    aboutMain.style.display = 'flex';

    homeButton.classList.remove('pressed');
    aboutButton.classList.add('pressed');
});

mobileButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the active class from all buttons
        mobileButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add the active class to the clicked button
        button.classList.add('active');

        // Hide all main content sections
        const mobileMains = document.querySelectorAll('.home-main, .about-main, .services-main, .portfolio-main, .contact-main, .projects-main, .skills-main, .experience-main');
        mobileMains.forEach(main => {
            main.style.display = 'none';
            
            if (main.classList.contains('home-main')) {
                homeButton.classList.add('pressed');
                aboutButton.classList.remove('pressed');
                servicesButton.classList.remove('pressed');
                portfolioButton.classList.remove('pressed');
                contactButton.classList.remove('pressed');
                //new
                projectsButton.classList.remove('pressed');
                skillsButton.classList.remove('pressed');
                experienceButton.classList.remove('pressed');

            } else if (main.classList.contains('about-main')){
                homeButton.classList.remove('pressed');
                aboutButton.classList.add('pressed');
                servicesButton.classList.remove('pressed');
                portfolioButton.classList.remove('pressed');
                contactButton.classList.remove('pressed');
                //new
                projectsButton.classList.remove('pressed');
                skillsButton.classList.remove('pressed');
                experienceButton.classList.remove('pressed');

            } else if (main.classList.contains('services-main')){
                homeButton.classList.remove('pressed');
                aboutButton.classList.remove('pressed');
                servicesButton.classList.add('pressed');
                portfolioButton.classList.remove('pressed');
                contactButton.classList.remove('pressed');
                //new
                projectsButton.classList.remove('pressed');
                skillsButton.classList.remove('pressed');
                experienceButton.classList.remove('pressed');

            } else if (main.classList.contains('portfolio-main')){
                homeButton.classList.remove('pressed');
                aboutButton.classList.remove('pressed');
                servicesButton.classList.remove('pressed');
                portfolioButton.classList.add('pressed');
                contactButton.classList.remove('pressed');
                //new
                projectsButton.classList.remove('pressed');
                skillsButton.classList.remove('pressed');
                experienceButton.classList.remove('pressed');
                
            } else if (main.classList.contains('contact-main')){
                homeButton.classList.remove('pressed');
                aboutButton.classList.remove('pressed');
                servicesButton.classList.remove('pressed');
                portfolioButton.classList.remove('pressed');
                contactButton.classList.add('pressed');
                //new
                projectsButton.classList.remove('pressed');
                skillsButton.classList.remove('pressed');
                experienceButton.classList.remove('pressed');

            //NEWEST
            } else if (main.classList.contains('projects-main')){
                homeButton.classList.remove('pressed');
                aboutButton.classList.remove('pressed');
                servicesButton.classList.remove('pressed');
                portfolioButton.classList.remove('pressed');
                contactButton.classList.remove('pressed');
                //new
                projectsButton.classList.add('pressed');
                skillsButton.classList.remove('pressed');
                experienceButton.classList.remove('pressed');

            } else if(main.classList.contains('skills-main')) {
                homeButton.classList.remove('pressed');
                aboutButton.classList.remove('pressed');
                servicesButton.classList.remove('pressed');
                portfolioButton.classList.remove('pressed');
                contactButton.classList.remove('pressed');
                //new
                projectsButton.classList.remove('pressed');
                skillsButton.classList.add('pressed');
                experienceButton.classList.remove('pressed');

            } else if(main.classList.contains('experience-main')) {
                homeButton.classList.remove('pressed');
                aboutButton.classList.remove('pressed');
                servicesButton.classList.remove('pressed');
                portfolioButton.classList.remove('pressed');
                contactButton.classList.remove('pressed');
                //new
                projectsButton.classList.remove('pressed');
                skillsButton.classList.remove('pressed');
                experienceButton.classList.add('pressed');

            }
        });

        // Show the corresponding main content section based on the clicked button
        const targetMainId = button.dataset.target;
        const targetMain = document.querySelector(`.${targetMainId}`);
        targetMain.style.display = 'flex'; // Assuming you want to show it as flex

        // Trigger click event on the corresponding desktop button
        desktopButtons.forEach(({ button: desktopButton, main: desktopMain }) => {
            if (desktopMain.id === targetMainId.replace('-main', 'Main')) {
                desktopButton.click();
            }
        });

        // Auto-click the home button on mobile
        if (button.classList.contains('mobile-home-button')) {
            homeButton.click();
        }
    });
});

desktopButtons.forEach(({ button, main }) => {
    button.addEventListener('click', () => {
        desktopButtons.forEach(({ button: btn, main: mainItem }) => {
            btn.classList.remove('pressed');
            mainItem.style.display = 'none';
        });

        button.classList.add('pressed');
        main.style.display = 'flex';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    homeButton.classList.add('pressed');
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbxpx4DpUYBRmEKJJhvxjQXJiIXWi1tYyBVqfvAHWbZULL7LSFzTVbMnJ8tLAjVYPGJcyQ/exec';
const form = document.forms['My-Portfolios-Clients'];
const failedPanel = document.querySelector('.failed-panel');
const successfulPanel = document.querySelector('.successful-panel');

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const time = document.querySelector('.details-field[name="client-time-need"]').value;
    const date = document.querySelector('.details-field[name="client-date-need"]').value;
    const message = document.getElementById('message').value;

    if (name.trim() !== '' && email.trim() !== '' && time.trim() !== '' && date.trim() !== '' && message.trim() !== '') {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))

        failedPanel.style.display = 'none';
        successfulPanel.style.display = 'flex';
    } else {
        failedPanel.style.display = 'flex';
        successfulPanel.style.display = 'none';
    }
});

const exitButton = document.querySelector('.exit-button');
const okayButton = document.querySelector('.okay-button');

const okayButtons = document.querySelectorAll('.okay-button');
const exitButtons = document.querySelectorAll('.exit-button');

const inputFields = document.querySelectorAll('.textfields');
const timeField = document.querySelector('.details-field[name="client-time-need"]');
const dateField = document.querySelector('.details-field[name="client-date-need"]');
const messageField = document.querySelector('.textarea');

okayButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputFields.forEach(field => {
            field.value = '';
        });
        timeField.value = '';
        dateField.value = '';
        messageField.value = '';
        successfulPanel.style.display = 'none';
        failedPanel.style.display = 'none';
    });
});

exitButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputFields.forEach(field => {
            field.value = '';
        });
        timeField.value = '';
        dateField.value = '';
        messageField.value = '';
        successfulPanel.style.display = 'none';
        failedPanel.style.display = 'none';
    });
});
