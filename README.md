# Eventio

A project developed during the STRV Frontend Academy 2022.


Eventio is a web app that allows registered users to sign up for and create events. The app contains several pages.


## Get Started

**Firstly, make sure you're running correct version of node to avoid incompatibilities:**

```sh
nvm use 16
```

**Then install all necessary dependencies:**

```sh
yarn install
```

**To start a development server:**

```sh
yarn dev
```

**To build the app for production:**

```sh
yarn build
```

**To see production ready app:**

```sh
yarn start
```

**To deploy the app with vercel:**

```sh
yarn deploy
```

---

## Technological choices

### Next.js

I chose to use Next.js 12 in my simple CRUD app because it's a powerful and feature-rich framework that allows to choose to render content on the server-side for improved performance and SEO, while also providing a rich client-side experience with interactive features and dynamic content updates. The advanced routing system, combined with the built-in support for TypeScript, provided me with the necessary tools to build a scalable and maintainable application. Additionally, the new features in Next.js 12, such as image optimization and CSS handling, allowed me to create a performant and visually appealing user interface for the app.

### react-hook-form

For managing form data in React applications, offering a lightweight and fast solution with a flexible API that simplifies the management of complex forms. It also includes built-in support for form validation, making it an efficient and reliable choice for handling form inputs.

### yup

For easy but poweful client-side validation of forms

### date-fns

Because moment.js is a huge package and now legacy.

### Google Fonts CDN

Instead of using files in the assignment I've decided to use CDN as it might be cached in user's browser and therfore loads faster.

### stitches

Performance: Stitches.js generates CSS-in-JS code that's optimized for performance, reducing the amount of CSS generated and the number of style recalculations needed during runtime, which results in faster load times and a smoother user experience.

Atomic CSS: Stitches.js uses atomic CSS to define styles, which means that styles are defined as small, reusable, and composable building blocks, reducing the amount of code required and making it easier to manage and scale styles in large applications.

Theming: Stitches.js provides built-in theming support, allowing you to define and switch between multiple themes for your application without having to rewrite styles.

Type-safety: Stitches.js offers type-safety for your styles, ensuring that your styles are correctly defined and reducing the likelihood of errors during runtime.

### ky

Lightweight and fast: Ky has a small footprint and is optimized for performance. Simple API: Ky provides a simple and intuitive API that's easy to use. Request cancellation: Ky supports request cancellation, allowing you to abort HTTP requests that are no longer needed, which can help improve performance and reduce unnecessary network traffic.

### next-auth

For reducing the amount of time and effort required to implement user authentication. Built-in support for popular authentication providers such as Google, Facebook, GitHub.  NextAuth.js provides built-in security features such as CSRF protection, rate limiting, and encryption, ensuring that your application is secure and protected against common attacks. NextAuth.js is a modular library, allowing you to use only the parts of the library that you need.

### react-query

For managing remote data. It provides a simple and flexible API for fetching, caching, and updating remote data. 
