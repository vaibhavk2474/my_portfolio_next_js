import { RefObject, useEffect, useRef, useState } from "react";


function useScroll(): [RefObject<HTMLDivElement | null>, boolean, () => void] {
    const [isBottom, setIsBottom] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScrollButtonClick = () => {
        if (!containerRef.current) return;

        if (isBottom) {
            // If at the bottom, scroll all the way back up smoothly
            containerRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            // Otherwise, keep scrolling down incrementally
            containerRef.current.scrollBy({
                top: 200,
                behavior: "smooth",
            });
        }
    };


    useEffect(() => {

        const element = containerRef.current
        if (!element) {
            console.error('Scroll container not found')
            return;
        }

        const handleScroll = (e: Event) => {
            const target = e.currentTarget as HTMLDivElement;
            const { scrollTop, clientHeight, scrollHeight } = target;
            const reachedBottom = scrollTop + clientHeight >= scrollHeight - 2;
            setIsBottom(reachedBottom);
        };

        element.addEventListener('scroll', handleScroll)

        return () => {
            element?.removeEventListener('scroll', handleScroll)
        }
    }, [])



    return [containerRef, isBottom, handleScrollButtonClick]
}

export default useScroll;
