export default function Button({className, children}) {

    return (
        <span className={className}>
            {children}
        </span>
    );
}