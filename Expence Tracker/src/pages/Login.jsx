import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    let navigate = useNavigate()

    // State for form data
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        axios({
            method: "post",
            url: "http://localhost:5000/user/login",
            data: {
                email: formData.email,
                password: formData.password,
            },
        })
            .then((response) => {
                console.log("Login Successful:", response.data);
                localStorage.setItem('token', response.data.token);
                Swal.fire({
                    title: "Successfully Login..",
                    icon: "success",
                    draggable: true
                }).then(()=>{

                    navigate('/'); // react-router-dom use karke
                })

            })
            .catch((error) => {
                console.log("Login Failed:", error.response?.data || error.message);
                // Yahan error message show kar sakte ho user ko
            });
    };




    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">

                {/* Left Side - Login Form */}
                <div className="w-full md:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-8">
                        <BiUserCircle className="text-3xl text-blue-600" />
                        <h1 className="text-2xl font-bold text-gray-800">Expense Tracker</h1>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                        <p className="text-gray-500">Please enter your details to log in</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
                                <FiMail className="text-blue-500" />
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="abc@gmail.com"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
                                <FiLock className="text-blue-500" />
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Min 8 Characters"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
                                    required
                                    minLength="8"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg mt-2"
                        >
                            Log In
                        </button>

                        <p className="text-center text-gray-600 mt-6">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>

                {/* Right Side - Image/Poster */}
                <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-12">
                    <div className="h-full flex flex-col items-center justify-center text-white">
                        <img
                            src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/5790142f9033602936037998/images/601b5b4cfb34b55df443d1ca/file-BI3sU3Y6lw.png"
                            alt="Expense Tracker Poster"
                            className="w-full max-w-md mb-8 drop-shadow-2xl"
                        />
                        <h2 className="text-3xl font-bold mb-4 text-center">Track Your Expenses</h2>
                        <p className="text-center text-blue-100 text-lg">
                            Manage your finances smartly with Expense Tracker
                        </p>
                        <div className="flex gap-2 mt-8">
                            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;