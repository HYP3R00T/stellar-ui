import type { GlobalnavigationMenu } from "@/lib/types";

export const SITE = {
  website: "https://hyperoot.dev",
  author: "Rajesh",
  repo: "https://github.com/HYP3R00T/stellar-ui",
  branch: "master",
  title: "Hyperoot",
  description:
    "A portfolio and blog showcasing Rajesh's skills in DevOps, Python, and Cloud.",
  image: "/og-image.jpg",
  imageAlt: "Check out hyperoot.dev",
  contentType: "Portfolio",
  twitterHandle: "@HYP3R00T",
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
};

// Don't delete anything. You can use 'true' or 'false'.
// These are global settings
export const docConfig = {
  hide_table_of_contents: false,
  hide_breadcrumbs: false,
  hide_side_navigations: false,
  hide_datetime: false,
  hide_time: true,
  hide_search: false,
  hide_repo_button: false,
  hide_author: true,
};

export const navigationMenu: GlobalnavigationMenu = {
  home: {
    icon: "github",
    label: "Home",
    href: "/",
    items: {
      "Get Started": {
        icon: "discord",
        hide_section_name: true,
        items: ["/getting-started"],
      },
      Guides: {
        icon: "github",
        items: [
          "/guides/authoring-content-in-md",
          "/guides/authoring-content-in-mdx",
          "/guides/breadcrumbs",
          "/guides/pages",
          "/guides/sidebar-navigation",
          "/guides/site-search",
          "/guides/table-of-contents",
        ],
      },
      Reference: {
        icon: "discord",
        items: ["/reference/configuration-ref", "/reference/frontmatter-ref"],
      },
    },
  },
  guides: {
    icon: "close",
    label: "User Interface",
    href: "/components/alert",
    items: {
      Components: {
        icon: "github",
        hide_section_name: false,
        items: [
          "/components/alert",
          "/components/aspectratio",
          "/components/badge",
          "/components/button",
          "/components/checkbox",
          "/components/input",
          "/components/pagination",
          "/components/select",
        ],
      },
    },
  },
};
