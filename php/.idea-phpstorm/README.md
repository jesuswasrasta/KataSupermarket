# PHPStorm Configuration Templates

This directory contains pre-configured PHPStorm settings optimized for the KataSupermarket project with Docker.

## Quick Setup

### Option 1: Automatic (Recommended)

1. Start the Docker container:
   ```bash
   make start && make install
   ```

2. Open project in PHPStorm

3. Configure Docker CLI Interpreter:
   - **Settings → PHP → CLI Interpreter**
   - Click **"+"** → **"From Docker Compose"**
   - Select service: `php`
   - Click **OK**

4. Copy template configurations:
   ```bash
   # From project root (php/)
   mkdir -p .idea
   cp .idea-phpstorm/php.xml .idea/
   mkdir -p .idea/runConfigurations
   cp .idea-phpstorm/runConfigurations/*.xml .idea/runConfigurations/
   ```

5. Restart PHPStorm

6. Verify setup:
   - Run configuration dropdown should show: "All Tests", "PHPStan Analyze", "Code Style Check"
   - Settings → PHP should show PHP 8.3 with Xdebug 3.3.2

### Option 2: Manual Setup

See [../README.md](../README.md) → PHPStorm Configuration section for detailed step-by-step instructions.

## What's Included

### `php.xml`
Pre-configured PHP project settings:
- PHP language level: 8.3
- PHPUnit configuration pointing to `/app/phpunit.xml.dist`
- PHP_CodeSniffer with PSR-12 standard
- PHPStan integration
- Composer autoloader path

### Run Configurations

Located in `runConfigurations/`:

1. **All Tests** (`All_Tests.xml`)
   - Runs entire PHPUnit test suite
   - Uses `phpunit.xml.dist` configuration
   - Keyboard shortcut: Shift+F10 (after selection)

2. **PHPStan Analyze** (`PHPStan_Analyze.xml`)
   - Runs static analysis on src/ and tests/
   - Terminal-based execution
   - Shows in Run menu

3. **Code Style Check** (`Code_Style_Check.xml`)
   - Checks PSR-12 compliance
   - Terminal-based execution
   - Shows in Run menu

## Usage

### Running Tests
1. Open any test file
2. Click green ▶ icon next to test method/class
3. Or select "All Tests" from run configurations dropdown
4. Tests run inside Docker container automatically

### Debugging Tests
1. Set breakpoint (click left gutter)
2. Right-click test → **Debug**
3. Debugger connects via Xdebug on port 9003
4. Execution stops at breakpoint

### Running Code Quality Checks
1. Select "PHPStan Analyze" or "Code Style Check" from run configurations
2. Click ▶ Run button
3. View results in terminal panel

## File Structure

```
.idea-phpstorm/
├── README.md                              # This file
├── php.xml                                # PHP project configuration
└── runConfigurations/
    ├── All_Tests.xml                      # PHPUnit: all tests
    ├── PHPStan_Analyze.xml                # Static analysis
    └── Code_Style_Check.xml               # PSR-12 style check
```

## Customization

### Adding More Run Configurations

1. Create a new configuration in PHPStorm (Run → Edit Configurations)
2. Configure it as needed
3. Save it to project: Check "Store as project file"
4. Copy from `.idea/runConfigurations/` to `.idea-phpstorm/runConfigurations/`
5. Commit to version control

### Modifying PHP Settings

1. Edit `.idea-phpstorm/php.xml`
2. Copy to `.idea/php.xml`
3. Restart PHPStorm

## Why Separate Templates?

PHPStorm's `.idea/` directory contains machine-specific paths and user preferences. We:
- ✅ Store templates in `.idea-phpstorm/` (committed to Git)
- ❌ Ignore personal `.idea/` folder (in .gitignore)
- ✅ Allow users to copy templates when needed
- ✅ Keep team configurations in sync

## Troubleshooting

### Run Configurations Don't Appear

**Solution:**
```bash
# Ensure files are in correct location
ls -la .idea/runConfigurations/

# If empty, copy templates
cp .idea-phpstorm/runConfigurations/*.xml .idea/runConfigurations/

# Restart PHPStorm
```

### PHP Interpreter Not Found

**Solution:**
1. Ensure Docker container is running: `docker ps`
2. Settings → PHP → CLI Interpreter → Click refresh icon
3. Re-add interpreter if needed

### Tests Not Running

**Solution:**
1. Verify PHPUnit is configured:
   - Settings → PHP → Test Frameworks
   - Should show PHPUnit with path `/app/vendor/autoload.php`
2. If missing, add it manually (see main README.md)

### Xdebug Not Working

**Solution:**
1. Check Xdebug is loaded: `./docker-exec php -v`
2. Settings → PHP → Debug → Xdebug port should be `9003`
3. Enable "Start Listening for PHP Debug Connections" (phone icon)

## Integration with DevContainers

PHPStorm doesn't use DevContainers like VSCode/Cursor, but:
- ✅ Uses the same `docker-compose.yml`
- ✅ Uses the same `Dockerfile`
- ✅ Connects to the same container
- ✅ Same PHP version, extensions, and tools
- ⚙️ Requires manual interpreter setup (one-time, 5 minutes)

For DevContainer-based setup (VSCode/Cursor), see:
- [../.devcontainer/devcontainer.json](../.devcontainer/devcontainer.json) - VSCode config
- [../.devcontainer/devcontainer-cursor.json](../.devcontainer/devcontainer-cursor.json) - Cursor config

## See Also

- [../README.md](../README.md) - Complete project documentation
- [../.devcontainer/README.md](../.devcontainer/README.md) - DevContainer guide
- [../DEVCONTAINER-QUICKSTART.md](../DEVCONTAINER-QUICKSTART.md) - Quick start for all IDEs
- [../CLAUDE.md](../CLAUDE.md) - Development guidelines
