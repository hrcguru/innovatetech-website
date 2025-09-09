# InnovateTech Solutions Website

A fully responsive, modern HTML5 and CSS3 website for the fictional tech company **InnovateTech Solutions**. This project demonstrates semantic HTML5 structure, advanced CSS techniques including Flexbox and Grid, and a mobile-first responsive design.

---

## **Project Structure**
innovatetech-website/
├── index.html # Homepage
├── about.html # About Us page
├── contact.html # Contact Us page with form
├── css/
│ └── styles.css # External CSS file with all styles
├── images/
│ ├── favicon.ico # Favicon
│ ├── logo.png # Company Logo
│ ├── hero-image.jpg # Homepage hero image
│ └── team-photos/ # Placeholder team images
└── README.md # Project documentation


---

## **Features**

### Homepage (`index.html`)
- Responsive hero section with headline, subheadline, and call-to-action buttons.
- Services section with 4 service cards, including images, titles, descriptions, and links.
- About preview section with company mission, vision, and achievements (using definition lists).
- Sticky header with navigation links and "Get Started" button.
- Footer with contact information and social media links.

### About Page (`about.html`)
- Company history timeline using ordered lists.
- Team member cards with semantic markup, photos, names, and positions.
- Company values with icons and descriptions.

### Contact Page (`contact.html`)
- Contact information using `<address>`, phone and email links.
- Office hours table with proper structure.
- Advanced contact form with:
  - Personal information fieldset
  - Inquiry details with dropdown, radio buttons, checkboxes, and range slider
  - Project description textarea and file upload
  - Preferred contact method selection
  - Terms and newsletter checkboxes
- Form validation using HTML5 attributes (`required`, `email`, `radio`, `checkbox`).

---

## **CSS Features**
- External CSS file `styles.css` with organized sections:
  - Base Styles
  - Layout Components
  - Navigation
  - Page Sections
  - Forms
  - Responsive Design
- Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop).
- CSS Grid for layout and Flexbox for components like navigation, service cards, and team member cards.
- Sticky header and absolute/relative positioning for hero buttons and badges.
- Advanced selectors, pseudo-classes, nth-child selectors, and attribute selectors.
- Box model mastery with `box-sizing: border-box`.

---

## **Accessibility & Best Practices**
- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Proper heading hierarchy (`h1`-`h3`).
- Alt text for all images.
- Accessible form labels and fieldsets.
- Sufficient color contrast and readable typography.

---

## **Browser Compatibility**
- Compatible with modern browsers: Chrome, Firefox, Safari, Edge.
- Graceful degradation for older browsers.

---

## **How to Use**
1. Clone or download the repository.
2. Open `index.html` in a browser to view the homepage.
3. Navigate to `about.html` and `contact.html` for additional pages.
4. Customize images in the `images/` folder and update content as needed.
5. Edit `css/styles.css` for style customization.

---

## **Credits**
- Images are placeholders and can be replaced with actual graphics.
- Icons are placeholders; use free icon libraries like [FontAwesome](https://fontawesome.com/) if needed.
