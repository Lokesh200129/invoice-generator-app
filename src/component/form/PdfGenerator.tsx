import { ArrowDownToLine } from 'lucide-react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import InvoicePDF from '../InvoicePdf'
import { formInput } from '@/src/types/global'

interface PdfProp {
    invoice: formInput,
    isEmpty: boolean
}

const PdfGenerator = ({ invoice, isEmpty }: PdfProp) => {
    return (
        <div>
            <PDFDownloadLink
                document={<InvoicePDF data={invoice!} />}
                fileName={`invoice-${invoice?.invoiceNumber}.pdf`}
                className="w-full md:w-1/3"
            >
                <button
                    type="button"
                    disabled={isEmpty}
                    className={`w-full py-2.5 px-4 text-sm font-semibold rounded-lg shadow-sm transition-colors  flex items-center justify-center gap-2
                    ${isEmpty
                            ? "bg-gray-100 cursor-not-allowed text-gray-400"
                            : "bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer "}`}
                >
                    <ArrowDownToLine width={18} height={20} />
                    Download
                </button>
            </PDFDownloadLink>
        </div>
    )
}

export default PdfGenerator