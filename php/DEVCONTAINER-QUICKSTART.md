# DevContainer Quick Start Guide

> **💡 New!** IDE-specific configurations available! See [IDE-SETUP.md](IDE-SETUP.md) for detailed comparison and setup guides for VSCode, Cursor, and PHPStorm.

## 🚀 Get Started in 3 Steps

### For VSCode Users

1. **Install Prerequisites:**
   - Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - Install [Visual Studio Code](https://code.visualstudio.com/)
   - Install "Dev Containers" extension in VSCode

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

### For Cursor Users

1. **Install Prerequisites:**
   - Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - Install [Cursor](https://cursor.sh/)

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

### For PHPStorm Users

PHPStorm doesn't use DevContainers but has excellent Docker support:

1. **Install Prerequisites:**
   - Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - Install [PHPStorm](https://www.jetbrains.com/phpstorm/)

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

## What Gets Installed Automatically?

### VSCode/Cursor (Inside Container)
- ✅ PHP 8.3 with Xdebug
- ✅ Composer + all project dependencies
- ✅ PHPUnit, PHPStan, PHP_CodeSniffer
- ✅ Git with Oh-My-Zsh
- ✅ All recommended extensions (see [.vscode/extensions.json](.vscode/extensions.json))
- ✅ Pre-configured debugging (just press F5)
- ✅ Pre-configured tasks (Ctrl+Shift+B to run tests)

### PHPStorm (Manual Configuration)
- ✅ PHP 8.3 with Xdebug (in container)
- ✅ Composer + all project dependencies (in container)
- ⚙️ Requires manual interpreter setup (5 minutes)
- ✅ Full debugging, testing, and code quality tools

---

## Verify Installation

### VSCode/Cursor

**Open the integrated terminal** (should be inside the container):

```bash
# Check PHP version
php -v
# Output: PHP 8.3.x with Xdebug v3.3.2

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

## Common First-Time Issues

### VSCode/Cursor: "Cannot connect to Docker"

**Fix:**
1. Ensure Docker Desktop is running
2. Restart VSCode/Cursor
3. Try "Reopen in Container" again

### VSCode/Cursor: Extensions not installing

**Fix:**
1. Command Palette (Ctrl+Shift+P)
2. Run: "Dev Containers: Rebuild Container"
3. Wait for rebuild

### PHPStorm: Interpreter not found

**Fix:**
1. `make start` to ensure container is running
2. Settings → PHP → CLI Interpreter → Add → From Docker Compose
3. Select `docker-compose.yml` and service `php`

### All: Port 9003 already in use

**Fix:**
```bash
# Find what's using port 9003
lsof -i :9003  # macOS/Linux
netstat -ano | findstr :9003  # Windows

# Kill the process or change Xdebug port in docker-compose.yml
```

---

## Next Steps

1. ✅ **Read the Kata Requirements:** [../README.md](../README.md)
2. ✅ **Start with User Story #1:** Basic apple pricing
3. ✅ **Write tests first** (TDD approach)
4. ✅ **Run tests frequently:** `composer test` or Ctrl+Shift+B
5. ✅ **Check code quality:** `composer check`

---

## Learn More

- **Full DevContainer Documentation:** [.devcontainer/README.md](.devcontainer/README.md)
- **Project Setup Guide:** [README.md](README.md)
- **PHPStorm Detailed Setup:** [PHPSTORM-SETUP.md](PHPSTORM-SETUP.md)
- **Development Guidelines:** [CLAUDE.md](CLAUDE.md)

---

## OS-Specific Notes

### Windows

- **Use WSL2:** Clone repo inside WSL2 (`~/projects/`) for best performance
- **Docker Desktop:** Must have WSL2 backend enabled
- **Line Endings:** Already configured (LF via .editorconfig)

### macOS

- **Docker Desktop:** Uses built-in virtualization (fast)
- **No special setup needed**
- **File watching works automatically**

### Linux

- **Native Docker:** Fastest performance
- **User Permissions:** Container uses UID 1000 (matches most Linux users)
- **Docker Group:** Add yourself: `sudo usermod -aG docker $USER`

---

## Support

**Need help?**
1. Check [.devcontainer/README.md](.devcontainer/README.md) Troubleshooting section
2. Check [README.md](README.md) Troubleshooting section
3. Verify Docker is running: `docker ps`
4. Rebuild container: `docker compose build --no-cache`

---

**Happy Coding! 🎉**

Your environment is ready. Start implementing the kata user stories from [../README.md](../README.md)!
