import type {
    HeadingHierarchy,
    MDHeading,
} from "@/lib/types";

// Helper function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// create headings for ToC
export function createHeadingHierarchy(headings: MDHeading[]) {
    const topLevelHeadings: HeadingHierarchy[] = [];

    headings.forEach((heading) => {
        const h = {
            ...heading,
            subheadings: [],
        };

        if (h.depth >= 2) {
            topLevelHeadings.push(h);
        } else {
            let parent = topLevelHeadings[topLevelHeadings.length - 1];
            if (parent) {
                parent.subheadings.push(h);
            }
        }
    });

    return topLevelHeadings;
}


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
};

export function buildMenu(items: DocsEntry[], menuConfig: Record<string, { icon: string; items: string[] }>): MenuSection[] {
    const idToEntry = new Map(items.map(item => [`/${item.id.toLowerCase()}`, item]));

    const menu: MenuSection[] = [];

    for (const [sectionTitle, sectionConfig] of Object.entries(menuConfig)) {
        const sectionItems: MenuLink[] = [];

        for (const path of sectionConfig.items) {
            const entry = idToEntry.get(path.toLowerCase());

            // fallback to path-based title if entry is missing
            const title = entry?.data.title || path.split("/").pop()?.replace(/-/g, " ") || path;
            const href = path;

            sectionItems.push({
                title: capitalizeFirstLetter(title),
                href
            });
        }

        menu.push({
            title: sectionTitle,
            icon: sectionConfig.icon ?? null,
            items: sectionItems
        });
    }

    return menu;
}