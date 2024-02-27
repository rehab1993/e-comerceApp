export interface Welcome {
    results:  number;
    metadata: Metadata;
    data:     Products[];
}

export interface Products {
    sold:                number;
    images:              string[];
    subcategory:         Brand[];
    ratingsQuantity:     number;
    _id:                 string;
    title:               string;
    slug:                string;
    description:         string;
    quantity:            number;
    price:               number;
    imageCover:          string;
    category:            Brand;
    brand:               Brand;
    ratingsAverage:      number;
    createdAt:           Date;
    updatedAt:           Date;
    id:                  string;
    priceAfterDiscount?: number;
    availableColors?:    any[];
}

export interface Brand {
    _id:       string;
    name:      string;
    slug:      string;
    image?:    string;
    category?: Categoryy;
}

export enum Categoryy {
    The6439D2D167D9Aa4Ca970649F = "6439d2d167d9aa4ca970649f",
    The6439D58A0049Ad0B52B9003F = "6439d58a0049ad0b52b9003f",
    The6439D5B90049Ad0B52B90048 = "6439d5b90049ad0b52b90048",
}

export interface Metadata {
    currentPage:   number;
    numberOfPages: number;
    limit:         number;
    nextPage:      number;
}


export interface Category {
    _id:       string;
    name:      string;
    slug:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}

export interface SingleProduct {
    sold:            number;
    images:          string[];
    subcategory:     Brand[];
    ratingsQuantity: number;
    _id:             string;
    title:           string;
    slug:            string;
    description:     string;
    quantity:        number;
    price:           number;
    imageCover:      string;
    category:        Brand;
    brand:           Brand;
    ratingsAverage:  number;
    createdAt:       Date;
    updatedAt:       Date;
    __v:             number;
    reviews:         any[];
    id:              string;
}