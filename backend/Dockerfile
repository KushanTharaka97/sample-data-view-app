# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# If nodemon is needed globally
RUN npm install -g nodemon

# Copy the rest of the server files
COPY . .

# Expose the port the server listens on
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]