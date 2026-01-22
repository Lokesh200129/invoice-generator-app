import { UseFormRegister, Control, useFieldArray } from 'react-hook-form';
import { formInput } from '../../types/global';
import Input from '../ui/Input';

export const ItemList = ({ register, control }: { register: UseFormRegister<formInput>, control: Control<formInput> }) => {
    const { fields, append, remove } = useFieldArray({ control, name: "items" });

    return (
        <section>
            <h2 className='text-lg font-semibold mb-3'>Items</h2>
            {fields.map((field, index) => (
                <div key={field.id} className='space-y-3 border-b pb-4 mb-4'>
                    <Input placeholder='Product Name' {...register(`items.${index}.description`)} />
                    <div className='flex gap-4 flex-col md:flex-row'>
                        <div className='w-full  flex flex-col gap-2'>
                            <label htmlFor="quantity" className="text-sm font-medium text-gray-700 ">Quantity</label>
                            <Input type="text" id='quantity' placeholder='Qty' {...register(`items.${index}.quantity`)} />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="price" className="text-sm font-medium text-gray-700 ">Price</label>
                            <Input type="text" id='price' placeholder='Price' {...register(`items.${index}.price`)} />
                        </div>
                        <div className='flex flex-col w-full md:w-24 items-center justify-end'>
                            <label htmlFor=""></label>
                            <button
                                type="button"

                                disabled={fields.length <= 1}
                                onClick={() => remove(index)}
                                className={`text-white font-bold text-xl py-1.5 rounded-lg w-full transition-colors
                                 ${fields.length <= 1
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-red-500 hover:bg-red-600 cursor-pointer"
                                    }`}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <button type="button" className='w-full py-2 text-blue-800 bg-blue-50 cursor-pointer border border-gray-400 rounded-lg hover:bg-blue-200' onClick={() => append({ description: "", quantity: 0, price: 0 })}>
                + Add Item
            </button>
        </section>
    );
};