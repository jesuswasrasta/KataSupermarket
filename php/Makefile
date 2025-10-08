# Makefile for KataSupermarket PHP Development

.PHONY: help start stop restart shell composer install test phpcs phpstan check clean

# Default target
help:
	@echo "KataSupermarket PHP Development Commands"
	@echo ""
	@echo "Docker Management:"
	@echo "  make start       - Start Docker containers"
	@echo "  make stop        - Stop Docker containers"
	@echo "  make restart     - Restart Docker containers"
	@echo "  make shell       - Open shell in PHP container"
	@echo ""
	@echo "Development:"
	@echo "  make install     - Install Composer dependencies"
	@echo "  make test        - Run PHPUnit tests"
	@echo "  make phpcs       - Check code style (PSR-12)"
	@echo "  make phpstan     - Run static analysis"
	@echo "  make check       - Run all checks (phpcs + phpstan + test)"
	@echo ""
	@echo "Cleanup:"
	@echo "  make clean       - Remove vendor and cache files"

# Docker commands
start:
	docker compose up -d
	@echo "Docker container started"

stop:
	docker compose down
	@echo "Docker container stopped"

restart:
	docker compose restart
	@echo "Docker container restarted"

shell:
	@./docker-exec /bin/bash

# Composer commands
composer:
	@./docker-exec composer $(filter-out $@,$(MAKECMDGOALS))

install:
	@./docker-exec composer install
	@echo "Dependencies installed"

# Development commands
test:
	@./docker-exec composer test

phpcs:
	@./docker-exec composer phpcs

phpstan:
	@./docker-exec composer phpstan

check:
	@./docker-exec composer check

# Cleanup
clean:
	rm -rf vendor/
	rm -rf .phpunit.cache/
	@echo "Cleaned vendor and cache directories"

# Catch-all target for composer commands
%:
	@:
