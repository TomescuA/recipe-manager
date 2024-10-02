## Getting Started

Ensure that you have the following tools installed on your system:

- Node.js
- npm, yarn, pnpm, or bun as the package manager

Install the required dependencies:

- npm/yarn/pnpm/bun install

Note: I have provided the .env.local file in this repository to give you access to the API key and API URL for development purposes. However, keeping sensitive information in the repository is generally not recommended.

Running the Development Server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This will start the application in development mode and open it at:

http://localhost:3000

## About

This project is built using the App Router instead of the traditional Pages Router.

Here are the reasons for choosing the App Router:

1. Flexibility: The App Router allows for nested layouts, colocated API routes (with route.ts files next to their pages), and better overall file organization.
2. Performance Optimizations: Enhanced performance capabilities like better caching and prefetching of components, leading to faster load times.
3. Improved Server-Side Rendering Control: The App Router provides more granular control over server-side rendering, enabling better performance tuning.

The app is fully written in TypeScript for type safety and robustness. It also includes ESLint and Prettier configurations to ensure consistent code quality and formatting.

Tools and packages used in the app include:

1. Lodash for efficient debouncing.
2. Redux Persist for persisting the Redux store across sessions and Redux toolkit.
3. React Image File Resizer to handle image resizing, ensuring Base64-encoded images are efficiently managed without taking up too much space.

## Strcture

The app is organized into several key directories, each with a specific role. Here's a breakdown of the structure:

1. <!--  components/ --> This folder contains reusable components that can be shared across the app. Each component includes its styles to maintain consistency and ease of management.

2. <!--  store/ --> This folder contains the Redux store configuration and all the slices that manage different parts of the state. You'll also find the StoreProvider, which wraps the application with Redux and PersistGate for state management and persistence.

3. <!--  styles/ --> Here, you'll find the theme configurations, such as colors, typography, and media queries. It also includes the TypeScript types for the theme to ensure type safety and consistency across the app.

4. <!--  utils/ --> This folder contains utility functions and helper components. Notably, it includes the Providers component, which combines the ThemeProvider and StoreProvider to ensure the app has access to both the theme and the Redux store. It also includes an images folder for storing static assets like images.

5. <!--  api/ --> This folder handles server calls and external API interactions. It contains the recipes-proxy, which abstracts the API requests to the Spoonacular API. The proxy helps with caching and static generation, providing a solution for server-side rendering and revalidation (though this is currently not in use, it is prepared for future implementation)

6. <!--  recipes/ -->

   This folder contains everything related to the recipes feature:

   - Components related to the recipe functionality, such as RecipeCard, RecipeList, etc.
   - Custom Recipes: Includes pages for listing, creating, updating, and viewing details of custom recipes created by users.
   - External Recipes: Contains pages for listing, viewing favorites, and viewing details of external recipes fetched from the API.
   - The api.ts file makes requests to the recipes-proxy and helps with caching for static generation of recipe detail pages.
   - RecipesPageClient.tsx: This is where client-side functionality, such as tab navigation and data fetching for different types of recipes (custom vs external), is handled.

7. <!--  page.tsx -->  Although this is the default entry point for the app, it's not actively used as the app redirects users directly to the recipes route upon loading.

8. Contains configuration files such as next.config.js, .eslintrc, and .prettierrc. These files ensure proper formatting, linting, and the configuration of the Next.js app.

9. Contains the global layout of the application, ensuring a consistent structure (such as headers, footers, etc.) across all pages.

## SSR/SSG: Explain your choice between SSR and static generation for specific pages in the app.

    Initially, the plan was to statically generate all pages at build time, leveraging SSG for performance. Revalidation was introduced to ensure that the static pages could stay up-to-date without requiring a full rebuild. This revalidation process is triggered based on tags, allowing new content (such as newly created recipes) to trigger updates, which re-generates the pages.

    Approach:
     - Recipe detail pages are generated at build time using generateStaticParams. The data is fetched once during the build, and the pages are cached for fast delivery without needing to fetch new data on every request. This ensures high performance and is well-suited for content that doesn’t change frequently.

    SSR is applied to pages that require real-time data or reflect user input, such as the recipe creation, update pages, or pages with inputs functionality. These pages need to be responsive to user actions and provide up-to-date information on each request.

    Summary:
     - I used SSG for pages that can be statically generated and served efficiently without frequent updates, such as recipe detail pages.
    - And I used SSR  for pages that involve dynamic data or user interactions, like recipe list  ensuring the content remains fresh and interactive.

## Deploy on Vercel
