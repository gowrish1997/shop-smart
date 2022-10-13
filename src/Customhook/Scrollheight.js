import { useState, useEffect } from 'react';

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
const [height,setHeight]=useState(0)
    useEffect(() => {
       
        let lastScrollY = window.pageYOffset;
        // function to run on scroll
        const updateScrollDirection = () => {
            setHeight(window.scrollY)
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection) {
              setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]); // run when scroll direction changes

    return {scrollDirection,height};
};
export default useScrollDirection

