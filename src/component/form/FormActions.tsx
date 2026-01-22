import { useInvoiceStore } from "@/src/store/invoiceData";
interface FormActionsProps {
    onReset: () => void;
    onPrint: () => void;
}
export const FormActions = ({ onReset, onPrint }: FormActionsProps) => {
    const invoice = useInvoiceStore((state) => state.invoice);
    const downloadPDF = useInvoiceStore((state) => state.downloadPDF);
    const isEmpty = !invoice?.clientName && invoice?.items.length === 0;

    return (
        <div className="flex flex-col md:flex-row gap-3 py-4 no-print">
            <div className="flex w-full flex-1 gap-3">
                <button
                    type="button"
                    className={`w-full py-2.5 px-4 text-sm font-semibold rounded-lg transition-colors 
                    ${isEmpty
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"}`}
                    onClick={onReset}
                    disabled={isEmpty}
                >
                    Reset All
                </button>

                <button
                    type="button"
                    className={`w-full py-2.5 px-4 text-sm font-semibold text-white rounded-lg shadow-sm transition-colors
                    ${isEmpty
                            ? "bg-blue-300 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 cursor-pointer"}`}
                    onClick={onPrint}
                    disabled={isEmpty}
                >
                    Print
                </button>
            </div>
            <button
                type="button"
                onClick={downloadPDF}
                disabled={isEmpty}
                className={`w-full md:w-1/3 py-2.5 px-4 text-sm font-semibold text-white rounded-lg shadow-sm transition-colors
                    ${isEmpty
                        ? "bg-green-300 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 cursor-pointer"}`}
            >
                Download PDF
            </button>
        </div>
    );
};