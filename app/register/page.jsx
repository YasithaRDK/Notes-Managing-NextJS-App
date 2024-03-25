"use client";

import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="authFormHeader">
            <h2 className="authFormLogo">QuikNoteZ</h2>
            <h3 className="authFormTitle">Create an account</h3>
            <div className="border-b-2 mt-2"></div>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="authFormLabel">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  placeholder="Ex- johnPaul@1248"
                  value={formData.name}
                  required
                  className="authFormInput"
                />
              </div>
            </div>

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
                Register
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link href="/login" className="upInLink">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
