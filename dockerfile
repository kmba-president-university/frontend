# Use a Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy everything from your local directory to the container
COPY . .

# Install dependencies (optional since node_modules is copied)
RUN npm install

# Expose port 3000
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
