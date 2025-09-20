# 🔧 ALLin1Wrench - Interactive Portfolio Website

<div align="center">
  <img src="pics/Logo.png" alt="ALLin1Wrench Logo" width="200"/>
  
  [![Website Status](https://img.shields.io/website?url=https%3A//allin1wrench.ir&style=for-the-badge&logo=firefox&logoColor=white)](https://allin1wrench.ir)
  [![License](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg?style=for-the-badge)](LICENSE)
  [![GitHub stars](https://img.shields.io/github/stars/Amin-moniry-pr7/allin1wrench?style=for-the-badge&logo=github)](https://github.com/Amin-moniry-pr7/allin1wrench)

  **🌟 A cutting-edge, interactive portfolio showcasing my journey through technology 🌟**
</div>

##  Live Demo

Visit the live website: **[https://allin1wrench.ir](https://allin1wrench.ir)**

## 📋 Overview

ALLin1Wrench is my personal portfolio website that combines stunning visual design with interactive storytelling. It features an immersive timeline of my technical journey, from foundational skills to advanced expertise in AI, networking, and full-stack development.

### ✨ Key Features

- 🎨 **Interactive Timeline**: Journey through my skill development with animated paths and stations
- 🌌 **Dynamic Starfield Background**: Mesmerizing particle animations powered by HTML5 Canvas
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🎯 **Smooth Animations**: Seamless transitions and engaging micro-interactions
- 🔄 **Semi-circular Navigation**: Unique scroll-based navigation system
- ⚡ **Performance Optimized**: Fast loading with efficient rendering
- 🎪 **No External Dependencies**: Pure vanilla JavaScript implementation

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Structure & Markup | HTML5 |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling & Animations | CSS3 |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Interactivity & Logic | ES6+ |
| ![Canvas](https://img.shields.io/badge/-Canvas%20API-FF6B6B?style=flat&logo=html5&logoColor=white) | Background Animations | Native |

## 📁 Project Structure

```
ALLin1Wrench/
├── 📄 index.html              # Landing page with animated intro
├── 📄 LICENSE                 # CC BY-NC-ND 4.0 License
├── 📄 README.md               # Project documentation
├── 📄 robots.txt              # SEO crawling instructions
├── 📄 sitemap.xml             # Site structure for search engines
├── 🎨 css/
│   ├── background.css         # Starfield animation styles
│   ├── footer.css             # Footer component styles
│   ├── header.css             # Header with floating particles
│   ├── main.css               # Timeline and journey styles
│   └── main_2.css             # Semi-circular navigation styles
├── 📝 html/
│   ├── background.html        # Animated starfield component
│   ├── footer.html            # Footer with social links
│   ├── header.html            # Navigation header
│   ├── main.html              # Main portfolio timeline
│   └── main_2.html            # Interactive sections
├── ⚙️ js/
│   ├── background.js          # Canvas-based star field
│   ├── footer.js              # Footer text animations
│   ├── main.js                # Timeline scroll interactions
│   └── main_2.js              # Semi-circular scroll system
└── 🖼️ pics/
    ├── About Me.png           # Personal introduction image
    ├── Connect With Me.png    # Social media section image
    ├── Logo.png               # ALLin1Wrench logo
    ├── My Skills & Expertise.png # Skills showcase image
    ├── The Roadmap.png        # Future plans image
    └── What I Offer.png       # Services overview image
```

## 🎯 Features Breakdown

### 🌟 Landing Page (`index.html`)
- **Animated Logo**: Floating logo with glow effects
- **Letter-by-letter Animation**: Brand name reveals with staggered timing
- **Particle System**: Dynamic mouse-following particles
- **Corner Frames**: Animated decorative borders

### 🛤️ Interactive Timeline (`main.html`)
- **Skill Stations**: 6 major skill categories with progress indicators
- **Animated Paths**: SVG paths that draw as you scroll
- **Percentage Counters**: Numbers that animate to final values
- **Responsive Cards**: Detailed descriptions of each skill area

### 🎡 Semicircular Navigation (`main_2.html`)
- **Unique UX**: Revolutionary scroll-based navigation
- **Section Transitions**: Smooth section changes with visual feedback
- **Content Variety**: Multiple content layouts (text, images, lists)
- **Social Integration**: Direct links to professional profiles

##  Skills Showcase

<div align="center">

### 💻 Programming & Development
![Python](https://img.shields.io/badge/-Python%2095%25-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript%2060%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Django](https://img.shields.io/badge/-Django%2085%25-092E20?style=for-the-badge&logo=django&logoColor=white)

### 🤖 AI & Machine Learning
![AI](https://img.shields.io/badge/-Artificial%20Intelligence%2090%25-FF6B6B?style=for-the-badge&logo=tensorflow&logoColor=white)
![PyTorch](https://img.shields.io/badge/-PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![ML](https://img.shields.io/badge/-Machine%20Learning-00D4AA?style=for-the-badge&logo=scikit-learn&logoColor=white)

### 🌐 Networking & Systems
![Networking](https://img.shields.io/badge/-Networking%2099%25-1BA0D7?style=for-the-badge&logo=cisco&logoColor=white)
![Linux](https://img.shields.io/badge/-Linux%2084%25-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

</div>

## 🎨 Design Philosophy

- **Minimalist Elegance**: Clean interfaces with purposeful animations
- **Dark Theme**: Easy on the eyes with strategic color accents
- **Red Accent Color**: Consistent `#dc143c` branding throughout
- **Typography**: Modern fonts (Orbitron, Poppins) for tech aesthetic
- **Performance First**: Optimized animations that don't compromise speed

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amin-moniry-pr7/allin1wrench.git
   cd allin1wrench
   ```

2. **Open with Live Server**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Or simply open index.html in your browser
   ```

3. **View the website**
   Open `http://localhost:8000` in your browser

## 🌍 Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Recommended for best experience |
| Firefox | ✅ Full | All features supported |
| Safari | ✅ Full | Webkit optimizations included |
| Edge | ✅ Full | Modern Edge versions |
| Mobile | ✅ Full | Responsive design implemented |

## 📱 Mobile Responsiveness

- **Breakpoints**: 480px, 768px, 992px, 1200px
- **Touch Navigation**: Swipe gestures on mobile
- **Optimized Assets**: Compressed images for mobile
- **Performance**: Reduced animations on smaller screens

## 🔍 SEO & Performance

- **Lighthouse Score**: 95+ across all metrics
- **Meta Tags**: Complete Open Graph and Twitter Cards
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawling instructions
- **Schema Markup**: Structured data for rich snippets

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License**.

**You are free to:**
- ✅ Share and redistribute the material

**Under the following terms:**
- 📝 **Attribution**: Credit must be given
- 🚫 **NonCommercial**: No commercial use
- 🔒 **NoDerivatives**: No modifications allowed

See the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Creator

**Amin Moniry** - Full-Stack Developer & AI Enthusiast

- 🌐 **Website**: [allin1wrench.ir](https://allin1wrench.ir)
- 📱 **Telegram**: [@adc7amin7adc](https://t.me/adc7amin7adc)
- 🐙 **GitHub**: [@Amin-moniry-pr7](https://github.com/Amin-moniry-pr7)
- 📺 **YouTube**: [@adc7aminoid7adc](https://www.youtube.com/@adc7aminoid7adc)

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome!

1. **Report Issues**: Use GitHub Issues for bugs
2. **Suggestions**: Open discussions for feature ideas
3. **Contact**: Reach out via social media links

## 🙏 Acknowledgments

- **Font Awesome**: Icons used throughout the site
- **Google Fonts**: Typography (Orbitron, Poppins, Vazirmatn)
- **Canvas API**: For the stunning background animations
- **CSS Grid/Flexbox**: For responsive layouts

## 📊 Website Analytics

<div align="center">

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=allin1wrench.portfolio)
[![Website](https://img.shields.io/website?url=https%3A//allin1wrench.ir&style=for-the-badge)](https://allin1wrench.ir)

</div>

---

<div align="center">
  <strong>🔧 Built with passion, powered by innovation 🔧</strong>
  <br/>
  <em>© 2025 ALLin1Wrench by Amin Moniry. All Rights Reserved.</em>
</div>
