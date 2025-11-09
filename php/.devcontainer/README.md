# DevContainer Setup Guide

> **💡 Choosing an IDE?** See [../IDE-SETUP.md](../IDE-SETUP.md) for a comprehensive comparison of VSCode, Cursor, and PHPStorm with setup instructions for each.

## Overview

This project includes a complete **DevContainer** configuration that provides a fully-configured, consistent development environment across all operating systems (Windows, macOS, Linux) and all major IDEs (VSCode, Cursor, PHPStorm).

## IDE-Specific Configurations

This project provides optimized configurations for each IDE:

- **VSCode**: `.devcontainer/devcontainer.json` (default)
- **Cursor**: `.devcontainer/devcontainer-cursor.json` (with AI enhancements)
- **PHPStorm**: `.idea-phpstorm/` (template configurations)

## Quick Start

### One Command Setup

```bash
# Clone the repository
git clone <repository-url>
cd KataSupermarket/php

# Open in your IDE
# VSCode/Cursor: Command Palette → "Dev Containers: Reopen in Container"
# PHPStorm: Opens automatically with Docker plugin
```

That's it! The container will automatically:
1. Build the Docker environment
2. Install all PHP dependencies
3. Configure Xdebug for debugging
4. Set up all development tools
5. Install recommended extensions (VSCode/Cursor)

---

## Supported IDEs

### ✅ Visual Studio Code (VSCode)

**Prerequisites:**
- Docker Desktop installed
- VSCode with "Dev Containers" extension

**Steps:**
1. Open the project folder in VSCode
2. VSCode will detect the `.devcontainer/` folder
3. Click "Reopen in Container" when prompted (or use Command Palette: `Dev Containers: Reopen in Container`)
4. Wait for the container to build (first time only, ~2-3 minutes)
5. Extensions will install automatically
6. Start coding!

**Testing the Setup:**
- Open Terminal in VSCode (inside container)
- Run: `composer test`
- Set a breakpoint in a test file
- Press `F5` to start debugging

---

### ✅ Cursor

**Prerequisites:**
- Docker Desktop installed
- Cursor IDE installed

**Steps:**
Cursor uses the same DevContainer configuration as VSCode:
1. Open the project folder in Cursor
2. Cursor will detect the `.devcontainer/` folder
3. Click "Reopen in Container" when prompted
4. Wait for the container to build (first time only)
5. Extensions will install automatically
6. Start coding!

**Note:** Cursor is built on VSCode, so all VSCode DevContainer features work identically.

---

### ✅ PHPStorm / IntelliJ IDEA

PHPStorm doesn't use DevContainers directly, but the existing Docker setup works perfectly.

**Prerequisites:**
- Docker Desktop installed
- PHPStorm 2023.1+ or IntelliJ IDEA Ultimate

**Quick Setup (5 minutes):**

See the main [README.md](../README.md) PHPStorm Configuration section for complete instructions.

**Summary:**
1. Start container: `make start && make install`
2. **Settings → PHP → CLI Interpreter** → Add "From Docker Compose"
3. **Settings → PHP → Composer** → Select "Remote Interpreter"
4. **Settings → PHP → Test Frameworks** → Add PHPUnit by Remote Interpreter
5. Done!

**Why not DevContainers for PHPStorm?**
PHPStorm has its own robust Docker integration that works better with its debugging and testing features. The provided `docker-compose.yml` setup is optimized for PHPStorm.

---

## What's Included

### Pre-Installed Tools

- **PHP 8.3** with all extensions
- **Xdebug 3.3.2** (configured for debugging and coverage)
- **Composer 2.x**
- **PHPUnit 12.4**
- **PHPStan** (static analysis)
- **PHP_CodeSniffer** (PSR-12 code style)
- **Git** with Oh-My-Zsh
- **Zsh** shell with syntax highlighting

### VSCode/Cursor Extensions (Auto-Installed)

**PHP Development:**
- Intelephense (PHP IntelliSense)
- PHP Debug (Xdebug integration)
- PHP Intellisense
- PHP CodeSniffer
- PHPStan integration
- PHPUnit Test Explorer

**Development Tools:**
- GitLens (Git supercharged)
- Git Graph
- Docker Explorer
- EditorConfig support
- Code Spell Checker
- TODO Highlight
- Better Comments

