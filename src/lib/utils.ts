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

export function buildMenu(
    docs: DocsEntry[],
    sectionConfig: Record<string, { icon?: string; items: string[] }>
): MenuSection[] {
    // Create a map for fast lookup based on lower-case id (prefixed with a slash)
    const idToEntry = new Map(
        docs.map((entry) => [`/${entry.id.toLowerCase()}`, entry])
    );

    const menu: MenuSection[] = [];

    for (const [sectionTitle, { icon, items }] of Object.entries(sectionConfig)) {
        const sectionItems: MenuLink[] = [];

        for (const path of items) {
            const entry = idToEntry.get(path.toLowerCase());
            // Use entry title if available, otherwise derive it from the path.
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
            items: sectionItems,
        });
    }

    return menu;
}

