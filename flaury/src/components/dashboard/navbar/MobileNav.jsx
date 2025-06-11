"use client"
import { Link } from "react-router-dom"

const MobileNav = ({ isOpen, onClose, navigationItems, currentPath, userData, onLogout }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* Mobile Menu */}
      <div className="absolute inset-y-0 right-0 w-64 max-w-full bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Menu</h2>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* User Profile Section */}
        {userData && (
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
                {userData.profilePicture ? (
                  <img
                    src={userData.profilePicture || "/placeholder.svg"}
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-500">
                    {userData.name?.charAt(0) || "U"}
                  </div>
                )}
              </div>
              <div>
                <p className="font-medium">{userData.name || "User"}</p>
                <p className="text-xs text-gray-500">{userData.email || ""}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = currentPath === item.path
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-3 space-x-3 rounded-lg transition-all duration-200 ${isActive ? "bg-primaryColor text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    onClick={onClose}
                  >
                    <div className="flex items-center justify-center w-6 h-6">
                      <img
                        src={item.icon || "/placeholder.svg"}
                        alt=""
                        className={`transition-all duration-200 ${isActive ? "brightness-0 invert" : ""}`}
                      />
                    </div>
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="grid grid-cols-2 gap-2">
            <Link
              to="/settings"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </Link>
            <button
              onClick={onLogout}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primaryColor rounded-md hover:bg-primaryColor/90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
