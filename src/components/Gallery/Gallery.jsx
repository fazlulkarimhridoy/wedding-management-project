import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Gallery = () => {

    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }, []);



    return (
        <div className="container mx-auto">

            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-red-500 sm:text-4xl">
                            Wedding Images
                        </h2>

                        <p className="max-w-md mx-auto mt-4 text-gray-500">
                            The aim of our innovative wedding planning software is to help both professionals, and marrying couples, put together the perfect celebration. By creating tools that are now invaluable to expert wedding planners, we believe we are helping the wedding industry as a whole
                        </p>
                    </header>

                    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                        <li data-aos="fade-right">
                            <a href="#" className="relative block group">
                                <img
                                    src="https://i.ibb.co/K0N0PMS/services-02-free-img.jpg"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />
                            </a>
                        </li>

                        <li data-aos="fade-right">
                            <a href="#" className="relative block group">
                                <img
                                    src="https://i.ibb.co/2t39Th8/services-03-free-img.jpg"
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />
                            </a>
                        </li>

                        <li data-aos="fade-left" className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            <a href="#" className="relative block group">
                                <img
                                    src="https://i.ibb.co/vQsg0bC/services-01-free-img.jpg"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />


                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Gallery;