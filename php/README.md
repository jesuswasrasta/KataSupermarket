# Kata Supermarket - PHP Edition

> **Kata Exercise**: See [kata README](../README.md) for the complete exercise explanation and user stories.

## Table of Contents

- [Quick Start](#quick-start)
- [Docker Development Environment](#docker-development-environment)
  - [Why Docker?](#why-docker)
  - [Prerequisites](#prerequisites)
  - [First-Time Setup](#first-time-setup)
  - [Available Commands](#available-commands)
- [PHPStorm Configuration](#phpstorm-configuration)
  - [Quick Setup](#quick-setup)
  - [Detailed Configuration Steps](#detailed-configuration-steps)
  - [Testing the Setup](#testing-the-setup)
- [Working Across Multiple Computers](#working-across-multiple-computers)
- [Daily Workflow](#daily-workflow)
- [Troubleshooting](#troubleshooting)
- [Project Structure](#project-structure)
- [Architecture](#architecture)

---

## Quick Start

### Option 1: DevContainer (Recommended - VSCode/Cursor)

**One-command setup for VSCode or Cursor:**
1. Open project in VSCode/Cursor
2. Click "Reopen in Container" when prompted
3. Start coding! (Everything auto-installs)

See [.devcontainer/README.md](.devcontainer/README.md) for complete DevContainer guide.

### Option 2: Docker Compose (PHPStorm/Manual)

```bash
# 1. Start Docker container
make start

# 2. Install dependencies
make install

# 3. Run tests
make test

# 4. Open shell in container
make shell
```

---

## Docker Development Environment

This project uses Docker to provide a consistent, portable PHP development environment across different machines.

**🎯 DevContainer Support:** This project includes full DevContainer support for VSCode and Cursor, providing zero-configuration setup. See [.devcontainer/README.md](.devcontainer/README.md) for details.

### Why Docker?

✅ **Consistency** - Same PHP 8.3 version and configuration everywhere  
✅ **Portability** - No need to install PHP locally on each machine  
✅ **Isolation** - Project dependencies don't interfere with system  
✅ **Easy Setup** - Clone and run - no manual PHP configuration  
✅ **IDE Integration** - PHPStorm seamlessly integrates with Docker  

### Prerequisites

1. **Docker Desktop** (required)
   - **macOS/Windows**: Install from [docker.com](https://www.docker.com/products/docker-desktop)
   - **Linux**: Install Docker Engine and Docker Compose

2. **PHPStorm** (recommended)
   - JetBrains PHPStorm 2023.1 or later

3. **Make** (optional but recommended)
   - macOS/Linux: Pre-installed
   - Windows: Use Git Bash or WSL2

### First-Time Setup

```bash
# Clone the repository
git clone <repository-url>
cd KataSupermarket/php

# Start Docker container (builds image first time)
make start

# Install Composer dependencies
make install

# Verify setup
make test
```

### Available Commands

```bash
# Docker Management
make start          # Start Docker containers
make stop           # Stop Docker containers
make restart        # Restart Docker containers
make shell          # Open bash shell in container

# Development
make install        # Install Composer dependencies
make test           # Run PHPUnit tests
make phpcs          # Check code style (PSR-12)
make phpstan        # Run static analysis
make check          # Run all quality checks (phpcs + phpstan + test)

# Cleanup
make clean          # Remove vendor and cache
make help           # Show all commands
```

#### Manual Docker Commands

If you prefer not to use Make:

```bash
docker compose up -d              # Start container
docker compose down               # Stop container
./docker-exec composer install    # Install dependencies
./docker-exec composer test       # Run tests
./docker-exec /bin/bash          # Open shell
```

---

## PHPStorm Configuration

### Quick Setup

**One-time setup on each computer (takes ~5 minutes):**

1. Install Docker Desktop
2. Clone repository and run `make start && make install`
3. Open project in PHPStorm
4. **Settings → PHP → CLI Interpreter** → Add Docker Compose interpreter
5. **Settings → PHP → Composer** → Select "Remote Interpreter"
6. **Settings → PHP → Test Frameworks** → Add PHPUnit by Remote Interpreter

### Detailed Configuration Steps

#### Step 1: Configure PHP CLI Interpreter

**Settings → PHP → CLI Interpreter**

1. Click **"..."** next to CLI Interpreter dropdown
2. Click **"+"** → **"From Docker, Vagrant, VM, WSL, Remote..."**
3. Select **"Docker Compose"**
4. Configuration:
   - **Server**: Docker (auto-detected)
   - **Configuration files**: `./docker-compose.yml`
   - **Service**: `php`
5. Click **OK** → **OK**

✅ Verify: You should see `docker-php` with PHP 8.3.x and Xdebug 3.3.2

#### Step 2: Configure Composer

**Settings → PHP → Composer**

1. **Execution**: Select **"Remote Interpreter"**
2. **CLI Interpreter**: Select `docker-php`
3. Click **OK**

✅ Verify: PHPStorm downloads Composer packages list

#### Step 3: Configure PHPUnit

**Settings → PHP → Test Frameworks**

1. Click **"+"** → **"PHPUnit by Remote Interpreter"**
2. Select interpreter: `docker-php`
3. Configuration:
   - **PHPUnit library**: Use Composer autoloader
   - **Path to script**: `/app/vendor/autoload.php`
   - **Default configuration file**: `./phpunit.xml.dist`
4. Click **OK**

✅ Verify: PHPStorm shows PHPUnit version 12.x

#### Step 4: Configure Path Mappings

**Settings → PHP → Servers**

1. Click **"+"** to add server
2. Configuration:
   - **Name**: `Docker`
   - **Host**: `localhost`
   - **Port**: `9003`
   - **Debugger**: `Xdebug`
   - **Use path mappings**: ✅ Checked
   - Map: Local `$PROJECT_DIR$` → Remote `/app`
3. Click **OK**

#### Step 5: Enable Xdebug Listening

In PHPStorm toolbar:
- Click the **phone icon** (Start Listening for PHP Debug Connections)
- It should turn green/active

### Testing the Setup

#### Test 1: Run PHPUnit from IDE
1. Open `tests/KataSupermarketTest.php`
2. Click **green ▶ icon** next to a test method
3. Test runs in Docker ✅

#### Test 2: Debug a Test
1. Set breakpoint (click left gutter)
2. Right-click test → **"Debug"**
3. Execution stops at breakpoint ✅

---

## Working Across Multiple Computers

### What Gets Synced (Git)

✅ **Committed to Git:**
- `Dockerfile` - PHP container configuration
- `docker-compose.yml` - Container orchestration
- `Makefile` - Helper commands
- `docker-exec` - Helper script
- `.dockerignore` - Build optimization
- `.idea-template/` - PHPStorm configuration templates

❌ **Not Committed (Gitignored):**
- `.idea/` - PHPStorm project files (machine-specific)
- `vendor/` - Composer dependencies (rebuilt via `make install`)
- `.phpunit.cache/` - Test cache

### Switching Computers

**On Computer A:**
```bash
git add .
git commit -m "Your changes"
git push
```

**On Computer B (First Time):**
```bash
git clone <repo>
cd KataSupermarket/php
make start && make install
# Open in PHPStorm → Configure interpreter (5 min, see above)
```

**On Computer B (Subsequent Times):**
```bash
git pull
make start
# PHPStorm remembers configuration ✅
```

---

## Daily Workflow

```bash
# Start your day
make start          # Start Docker container

# Development cycle
make test           # Run tests (or use PHPStorm ▶)
make phpcs          # Check code style
make phpstan        # Static analysis
make shell          # Open shell if needed

# Commit changes
git add .
git commit -m "Implement feature X"
git push

# End of day
make stop           # Stop container (optional)
```

---

## Troubleshooting

### Container Won't Start

```bash
# Check Docker is running
docker ps

# Rebuild container
docker compose down
docker compose build --no-cache
docker compose up -d
```

### PHPStorm Can't Find Interpreter

1. Settings → PHP → CLI Interpreter
2. Click refresh icon next to interpreter dropdown
3. If missing, add manually (see Configuration Steps above)

### PHPStorm Error: "Cannot run program 'composer'"

**Cause**: PHPStorm trying to use local Composer instead of Docker

**Fix**: Settings → PHP → Composer → Change Execution to "Remote Interpreter"

### Xdebug Not Working

```bash
# Verify Xdebug is loaded
./docker-exec php -v
# Should show "with Xdebug v3.3.2"

# Check PHPStorm settings
# Settings → PHP → Debug → Xdebug port = 9003
```

### Permission Issues (Linux)

```bash
# Fix file ownership
sudo chown -R $USER:$USER .

# Rebuild container
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Tests Fail with "Class not found"

```bash
# Reinstall dependencies
make clean
make install
```

---

## Project Structure

```
php/
├── src/                          # Main implementation code
│   └── (KataSupermarket\ namespace)
├── tests/                        # PHPUnit test files
│   └── (KataSupermarket\Tests\ namespace)
├── vendor/                       # Composer dependencies (not in Git)
├── .idea/                        # PHPStorm settings (not in Git)
├── .idea-template/               # PHPStorm config templates (in Git)
│   ├── php.xml
│   └── runConfigurations/
├── Dockerfile                    # PHP 8.3 + Xdebug config
├── docker-compose.yml            # Container orchestration
├── Makefile                      # Development commands
├── docker-exec                   # Helper script
├── composer.json                 # Dependencies: PHPUnit ^12, PHPStan, PHP_CodeSniffer
├── phpunit.xml.dist              # PHPUnit configuration
└── README.md                     # This file
```

### Key Files

- **`Dockerfile`** - Defines PHP 8.3 CLI + Xdebug 3.3.2 environment
- **`docker-compose.yml`** - Configures container with volume mounts and Xdebug
- **`Makefile`** - Provides convenient commands (`make test`, `make phpcs`, etc.)
- **`docker-exec`** - Smart wrapper script for running commands in container
- **`composer.json`** - Project dependencies and test scripts
- **`phpunit.xml.dist`** - PHPUnit configuration with strict settings

---

## Architecture

### Development Architecture

```
┌────────────────────────────────────────────────────────────┐
│                      Your Computer                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   PHPStorm                          │   │
│  │  - Code completion                                  │   │
│  │  - Run/Debug tests ────────────┐                    │   │
│  │  - Refactoring                 │                    │   │
│  │  - Navigation                  │                    │   │
│  └────────────────────────────────┼────────────────────┘   │
│                                   │                        │
│  ┌───────────────────────────────▼────────────────────┐   │
│  │            Docker Container                         │   │
│  │  ┌────────────────────────────────────────────────┐ │   │
│  │  │ PHP 8.3.26                                     │ │   │
│  │  │ - Xdebug 3.3.2 (port 9003)                     │ │   │
│  │  │ - Composer 2.x                                 │ │   │
│  │  │ - PHPUnit 12.4                                 │ │   │
│  │  │ - PHPStan, PHP_CodeSniffer                     │ │   │
│  │  └────────────────────────────────────────────────┘ │   │
│  │                                                     │   │
│  │  Project files mounted at /app                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                            │
│  No local PHP installation needed!                         │
└────────────────────────────────────────────────────────────┘
```

### Kata Implementation Architecture

The kata should be implemented incrementally following the user stories in [../README.md](../README.md):

### Technical Requirements

- Uses **PSR-4 autoloading** for both `src/` and `tests/`
- Tests follow **PHPUnit 12** standards with attributes (`#[TestDox]`)
- **Strict types** enabled (`declare(strict_types=1)`)
- Code style enforced via **PHP_CodeSniffer (PSR-12)**
- **Static analysis** with PHPStan
- Composer scripts configured for test automation

---

## Summary

✅ **What You Get:**
- Consistent PHP 8.3 development environment
- Docker-based setup (no local PHP needed)
- Full PHPStorm integration with debugging
- Portable across Mac, Windows, Linux
- Same setup on all computers (~5 min initial config)

✅ **How to Use:**
- Clone + `make start && make install` = Ready to code
- Run tests: `make test` or PHPStorm ▶ button
- Debug: Set breakpoint, click debug icon
- Switch computers: `git pull` + `make start`

✅ **Development Tools:**
- PHPUnit 12.4 for testing
- Xdebug 3.3.2 for debugging
- PHPStan for static analysis
- PHP_CodeSniffer for code style (PSR-12)
- All integrated in both CLI and PHPStorm

**Happy coding! Start implementing the kata user stories from [../README.md](../README.md)** 🚀
