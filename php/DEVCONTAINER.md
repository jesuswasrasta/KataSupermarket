# DevContainer Setup Guide

Complete guide for setting up and customizing the DevContainer environment for the KataSupermarket PHP project.

This guide covers setup for **VSCode, Cursor, and PHPStorm** with complete IDE configuration details.

---

## Table of Contents

- [Quick Start](#quick-start)
- [IDE Comparison](#ide-comparison)
- [What's Included](#whats-included)
- [Verify Installation](#verify-installation)
- [Common Tasks](#common-tasks)
- [IDE Configuration Details](#ide-configuration-details)
- [Personalization](#personalization)
- [Troubleshooting](#troubleshooting)
- [Cross-Platform Support](#cross-platform-support)
- [Architecture](#architecture)
- [Resources](#resources)

---

## Quick Start

### VSCode Users

1. **Install Prerequisites:**
   - [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - [Visual Studio Code](https://code.visualstudio.com/)
   - "Dev Containers" extension in VSCode

2. **Open Project:**
   ```bash
   git clone <repository-url>
   code KataSupermarket/php
   ```

3. **Reopen in Container:**
   - VSCode will show: "Folder contains a Dev Container configuration file"
   - Click **"Reopen in Container"**
   - Wait 2-3 minutes for first-time setup
   - Start coding! ✅

### Cursor Users

1. **Install Prerequisites:**
   - [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - [Cursor](https://cursor.sh/)

2. **Open Project:**
   ```bash
   git clone <repository-url>
   cursor KataSupermarket/php
   ```

3. **Reopen in Container:**
   - Cursor will detect the DevContainer configuration
   - Click **"Reopen in Container"**
   - Wait 2-3 minutes for first-time setup
   - Start coding! ✅

### PHPStorm Users

PHPStorm doesn't use DevContainers but has excellent Docker support:

1. **Install Prerequisites:**
   - [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - [PHPStorm](https://www.jetbrains.com/phpstorm/)

2. **Start Container:**
   ```bash
   git clone <repository-url>
   cd KataSupermarket/php
   make start && make install
   ```

3. **Configure PHPStorm** (5 minutes, one-time):
   - See [README.md](README.md) → PHPStorm Configuration section
   - Or see [PHPSTORM-SETUP.md](PHPSTORM-SETUP.md) for detailed guide

---

## IDE Comparison

### Quick Selection Guide

| IDE | Best For | Setup Time | Config Type | Auto-Setup |
|-----|----------|------------|-------------|------------|
| **VSCode** | General development, lightweight, free | 2 min | DevContainer | ✅ Automatic |
| **Cursor** | AI-assisted development, Copilot integration | 2 min | DevContainer | ✅ Automatic |
| **PHPStorm** | Advanced PHP features, professional tools | 5 min | Docker Compose | ⚙️ Manual |

### Why VSCode?

- ✅ Free and open-source
- ✅ Lightweight and fast
- ✅ Huge extension marketplace
- ✅ DevContainer auto-setup
- ✅ Cross-platform (Windows, macOS, Linux)
- ✅ Good for polyglot development

### Why Cursor?

- ✅ Built on VSCode (same features)
- ✅ Native AI pair programming
- ✅ GitHub Copilot integration
- ✅ AI chat sidebar
- ✅ Multi-line AI suggestions
- ✅ DevContainer auto-setup
- ✅ Optimized for AI-assisted coding

### Why PHPStorm?

- ✅ Best-in-class PHP support
- ✅ Advanced refactoring tools
- ✅ Database tools included
- ✅ Built-in HTTP client
- ✅ Professional debugging
- ✅ Excellent code completion
- ✅ Integrated testing and profiling
- ⚠️ Commercial (30-day free trial)

### Feature Comparison

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

### Recommendations

**Choose VSCode if you:**
- Want free, open-source software
- Prefer lightweight editors
- Work with multiple languages
- Are new to PHP development
- Want quick setup with extensions

**Choose Cursor if you:**
- Want AI pair programming
- Use GitHub Copilot heavily
- Like VSCode but want better AI
- Want inline AI suggestions
- Enjoy AI chat for coding help

**Choose PHPStorm if you:**
- Are a professional PHP developer
- Need advanced refactoring
- Want the best PHP tooling
- Use databases extensively
- Don't mind commercial software
- Need built-in profiling/debugging

### Switching Between IDEs

You can use different IDEs on different computers, or switch IDEs on the same computer!

**VSCode ↔ Cursor:**
Both use DevContainers, so switching is seamless:
1. Close current IDE
2. Open project in other IDE
3. Click "Reopen in Container"
4. Done!

**VSCode/Cursor ↔ PHPStorm:**
- From VSCode/Cursor to PHPStorm: Container is already running, just configure interpreter (one-time, 5 min)
- From PHPStorm to VSCode/Cursor: Run `make start`, then click "Reopen in Container"

**Using Multiple IDEs Simultaneously:**
Yes! You can have the project open in multiple IDEs at once - all use the same Docker container.

---

## What's Included

### Base Container (Debian 13 Trixie Stable)

The DevContainer uses the **official Microsoft PHP DevContainer image**:

- **PHP 8.3** (pre-installed)
- **Composer 2.x** (pre-installed)
- **Git** (pre-installed)
- **Debian 13 (Trixie)** - Latest stable, no custom builds
- **Non-root user** (`vscode` user for security)

**Why this approach?**
- ✅ Official, maintained image from Microsoft
- ✅ No custom compilation or builds
- ✅ Fast setup (30 seconds vs 2-3 minutes)
- ✅ Stable Debian base
- ✅ Minimal attack surface

### Pre-Installed in Container

- **Xdebug 3.4.6** - Pre-installed in Trixie image (auto-configured for debugging and coverage)
- **Composer 2.8.12** - Pre-installed

### Installed During First Launch

- **PHPUnit 12.4** - via Composer
- **PHPStan** - via Composer (max level)
- **PHP_CodeSniffer** - via Composer (PSR-12)

### VSCode/Cursor Extensions (Auto-Installed)

**Essential PHP Development:**
- **Intelephense** - PHP IntelliSense and code completion
- **PHP Debug** - Xdebug integration for debugging
- **PHP Sniffer** (wongjn.php-sniffer) - PSR-12 code style checking & auto-formatting
- **PHPStan** - Static analysis integration
- **PHPUnit Test Explorer** - Run and debug tests visually

**Essential Development Tools:**
- **GitLens** - Enhanced Git features
- **EditorConfig** - Cross-editor code formatting

**Total: 7 essential extensions** (no bloat!)

**Note:** We use wongjn.php-sniffer instead of the deprecated ikappas.phpcs extension.

### Pre-Configured Features

#### Docker-in-Docker Support
- ✅ Full Docker CLI and Docker Compose available inside container
- ✅ Use Docker from within the DevContainer for testing, building images, etc.
- ✅ Access host Docker daemon (no nested virtualization)
- ✅ Docker Buildx enabled for multi-platform builds

#### Debugging (Xdebug)
- ✅ Port 9003 configured and forwarded
- ✅ Path mappings set up (`/workspace` ↔ local workspace)
- ✅ Launch configurations ready (press F5)
- ✅ Works with PHPUnit tests

#### Code Quality
- ✅ PSR-12 code style enforcement
- ✅ PHPStan static analysis (max level)
- ✅ EditorConfig for consistent formatting
- ✅ Pre-configured tasks (Ctrl+Shift+B)

#### Testing
- ✅ PHPUnit with strict settings
- ✅ Code coverage with Xdebug
- ✅ Test tasks and shortcuts
- ✅ Debug individual tests

---

## Verify Installation

### VSCode/Cursor

Open the integrated terminal (should be inside the container):

```bash
# Check PHP version
php -v
# Output: PHP 8.3.x with Xdebug v3.x

# Check Composer
composer --version
# Output: Composer version 2.x

# Run tests
composer test
# Output: PHPUnit 12.4.x ... OK (1 test, 1 assertion)

# Check code style
composer phpcs
# Output: ... FOUND 0 ERRORS

# Run static analysis
composer phpstan
# Output: [OK] No errors
```

**Test Debugging:**
1. Open `tests/KataSupermarketTest.php`
2. Set a breakpoint on line 12 (click left gutter)
3. Press `F5` → Select "Listen for Xdebug"
4. Breakpoint should hit ✅

### PHPStorm

```bash
# From project root
make test
# Output: PHPUnit 12.4.x ... OK (1 test, 1 assertion)
```

**Test Debugging:**
1. Open `tests/KataSupermarketTest.php`
2. Set a breakpoint on line 12
3. Right-click test → "Debug"
4. Breakpoint should hit ✅

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

## IDE Configuration Details

### Configuration File Structure

The project uses a modular configuration approach to avoid duplication:

```
.devcontainer/
├── devcontainer.json          # Base configuration (shared by all IDEs)
├── settings.vscode.json       # VSCode-specific: launch configs & tasks
└── settings.cursor.json       # Cursor-specific: AI enhancements
```

### Base Configuration (`devcontainer.json`)

**Used by:** All IDEs (VSCode, Cursor, and other DevContainer-compatible editors)

**Contains:**
- Official Microsoft PHP 8.3 Debian 13 (Trixie) image
- Shared PHP extensions (Intelephense, PHP Debug, PHPStan, etc.)
- Shared PHP settings (PSR-12, Xdebug configuration)
- Port forwarding (9003 for Xdebug)
- Post-create commands (Xdebug installation, composer install)

**Why this approach?**
- No duplication: Base settings live in one place
- Easy maintenance: Change base settings once, affects all IDEs
- Clear separation: IDE-specific features are clearly separated
- Extensible: Easy to add new IDE configurations

### VSCode-Specific Settings (`settings.vscode.json`)

**Used by:** Visual Studio Code (and inherited by Cursor)

**Contains:**

**Launch configurations** (4 debug configs):
- Listen for Xdebug
- Launch currently open script
- PHPUnit Current File
- PHPUnit All Tests

**Tasks** (7 pre-configured tasks):
- Run Tests (Ctrl+Shift+T)
- Run Tests with Coverage
- Check Code Style
- Fix Code Style
- Run PHPStan
- Run All Checks (Ctrl+Shift+B)
- Install Dependencies

**How VSCode uses it:**
1. VSCode reads `devcontainer.json` first
2. Then applies launch/task configurations from `settings.vscode.json`
3. These appear in the Run/Debug dropdown and Tasks menu

### Cursor-Specific Settings (`settings.cursor.json`)

**Used by:** Cursor IDE

**Contains:**

**Additional extensions:**
- GitHub Copilot
- GitHub Copilot Chat

**AI-optimized settings:**
- Copilot enabled for PHP, Markdown, and all files
- Inline suggestion count: 3
- Quick suggestions in comments and strings
- Inline suggest enabled

**How Cursor uses it:**
1. Cursor reads `devcontainer.json` (base settings)
2. Also reads `settings.vscode.json` (tasks and launch configs)
3. Then applies AI enhancements from `settings.cursor.json`

**Note:** Cursor is built on VSCode, so it uses VSCode's configuration structure. Cursor works perfectly with the base VSCode configuration - the `settings.cursor.json` file provides optional AI enhancements.

### Configuration Inheritance

**VSCode:**
```
devcontainer.json (base)
    ↓
settings.vscode.json (tasks + launch configs)
    ↓
Final VSCode configuration
```

**Cursor:**
```
devcontainer.json (base)
    ↓
settings.vscode.json (tasks + launch configs)
    ↓
settings.cursor.json (AI enhancements)
    ↓
Final Cursor configuration
```

**PHPStorm:**
```
docker-compose.yml + Dockerfile
    ↓
Manual interpreter configuration
    ↓
.idea-phpstorm/ templates (optional)
    ↓
Final PHPStorm configuration
```

### PHPStorm Configuration

PHPStorm doesn't use DevContainers directly, but has robust Docker integration.

**Configuration Files:**
- `.idea-phpstorm/` - Template configurations (committed to Git)
- `.idea/` - Your personal settings (gitignored)

**Pre-Configured Run Configurations:**
- **All Tests** - Run entire PHPUnit suite
- **PHPStan Analyze** - Run static analysis
- **Code Style Check** - Check PSR-12 compliance

**Setup Steps:**
1. Start container: `make start && make install`
2. Settings → PHP → CLI Interpreter → Add "From Docker Compose"
3. Settings → PHP → Composer → Select "Remote Interpreter"
4. Settings → PHP → Test Frameworks → Add PHPUnit by Remote Interpreter
5. (Optional) Copy templates: `cp .idea-phpstorm/*.xml .idea/`

See [PHPSTORM-SETUP.md](PHPSTORM-SETUP.md) for complete instructions.

### Shared Files Across All IDEs

| File | Used By | Purpose |
|------|---------|---------|
| `.editorconfig` | All | Code formatting rules |
| `Dockerfile` | All | PHP 8.3 + Xdebug environment |
| `docker-compose.yml` | All | Container orchestration |
| `composer.json` | All | PHP dependencies |
| `phpunit.xml.dist` | All | PHPUnit configuration |

### Adding Configurations

**To add a VSCode-specific task:**
Edit `settings.vscode.json`:
```json
"tasks": {
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Your New Task",
      "type": "shell",
      "command": "your-command",
      "group": "build"
    }
  ]
}
```

**To add a Cursor-specific setting:**
Edit `settings.cursor.json`:
```json
"customizations": {
  "vscode": {
    "settings": {
      "your.cursor.setting": "value"
    }
  }
}
```

**To add an extension for all IDEs:**
Edit `devcontainer.json`:
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

---

## Personalization

The base DevContainer is intentionally **minimal**. Here's how to add your customizations:

### Philosophy

**Base configuration** (`devcontainer.json`):
- Debian 13 (Trixie) - Latest stable base
- PHP 8.3 - Latest stable version
- Essential extensions only (7 extensions)
- No custom builds or compiled tools

**Your additions:**
- Personal preferences don't affect teammates
- Team-wide changes require discussion
- Test changes before proposing

### Level 1: Personal Settings (Recommended)

**Best for:** Editor preferences, themes, fonts, personal extensions
**Affects:** Only you
**Committed:** No (gitignored)

#### Personal Editor Settings

**File: `.vscode/settings.json`** (create if doesn't exist)

```json
{
  // Editor appearance
  "editor.fontSize": 14,
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', monospace",
  "editor.fontLigatures": true,
  "editor.lineHeight": 1.6,
  "editor.minimap.enabled": false,

  // Color theme (your preference)
  "workbench.colorTheme": "Dracula",
  "workbench.iconTheme": "material-icon-theme",

  // Editor behavior
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.bracketPairColorization.enabled": true,

  // Terminal
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.fontFamily": "'JetBrains Mono'",

  // Git
  "git.autofetch": true,
  "git.confirmSync": false,

  // File explorer
  "explorer.compactFolders": false,
  "explorer.confirmDelete": false
}
```

**Note:** This file is already in `.gitignore`, so your preferences stay private.

#### Personal Extensions

**File: `.vscode/extensions.json`** (already exists)

```json
{
  "recommendations": [
    // Project extensions (already there)
    "bmewburn.vscode-intelephense-client",
    "xdebug.php-debug",
    "ikappas.phpcs",
    "sanderronde.phpstan-vscode",
    "recca0120.vscode-phpunit",
    "eamodio.gitlens",
    "EditorConfig.EditorConfig",

    // Your personal additions (add below)
    "PKief.material-icon-theme",
    "dracula-theme.theme-dracula",
    "streetsidesoftware.code-spell-checker",
    "usernamehw.errorlens",
    "ms-azuretools.vscode-docker"
  ]
}
```

**Note:** This file is committed but only affects extension recommendations.

### Level 2: Project-Wide Changes

**Best for:** Project-wide tools, shared extensions, team standards
**Affects:** Entire team
**Committed:** Yes

**⚠️ Important:** Discuss with your team first!

#### Adding VSCode Extensions (Project-Wide)

Edit `.devcontainer/devcontainer.json`:

```json
"customizations": {
  "vscode": {
    "extensions": [
      "existing.extensions",
      "ms-azuretools.vscode-docker",  // Example: Docker extension
      "usernamehw.errorlens"          // Example: Error Lens
    ]
  }
}
```

Then rebuild: **Command Palette → "Dev Containers: Rebuild Container"**

#### Adding PHP Extensions

Xdebug is already pre-installed in the Trixie image. To add other extensions, edit `.devcontainer/devcontainer.json` postCreateCommand:

For PECL extensions:
```json
"postCreateCommand": "pecl install redis && docker-php-ext-enable redis && composer install"
```

For built-in extensions:
```json
"postCreateCommand": "docker-php-ext-install pdo_mysql && composer install"
```

Combined example:
```json
"postCreateCommand": "docker-php-ext-install pdo_mysql && pecl install redis && docker-php-ext-enable redis && composer install"
```

#### Changing PHP Version

```json
"image": "mcr.microsoft.com/devcontainers/php:8.4-trixie"
```

Available versions:
- `8.3-trixie` (current)
- `8.4-trixie` (latest)
- `8.2-trixie` (older)
- `8.3-bookworm` (Debian 12 - older stable)

#### Adding System Packages

```json
"postCreateCommand": "sudo apt-get update && sudo apt-get install -y vim htop && composer install"
```

**Note:** Keep it minimal! Only add tools the whole team needs. Use `sudo` since the container runs as non-root `vscode` user.

#### Installing Additional Features

Use DevContainer features from https://containers.dev/features:

```json
"features": {
  "ghcr.io/devcontainers/features/node:1": {
    "version": "lts"
  },
  "ghcr.io/devcontainers/features/github-cli:1": {}
}
```

### Level 3: Local Override (Advanced)

**Best for:** Testing changes before proposing to team
**Affects:** Only you
**Committed:** No

**File: `.devcontainer/devcontainer.local.json`** (create and add to .gitignore)

```json
{
  "customizations": {
    "vscode": {
      "extensions": [
        "test.new-extension"
      ],
      "settings": {
        "editor.experimental.feature": true
      }
    }
  }
}
```

**Note:** This requires manual merging or a script to combine with base config.

### Common Personalization Examples

#### Example 1: Dark Theme with Icons

```json
{
  "workbench.colorTheme": "Dracula",
  "workbench.iconTheme": "material-icon-theme"
}
```

#### Example 2: Error Highlighting

```json
{
  "errorLens.enabled": true,
  "errorLens.delay": 500
}
```

Add to `.vscode/extensions.json`:
```json
{
  "recommendations": ["usernamehw.errorlens"]
}
```

#### Example 3: Auto-Format on Save

```json
{
  "editor.formatOnSave": true,
  "[php]": {
    "editor.defaultFormatter": "bmewburn.vscode-intelephense-client"
  }
}
```

### Best Practices

#### ✅ DO

- Use `.vscode/settings.json` for personal preferences
- Test with local override before proposing team changes
- Keep base config minimal
- Document why you're adding project-wide extensions
- Discuss with team before modifying `devcontainer.json`

#### ❌ DON'T

- Don't commit `.vscode/settings.json` (it's gitignored)
- Don't add bloat to base config
- Don't break compatibility
- Don't install unnecessary system packages
- Don't change PHP version without team consensus

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

### VSCode/Cursor: "Cannot connect to Docker"

**Fix:**
1. Ensure Docker Desktop is running
2. Restart VSCode/Cursor
3. Try "Reopen in Container" again

### VSCode/Cursor: Extensions Not Installing

1. Command Palette → `Dev Containers: Rebuild Container`
2. Wait for rebuild
3. Extensions should install automatically

### VSCode/Cursor: Can't Debug

**Check:**
1. Xdebug port 9003 is forwarded (Ports tab)
2. Launch configuration is selected (Debug sidebar)
3. Breakpoint is set on executable line (not comment/blank line)
4. Run debug configuration (F5)

**Verify Xdebug:**
```bash
php -v
# Should show: "with Xdebug v3.x"
```

### PHPStorm: Interpreter Not Found

**Fix:**
1. `make start` to ensure container is running
2. Settings → PHP → CLI Interpreter → Add → From Docker Compose
3. Select `docker-compose.yml` and service `php`

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

### Port 9003 Already in Use

```bash
# Find what's using port 9003
lsof -i :9003  # macOS/Linux
netstat -ano | findstr :9003  # Windows

# Kill the process or change Xdebug port in docker-compose.yml
```

### My Personal Settings Aren't Applied

**Check:**
1. Settings are in correct file (`.vscode/settings.json`)
2. JSON syntax is valid (use a JSON validator)
3. Restart VSCode: **Command Palette → "Developer: Reload Window"**

### Personal Extensions Not Installing

**Check:**
1. Extension ID is correct (check marketplace URL)
2. Extension is compatible with DevContainers
3. Rebuild container: **Command Palette → "Dev Containers: Rebuild Container"**

---

## Cross-Platform Support

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
│  │  │ Debian 13 (Trixie Stable)                   │  │  │
│  │  │ PHP 8.3 + Xdebug 3.4.6 (pre-installed)      │  │  │
│  │  │ Composer + PHPUnit + PHPStan + PHPCS        │  │  │
│  │  │ Git (pre-installed)                         │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │                                                   │  │
│  │  Project: /workspace (mounted from host)         │  │
│  │  User: vscode (non-root)                         │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  No local PHP installation needed! ✅                   │
└─────────────────────────────────────────────────────────┘
```

---

## Daily Workflow

### VSCode/Cursor

1. Open project
2. Click "Reopen in Container" (if not already in container)
3. Edit code
4. Run tests: `Ctrl+Shift+B` or `composer test`
5. Debug: Set breakpoint → `F5`
6. Commit changes
7. Close VSCode (container stops automatically)

### PHPStorm

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

## Benefits

✅ **Consistency**: Same environment on all computers and all OSes
✅ **Portability**: Clone → Open → Code (no manual setup)
✅ **Isolation**: Project dependencies don't pollute your system
✅ **Onboarding**: New developers productive in 5 minutes
✅ **Cross-Platform**: Works on Windows, macOS, Linux identically
✅ **Multi-IDE**: VSCode, Cursor, PHPStorm all supported
✅ **Pre-Configured**: Debugging, testing, linting ready out-of-the-box
✅ **Minimal**: No bloat, just essentials (Debian stable + 7 extensions)

---

## Resources

### Project Documentation
- **[README.md](README.md)** - Main project documentation
- **[PHPSTORM-SETUP.md](PHPSTORM-SETUP.md)** - PHPStorm detailed setup
- **[CLAUDE.md](CLAUDE.md)** - Development guidelines
- **[../README.md](../README.md)** - Kata exercise requirements

### External Resources
- [DevContainers Specification](https://containers.dev/)
- [DevContainer Features](https://containers.dev/features)
- [VSCode DevContainers Docs](https://code.visualstudio.com/docs/devcontainers/containers)
- [VSCode Settings Reference](https://code.visualstudio.com/docs/getstarted/settings)
- [PHPStorm Docker Integration](https://www.jetbrains.com/help/phpstorm/docker.html)

---

## Next Steps

1. ✅ **Read the Kata Requirements:** [../README.md](../README.md)
2. ✅ **Start with User Story #1:** Basic apple pricing
3. ✅ **Write tests first** (TDD approach)
4. ✅ **Run tests frequently:** `composer test` or Ctrl+Shift+B
5. ✅ **Check code quality:** `composer check`
6. ✅ **Customize your setup:** See [Personalization](#personalization) section above

---

## Summary

This DevContainer setup provides a **simple, stable, portable development environment**:

**Base Setup:**
- Debian 13 (Trixie) - Latest stable
- PHP 8.3 - Official Microsoft image
- 7 essential extensions - No bloat
- No custom builds - Fast setup

**Your Experience:**
1. **Clone** the repository
2. **Open** in your IDE (VSCode/Cursor/PHPStorm)
3. **Start coding** - everything is ready!

No PHP installation, no Composer setup, no Xdebug configuration, no extension hunting.

**Customize to your taste** using personal settings (gitignored), and propose useful changes to the team.

**Everything just works** on Windows, macOS, and Linux! 🚀
