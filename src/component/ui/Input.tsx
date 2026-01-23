interface data extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input = ({ className, ...props }: data) => {
    return (
        <div>
            <input {...props} className={`${className || ''} border border-gray-400 px-4 py-2 rounded-lg w-full`} />
        </div>
    )
}
export default Input