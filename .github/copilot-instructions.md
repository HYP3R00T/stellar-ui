# Project coding standards

## Naming Conventions

- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (_)
- Use ALL_CAPS for constants

## Error Handling

- Use try/catch blocks for async operations
- Always log errors with contextual information

## Styling Design

- The project uses a dark theme by default with support for multiple themes.
- Tailwind CSS is used extensively for utility-first styling.
- Custom CSS variables are defined for colors, typography, and spacing, ensuring consistency across themes.
- Components are styled with a combination of Tailwind classes and custom CSS variables.
- The design emphasizes accessibility with focus-visible styles and hover effects.
- Rounded corners are applied using a consistent border-radius variable (`--radius`).
- Typography is responsive.
- Scrollbars, selection, and code blocks are customized for a cohesive look.
- Prose elements are styled for rich text content, including headings, paragraphs, blockquotes, and tables.

## Guidelines for Designing New Components

When designing new components, follow these guidelines to ensure consistency and maintainability:

1. **Naming**:
   - Use PascalCase for component names.
   - Ensure the name is descriptive and reflects the component's purpose.

2. **Structure**:
   - Place the component in the appropriate folder under `src/components/`.
   - Use subfolders for related components (e.g., `Accordion/AccordionItem.astro`).

3. **Styling**:
   - Use Tailwind CSS classes for utility-first styling.
   - Leverage custom CSS variables defined in `global.css` for colors, spacing, and typography.
   - Ensure the component supports theming by adhering to the project's CSS variable conventions.

4. **Accessibility**:
   - Follow ARIA guidelines to ensure the component is accessible.
   - Use `focus-visible` styles for keyboard navigation.

5. **Responsiveness**:
   - Design components to be responsive and mobile-friendly.
   - Use Tailwind's responsive utilities to handle different screen sizes.

6. **Reusability**:
   - Keep the component modular and reusable.
   - Avoid hardcoding values; use props and slots for flexibility.

7. **Documentation**:
   - Add a corresponding `.mdx` file in the `content/Components/` folder to document the component's usage.
   - Include examples and code snippets in the documentation.
