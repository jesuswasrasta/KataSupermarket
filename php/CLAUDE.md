# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the PHP implementation of the Kata Supermarket coding exercise, focused on building a checkout system with pricing rules and offers. The kata progresses from simple individual pricing to complex multi-item offers, payments, and receipt generation.

**Full kata description and user stories:** See `../README.md` for the complete exercise with all acceptance criteria and implementation notes.

## Docker Development Setup

This project uses Docker to provide a consistent, portable PHP development environment across different machines.

### DevContainer Support (VSCode/Cursor)

This project includes full **DevContainer** configuration for zero-setup development in VSCode and Cursor:

1. Open project in VSCode/Cursor
2. Click "Reopen in Container"
3. Start coding (all tools auto-install)

**See:** [DEVCONTAINER.md](DEVCONTAINER.md) for complete DevContainer documentation.

### Traditional Docker Setup (PHPStorm/Manual)

```bash
# Start Docker container
make start

# Install dependencies
make install

# Run tests
make test

# Open shell in container
make shell
```

### PHPStorm Configuration

**Quick Setup:**
1. Install Docker Desktop
2. Clone repository and run `make start && make install`
3. Open project in PHPStorm
4. Settings → PHP → CLI Interpreter → Add Docker Compose interpreter
5. Settings → PHP → Composer → Select "Remote Interpreter"
6. Settings → PHP → Test Frameworks → Add PHPUnit by Remote Interpreter

**Detailed Instructions:** See [PHPSTORM-SETUP.md](PHPSTORM-SETUP.md) for complete step-by-step guide including:
- Configuring PHP CLI interpreter from Docker
- Setting up Composer to run in container
- Configuring PHPUnit with path mappings
- Xdebug debugging setup
- Troubleshooting common issues

### Available Make Commands
```bash
make help      # Show all available commands
make start     # Start Docker containers
make stop      # Stop Docker containers
make restart   # Restart Docker containers
make shell     # Open bash shell in container
make install   # Install Composer dependencies
make test      # Run all tests
make phpcs     # Check code standards
make phpstan   # Run static analysis
make check     # Run all quality checks
make clean     # Remove vendor and cache
```

### Manual Docker Commands
If you prefer not to use Make:
```bash
docker compose up -d              # Start container
docker compose down               # Stop container
./docker-exec composer install    # Install dependencies
./docker-exec composer test       # Run tests
./docker-exec /bin/bash          # Open shell
```

## Development Commands

### Dependencies
```bash
composer install  # Install dependencies (PHPUnit ^12, PHP_CodeSniffer, PHPStan)
```

### Testing
```bash
composer test                                          # Run all tests (via composer script)
vendor/bin/phpunit                                     # Run all tests directly
vendor/bin/phpunit --testdox                          # Run tests with descriptive output
vendor/bin/phpunit tests/KataSupermarketTest.php      # Run specific test file
vendor/bin/phpunit --filter test_Everything_is_OK     # Run specific test method
```

### Code Quality
```bash
composer phpcs                       # Check coding standards (PSR-12)
vendor/bin/phpcbf src/ tests/       # Auto-fix coding standards
composer phpstan                     # Run static analysis with PHPStan
composer check                       # Run all checks (phpcs, phpstan, test)
```

## Architecture

### Project Structure
- `src/` - Main implementation code (namespace: `KataSupermarket\`) - currently empty, waiting for implementation
- `tests/` - PHPUnit test files (namespace: `KataSupermarket\Tests\`) - contains basic setup test
- `composer.json` - Dependencies: PHPUnit ^12, PHP_CodeSniffer, PHPStan, Psalm
- `phpunit.xml.dist` - PHPUnit configuration with strict settings
- `../README.md` - Full kata exercise description with all user stories
- `Makefile` - Docker and development command shortcuts
- `Dockerfile` & `docker-compose.yml` - Docker configuration for PHP 8.3 + Xdebug

### Key Implementation Notes
- Uses PSR-4 autoloading for both `src/` and `tests/` directories
- Tests follow PHPUnit 12 standards with attributes (`#[TestDox]`)
- Strict types enabled (`declare(strict_types=1)`)
- Code style enforced via PHP_CodeSniffer (PSR-12)
- Static analysis with PHPStan
- Composer scripts configured for test automation

### Kata Implementation Strategy
The kata should be implemented incrementally following the user stories in `../README.md`:

**Phase 1: Basic Pricing (Stories 1-2)**
1. Basic apple pricing (50¢ each, 3 for 130¢)
2. Multiple fruit types (pear, pineapple, banana)

**Phase 2: Advanced Offers (Stories 3-5)**
3. Quantity-based offers (3 apples for 130¢, 2 pears for 45¢)
4. "Take 3 pay 2" offers (oranges)
5. Combo offers (fruit salad bundle: 4 apples + 2 pears + 2 bananas + 1 pineapple for 500¢)

**Phase 3: External Systems**
6. Display integration (show total amount)
7. Payment handling with change calculation
8. Receipt printing with offer details
9. Loyalty card integration (10% discount on fidelity products)
10. Credit card payment service integration

**Current Status:** Project has basic scaffolding only. Implementation should start with User Story #1 (basic apple pricing).

### Design Considerations
- Pricing rules should be configurable and pluggable
- External services (display, printer, payment service) should be mockable interfaces
- The checkout system must handle items in any order
- Support for refunds and item removal
- Receipt generation with offer calculations shown