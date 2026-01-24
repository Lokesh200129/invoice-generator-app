import { UseFormRegister, Control, useFieldArray } from 'react-hook-form';
import { formInput } from '../../types/global';
import Input from '../ui/Input';
import { Trash2 } from 'lucide-react';

export const ItemList = ({ register, control }: { register: UseFormRegister<formInput>, control: Control<formInput> }) => {
    const { fields, append, remove } = useFieldArray({ control, name: "items" });

    return (
        <section>
            <h2 className='text-lg font-semibold mb-3'>Items</h2>
            {fields.map((field, index) => (
                <div key={field.id} className='space-y-3  pb-4 mb-4'>
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
                                title='Remove Item'
                                disabled={fields.length <= 1}
                                onClick={() => remove(index)}
                                className={` border border-gray-400 font-bold text-xl p-2.5 rounded-lg w-full transition-colors flex items-center justify-center 
                                 ${fields.length <= 1
                                        ? " text-gray-700 cursor-not-allowed"
                                        : "text-red-700 cursor-pointer"
                                    }`}
                            >
                                <Trash2 width={18} height={20} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <button type="button" title='Add New Item' className='w-full py-2 text-blue-800 bg-blue-50 cursor-pointer border border-gray-400 rounded-lg hover:bg-blue-100' onClick={() => append({ description: "", quantity: 0, price: 0 })}>
                + Add Item
            </button>
        </section>
    );
};