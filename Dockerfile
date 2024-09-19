# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

COPY prisma ./prisma/

# Expose port 3000 (Next.js default port)
EXPOSE 3000

# Generate Prisma client
RUN npx prisma generate

# Start the application
CMD ["npm", "run", "dev"]
