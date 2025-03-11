# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy your JavaScript file into the container
COPY assessment.js .

# Command to run the JavaScript file
CMD ["node", "assessment.js"]

# FOR OWN REFERENCE
# Create Image with: docker build -t [name]
# Run Container with: docker run --rm [name]
# Create Output file with: docker run --rm -v "$(pwd)/output:/app/output" [name]
