"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const MainNav = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const userData = JSON.parse(localStorage.getItem("userInfo") || "{}")
  const roleData = localStorage.getItem("userData")

  return (
    <>
      <div className="flex items-center space-x-4">
        {/* Search Button */}
        <button onClick={() => setShowSearch(!showSearch)} className="p-2 text-gray-600 rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Notifications */}
        <Link to="/notifications" className="relative p-2 text-gray-600 rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Link>

        {/* Settings */}
        <Link to="/settings" className="p-2 text-gray-600 rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </Link>

        {/* Favorites */}
        <Link to="/favorites" className="p-2 text-gray-600 rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </Link>

        {/* User Profile */}
        <Link to="/profile" className="flex items-center space-x-2 text-sm text-gray-700">
          <span className="hidden md:block">{userData?.name || "User"}</span>
          <div className="w-8 h-8 overflow-hidden bg-gray-200 rounded-full">
            {userData?.profilePicture ? (
              <img
                src={userData.profilePicture || "/placeholder.svg"}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-500">
                {userData?.name?.charAt(0) || "U"}
              </div>
            )}
          </div>
        </Link>
      </div>

      {/* Expandable Search Bar */}
      {showSearch && (
        <div className="fixed inset-x-0 top-16 z-20 p-4 bg-white shadow-md md:absolute md:top-16 md:right-0 md:left-auto md:w-96 md:rounded-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a service..."
              className="w-full px-4 py-2 pl-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-5 h-5 text-gray-400 top-2.5 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <button
              onClick={() => setShowFilter(true)}
              className="absolute p-1 text-gray-500 rounded-md right-2 top-1.5 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {showFilter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Filter</h3>
              <button onClick={() => setShowFilter(false)} className="p-1 text-gray-500 rounded-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Select Category</label>
                <select className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent">
                  <option value="">Choose Category</option>
                  <option value="hair">Hair</option>
                  <option value="nails">Nails</option>
                  <option value="makeup">Makeup</option>
                  <option value="spa">Spa</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Price Range</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 text-sm text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                  />
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 text-sm text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setShowFilter(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Reset
              </button>
              <button
                onClick={() => setShowFilter(false)}
                className="px-4 py-2 text-sm font-medium text-white rounded-md bg-primaryColor hover:bg-primaryColor/90"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MainNav
