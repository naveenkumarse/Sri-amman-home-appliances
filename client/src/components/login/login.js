import React from "react";
import { Link } from "react-router-dom";

const Login =()=> {
    return (
        <>

               <div class="flex h-screen justify-center mt-7">
                <div class="w-full max-w-xs">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <br />

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            {/* <p class="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                        <div class="w-full justify-center px-3 mb-6 md:mb-0 ">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="button">
                                SignIn
                            </button>

                        </div>


                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        &copy;If not Registered : <Link to="/register"><div style={{ color: 'red' }}>Register</div></Link>
                    </p>
                </div>
                </div>
        </>
    )
}

export default Login