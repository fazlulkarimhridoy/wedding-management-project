
const Footer = () => {
    return (
        <div className="container mx-auto">
            <footer className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center text-teal-600 sm:justify-start">
                        <span className="font-extrabold text-3xl text-red-500">PremMoyBibaho</span>
                        </div>

                        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                            Copyright &copy; 2022. All rights reserved for PremMoyBibaho.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;