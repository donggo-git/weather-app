import { useState, useEffect } from 'react'

const useDebounce = function (value, delay = 500) {
    const [debouncedValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handler)
    }, [value])
    return debouncedValue
}

export default useDebounce;