# IDE Setup Guide - Choose Your Development Environment

This project supports **three IDEs** with optimized configurations for each. Choose the one that fits your workflow.

## Quick IDE Selection

| IDE | Best For | Setup Time | Config Type | Auto-Setup |
|-----|----------|------------|-------------|------------|
| **VSCode** | General development, lightweight, free | 2 min | DevContainer | ✅ Automatic |
| **Cursor** | AI-assisted development, Copilot integration | 2 min | DevContainer | ✅ Automatic |
| **PHPStorm** | Advanced PHP features, professional tools | 5 min | Docker Compose | ⚙️ Manual |

---

## Option 1: Visual Studio Code

### Why VSCode?
- ✅ Free and open-source
- ✅ Lightweight and fast
- ✅ Huge extension marketplace
- ✅ DevContainer auto-setup
- ✅ Cross-platform (Windows, macOS, Linux)
- ✅ Good for polyglot development

### Setup Steps

1. **Install Prerequisites:**
   - [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - [Visual Studio Code](https://code.visualstudio.com/)
   - VSCode extension: "Dev Containers" (ms-vscode-remote.remote-containers)

2. **Open Project:**
   ```bash
   code KataSupermarket/php
   ```

3. **Reopen in Container:**
   - Click "Reopen in Container" when prompted
   - Or: Command Palette (Ctrl+Shift+P) → "Dev Containers: Reopen in Container"

4. **Wait for Setup** (2-3 minutes first time):
   - Container builds
   - Extensions install automatically
   - Dependencies install via `composer install`

5. **Start Coding!**
   - Press `F5` to debug
   - Press `Ctrl+Shift+B` to run tests
   - Terminal is inside container

### Configuration File
Uses: `.devcontainer/devcontainer.json`

### Extensions Installed Automatically
- PHP Intelephense (IntelliSense)
- PHP Debug (Xdebug integration)
- PHP CodeSniffer
- PHPStan
- PHPUnit Test Explorer
- GitLens
- EditorConfig
- Docker Explorer

---

## Option 2: Cursor

### Why Cursor?
- ✅ Built on VSCode (same features)
- ✅ Native AI pair programming
- ✅ GitHub Copilot integration
- ✅ AI chat sidebar
- ✅ Multi-line AI suggestions
- ✅ DevContainer auto-setup
- ✅ Optimized for AI-assisted coding

### Setup Steps

1. **Install Prerequisites:**
   - [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - [Cursor](https://cursor.sh/)

2. **Open Project:**
   ```bash
   cursor KataSupermarket/php
   ```

3. **Reopen in Container:**
   - Cursor detects `.devcontainer/` configuration
   - Click "Reopen in Container"
   - Or: Command Palette (Ctrl+Shift+P) → "Dev Containers: Reopen in Container"

4. **Wait for Setup** (2-3 minutes first time):
   - Container builds
   - Extensions install automatically (including Copilot)
   - Dependencies install via `composer install`

5. **Start Coding with AI!**
   - Press `F5` to debug
   - Press `Ctrl+Shift+B` to run tests
   - Use Cursor AI chat for assistance
   - Get inline code suggestions

### Cursor-Specific Configuration

Cursor uses the same base `devcontainer.json` as VSCode, with additional AI enhancements in `.devcontainer/settings.cursor.json`.

**Cursor automatically inherits:**
- ✅ All base DevContainer settings
- ✅ VSCode tasks and launch configurations
- ✅ Cursor-specific AI enhancements (Copilot settings)

**Cursor-Specific Features** (from `settings.cursor.json`):
- GitHub Copilot + Copilot Chat extensions pre-installed
- GPT-4 engine preference
- 3 inline AI suggestions
- Quick suggestions in comments and strings
- AI chat sidebar optimized layout

**Note:** Cursor works perfectly with the base configuration. The `settings.cursor.json` file provides optional AI enhancements that you can manually apply if desired.

### Extensions Installed Automatically
Same as VSCode, plus:
- GitHub Copilot
- GitHub Copilot Chat

---

## Option 3: PHPStorm

### Why PHPStorm?
- ✅ Best-in-class PHP support
- ✅ Advanced refactoring tools
- ✅ Database tools included
- ✅ Built-in HTTP client
- ✅ Professional debugging
- ✅ Excellent code completion
- ✅ Integrated testing and profiling
- ⚠️ Commercial (30-day free trial)

### Setup Steps

1. **Install Prerequisites:**
   - [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - [PHPStorm](https://www.jetbrains.com/phpstorm/)

2. **Start Container:**
   ```bash
   cd KataSupermarket/php
   make start && make install
   ```

3. **Open Project in PHPStorm:**
   - File → Open → Select `KataSupermarket/php`

4. **Configure Docker Interpreter** (5 minutes, one-time):

   **Step 1: PHP CLI Interpreter**
   - Settings → PHP → CLI Interpreter
   - Click "+" → "From Docker Compose"
   - Configuration files: `./docker-compose.yml`
   - Service: `php`
   - Click OK

   **Step 2: Composer**
   - Settings → PHP → Composer
   - Execution: "Remote Interpreter"
   - CLI Interpreter: Select `docker-php`
   - Click OK

   **Step 3: PHPUnit**
   - Settings → PHP → Test Frameworks
   - Click "+" → "PHPUnit by Remote Interpreter"
   - Interpreter: `docker-php`
   - PHPUnit library: Use Composer autoloader
   - Path to script: `/app/vendor/autoload.php`
   - Default configuration: `./phpunit.xml.dist`
   - Click OK

5. **Optional: Use Pre-Made Configurations:**
   ```bash
   # Copy template configurations
   mkdir -p .idea
   cp .idea-phpstorm/php.xml .idea/
   mkdir -p .idea/runConfigurations
   cp .idea-phpstorm/runConfigurations/*.xml .idea/runConfigurations/
   ```

   Then restart PHPStorm.

6. **Verify Setup:**
   - Run configuration dropdown shows: "All Tests", "PHPStan Analyze", "Code Style Check"
   - Settings → PHP shows: PHP 8.3 with Xdebug 3.3.2

### Configuration Files
- `.idea-phpstorm/` - Template configurations
- `.idea/` - Your personal settings (gitignored)

### Pre-Configured Run Configurations
- **All Tests** - Run entire PHPUnit suite
- **PHPStan Analyze** - Run static analysis
- **Code Style Check** - Check PSR-12 compliance

---

## Switching Between IDEs

You can use different IDEs on different computers, or switch IDEs on the same computer!

### VSCode ↔ Cursor

Both use DevContainers, so switching is seamless:
1. Close current IDE
2. Open project in other IDE
3. Click "Reopen in Container"
4. Done!

**Note:** Both VSCode and Cursor share the same base `devcontainer.json`. Cursor-specific AI settings are in `.devcontainer/settings.cursor.json` for reference.

### VSCode/Cursor ↔ PHPStorm

**From VSCode/Cursor to PHPStorm:**
1. Container is already running from DevContainer
2. Open project in PHPStorm
3. Configure interpreter (one-time, 5 min)
4. Done!

**From PHPStorm to VSCode/Cursor:**
1. `make start` to ensure container is running
2. Open project in VSCode/Cursor
3. Click "Reopen in Container"
4. Done!

### Using Multiple IDEs Simultaneously

Yes! You can have the project open in multiple IDEs at once:
- All use the same Docker container
- All share the same codebase
- File changes sync automatically
- Useful for comparing features

---

## Configuration Comparison

### DevContainer Files

| File | Used By | Purpose |
|------|---------|---------|
| `.devcontainer/devcontainer.json` | All IDEs | Base config (shared by VSCode/Cursor) |
| `.devcontainer/settings.vscode.json` | VSCode/Cursor | Launch configs & tasks |
| `.devcontainer/settings.cursor.json` | Cursor | AI enhancements (optional) |
| `.devcontainer/IDE-SETTINGS.md` | All | IDE settings documentation |
| `.devcontainer/README.md` | All | DevContainer documentation |

### VSCode Files

| File | Used By | Purpose |
|------|---------|---------|
| `.vscode/extensions.json` | VSCode/Cursor | Recommended extensions |
| `.vscode/settings.json` | VSCode | Personal VSCode settings (optional) |
| `.vscode/launch.json` | VSCode | Personal launch configs (optional) |

### PHPStorm Files

| File | Used By | Purpose |
|------|---------|---------|
| `.idea-phpstorm/` | PHPStorm | Template configurations |
| `.idea/` | PHPStorm | Personal settings (gitignored) |

### Shared Files

| File | Used By | Purpose |
|------|---------|---------|
| `.editorconfig` | All | Code formatting rules |
| `Dockerfile` | All | PHP 8.3 + Xdebug environment |
| `docker-compose.yml` | All | Container orchestration |
| `composer.json` | All | PHP dependencies |
| `phpunit.xml.dist` | All | PHPUnit configuration |

---

## Feature Comparison

| Feature | VSCode | Cursor | PHPStorm |
|---------|--------|--------|----------|
| **Price** | Free | Free/Paid | Paid (trial) |
| **Setup Time** | 2 min | 2 min | 5 min |
| **Auto-Setup** | ✅ Yes | ✅ Yes | ⚙️ Manual |
| **PHP IntelliSense** | ✅ Good | ✅ Good | ✅ Excellent |
| **Debugging** | ✅ Good | ✅ Good | ✅ Excellent |
| **Refactoring** | ⚠️ Basic | ⚠️ Basic | ✅ Advanced |
| **AI Assistance** | ➕ Extension | ✅ Built-in | ➕ Extension |
| **Database Tools** | ➕ Extension | ➕ Extension | ✅ Built-in |
| **HTTP Client** | ➕ Extension | ➕ Extension | ✅ Built-in |
| **Terminal** | ✅ Integrated | ✅ Integrated | ✅ Integrated |
| **Git Integration** | ✅ Good | ✅ Good | ✅ Excellent |
| **Memory Usage** | ✅ Low | ✅ Low | ⚠️ High |
| **Speed** | ✅ Fast | ✅ Fast | ⚠️ Slower |
| **Learning Curve** | ✅ Easy | ✅ Easy | ⚠️ Moderate |

---

## Recommendations

### Choose VSCode if you:
- Want free, open-source software
- Prefer lightweight editors
- Work with multiple languages
- Are new to PHP development
- Want quick setup with extensions

### Choose Cursor if you:
- Want AI pair programming
- Use GitHub Copilot heavily
- Like VSCode but want better AI
- Want inline AI suggestions
- Enjoy AI chat for coding help

### Choose PHPStorm if you:
- Are a professional PHP developer
- Need advanced refactoring
- Want the best PHP tooling
- Use databases extensively
- Don't mind commercial software
- Need built-in profiling/debugging

---

## Getting Help

### VSCode/Cursor
- DevContainer docs: [.devcontainer/README.md](.devcontainer/README.md)
- Quick start: [DEVCONTAINER-QUICKSTART.md](DEVCONTAINER-QUICKSTART.md)
- VSCode docs: https://code.visualstudio.com/docs/devcontainers/containers

### PHPStorm
- PHPStorm setup: [.idea-phpstorm/README.md](.idea-phpstorm/README.md)
- Main docs: [README.md](README.md) → PHPStorm Configuration
- JetBrains docs: https://www.jetbrains.com/help/phpstorm/docker.html

### All IDEs
- Project README: [README.md](README.md)
- Development guidelines: [CLAUDE.md](CLAUDE.md)
- Kata exercise: [../README.md](../README.md)

---

## Summary

✅ **VSCode** - Fast, free, extensible, auto-setup
✅ **Cursor** - VSCode + AI superpowers, auto-setup
✅ **PHPStorm** - Professional PHP IDE, manual setup

All three IDEs work with the **same Docker environment**, so you can:
- Switch between IDEs anytime
- Use different IDEs on different computers
- Try multiple IDEs and pick your favorite

**Ready to start?** Pick your IDE above and follow the setup steps! 🚀
