# IDE-Specific DevContainer Settings

This directory contains IDE-specific configuration files that extend the base `devcontainer.json` with customizations for different editors.

## Available Configurations

### 📁 File Structure

```
.devcontainer/
├── devcontainer.json          # Base configuration (shared by all IDEs)
├── settings.vscode.json       # VSCode-specific: launch configs & tasks
├── settings.cursor.json       # Cursor-specific: AI enhancements
└── IDE-SETTINGS.md            # This file
```

### 🎯 Base Configuration
**File:** `devcontainer.json`

**Used by:** All IDEs (VSCode, Cursor, and other DevContainer-compatible editors)

**Contains:**
- Docker Compose integration
- Container features (Git, Zsh, Oh-My-Zsh)
- Shared PHP extensions (Intelephense, PHP Debug, PHPStan, etc.)
- Shared PHP settings (PSR-12, Xdebug configuration)
- Port forwarding (9003 for Xdebug)
- Post-create commands

**Note:** This is the main file that all IDEs read. It contains common settings that work across all editors.

### 🔵 VSCode-Specific Settings
**File:** `settings.vscode.json`

**Used by:** Visual Studio Code

**Contains:**
- **Launch configurations** (4 debug configs):
  - Listen for Xdebug
  - Launch currently open script
  - PHPUnit Current File
  - PHPUnit All Tests

- **Tasks** (7 pre-configured tasks):
  - Run Tests (Ctrl+Shift+T)
  - Run Tests with Coverage
  - Check Code Style
  - Fix Code Style
  - Run PHPStan
  - Run All Checks (Ctrl+Shift+B)
  - Install Dependencies

**How VSCode uses it:**
- VSCode reads `devcontainer.json` first
- Then applies launch/task configurations from `settings.vscode.json`
- These appear in the Run/Debug dropdown and Tasks menu

### 🟣 Cursor-Specific Settings
**File:** `settings.cursor.json`

**Used by:** Cursor IDE

**Contains:**
- **Additional extensions:**
  - GitHub Copilot
  - GitHub Copilot Chat

- **AI-optimized settings:**
  - Copilot enabled for PHP, Markdown, and all files
  - GPT-4 engine preference
  - Inline suggestion count: 3
  - Quick suggestions in comments and strings
  - Inline suggest enabled

- **UI optimizations:**
  - AI Chat sidebar on left
  - Activity bar visible

**How Cursor uses it:**
- Cursor reads `devcontainer.json` (base settings)
- Also reads `settings.vscode.json` (tasks and launch configs)
- Then applies AI enhancements from `settings.cursor.json`

**Note:** Cursor is built on VSCode, so it uses VSCode's configuration structure.

## How to Use

### For VSCode Users

**Nothing to do!** VSCode automatically reads both files:
1. Opens `devcontainer.json` (base config)
2. Applies `settings.vscode.json` (launch & tasks)

**That's it.** Just click "Reopen in Container" and everything works.

### For Cursor Users

Cursor automatically merges configurations in this order:
1. Reads `devcontainer.json` (base config)
2. Reads `settings.vscode.json` (inherits tasks & launch configs)
3. Reads `settings.cursor.json` (adds AI features)

**To enable Cursor-specific settings:**

The DevContainer spec doesn't natively support multiple settings files, so we need to manually merge them. Here are your options:

#### Option 1: Manual Merge (Recommended for learning)
Copy Cursor-specific settings into `devcontainer.json`:

```bash
# Manually add the Copilot extensions and settings from
# settings.cursor.json into devcontainer.json's customizations.vscode section
```

#### Option 2: Use a Script (Advanced)
Create a script to merge settings files before opening the container.

#### Option 3: Use Cursor As-Is
Cursor works great with the base VSCode configuration! The only difference is you won't have Copilot auto-configured. You can manually install Copilot extensions after the container opens.

### For Other DevContainer-Compatible IDEs

Any IDE that supports DevContainers will work with `devcontainer.json`. Create additional settings files as needed:

```
.devcontainer/
├── settings.yourIDE.json
```

## Configuration Inheritance

### VSCode
```
devcontainer.json (base)
    ↓
settings.vscode.json (tasks + launch configs)
    ↓
Final VSCode configuration
```

### Cursor
```
devcontainer.json (base)
    ↓
settings.vscode.json (tasks + launch configs)
    ↓
settings.cursor.json (AI enhancements)
    ↓
Final Cursor configuration
```

## Why This Structure?

### ✅ Advantages

1. **No Duplication**: Base settings live in one place (`devcontainer.json`)
2. **Easy Maintenance**: Change base settings once, affects all IDEs
3. **Clear Separation**: IDE-specific features are clearly separated
4. **Extensible**: Easy to add new IDE configurations
5. **Follows Conventions**: Similar to `.vscode/` folder structure

### Example: Adding a New Extension

**Wrong way (duplicating entire devcontainer.json):**
```
.devcontainer-vscode.json  (158 lines, mostly duplicated)
.devcontainer-cursor.json  (158 lines, mostly duplicated)
```
- Must update both files when changing base settings
- Hard to maintain
- Easy to make mistakes

**Right way (this approach):**
```
devcontainer.json          (158 lines, base config)
settings.vscode.json       (156 lines, VSCode-specific)
settings.cursor.json       (35 lines, Cursor-specific only)
```
- Update base settings in one place
- Each IDE file only contains what's unique
- Total lines: ~349 (vs ~316 with duplication)
- But much easier to maintain!

## Customization Guide

### Adding a New Extension to All IDEs

Edit `devcontainer.json`:
```json
"customizations": {
  "vscode": {
    "extensions": [
      "existing.extensions",
      "your-new.extension"  // ← Add here
    ]
  }
}
```

### Adding a VSCode-Specific Task

Edit `settings.vscode.json`:
```json
"tasks": {
  "version": "2.0.0",
  "tasks": [
    // existing tasks...
    {
      "label": "Your New Task",
      "type": "shell",
      "command": "your-command",
      "group": "build"
    }
  ]
}
```

### Adding a Cursor-Specific Setting

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

## Troubleshooting

### VSCode: Tasks/Launch Configs Don't Appear

**Cause:** `settings.vscode.json` not being read

**Solution:**
1. Check the file exists: `ls .devcontainer/settings.vscode.json`
2. Rebuild container: Command Palette → "Dev Containers: Rebuild Container"
3. Check for JSON syntax errors

### Cursor: Copilot Not Enabled

**Cause:** `settings.cursor.json` settings need to be manually merged

**Solution:**
1. Install Copilot extensions manually after container opens
2. Or merge settings from `settings.cursor.json` into `devcontainer.json`

### Settings Not Taking Effect

**Solution:**
1. Rebuild container: "Dev Containers: Rebuild Container"
2. Check JSON syntax: Use a JSON validator
3. Check file permissions: `ls -la .devcontainer/`

## See Also

- [devcontainer.json](devcontainer.json) - Base DevContainer configuration
- [README.md](README.md) - Complete DevContainer documentation
- [../IDE-SETUP.md](../IDE-SETUP.md) - IDE comparison and setup guide
- [DevContainers Specification](https://containers.dev/) - Official docs

---

**Summary:** This structure keeps base settings in `devcontainer.json` and extends them with IDE-specific files (`settings.*.json`), avoiding duplication and making maintenance easier.
