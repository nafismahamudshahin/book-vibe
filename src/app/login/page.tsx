"use client";

import Link from "next/link";
import { FormEvent } from "react";

const Login = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Login logic here
    };

    return (
        <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#f8f7f3] px-4 py-10">
            <div className="relative w-full max-w-md">

                {/* Decorative Circle */}
                <div className="pointer-events-none absolute -left-10 -top-10 hidden h-24 w-24 rounded-full border-[12px] border-[#4930d9]/5 sm:block" />

                {/* Decorative Circle */}
                <div className="pointer-events-none absolute -bottom-8 -right-8 hidden h-20 w-20 rounded-full border-[10px] border-[#f5df69]/40 sm:block" />

                {/* Login Card */}
                <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

                    {/* Header */}
                    <div className="mb-7 text-center">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="inline-block text-xl font-bold text-[#4930d9]"
                        >
                            Book Vibe
                        </Link>

                        <h1 className="mt-5 text-2xl font-bold text-gray-900">
                            Welcome Back
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            Login to continue exploring your favorite books.
                        </p>

                    </div>


                    {/* Login Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-xs font-semibold text-gray-700"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-[#4930d9] focus:ring-2 focus:ring-[#4930d9]/10"
                            />
                        </div>


                        {/* Password */}
                        <div>
                            <div className="mb-1.5 flex items-center justify-between">

                                <label
                                    htmlFor="password"
                                    className="text-xs font-semibold text-gray-700"
                                >
                                    Password
                                </label>

                                <Link
                                    href="/forgot-password"
                                    className="text-[11px] font-medium text-[#4930d9] hover:underline"
                                >
                                    Forgot Password?
                                </Link>

                            </div>

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-[#4930d9] focus:ring-2 focus:ring-[#4930d9]/10"
                            />
                        </div>


                        {/* Remember Me */}
                        <div className="flex items-center gap-2">

                            <input
                                id="remember"
                                type="checkbox"
                                className="h-3.5 w-3.5 rounded border-gray-300 accent-[#4930d9]"
                            />

                            <label
                                htmlFor="remember"
                                className="text-xs text-gray-500"
                            >
                                Remember me
                            </label>

                        </div>


                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#4930d9] py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#3d27c4] hover:shadow-md"
                        >
                            Login
                        </button>

                    </form>


                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">

                        <div className="h-px flex-1 bg-gray-200" />

                        <span className="text-[10px] text-gray-400">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-gray-200" />

                    </div>


                    {/* Google Login */}
                    <button
                        type="button"
                        className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                        <span className="text-sm font-bold">
                            G
                        </span>

                        Continue with Google
                    </button>


                    {/* Register */}
                    <p className="mt-6 text-center text-xs text-gray-500">
                        Don't have an account?{" "}
                        <Link
                            href="/sign-up"
                            className="font-semibold text-[#4930d9] hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Login;