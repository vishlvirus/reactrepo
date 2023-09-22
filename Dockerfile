# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the entire application code to the working directory
COPY . .

# Build the React application (you can customize this depending on your setup)
RUN npm run build

# Expose a port if your React app listens on a specific port (e.g., 3000)
# EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
