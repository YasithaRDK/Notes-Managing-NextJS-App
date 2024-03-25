"use client";

import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <section className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="authFormHeader">
            <h2 className="authFormLogo">QuikNoteZ</h2>
            <h3 className="authFormTitle">Sign in to your account</h3>
            <div className="border-b-2 mt-2"></div>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="authFormLabel">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  placeholder="Ex- johnpaul@email.com"
                  value={formData.email}
                  required
                  className="authFormInput"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="authFormLabel">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  placeholder="●●●●●●●●●●"
                  value={formData.password}
                  required
                  className="authFormInput"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="authSubmitBtn">
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-sm text-gray-600 text-center">
              Not a user?{" "}
              <Link href="/register" className="upInLink">
                Sign up instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
