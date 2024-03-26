"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Spinner from "@/components/Spinner";
import { validateLoginForm } from "@/utils/validations/authFormValidate";

const LoginPage = () => {
  const { data: session, status: sessionStatus } = useSession();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  const inputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    setError({ ...error, [id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = validateLoginForm(formData);
    if (Object.keys(errors).length === 0) {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result.error) {
        alert("Invalid Credentials");
        setLoading(false);
      } else {
        router.push("/");
      }
    } else {
      setError(errors);
      setLoading(false);
    }
  };

  if (sessionStatus === "loading" || loading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="flex flex-col justify-center h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <div className="authFormHeader">
              <h2 className="authFormLogo">QuikNoteZ</h2>
              <h3 className="authFormTitle">Sign in to your account</h3>
              <div className="mt-2 border-b-2"></div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
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
                    required
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
                    required
                    className="authFormInput"
                  />
                  <p className="text-red-600 text-[13px] mb-4">
                    {error.password}
                  </p>
                </div>
              </div>

              <div>
                <button type="submit" className="authSubmitBtn">
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-6">
              <p className="text-sm text-center text-gray-600">
                Not a user?{" "}
                <Link href="/register" className="upInLink">
                  Sign up instead
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
