"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { validateRegisterForm } from "@/utils/authFormValidate";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const inputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    setError({ ...error, [id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateRegisterForm(formData);
    if (Object.keys(errors).length === 0) {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        });
        if (res.status === 400) {
          alert("This email is already registered");
        } else if (res.status === 200) {
          setError("");
          router.push("/login");
          alert("User successfully registered...!");
        } else {
          throw new Error("Registration failed");
        }
      } catch (err) {
        alert("Something went wrong, try again!");
        console.log(err);
      }
    } else {
      setError(errors);
    }
  };

  return (
    <section className="flex flex-col justify-center px-3 py-10 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <div className="authFormHeader">
            <h2 className="authFormLogo">QuikNoteZ</h2>
            <h3 className="authFormTitle">Create an account</h3>
            <div className="mt-2 border-b-2"></div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label htmlFor="name" className="authFormLabel">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  type="text"
                  placeholder="Ex- john-Paul123"
                  value={formData.username}
                  onChange={inputChange}
                  className="authFormInput"
                />
                <p className="text-red-600 text-[13px] mb-4">
                  {error.username}
                </p>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="authFormLabel">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="text"
                  placeholder="Ex- johnpaul@email.com"
                  value={formData.email}
                  onChange={inputChange}
                  className="authFormInput"
                />
                <p className="text-red-600 text-[13px] mb-4">{error.email}</p>
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
                  onChange={inputChange}
                  className="authFormInput"
                />
                <p className="text-red-600 text-[13px] mb-4">
                  {error.password}
                </p>
              </div>
            </div>

            <div>
              <button type="submit" className="authSubmitBtn">
                Register
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-sm text-center text-gray-600">
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
