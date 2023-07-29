# Use the official Node.js 14 LTS image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


# Expose the port the application will listen on
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "start" ]
