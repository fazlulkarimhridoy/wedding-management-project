/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HomeCard = ({ data }) => {
    const { id, name, image, description, price } = data;

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


    return(
        <div data-aos="zoom-out-up">


            <article
                className="overflow-hidden text-left rounded-lg border border-gray-100 bg-white shadow-sm"
            >
                <img
                    alt="Office"
                    src={image}
                    className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                    <a href="#">
                        <h3 className="text-lg font-medium text-gray-900">
                            {name}
                        </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        {description}
                    </p>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        {price} $
                    </p>

                    <div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                        <Link to={`/package/${id}`}>
                            Find out more
                            <span
                                aria-hidden="true"
                                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </Link>
                    </div>

                </div>
            </article>
        </div>
    );
};

export default HomeCard;