import { UseFormRegister } from 'react-hook-form';
import { formInput } from '../../types/global';
import { currencyData } from '../../utils/currencyData';
import Input from '../ui/Input';

export const TaxAndCurrency = ({ register }: { register: UseFormRegister<formInput> }) => {
    return (
        <section className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</h3>
                    <Input type="text" placeholder="0.0" {...register("tax")} />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Discount (%)</h3>
                    <Input type="text" placeholder="0.0" {...register("discount")} />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="w-full md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                    <select
                        {...register("currency")}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                        {currencyData.map((curr) => (
                            <option key={curr.code} value={curr.symbol}>
                                {curr.label} ({curr.symbol})
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-full md:w-1/2 pb-2 flex items-center  gap-2">
                    <input type="checkbox" id="signature" {...register("isSignInclude")} className="w-4 h-4" />
                    <label htmlFor="signature" className="text-sm font-medium text-gray-700 cursor-pointer ">
                        Include Signature Field
                    </label>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes/Terms</label>
                <Input type="text" placeholder="Enter the Notes/Terms" {...register("notes")} />
            </div>
        </section>
    );
};