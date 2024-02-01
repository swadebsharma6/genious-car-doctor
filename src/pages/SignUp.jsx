import { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import image from '../assets/images/login/login.svg';
import { AuthContext } from '../context/AuthProvider';

const SignUp = () => {
  const {createUser} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // create user
        createUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log('created', user)
          swal("Good job!", "User created Successfully", "success");
          form.reset();
        })
        .catch(error =>{
          console.log(error.message)
        })
    }


    return (
        <>
        <div className="hero min-h-[800px]">
        <div className="hero-content grid md:grid-cols-2 gap-x-1 flex-col ">
          <div className="text-center lg:text-left">
           <img src={image} alt="login" className='w-3/4 mx-auto' />
          </div>
          <div className="card w-3/4 mx-auto shadow-2xl border border-primary">
          <h2 className="text-2xl text-red-500 text-center font-bold py-4">Sign-Up</h2>
            <form 
            onSubmit={handleSubmit}
            className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Confirm Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-error">SignUp</button>
              </div>
            </form>
            <div className='py-6'>
                <p className='text-center font-bold'>Already have an Account? <Link to='/login' className='text-primary'>Login</Link></p>
            </div>
          </div>
        </div>
      </div> 
        </>
    );
};

export default SignUp;