import { create } from 'zustand';
import { formInput } from '../types/global';
import { invoiceData } from '../utils/data';

type invoiceStore = {
    invoice: formInput | null;
    setInvoice: (invoice: formInput) => void;
    clearInvoice: () => void;
}

export const useInvoiceStore = create<invoiceStore>((set) => ({
    invoice: invoiceData,
    setInvoice: (invoice) => set({ invoice }),
    clearInvoice: () => set({ invoice: invoiceData }),
}));