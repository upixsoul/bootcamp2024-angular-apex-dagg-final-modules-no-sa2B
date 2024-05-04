export interface Item {
    id: string;
    title: string;
    prices: { [tag: string]: number };
    photos: Array<string>;
    description: string;
    offerDiscount?: number;
    }