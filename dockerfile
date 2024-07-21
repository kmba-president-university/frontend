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
FROM node:18

# Set working directory
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app/build /app/build

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies needed to run the app
RUN npm install --only=production

# Expose port 3000
EXPOSE 3000

# Set environment variable to use the React production build
ENV NODE_ENV=production

# Start the React application
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
