export const SITE = {
    website: "https://hyperoot.dev",
    author: "Rajesh",
    repo: "https://github.com/HYP3R00T/v4.hyperoot.dev",
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
}

// Don't delete anything. You can use 'true' or 'false'.
// These are global settings
export const docconfig = {
    hide_table_of_contents: false,
    hide_breadcrumbs: false,
    hide_side_navigations: false,
    hide_datetime: false,
    hide_time: true,
    hide_search: false,
    hide_repo_button: false,
    hide_author: true,
};

export type MenuSectionConfig = {
    icon?: string;
    items: string[];
};

export type TopLevelMenuConfig = {
    icon?: string;
    label?: string;
    items: {
        [sectionTitle: string]: MenuSectionConfig;
    };
};

export type GlobalMenuConfig = {
    [sectionName: string]: TopLevelMenuConfig;
};

export const menuConfig: GlobalMenuConfig = {
    home: {
        icon: "github",
        label: "Home",
        items: {
            "Get Started": {
                icon: "discord",
                items: ["/get-started"],
            },
            "Components": {
                icon: "github",
                items: [
                    "/components/aspectratio",
                    "/components/badge",
                    "/components/button",
                    "/components/checkbox",
                    "/components/input",
                    "/components/pagination",
                ],
            },
        }
    },
    guides: {
        icon: "close",
        label: "Guides",
        items: {
            "Overview": {
                icon: "discord",
                items: ["/guides/overview", "/guides/overview2"],
            },
            "Development process": {
                icon: "github",
                items: [
                    "/guides/develop-an-app",
                    "/guides/configure-app-config",
                    "/guides/environment-variables",
                ],
            },
        },
    }
};
