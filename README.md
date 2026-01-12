# Grunt Boilerplate

A landing page starter template configured to automate routine tasks: style compilation, script bundling, asset minification, and live browser reloading.

## 🚀 Features

- **Sass (Dart Sass):** High-speed `.scss` to `.css` compilation.
- **Autoprefixer:** Automatically adds vendor prefixes to support the last 2 browser versions and IE11.
- **Minification:** Compresses HTML, CSS, and JS for Production builds without changing file paths in your markup.
- **Concat:** Merges all JS files into a single `scripts.js` file.
- **BrowserSync:** Local server with automatic page refreshing upon saving code.
- **Watch:** Real-time change tracking for all file types.

## 📂 Project Structure

```text
├── assets/
│   ├── scss/          # Style source files (entry point: main.scss)
│   ├── js/            # Script source files
│   ├── img/           # Images and icons
│   └── fonts/         # Fonts
├── build/             # Ready-to-use build (generated automatically)
├── index.html         # Main markup file
├── Gruntfile.js       # Task configuration
└── package.json       # Dependencies and scripts
```

## 🛠 Quick Start

1. Install dependencies:

```bash
npm install
```
2. Launch development mode:

```bash
npx grunt
```

3. Build the project for publication (Production):

```bash
npx grun prod
```
