# Ravindra Kumar Nayak - Portfolio

A high-performance, **No-Build** dynamic portfolio website featuring a "Cyber-Dark" aesthetic, GSAP animations, and interactive elements.

**🔗 Live Demo:** [portfolio-livid-delta-13.vercel.app](https://portfolio-livid-delta-13.vercel.app/)

## 🚀 Features

- **Cyberpunk / Lier's Den Theme**: Deep dark backgrounds with Neon Cyan (`#2dd4bf`) and Purple (`#a855f7`) accents.
- **Glitch Effect**: CSS-only "Glitch" animation on the main heading, ported from the "Lier's Den" project.
- **Interactive Visuals**:
    - **Custom Project Dashboards**: Generated Cyberpunk-style analytics dashboards for Amazon & Vendor projects.
    - **3D Hover Effects**: Project cards tilt and glow on hover.
- **Performance**:
    - **No-Node.js Required**: Runs directly in the browser.
    - **CDN Powered**: Uses Tailwind CSS and Lucide Icons via CDN for instant setup.
    - **GSAP Animations**: Smooth scroll-triggered entrances using GreenSock.

## 🛠 Tech Stack

- **Core**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN)
- **Animation**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger)
- **Icons**: [Lucide](https://lucide.dev/)

## 📂 Project Structure

```
portfolio/
├── assets/                 # Generated project images
│   ├── amazon-dashboard.png
│   └── vendor-dashboard.png
├── index.html             # Main entry point (Structure)
├── style.css              # Custom styles, Glitch anims, Tailwind config
├── script.js              # GSAP animations & Logic
└── README.md              # Documentation
```

## ⚡ How to Run

Since this is a **static, no-build** project, you do not need `npm` or `node_modules`.

1. **Download** or Clone the repository.
2. **Open** `index.html` in any modern web browser (Chrome, Edge, Firefox).
3. **Enjoy!**

## 🎨 Customization

- **Theme Colors**: Modified in the `tailwind.config` script tag in `<head>` of `index.html`.
- **Animations**: Tweak GSAP timings in `script.js` or CSS keyframes in `style.css`.

## 👤 Author

**Ravindra Kumar Nayak**
- **Education**: IIT Patna (BS in Mathematics & Computing)
- **Contact**: [2201mc30_ravindra@iitp.ac.in](mailto:2201mc30_ravindra@iitp.ac.in)
