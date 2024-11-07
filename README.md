Shiplee Franchise Opportunity
Project Overview
This project is a redesign of the Shiplee Franchise Opportunity page. The objective was to adopt the modern, responsive, and engaging style of Shiprocket for a professional user experience. The website highlights key aspects of Shiplee's franchise offering, including benefits, training, support, and an extensive network.

The website features a clean, minimalistic design inspired by Shiprocket's style with a focus on ease of use and engaging animations.

Features
Hero Section: A clear, bold call-to-action with an engaging introductory statement.
Accordion for "Why Choose Shiplee?": Expandable sections showcasing key benefits.
Franchise Benefits Table: A clear and concise table with icons for each benefit.
From Anywhere to Everywhere: A visual representation of Shiplee's network reach.
Partner Logos: Grid display with hover effects for courier partner logos.
Responsive Design: The layout adapts to both desktop and mobile devices.
Animations: Subtle reveal effects and interactive button transitions.
Dark Mode Toggle: A button to toggle between dark and light modes.
Scroll-to-top Button: A button appears after scrolling down, allowing users to quickly return to the top.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/shiplee-franchise.git
Open the project folder:

bash
Copy code
cd shiplee-franchise
Start by opening the index.html file:

Simply double-click on the index.html file, and it will open in your default web browser.
Alternatively, you can deploy this project using GitHub Pages or any hosting platform for public access.

File Structure
graphql
Copy code
shiplee-franchise/
├── index.html        # The main HTML file
├── styles.css        # The stylesheet for the website layout and design
├── script.js         # JavaScript for interactivity (scroll-to-top, accordion, etc.)
├── images/           # Folder containing all images (backgrounds, logos, etc.)
│   ├── hero-background.jpg
│   ├── network-map.jpg
│   ├── logo1.png
│   └── logo2.png
└── README.md         # This file
How to Use
Hero Section
Title: "Join the Shiplee Franchise" is displayed prominently, with a call-to-action button to encourage users to engage.
Call-to-action: Clicking the "Get Started" button currently links to a placeholder URL. You can customize it based on your needs.
Accordion (Why Choose Shiplee?)
Clicking on each section will toggle the visibility of additional details.
The "Wide Network," "Full Support," and "Training & Resources" sections explain the benefits of the Shiplee franchise.
Franchise Benefits Table
The table displays various benefits with icons such as Delivery Reach, Technology, and Earnings.
Each benefit includes a short description for clarity.
Network Reach Section
A large map image is provided to showcase Shiplee's network coverage. You can replace the map image as needed.
Partner Logos Section
This section includes logos of courier partners in a grid layout with hover effects.
The logos can be replaced with your own partner logos by updating the images/ folder.
Customizing the Website
Updating Text Content:

The main content of the website (such as titles, descriptions, and benefits) can be modified directly in the index.html file.
Changing the Background Image:

To change the background image in the Hero Section, replace the images/hero-background.jpg with a new image and update the file path if necessary.
Adding More Sections:

To add more accordion items in the "Why Choose Shiplee?" section, simply duplicate an existing <div class="accordion-item"> and change the text content.
Changing the Logos:

Replace the logos in the images/ folder with your own logos (e.g., logo1.png, logo2.png) and make sure the src attribute in the <img> tags matches the new logo file names.
Dark Mode:

The dark mode toggle button is implemented using simple CSS changes. If you'd like to add more styles for dark mode, you can modify the styles.css file.
Technologies Used
HTML5: For the structure and layout of the website.
CSS3: For styling and layout. Includes Flexbox for responsive design.
JavaScript: For interactivity, including the accordion functionality, scroll-to-top button, and dark mode toggle.
Font Awesome: For icons used in the accordion and franchise benefits table.
