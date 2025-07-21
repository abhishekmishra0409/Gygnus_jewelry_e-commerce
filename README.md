# Gygnus Jewelry - E-commerce Platform


A modern e-commerce platform for luxury jewelry, featuring AI-powered recommendations and elegant product displays.

## Features

✨ **Beautiful Product Displays**
- Responsive product cards with hover effects
- High-quality image zooming
- Featured items highlighting
- Category filtering

💎 **Product Pages**
- Detailed product information
- Image gallery
- Related products suggestions
- Add to cart functionality


🛒 **Shopping Experience**
- Intuitive navigation
- Wishlist functionality
- Quick add to cart
- Secure checkout process

## Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Swiper.js (for product carousels)
- Heroicons

**Backend**
- Node.js
- Express
- MongoDB
- Mongoose

**AI Services**
- OpenAI API (for recommendations)
- (Optional) Hugging Face for alternative AI

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gygnus-jewelry.git
cd gygnus-jewelry
```

2. Install dependencies for both frontend and backend:
```bash
cd client && npm install
cd ../server && npm install
```

3. Set up environment variables:
   Create `.env` files in both `client` and `server` directories with your configuration.

4. Start the development servers:
```bash
# In one terminal (backend)
cd Backend && npm start

# In another terminal (frontend)
cd Frontend && npm start
```

## Configuration

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## Project Structure

```
gygnus-jewelry/
├── Frontend/                  # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── App.js           # Main application
│   │   └── index.js         # Entry point
│   └── package.json
│
├── Backend/                  # Backend Node.js application
│   ├── controllers/         # Route controllers
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── server.js            # Server entry
│   └── package.json
│
└── README.md
```

## Available Scripts

In the project directory, you can run:

### Frontend
```bash
npm start    # Runs the app in development mode
npm build    # Builds the app for production
npm test     # Launches the test runner
```

### Backend
```bash
npm start    # Starts the Node server
npm dev      # Starts with nodemon for development
```
