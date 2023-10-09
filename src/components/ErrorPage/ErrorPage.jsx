import { Link } from "react-router-dom";
import image from "../../assets/404.png";
const ErrorPage = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="card w-1/2 bg-base-100">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Page not found!</h2>
          <p>Want to go back to home page?</p>
          <div className="card-actions">
            <Link to="/">
              <button className="btn btn-primary">Go Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
