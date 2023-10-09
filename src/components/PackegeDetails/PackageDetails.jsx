import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const PackageDetails = () => {
    const {reloading} = useContext(AuthContext);
    const { packageId } = useParams();
    const Idint = parseInt(packageId);
    const packageData = useLoaderData();
    const singleData = packageData.find(data => data.id === Idint);
    console.log(singleData);
    const { name, image, price, description } = singleData;
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="House"
                                    src={image}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    {name}
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    {description}
                                </p>
                                <p className="mt-4 text-gray-600">
                                    What we are offering?
                                </p>
                                <div className="mt-4 text-gray-600">
                                    <ul className="pl-4">
                                        <li>1: Venue planning</li>
                                        <li>2: Invitation card</li>
                                        <li>3: Decoration</li>
                                        <li>4: Photography and videography</li>
                                        <li>5: Catering</li>
                                        <li>6: Bridal Makeup</li>
                                        <li>7: Special Services</li>
                                    </ul>
                                </div>
                                <h2 className="text-2xl font-bold sm:text-3xl pt-4">
                                    Package price : {price}
                                </h2>

                                <a
                                    href="#"
                                    className="mt-8 inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
                                >
                                    Book Now
                                </a>
                                <div
                                    className="mt-8 ml-4 inline-block rounded border border-sky-600 bg-sky-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring active:text-sky-500"
                                >
                                    <Link to="/">Go to home page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PackageDetails;