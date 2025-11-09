# Project Overview

This is a PHP project for the "Kata Supermarket" coding exercise. It uses PHP 8.3, Composer for dependency management, and PHPUnit for testing. The development environment is containerized using Docker, which ensures consistency and portability.

The project follows PSR-4 autoloading standards, with source code located in `src/` under the `KataSupermarket` namespace and tests in `tests/` under the `KataSupermarket\Tests` namespace.

## Building and Running

This project uses Docker and `make` to simplify the development workflow.

### First-Time Setup

1.  **Start the Docker container:**
    ```bash
    make start
    ```

2.  **Install dependencies:**
    ```bash
    make install
    ```

### Running Tests

To run the full test suite:

```bash
make test
```

### Running Code Quality Checks

To run all code quality checks (style, static analysis, and tests):

```bash
make check
```

This command is a combination of:

*   `make phpcs`: Check code style against PSR-12.
*   `make phpstan`: Run static analysis.
*   `make test`: Run PHPUnit tests.

### Other useful commands

*   `make shell`: To get a shell inside the running container.
*   `make stop`: To stop the docker container.

## Development Conventions

*   **Coding Style:** The project enforces the PSR-12 coding standard using `php_codesniffer`.
*   **Static Analysis:** `phpstan` is used for static analysis to find potential bugs.
*   **Testing:** Tests are written using PHPUnit and are located in the `tests` directory.
*   **Dependency Management:** Composer is used to manage project dependencies.
*   **Development Environment:** A consistent development environment is provided through Docker.
