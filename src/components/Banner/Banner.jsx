// import { BannerImage } from "./Images";

const Banner = () => {
    return (
        <div className="container mx-auto  p-6">
            <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div
                        className="mx-auto pt-16 max-w-lg text-center ltr:sm:text-left rtl:sm:text-right"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Welcome to <span className="font-extrabold text-red-500">PremMoyBibaho</span>
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            Our goal is to make your wedding memorable. All above this is the only occasion to be remembered.
                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Click to Explore more...
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt="Student"
                    src="https://i.ibb.co/SmnZfNf/Sidharth-Malhotra-Kiara-Advani-Wedding-First-photos-of-Shershaah-couple-are-etheteral-Ab-humari-perm.jpg"
                    className="h-56 w-full object-cover sm:h-full"
                />
            </section>
        </div>
    );
};

export default Banner;
