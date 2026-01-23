"use client";
import { useState, useRef, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { formInput } from "@/src/types/global";
import { useInvoiceStore } from "@/src/store/invoiceStore";
// Sub-components
import { LogoUpload } from "./LogoUpload";
import { InvoiceDetails } from "./InvoiceDetails";
import { AddressSection } from "./AddressSection";
import { ItemList } from "./ItemList";
import { TaxAndCurrency } from "./TaxAndCurrency";
import { FormActions } from "./FormActions";
import { parseNumericInput } from "@/src/utils/parseNumber";

const Form = () => {
    const [isUploaded, setIsUploaded] = useState(false);
    const setInvoice = useInvoiceStore((state) => state.setInvoice);
    const logoRef = useRef('');

    const { register, control, reset, watch } = useForm<formInput>({
        defaultValues: { items: [{ description: "", quantity: 0, price: 0 }] }
    });
    const currentFormValues = watch();

    useEffect(() => {
        const finalData = {
            ...currentFormValues,
            tax: parseNumericInput(currentFormValues.tax),
            discount: parseNumericInput(currentFormValues.discount),
            items: currentFormValues.items.map(item => ({
                ...item,
                quantity: parseNumericInput(item.quantity),
                price: parseNumericInput(item.price)
            })),
            companyLogo: logoRef.current,
        }
        setInvoice(finalData);
    }, [currentFormValues, setInvoice]);

    const handleReset = () => {
        if (logoRef.current) URL.revokeObjectURL(logoRef.current);
        logoRef.current = '';
        setIsUploaded(false);
        reset();
    };
    return (
        <div className='bg-white p-6 w-full rounded-xl shadow-lg border border-gray-300 h-full overflow-y-auto no-print'>
            <h1 className='text-2xl font-bold text-gray-800 mb-6'>Edit Invoice Details</h1>
            <form className='space-y-6'>
                <LogoUpload
                    isUploaded={isUploaded}
                    setIsUploaded={setIsUploaded}
                    logoRef={logoRef}
                    onLogoChange={(url) => setInvoice({ ...watch(), companyLogo: url })}
                />
                <InvoiceDetails register={register} />
                <hr className='border-gray-400' />
                <div className='flex flex-col md:flex-row gap-4'>
                    <AddressSection title="From" prefix="company" register={register} />
                    <AddressSection title="To" prefix="client" register={register} />
                </div>
                <hr className='border-gray-400' />
                <ItemList register={register} control={control} />
                <hr className='border-gray-400' />
                <TaxAndCurrency register={register} />
            </form>
            <FormActions onReset={handleReset} onPrint={() => window.print()} />
        </div>
    );
};

export default Form;