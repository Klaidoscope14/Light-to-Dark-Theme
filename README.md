# Light-to-Dark-Theme

## Project Overview
This project implements a simple React application that allows users to toggle between light and dark themes. The application's theme state is saved in the browser's `localStorage` to persist user preferences across sessions.

## Features
- Toggle between light and dark themes with a button.
- Persistent theme preference using `localStorage`.
- Smooth transition effects for background and text colors.

## File Structure
- **Problem18.jsx**: Contains the main React component that manages the application logic and theme state.
- **Problem18.css**: Provides the styles for the light and dark themes, including transition effects and button styles.

## Installation and Usage

### Prerequisites
- Node.js and npm installed on your system.

### Steps
1. Clone the repository or download the files.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Code Explanation

### Problem18.jsx
- The `App` component uses React hooks (`useState` and `useEffect`) to manage and persist the theme state.
- The `toggleTheme` function switches between light and dark themes and updates `localStorage`.
- The `useEffect` hook retrieves the saved theme from `localStorage` when the component mounts.

### Problem18.css
- Styles for the light (`.app.light`) and dark (`.app.dark`) themes.
- Smooth transition effects for background and text colors using `transition` property.
- A styled button (`.theme-button`) for toggling the theme with hover effects.

## Customization
- Modify colors in `Problem18.css` to customize the themes.
- Enhance the `App` component in `Problem18.jsx` to include additional features, such as more themes or animations.

## Contributing
Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you wish.
