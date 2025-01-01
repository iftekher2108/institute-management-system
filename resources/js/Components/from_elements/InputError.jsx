export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p
            {...props}
            className={'label-text text-red-600 ' + className}
        >
            {message}
        </p>
    ) : null;
}
