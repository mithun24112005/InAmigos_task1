# InAmigos Foundation - NGO Awareness Page

A modern, responsive single-page landing website for **InAmigos Foundation** — a Section 8 NGO dedicated to social impact through community service, education, animal care, women empowerment, and environmental initiatives.

![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![License](https://img.shields.io/badge/license-MIT-green)

---

## About InAmigos Foundation

InAmigos Foundation is a registered non-profit organization working across 6+ states in India. The foundation focuses on serving humanity through multiple social impact projects:

- **Project SEVA** — Food, clothing, and relief support
- **Project BACHPANSHALA** — Education and digital literacy for children
- **Project JEEV** — Animal care and rescue support
- **Project UDAAN** — Women empowerment and skill development
- **Project PRAKRITI** — Environmental sustainability and tree plantation
- **Project VIKAS** — Internships and employability training

### Trust Certifications

Section 8 NGO | 80G Certified | 12A Certified | CSR-1 Registered | NGO Darpan / NITI Aayog | ISO 9001:2015

---

## Features

- **Hero Section** — Impactful introduction with call-to-action
- **About** — Mission and vision of the foundation
- **Impact Statistics** — Animated counters showcasing reach (50,000+ meals, 20,000+ saplings, 30,000+ interns trained)
- **Projects** — Detailed overview of all 6 flagship projects
- **Gallery** — Visual showcase of on-ground activities
- **Fund Usage** — Transparent breakdown of donation utilization
- **Internship & Volunteering** — Opportunities across teaching, design, content, fundraising, and more
- **Trust Badges** — Certifications and compliance highlights
- **Footer** — Social links and contact information

---

## Tech Stack

| Technology | Version |
|------------|---------|
| React | 19.2.0 |
| React DOM | 19.2.0 |
| Vite | 7.2.4 |
| @vitejs/plugin-react | 5.1.0 |
| Node.js | >= 20.19.0 |

---

## Project Structure

```
inamigos-awareness-page/
├── public/
│   └── assets/
│       ├── logo.jpg
│       └── gallery/          # Gallery images
├── src/
│   ├── components/
│   │   ├── common/           # Reusable components (Counter, SectionHeader)
│   │   └── sections/         # Page sections (Hero, About, Projects, etc.)
│   ├── data/
│   │   └── siteData.js       # Centralized content and configuration
│   ├── styles/
│   │   └── global.css        # Global styles
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── dist/                     # Production build output
├── index.html
├── package.json
├── vite.config.js
└── vercel.json               # Vercel deployment config
```

---

## Getting Started

### Prerequisites

- Node.js >= 20.19.0
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd "Task 1"

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://127.0.0.1:5173`

### Production Build

```bash
npm run build
```

Output will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Deployment

This project is configured for **Vercel** deployment.

### Vercel Settings

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

No environment variables are required.

---

## Key Impact Metrics

| Metric | Value |
|--------|-------|
| Meals and clothing support | 50,000+ |
| Saplings planted | 20,000+ |
| Animals fed daily | 50+ |
| Interns trained | 30,000+ |
| Girls empowered | 900+ |
| States reached | 6+ |

---

## Connect with Us

- **Website:** [inamigosfoundation.org.in](https://inamigosfoundation.org.in/)
- **About Us:** [Learn more](https://inamigosfoundation.org.in/page/About-Us)
- **Donate:** [Support now](https://rzp.io/l/kWQ87HP)
- **Volunteer:** [Join us](https://inamigosfoundation.org.in/became-volunteer)
- **LinkedIn:** [InAmigos Foundation](https://www.linkedin.com/company/inamigos-foundation)
- **Instagram:** [@inamigos](https://instagram.com/inamigos)
- **Facebook:** [InAmigos Foundation](https://www.facebook.com/share/1CeyCkB3uL/)
- **Twitter:** [@InamigosF](https://twitter.com/InamigosF)
- **YouTube:** [@inamigosfoundation](https://youtube.com/@inamigosfoundation)

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  <p>Made with ❤️ for social impact</p>
  <p><strong>InAmigos Foundation</strong> — Serving Humanity</p>
</div>
