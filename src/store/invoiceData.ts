import { create } from 'zustand';
import { formInput } from '../types/global';
import { invoiceData } from '../utils/data';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';

type invoiceStore = {
    invoice: formInput | null;
    setInvoice: (invoice: formInput) => void;
    clearInvoice: () => void;
    invoiceRef: HTMLDivElement | null;
    setInvoiceRef: (ref: HTMLDivElement | null) => void;
    downloadPDF: () => Promise<void>;
}

export const useInvoiceStore = create<invoiceStore>((set, get) => ({
    invoice: invoiceData,
    setInvoice: (invoice) => set({ invoice }),
    clearInvoice: () => set({ invoice: invoiceData }),
    invoiceRef: null,
    setInvoiceRef: (ref) => set({ invoiceRef: ref }),
    downloadPDF: async () => {
        const { invoiceRef } = get();
        if (!invoiceRef) return;
        try {
            const canvas = await html2canvas(invoiceRef);
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: "a4",
            })
            const width = pdf.internal.pageSize.getWidth();
            const height = (canvas.height * width) / canvas.width;
            pdf.addImage(imgData, "PNG", 0, 0, width, height);
            pdf.save("Easy_Invoice.pdf");
        } catch (err) {
            console.log(err)
        }
    }
}));