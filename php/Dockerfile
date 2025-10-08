# Use official PHP 8.3 CLI image with Alpine for smaller size
FROM php:8.3-cli-alpine

# Install system dependencies
RUN apk add --no-cache \
    git \
    unzip \
    bash \
    linux-headers

# Install Xdebug for debugging support
RUN apk add --no-cache $PHPIZE_DEPS \
    && pecl install xdebug-3.3.2 \
    && docker-php-ext-enable xdebug

# Configure Xdebug for PHPStorm
RUN echo "xdebug.mode=debug,coverage" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.client_host=host.docker.internal" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.client_port=9003" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.start_with_request=trigger" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.idekey=PHPSTORM" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.log_level=0" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app

# Default command
CMD ["php", "-v"]