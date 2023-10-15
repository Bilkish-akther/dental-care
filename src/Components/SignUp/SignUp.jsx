import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#07332F] mt-5">
           
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <h1 className="text-2xl font-bold">Sign Up to Doc House</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-bold">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-bold">User Name</span>
          </label>
          <input type="user name" placeholder="user name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-bold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-bold">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-black font-bold">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="bg-[#F7A582] text-white py-2">Create Account</button>
        </div>
      </form>
      <h3 className="text-center mb-5">Already registered? Go to  <span className="text-[#F7A582]"><Link to="/login">SIGN IN</Link></span></h3>
    </div>
    <div className="text-center lg:text-right ">
      
      <img src="https://i.ibb.co/yfcpsYG/Frame.png" alt="" />
    </div>
  </div>
</div>
        </div>
    );
};
export default SignUp;

