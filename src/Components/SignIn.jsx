import React, { useState } from 'react';

const SignIn = () => {
  const userData = { name: "", email: "", mobile: "", password: "", confirmPassword: "" };

  const [user, setUser] = useState(userData);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {};

    if (user.name === "") {
      newError.name = "Please Enter Name...";
    } else if (user.name.length <= 2 || user.name.length > 10) {
      newError.name = "Name must be between 2 & 10";
    }

    if (user.email === "") {
      newError.email = "Please Enter Email Id...";
    } else if (user.email.indexOf("@") <= 0) {
      newError.email = "'@' Invalid Position";
    } else if (
      user.email.charAt(user.email.length - 4) !== "." &&
      user.email.charAt(user.email.length - 3) !== "."
    ) {
      newError.email = "'.' Invalid Position";
    } else if (
      user.email.slice(-4) !== ".com" &&
      user.email.slice(-3) !== ".in"
    ) {
      newError.email = "Email must end with '.com' or '.in'";
    }

    if (user.mobile === "") {
      newError.mobile = "Please Enter Mobile Number...";
    } else if (isNaN(user.mobile)) {
      newError.mobile = "Please Enter Digits";
    } else if (user.mobile.length !== 10) {
      newError.mobile = "Please Enter 10 Digits Mobile Number";
    }

    if (user.password === "") {
      newError.password = "Please Enter Password...";
    } else if (user.password.length <= 5 || user.password.length > 15) {
      newError.password = "Password must be between 5 and 15 characters";
    }

    if (user.confirmPassword === "") {
      newError.confirmPassword = "Please Enter Confirm Password...";
    } else if (user.confirmPassword !== user.password) {
      newError.confirmPassword = "Please Enter Same Password";
    }

    // Check if there are no errors
    if (Object.keys(newError).length === 0) {
      setSuccessMessage(`${user.name}, you have registered successfully!!`);
      // Clear the form after successful submission
      setUser(userData);
    } else {
      setSuccessMessage("");
    }

    setError(newError);
  };

  return (
    <>
      {successMessage && <h1 className='text-[green]'>{successMessage}</h1>}
      <div className='mt-[100px]'>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-gray-100 p-8 rounded shadow-md w-[450px]">
            <h2 className="text-2xl text-center font-bold mb-4">Sign In</h2>
            <form className='form' onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-[#fbc531]" onChange={handleChange} value={user.name} autoComplete='off' />
                <span className='text-[red]'>{error.name}</span>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="text" id="email" name="email" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-[#fbc531]" onChange={handleChange} value={user.email} autoComplete='off' />
                <span className='text-[red]'>{error.email}</span>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Mobile</label>
                <input type="text" id="mobile" name="mobile" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-[#fbc531]" onChange={handleChange} value={user.mobile} autoComplete='off' />
                <span className='text-[red]'>{error.mobile}</span>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-[#fbc531]" onChange={handleChange} value={user.password} autoComplete='off' />
                <span className='text-[red]'>{error.password}</span>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-[#fbc531]" onChange={handleChange} value={user.confirmPassword} autoComplete='off' />
                <span className='text-[red]'>{error.confirmPassword}</span>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
