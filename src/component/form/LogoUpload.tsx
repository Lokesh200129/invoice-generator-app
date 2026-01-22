"use client";
import { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

interface LogoUploadProps {
    isUploaded: boolean;
    setIsUploaded: (val: boolean) => void;
    logoRef: React.MutableRefObject<string>;
    onLogoChange: (url: string) => void;
}

export const LogoUpload = ({ isUploaded, setIsUploaded, logoRef, onLogoChange }: LogoUploadProps) => {
    const [preview, setPreview] = useState<string | null>(null);
    if (!isUploaded && preview !== null) {
        setPreview(null);
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
            toast.error("Only JPG, JPEG, and PNG files are allowed.");
            e.target.value = "";
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            toast.error("File size must be less than 2MB.");
            e.target.value = "";
            return;
        }
        if (logoRef.current) URL.revokeObjectURL(logoRef.current);
        const previewUrl = URL.createObjectURL(file);
        logoRef.current = previewUrl;
        setPreview(previewUrl);
        onLogoChange(previewUrl);
        setIsUploaded(true);
    };

    const removeFile = (e: React.MouseEvent) => {
        e.preventDefault();
        if (logoRef.current) URL.revokeObjectURL(logoRef.current);
        logoRef.current = '';
        setPreview(null);
        setIsUploaded(false);
        onLogoChange('');
        const input = document.getElementById('dropzone-file') as HTMLInputElement;
        if (input) input.value = "";
    };

    return (
        <section>
            <h2 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3'>
                Company Logo
            </h2>
            <div className='flex items-center justify-center w-full'>
                <label
                    htmlFor="dropzone-file"
                    className="relative flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors overflow-hidden"
                >
                    {isUploaded && preview ? (
                        <div className="relative w-full h-full flex items-center justify-center p-2">
                            <div className='flex flex-col justify-center items-center gap-4'>
                                <Image
                                    src={preview}
                                    alt="Logo Preview"
                                    height={100}
                                    width={100}
                                    className="size-22 object-cover rounded-md"
                                />
                                <p className='text-sm text-green-500'>Image Uploaded Successfully!</p>
                            </div>
                            <button
                                type="button"
                                onClick={removeFile}
                                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-all z-10 shadow-md"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="text-sm text-gray-700 font-semibold">Click to upload</p>
                            <p className="text-xs text-gray-500 mt-1">PNG, JPG or JPEG (Max 2MB)</p>
                        </div>
                    )}

                    <input
                        type="file"
                        id="dropzone-file"
                        accept="image/png, image/jpeg, image/jpg"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
            </div>
        </section>
    );
};