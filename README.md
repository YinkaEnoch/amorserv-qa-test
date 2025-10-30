# Automated UI Testing Project

This project demonstrates end-to-end (E2E) testing using **Cypress** and **Selenium** on a sample `login.html` page.
It includes both local and CI-based test execution through **GitHub Actions**.

---

## 🧩 Project Overview

The repository contains:

* A sample login page (`app/login.html`)
* Cypress tests for UI validation and interaction
* Selenium tests using Mocha for browser automation
* GitHub workflows to run tests automatically on push

---

## ⚙️ Tech Stack

* **Node.js** & **npm**
* **Cypress** – for fast, modern front-end testing
* **Selenium WebDriver** – for browser automation via Mocha
* **http-server** – for local static hosting
* **GitHub Actions** – for CI/CD testing on push

---

## 🚀 Setup & Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd <your-project-folder>
npm install
```

---

## 🧪 Available Scripts

| Command                | Description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`          | Starts a local HTTP server at `http://localhost:8080` to serve the `app/` directory |
| `npm run test:cypress` | Runs all Cypress tests in headless mode                                             |
| `npm run test:e2e`     | Executes Selenium end-to-end tests using Mocha                                      |

Example workflow:

```bash
# Start the app
npm run dev

# Run Cypress tests
npm run test:cypress

# Run Selenium tests
npm run test:e2e
```

---

## 🧱 Project Structure

```
.
├── app/
│   └── login.html
│
├── cypress/
│   └── e2e/
│       └── login.cy.js
│
├── tests/
│   └── selenium/
│       └── login.test.js
│
├── .github/
│   └── workflows/
│       ├── cypress.yml
│       └── selenium.yml
│
├── package.json
└── README.md
```

---

## 🔄 Continuous Integration

Two **GitHub Actions workflows** are configured:

| Workflow             | Trigger                    | Description                          |
| -------------------- | -------------------------- | ------------------------------------ |
| `cypress.yml`  | On push to `main` or `dev` | Runs Cypress tests in CI             |
| `selenium.yml` | On push to `main` or `dev` | Runs Selenium end-to-end tests in CI |

You can find these under `.github/workflows/`.

---

## 🧠 Notes

* Make sure port **8080** is free before running `npm run dev`.
* Tests assume the login page is served from `http://localhost:8080/login.html`.
* Update selectors in test files if you modify the HTML structure.