**Documentation:**
- Markdown All in One
- Markdown Lint

### Pre-Configured Features

#### Debugging (Xdebug)
- ✅ Port 9003 configured and forwarded
- ✅ Path mappings set up (`/app` ↔ workspace)
- ✅ Launch configurations ready
- ✅ Works with PHPUnit tests

#### Code Quality
- ✅ PSR-12 code style enforcement
- ✅ PHPStan static analysis (max level)
- ✅ EditorConfig for consistent formatting
- ✅ Git hooks ready

#### Testing
- ✅ PHPUnit with strict settings
- ✅ Code coverage with Xdebug
- ✅ Test tasks and shortcuts
- ✅ Debug individual tests

---

## Common Tasks

### Running Tests

**VSCode/Cursor:**
```bash
# Terminal
composer test

# Or use Task Runner (Ctrl+Shift+P → "Tasks: Run Task" → "Run Tests")
# Or press Ctrl+Shift+B (default build task)

# Debug tests
# Set breakpoint → F5 → Select "PHPUnit All Tests" or "PHPUnit Current File"
```

**PHPStorm:**
```bash
# Terminal
make test

# Or click ▶ icon next to test class/method
# Or right-click → Debug (with breakpoints)
```

### Code Quality Checks

```bash
# Check code style (PSR-12)
composer phpcs

# Fix code style automatically
vendor/bin/phpcbf src/ tests/

# Run static analysis
composer phpstan

# Run all checks (style + analysis + tests)
composer check
```

### Installing Dependencies

```bash
composer install

# Or add new package
composer require vendor/package

# Dev dependencies
composer require --dev vendor/package
```

---

## Cross-Platform Compatibility

### Windows

**Requirements:**
- Windows 10/11 with WSL2
- Docker Desktop with WSL2 backend
- VSCode/Cursor/PHPStorm

**Performance Tips:**
- Clone repository inside WSL2 (e.g., `~/projects/`) for best performance
- Avoid Windows filesystem (`/mnt/c/`) for large projects
- Use Windows Terminal or VSCode terminal

**Known Issues:**
- Line endings: Git should auto-convert to LF (configured in `.editorconfig`)
- Permissions: Works automatically with WSL2

### macOS

**Requirements:**
- macOS 10.15+ (Catalina or newer)
- Docker Desktop for Mac
- VSCode/Cursor/PHPStorm

**Performance:**
- File watching works automatically
- Docker Desktop uses virtualization framework (fast)

**Known Issues:**
- `host.docker.internal` may require manual setup on older macOS versions
- Solution: Already configured in `docker-compose.yml`

### Linux

**Requirements:**
- Docker Engine and Docker Compose
- VSCode/Cursor/PHPStorm

**Performance:**
- Native Docker (fastest)
- No virtualization overhead

**Permissions:**
The DevContainer creates a `vscode` user (UID 1000) to match most Linux user IDs.

**If you have permission issues:**
```bash
# Fix ownership
sudo chown -R $USER:$USER .

# Rebuild container
docker compose down
docker compose build --no-cache
docker compose up -d
```

---

## Troubleshooting

### Container Won't Start

```bash
# Check Docker is running
docker ps

# View logs
docker compose logs

# Rebuild container
docker compose down
docker compose build --no-cache
docker compose up -d
```

### VSCode/Cursor: Extensions Not Installing

1. Command Palette → `Dev Containers: Rebuild Container`
2. Wait for rebuild
3. Extensions should install automatically

### VSCode/Cursor: Can't Debug

**Check:**
1. Xdebug port 9003 is forwarded (Ports tab)
2. Launch configuration is selected (Debug sidebar)
3. Breakpoint is set on executable line (not on comment/blank line)
4. Run debug configuration (F5)

**Verify Xdebug:**
```bash
php -v
# Should show: "with Xdebug v3.3.2"
```

### PHPStorm: Composer Not Found

1. Settings → PHP → Composer
2. Change to "Remote Interpreter"
3. Select Docker Compose interpreter
4. Apply

### Tests Fail with "Class not found"

```bash
# Reinstall dependencies
composer install

# Or from host (VSCode/Cursor)
# Container terminal: composer install

# Or from host (PHPStorm)
make install
```

### Permission Denied (Linux)

