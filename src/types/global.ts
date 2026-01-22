export interface formInput {
    companyLogo: string,
    companyName: string,
    companyEmail: string,
    companyAddress: string,
    invoiceNumber: string,
    date: string,
    clientName: string,
    clientEmail: string,
    clientAddress: string,
    tax: number,
    currency: string, 
    notes: string,
    discount: number,
    isSignInclude: boolean
    items: {
        description: string,
        quantity: number,
        price: number
    }[];
}

