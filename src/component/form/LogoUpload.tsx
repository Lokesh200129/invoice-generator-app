"use client";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Upload, X } from 'lucide-react';

interface LogoUploadProps {
    isUploaded: boolean;
    setIsUploaded: (val: boolean) => void;
    logoRef: React.MutableRefObject<string>;
    onLogoChange: (url: string) => void;
}

export const LogoUpload = ({ isUploaded, setIsUploaded, logoRef, onLogoChange }: LogoUploadProps) => {
    const [fileName, setFileName] = useState<string>("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
            toast.error("Only JPG, JPEG, and PNG files are allowed.");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            toast.error("File size must be less than 2MB.");
            return;
        }

        if (logoRef.current) URL.revokeObjectURL(logoRef.current);

        const url = URL.createObjectURL(file);
        logoRef.current = url;
        setFileName(file.name);
        onLogoChange(url);
        setIsUploaded(true);
    };

    const removeFile = () => {
        if (logoRef.current) URL.revokeObjectURL(logoRef.current);
        logoRef.current = '';
        setFileName("");
        setIsUploaded(false);
        onLogoChange('');
    };

    return (
        <section className="max-w-sm">
            <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                Company Logo
            </h2>

            <div className="flex items-center gap-3">
                {!isUploaded ? (
                    <label className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all active:scale-95">
                        <Upload size={16} className="text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">Upload Logo</span>
                        <input
                            type="file"
                            className="hidden"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleFileChange}
                        />
                    </label>
                ) : (
                    <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg animate-in fade-in zoom-in duration-200">
                        <span className="font-medium text-blue-700 truncate">
                            {fileName}
                        </span>
                        <button
                            type="button"
                            onClick={removeFile}
                            className="p-0.5 hover:bg-blue-200 rounded-full text-blue-600 transition-colors"
                        >
                            <X />
                        </button>
                    </div>
                )}

                {!isUploaded && (
                    <p className="text-[10px] text-gray-400 leading-tight">
                        PNG, JPG <br /> Max 2MB
                    </p>
                )}
            </div>
        </section>
    );
};