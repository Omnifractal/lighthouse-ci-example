# Lighthouse CI Example Repository

Hello, and welcome to the **Lighthouse CI Example** repository. This repository contains a straightforward "Hello World" Next.js app, but its main purpose is to demonstrate the power of Google's Lighthouse CI in action.

Lighthouse is an exceptional open-source tool from Google that audits web pages for performance, accessibility, SEO, and more. By integrating Lighthouse into a CI/CD pipeline, you're able to automate the process of monitoring the quality of your web pages.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Omnifractal/lighthouse-ci-example.git
```

2. Navigate into the project directory:

```bash
cd lighthouse-ci-example
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Then, open your web browser and visit [http://localhost:3000](http://localhost:3000) to see the result.

## Lighthouse CI Integration

In this project, we've integrated Lighthouse CI into our GitHub Actions CI/CD pipeline. This means every time there's a push to the repository, Lighthouse CI automatically runs an audit, notifying us if there are any performance regressions that caused the audit to not meet specified standards.

You can learn more about this setup in our [blog post](https://omnifractal.com/blog/cicd-with-lighthouse). It provides a detailed guide on integrating Lighthouse into your own CI/CD pipeline.

## Contact

If you encounter any issues or have questions about this example, please don't hesitate to reach out to us at [support@omnifractal.com](mailto:support@omnifractal.com). We're always ready to assist.

Happy coding, and we hope you find value in exploring this Lighthouse CI integration!
