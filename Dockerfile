# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the index.js file to the container
COPY index.js .

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the application
CMD ["npm", "index.js"]
