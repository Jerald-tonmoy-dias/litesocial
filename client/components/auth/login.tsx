"use client";

import React, { useState } from "react";
import { InputBox } from "../forms/input-box";
import Button from "../common/button";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  interface LoginData {
    email: string;
    password: string;
  }

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Login:", loginData);
    alert("Login attempted! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-blue-600 text-6xl font-bold mb-4">LightSocial</h1>
          <p className="text-2xl md:text-3xl">
            Connect with friends and the world around you on LightSocial.
          </p>
        </div>
        <div className="flex-1 w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <InputBox
                type="email"
                placeholder="Email or phone number"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />

              <InputBox
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />

              <Button
              href="/"
                text="Log In"
                variant="primary"
                size="lg"
                className="w-full"
                // onClick={handleLogin}
              />
            </div>

            <div className="text-center my-4">
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Forgot password?
              </a>
            </div>

            <hr className="my-6" />

            <div className="text-center">
              <Button
                href="/register"
                text="Create new account"
                onClick={() => {}}
                variant="success"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
