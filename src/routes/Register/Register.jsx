/* eslint-disable no-undef */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';


const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                swal("Successfully registered via google!", "success");
                const user = result.user;
                console.log(user);
                console.log("google sign in");
            })
    }


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");


        // createUser
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log("registered");
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div className="flex justify-center">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-red-600 sm:text-3xl">
                        Create a new account
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Welcome to PremMoyBibaho. Want to be a member of PremMoyBibaho?
                        Then sign up now!
                    </p>

                    <form onSubmit={handleRegister}
                        action=""
                        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                    >
                        <p className="text-center text-lg font-medium">Fill these to create a new account</p>

                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter name"
                                    name="name"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                    name="email"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                    name="password"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Register
                        </button>
                        <div className="text-center text-sm text-gray-500">
                            Already have an account?
                            <Link to="/login"><p className="underline inline-block">Sign in</p></Link>
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn}
                        type="submit"
                        className="mx-auto block w-full mt-4 rounded-lg bg-lime-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign Up with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;