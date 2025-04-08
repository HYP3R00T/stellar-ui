// Helper function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};


type DocsEntry = {
    id: string; // e.g., "components/button"
    data: {
        title: string;
        draft?: boolean;
    };
};

type MenuLink = {
    title: string;
    href: string;
};

type MenuSection = {
    title: string;
    icon?: string | null;
    items: MenuLink[];
    hideTitle?: boolean;
};

type SectionGroupConfig = {
    icon?: string;
    items: string[];
    hide_section_name?: boolean;
};

type SectionConfig = {
    label?: string;
    icon?: string;
    items: Record<string, SectionGroupConfig>;
};

export function buildMenu(
    docs: DocsEntry[],
    sectionConfig: SectionConfig["items"]
): MenuSection[] {
    const idToEntry = new Map(
        docs.map((entry) => [`/${entry.id.toLowerCase()}`, entry])
    );

    const menu: MenuSection[] = [];

    for (const [sectionTitle, { icon, items, hide_section_name }] of Object.entries(sectionConfig)) {
        const sectionItems: MenuLink[] = [];

        for (const path of items) {
            const entry = idToEntry.get(path.toLowerCase());

            const title =
                entry?.data.title ||
                path.split("/").pop()?.replace(/-/g, " ") ||
                path;

            sectionItems.push({
                title: capitalizeFirstLetter(title),
                href: path,
            });
        }

        menu.push({
            title: sectionTitle,
            icon: icon ?? null,
            hideTitle: hide_section_name ?? false,
            items: sectionItems,
        });
    }

    return menu;
}

import { navigationMenu } from "config";

type Options = {
    repo?: string;
    branch?: string;
    docsDir?: string;
    ext?: string;
};

export function getEditUrl(pathname: string, options?: Options): string {
    const {
        repo = "https://github.com/HYP3R00T/stellar-ui",
        branch = "master",
        docsDir = "content",
        ext = ".mdx",
    } = options || {};

    const parts = pathname.replace(/^\/+/, "").split("/"); // e.g., ["guides", "authoring-content-in-md"]
    const sectionKey = parts[0]; // "guides"

    // Fallback: return the default GitHub repo if not found
    if (!navigationMenu[sectionKey]) return repo;

    // Try to extract the actual directory name from the section titles
    // We use the label if it exists, or capitalize the key
    const sectionConfig = navigationMenu[sectionKey];
    const sectionFolder = sectionConfig.label || capitalizeFirstLetter(sectionKey);

    // Reconstruct path with corrected casing
    const filePath = [docsDir, sectionFolder, ...parts.slice(1)].join("/") + ext;

    return `${repo}/edit/${branch}/${filePath}`;
}
