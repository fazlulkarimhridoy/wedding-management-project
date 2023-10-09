import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';


const Login = () => {
  const { login, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();




  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        swal("Successfully registered via google!", "success");
        navigate(location?.state ? location.state : '/')

      })
      .catch(error => {
        console.log(error);
        swal("oops something went wrong!", "error");
      })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then(result => {
        console.log(result.user);
        console.log("signed in");
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error)
      })
  }









  return (
    <div className="flex justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-red-600 sm:text-3xl">
            Sign In
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Welcome to PremMoyBibaho. Looks like you are having trouble accessing features. Sign in to explore everything.
          </p>

          <form onSubmit={handleLogin}
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">Fill these to sign in</p>

            <div>
              <div className="relative">
                <input
                  type="email"
                  required
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
                  required
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
              Sign In
            </button>
            <div className="text-center text-sm text-gray-500">
              No account?
              <Link to="/register"><p className="underline inline-block">Register</p></Link>
            </div>
          </form>
          <button onClick={handleGoogleSignIn}
            type="submit"
            className="block w-full mt-4 rounded-lg bg-sky-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign In with Google
          </button>



        </div>
      </div>
    </div>
  );
};

export default Login;
