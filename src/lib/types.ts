import type { MarkdownHeading } from "astro";
import type { CollectionEntry } from "astro:content";

// For HeadSEO.astro
export interface HeadSEOProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    contentType: string;
}

// For BaseLayout.astro
export interface BaseLayoutProps extends HeadSEOProps {
    author: string;
    pubDatetime?: Date;
    modDatetime?: Date | null;
    draft: boolean;
    tags: string[];
    hide_breadcrumbs: boolean;
    hide_toc: boolean;
    hide_sidenav: boolean;
    max_width: boolean;
    headings: Heading[];
}

// Make similar changes to config.ts in content folder
export type DocsData = {
    title: string;
    author: string;
    pubDatetime?: Date;
    modDatetime?: Date | null;
    description?: string;
    draft: boolean;
    tags: string[];
    hide_breadcrumbs: boolean;
    hide_toc: boolean;
    hide_sidenav: boolean;
    max_width: boolean;
};

// Define the type for docs collection
export type DocsEntry = CollectionEntry<"docs"> & {
    data: DocsData;
};

// For [...id].astro
export interface Heading {
    text: string;
    depth: number;
    id: string;
}

// For DocsLayout.astro
export interface DocsLayoutProps extends DocsData {
    headings: Heading[];
}

// Define the type for menu items to created nested object
export type MenuItemWithDraft = {
    title?: string;
    id: string;
    draft: boolean;
    children: MenuItemWithDraft[];
};

// Define the props for the SideNavMenu component
export type SideNavMenuProps = {
    items: MenuItemWithDraft[];
    level: number;
};

export interface MDHeading {
    depth: number;
    id: string;
    text: string;
}

// Define heading hierarchy so that we can generate ToC
export interface HeadingHierarchy extends MDHeading {
    subheadings: HeadingHierarchy[];
}

// For MainContent.astro
export interface MainContentProps extends DocsLayoutProps { }

export type MenuItem = {
    title?: string;
    id: string;
    children: MenuItem[];
};

// For TableofContents.astro
export interface HeadingProps {
    headings: {
        depth: number;
        text: string;
        id: string;
    }[];
}