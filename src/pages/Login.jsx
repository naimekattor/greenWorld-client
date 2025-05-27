import React, { useContext, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { userSignin, setUser, googleSignIn, facebookSignIn, passwordResetEmail, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignin(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been created successfully",
          text: "Please login to continue",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log((errorCode));
        Swal.fire({
          title: "something went wrong",
          text: "",
          icon: "question"
        });
      });
  }
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been created successfully",
          text: "Please login to continue",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // console.log(errorCode);
        Swal.fire({
          title: "something went wrong",
          text: "",
          icon: "question"
        });
      });
  }
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        navigate('/')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // console.log(errorCode);

      });
  }

  // handle handleForgotPassword
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    // console.log(email);

    passwordResetEmail(email)
      .then(() => {
        // console.log('password reset successfull');

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);

      });
  }

  return (
    <div className="hero bg-base-200 min-h-screen">

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" name='email' />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name='password' />

            <button className="btn btn-neutral my-4">Login</button>
            {/* Google */}
            <button className="btn bg-white text-black border-[#e5e5e5] mb-4" onClick={handleGoogleSignIn}>
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>

            {/* Facebook */}
            <button className="btn bg-[#1A77F2] text-white border-[#005fd8]" onClick={handleFacebookSignIn}>
              <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
              Login with Facebook
            </button>
            <div className='my-2 text-[14px]'>
              <span className='pl-2 cursor-pointer pr-2 border-r-1' onClick={() => document.getElementById('my_modal_3').showModal()}>Forgot Password</span>

              <span className='pl-2 cursor-pointer pr-2 border-r-1'>Dont have an account?</span>

              <button className='hover:text-primary pl-2' type='submit'><Link to={'/auth/register'}>Register</Link></button>
            </div>

          </fieldset>
        </form>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleForgotPassword}>

              <span className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</span>
              <div className='gap-4 flex flex-col'>

                <label className="label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" name='email' />
                <button className='bg-primary px-4 py-2 cursor-pointer text-white' type='submit'>Reset</button>
              </div>

            </form>

          </div>
        </dialog>
      </div>
    </div>
  )
}

export default Login
