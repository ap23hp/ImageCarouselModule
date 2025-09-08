# 📦 My Custom JavaScript Modules

This repo contains the custom modules I’ve built and bundled with **Webpack**.  
Each module is reusable 

---

## 1️⃣ apra-carousel-module (v1.0.0)

A reusable **image carousel/slider** component.

### ✨ Features
- Previous / Next buttons
- Dots navigation
- Auto-slide every 5 seconds
- Responsive container support
- Can be imported as a module or used directly in the browser

### 🛠️ Usage
```js
import { createCarousel } from "apra-carousel-module";

const container = document.getElementById("carousel-container");
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

createCarousel(container, images);
