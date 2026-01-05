# Kate's Fanfiction Portfolio

A beautiful, cozy portfolio website for fanfiction writer Kate, built with React and Tailwind CSS.

## ✨ Features

- **Responsive Design**: Fully optimized for mobile and desktop
- **Cozy Aesthetic**: Warm browns, creams, and serif typography
- **Smooth Animations**: Framer Motion for elegant fade-in effects
- **Modern UI**: Rounded corners, soft shadows, and paper textures
- **Interactive Navigation**: Sticky header with smooth scrolling

## 🎨 Sections

1. **Hero Section**: Welcoming introduction
2. **About Me**: Kate's journey as a fanfiction writer
3. **What I Write**: Visual grid showcasing different genres (Fluff, Angst, Hurt/Comfort, Smut, DD:DNE)
4. **Example Works**: Portfolio of published stories
5. **Fandoms & Rules**: Supported fandoms and commission guidelines
6. **Pricing**: Clear commission pricing structure
7. **Contact**: Social media links and ways to connect

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Technologies Used

- **React 18**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **Google Fonts**: Playfair Display (serif) and Inter (sans-serif)

## 📝 Customization

### Updating Images

The "What I Write" section uses Unsplash images. You can replace them with your own by:

1. Finding images on [Unsplash](https://unsplash.com) or [Pinterest](https://pinterest.com)
2. Replacing the image URLs in `src/App.js`
3. Suggested search terms:
   - Fluff: "cozy coffee", "warm blanket"
   - Angst: "rain window", "moody atmosphere"
   - Hurt/Comfort: "comfort", "soft lighting"
   - Smut: "romantic candles", "intimate"
   - DD:DNE: "dark academic", "vintage books"

### Updating Portfolio Links

In the Example Works section, replace the placeholder AO3/Tumblr URLs with your actual story links:

```javascript
href = "https://archiveofourown.org/works/your-actual-work-id";
```

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'warm-cream': '#FDF8F3',
  'soft-beige': '#E8DED2',
  'deep-brown': '#5C4033',
  // Add your own colors here
}
```

### Adding More Fandoms

In the Fandoms section, simply add to the array:

```javascript
const fandoms = [
  "Your Fandom Here",
  // ... existing fandoms
];
```

## 📱 Social Media Links

Update your social media handles in the Contact section and Footer:

- TikTok: @Eth3lroy
- Instagram: @Vladtoly
- AO3: Vladtoly
- Tumblr: Vladtoly

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be in the `build/` directory, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 🎯 Future Enhancements

- Add a contact form with email integration
- Implement a blog section for writing updates
- Add testimonials from past commissioners
- Create a FAQ section
- Add dark mode toggle

## 📄 License

This project is for personal use by Kate. All commission work is owned by the respective commissioners.

## 💬 Support

For questions or commission inquiries, reach out through any of Kate's social media platforms!

---

Built with ❤️ and ☕ for the fanfiction community
