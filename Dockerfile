# Use the official Node.js image as the base image
FROM node:12-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install

# Build the React application
RUN npm run build

# Expose port 7000
EXPOSE 7000

# Define the entry point for the container
CMD ["npm", "start"]