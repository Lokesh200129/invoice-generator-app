import { UseFormRegister } from 'react-hook-form';
import { formInput } from '../../types/global';
import Input from '../ui/Input';

interface AddressSectionProps {
    title: string;
    prefix: 'company' | 'client';
    register: UseFormRegister<formInput>;
}

export const AddressSection = ({ title, prefix, register }: AddressSectionProps) => {
    return (
        <section className="w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
            <div className="space-y-3">
                <Input
                    type="text"
                    placeholder={`Enter ${title} Business Name`}
                    {...register(`${prefix}Name` as keyof formInput)}
                />
                <Input
                    type="email"
                    placeholder={`Enter ${title} Email`}
                    {...register(`${prefix}Email` as keyof formInput)}
                />
                <textarea
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg "
                    placeholder={`Enter ${title} Address (street, city, state, PIN, country)`}
                    {...register(`${prefix}Address` as keyof formInput)}
                />
            </div>
        </section>
    );
};