# # Use a Node.js runtime to build the app
# FROM node:16 as build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the app files and build
# COPY . .
# RUN npm run build

# # Use Nginx to serve the built app
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose the port
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build the React app
FROM node:16 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose the port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]