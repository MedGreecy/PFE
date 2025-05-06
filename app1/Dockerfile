# Use the official Nginx image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy Angular build files
COPY ./dist/angular-14-crud-example /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

# Expose the correct port 
EXPOSE 88

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]