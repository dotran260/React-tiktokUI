import { forwardRef, useState } from "react";

function Image({ src, alt, ...props }, ref) {
    const [fallback, setFallback] = useState(false)
    const handleError = () => {
        setFallback(require('~/assets/images/no-image.png'));
    }
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <>
            <img ref={ref} src={fallback || src} alt={alt} onError={handleError} {...props} />
        </>

    );
}

export default forwardRef(Image);