```bash
# Fix file ownership
sudo chown -R $USER:$USER .

# Container creates files as vscode (UID 1000)
# Your user should match or be in docker group
sudo usermod -aG docker $USER
# Log out and back in
```

---

## Customization

### Adding VSCode Extensions

Edit `.devcontainer/devcontainer.json`:

```json
"customizations": {
  "vscode": {
    "extensions": [
      "existing.extensions",
      "your-new.extension"
    ]
  }
}
```

Then: `Dev Containers: Rebuild Container`

### Changing PHP Version

Edit `Dockerfile`:

```dockerfile
FROM php:8.4-cli-alpine  # Change version
```

Rebuild:
```bash
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Adding PHP Extensions

Edit `Dockerfile`:

```dockerfile
# Add after existing extensions
RUN docker-php-ext-install pdo_mysql
```

### Changing Shell

The DevContainer uses Zsh with Oh-My-Zsh by default.

**To use Bash:**
Edit `.devcontainer/devcontainer.json`:

```json
"features": {
  "ghcr.io/devcontainers/features/common-utils:2": {
    "installZsh": false,
    "configureZshAsDefaultShell": false
  }
}
```

---

## Development Workflow

### Daily Workflow (VSCode/Cursor)

1. Open project
2. Click "Reopen in Container" (if not already in container)
3. Edit code
4. Run tests: `Ctrl+Shift+B` or `composer test`
5. Debug: Set breakpoint → `F5`
6. Commit changes
7. Close VSCode (container stops automatically)

### Daily Workflow (PHPStorm)

1. `make start` (if container not running)
2. Open project in PHPStorm
3. Edit code
4. Run tests: Click ▶ icon or `make test`
5. Debug: Set breakpoint → Debug icon
6. Commit changes
7. `make stop` (optional, to stop container)

### Switching Between Computers

**All files are in Git:**
```bash
# Computer A
git add .
git commit -m "Implement feature X"
git push

# Computer B
git pull
# VSCode/Cursor: Reopen in Container (auto-setup)
# PHPStorm: make start (already configured)
```

**No manual setup needed on the second computer!** 🎉

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Your Computer                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  VSCode / Cursor / PHPStorm                       │  │
│  │  - Code completion from container                 │  │
│  │  - Debugging via Xdebug (port 9003)               │  │
│  │  - Terminal inside container                      │  │
│  └───────────────────────┬───────────────────────────┘  │
│                          │                              │
│  ┌───────────────────────▼───────────────────────────┐  │
│  │         Docker Container (DevContainer)           │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │ PHP 8.3 + Xdebug 3.3.2                      │  │  │
│  │  │ Composer + PHPUnit + PHPStan + PHPCS        │  │  │
│  │  │ Git + Zsh + Oh-My-Zsh                       │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │                                                   │  │
│  │  Project files: /app (mounted from host)         │  │
│  │  User: vscode (UID 1000)                         │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  No local PHP installation needed! ✅                   │
└─────────────────────────────────────────────────────────┘
```

---

## Benefits

✅ **Consistency**: Same environment on all computers and all OSes
✅ **Portability**: Clone → Open → Code (no manual setup)
✅ **Isolation**: Project dependencies don't pollute your system
✅ **Onboarding**: New developers productive in 5 minutes
✅ **Cross-Platform**: Works on Windows, macOS, Linux identically
✅ **Multi-IDE**: VSCode, Cursor, PHPStorm all supported
✅ **Pre-Configured**: Debugging, testing, linting ready out-of-the-box

---

## Resources

- [DevContainers Specification](https://containers.dev/)
- [VSCode DevContainers Docs](https://code.visualstudio.com/docs/devcontainers/containers)
- [PHPStorm Docker Integration](https://www.jetbrains.com/help/phpstorm/docker.html)
- [Main Project README](../README.md) - Full kata description
- [CLAUDE.md](../CLAUDE.md) - Development guidelines

---

## Summary

This DevContainer setup provides the **ultimate portable development environment**:

1. **Clone** the repository
2. **Open** in your IDE (VSCode/Cursor/PHPStorm)
3. **Start coding** - everything is ready!

No PHP installation, no Composer setup, no Xdebug configuration, no extension hunting - **everything just works** on Windows, macOS, and Linux! 🚀
