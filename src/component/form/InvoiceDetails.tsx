import { UseFormRegister } from 'react-hook-form';
import { formInput } from '../../types/global';
import Input from '../ui/Input';

interface InvoiceDetailsProps {
  register: UseFormRegister<formInput>;
}

export const InvoiceDetails = ({ register }: InvoiceDetailsProps) => {
  // Helper for date picker support
  const handleDateClick = (e: React.MouseEvent<HTMLInputElement>) => {
    try {
      e.currentTarget.showPicker();
    } catch {
      console.log("Picker not supported");
    }
  };

  return (
    <div className='grid grid-cols-2 gap-4'>
      <div>
        <h3 className='text-sm font-medium text-gray-700 mb-1'>Invoice No</h3>
        <Input
          type="text"
          placeholder='Invoice No'
          {...register("invoiceNumber", { required: true })}
        />
      </div>
      <div>
        <h3 className='text-sm font-medium text-gray-700 mb-1'>Date</h3>
        <Input
          type="date"
          onClick={handleDateClick}
          className='cursor-pointer'
          {...register("date")}
        />
      </div>
    </div>
  );
};