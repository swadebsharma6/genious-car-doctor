import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import image from "../assets/images/login/login.svg";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { signUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signUser(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        // get jwt token
        fetch(`http://localhost:5000/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            swal("Good job!", "User Login Successfully", "success");
            form.reset();
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="hero min-h-[800px]">
        <div className="hero-content grid md:grid-cols-2 gap-x-1 flex-col ">
          <div className="text-center lg:text-left">
            <img src={image} alt="login" className="w-3/4 mx-auto" />
          </div>
          <div className="card w-3/4 mx-auto shadow-2xl border border-primary">
            <h2 className="text-2xl text-red-500 text-center font-bold py-4">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-error">
                  Login
                </button>
              </div>
            </form>
            <div className="py-6">
              <p className="text-center font-bold">
                New to this site?{" "}
                <Link to="/signup" className="text-primary">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
