"use client";
import React, { useState } from "react";
import { InputBox } from "../forms/input-box";
import SelectBox from "../common/select-box";
import Button from "../common/button";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthday: { day: "", month: "", year: "" },
    gender: "",
  });

  interface Birthday {
    day: string;
    month: string;
    year: string;
  }

  interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthday: Birthday;
    gender: string;
  }

  const handleRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("Register:", registerData);
    alert("Registration attempted! Check console for data.");
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Branding */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-blue-600 text-6xl font-bold mb-4">LightSocial</h1>
          <p className="text-2xl md:text-3xl">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        <div className="flex-1 w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-4">
              <h2 className="text-3xl font-bold">Sign Up</h2>
              <p className="text-gray-500 text-sm">It's quick and easy.</p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <InputBox
                  type="text"
                  placeholder="First name"
                  value={registerData.firstName}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      firstName: e.target.value,
                    })
                  }
                />
                <InputBox
                  type="text"
                  placeholder="Last name"
                  value={registerData.lastName}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>

              <InputBox
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />

              <InputBox
                type="password"
                placeholder="New password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
              />

              <div>
                <label className="text-xs text-gray-600 font-semibold block mb-2">
                  Birthday
                </label>
                <div className="flex gap-3 justify-between">
                  {/* Month Select */}
                  <div className="flex-1">
                    <SelectBox
                      options={months.map((m, i) => ({
                        label: m,
                        value: i + 1,
                      }))} // convert array into objects
                      labelKey="label"
                      valueKey="value"
                      value={registerData.birthday.month}
                      onChange={(selectedValue) =>
                        setRegisterData({
                          ...registerData,
                          birthday: {
                            ...registerData.birthday,
                            month: String(selectedValue),
                          },
                        })
                      }
                      placeholder="Month"
                      className="w-full"
                    />
                  </div>

                  {/* Day Select */}
                  <div className="flex-1">
                    <SelectBox
                      options={days.map((d) => ({ label: d, value: d }))} // simple mapping
                      labelKey="label"
                      valueKey="value"
                      value={registerData.birthday.day}
                      onChange={(selectedValue) =>
                        setRegisterData({
                          ...registerData,
                          birthday: {
                            ...registerData.birthday,
                            day: String(selectedValue),
                          },
                        })
                      }
                      placeholder="Day"
                      className="w-full"
                    />
                  </div>

                  {/* Year Select */}
                  <div className="flex-1">
                    <SelectBox
                      options={years.map((y) => ({ label: y, value: y }))} // convert array into objects
                      labelKey="label"
                      valueKey="value"
                      value={registerData.birthday.year}
                      onChange={(selectedValue) =>
                        setRegisterData({
                          ...registerData,
                          birthday: {
                            ...registerData.birthday,
                            year: String(selectedValue),
                          },
                        })
                      }
                      placeholder="Year"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 font-semibold block mb-2">
                  Gender
                </label>
                <div className="flex gap-3">
                  <label className="flex-1 flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50">
                    <span>Female</span>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={registerData.gender === "female"}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          gender: e.target.value,
                        })
                      }
                      className="cursor-pointer"
                    />
                  </label>
                  <label className="flex-1 flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50">
                    <span>Male</span>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={registerData.gender === "male"}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          gender: e.target.value,
                        })
                      }
                      className="cursor-pointer"
                    />
                  </label>
                  <label className="flex-1 flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50">
                    <span>Custom</span>
                    <input
                      type="radio"
                      name="gender"
                      value="custom"
                      checked={registerData.gender === "custom"}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          gender: e.target.value,
                        })
                      }
                      className="cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy.
              </p>

              <div className="flex gap-3">
                <Button
                  className="flex-1"
                  text="Sign Up"
                  onClick={handleRegister}
                  variant="success"
                />
                <Button
                  className="flex-1"
                  text="Login"
                  href="/login"
                  variant="gray"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
