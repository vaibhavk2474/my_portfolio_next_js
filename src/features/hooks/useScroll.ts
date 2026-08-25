import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";

function useScroll(pathname: string | undefined): [RefObject<HTMLDivElement | null>, boolean, () => void, () => void, boolean] {
    const [isBottom, setIsBottom] = useState<boolean>(false);
    const [sholudShowScroll, setSholudShowScroll] = useState<boolean>(true);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScrollTop = () => {
        if (!containerRef.current) return;

        containerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

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
            console.log('running handleScroll', element.tagName)
            const target = e.currentTarget as HTMLDivElement;
            const { scrollTop, clientHeight, scrollHeight } = target;
            const reachedBottom = scrollTop + clientHeight >= scrollHeight - 2;
            setIsBottom(reachedBottom);
        };

        if (element.scrollHeight > element.clientHeight) {
            setSholudShowScroll(true)
            element.addEventListener('scroll', handleScroll)
        } else {
            setSholudShowScroll(false)
        }

        return () => {
            element.removeEventListener('scroll', handleScroll)
        }
    }, [pathname])




    return [containerRef, isBottom, handleScrollButtonClick, handleScrollTop, sholudShowScroll]
}

export default useScroll;
