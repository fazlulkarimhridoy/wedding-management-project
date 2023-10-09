/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeCard = ({ data }) => {
    const { id, name, image, description, price } = data;

    return (
        <div>


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