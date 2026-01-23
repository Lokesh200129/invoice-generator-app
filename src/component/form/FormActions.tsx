'use client';
import { useInvoiceStore } from "@/src/store/invoiceStore";
import { RotateCcw, Printer } from 'lucide-react'
import dynamic from "next/dynamic";

const PdfGenerator = dynamic(() => import("./PdfGenerator"), {
    ssr: false,
    loading: () => <p>Loading PDF...</p>,
});

interface FormActionsProps {
    onReset: () => void;
    onPrint: () => void;
}
export const FormActions = ({ onReset, onPrint }: FormActionsProps) => {
    const invoice = useInvoiceStore((state) => state.invoice);
    const isEmpty = (invoice?.clientName === '');
    console.log(isEmpty)

    return (
        <div className="flex flex-col md:flex-row gap-3 py-4 no-print">
            <div className="flex w-full flex-1 gap-3">
                <button
                    type="button"
                    className={`w-full py-2.5 px-4 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2
                    ${isEmpty
                            ? "bg-gray-100 cursor-not-allowed text-gray-400"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"}`}
                    onClick={onReset}
                    disabled={isEmpty}
                >
                    <RotateCcw width={18} height={20} />
                    Reset
                </button>

                <button
                    type="button"
                    className={`w-full py-2.5 px-4 text-sm font-semibold  rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2
                    ${isEmpty
                            ? "bg-gray-100 cursor-not-allowed text-gray-400"
                            : "bg-blue-500  hover:bg-blue-600 cursor-pointer text-white"}`}
                    onClick={onPrint}
                    disabled={isEmpty}
                >
                    <Printer width={18} height={20} />
                    Print
                </button>
            </div>
            < PdfGenerator invoice={invoice!} isEmpty={isEmpty} />

        </div >
    );
};

