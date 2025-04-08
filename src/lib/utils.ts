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
};

type SectionGroupConfig = {
    icon?: string;
    items: string[];
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

    for (const [sectionTitle, { icon, items }] of Object.entries(sectionConfig)) {
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
            items: sectionItems,
        });
    }

    return menu;
}


