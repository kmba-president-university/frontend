# Step 1: Build the React application
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React application
FROM nginx:alpine

# Install nano
RUN apk update && apk add nano

# Copy the build output to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
