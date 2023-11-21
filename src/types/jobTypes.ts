type ContentItemsType = {
    content: string;
    items: string[];
};

export type JobType = {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: ContentItemsType;
    role: ContentItemsType;
};

export type JobsArrayType = JobType[];
