"use client"

import { useState } from "react"
import { Bell, Search, Settings, Heart } from "lucide-react"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import { Link } from "react-router-dom"

const MainNav = () => {
  const [searchValue, setSearchValue] = useState("")
  const userData = { name: "Becca Adorn", profilePicture: "/diverse-person-portrait.png" }

  return (
    <div className="w-full py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Notification Bell */}
        <Link to="/notifications" className="relative text-primary rounded-full hover:bg-gray-100">
          <Bell className="h-6 w-6" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        </Link>

        {/* Search Bar */}
        <div className="relative mx-4 flex-1 max-w-xl">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-5 w-5 text-[#8B4513]/60" />
            <Input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="pl-10 pr-4 py-2 h-8 text-primary bg-white border-[#8B4513] border rounded-full focus:ring-[#8B4513] focus:border-[#8B4513]"
            />
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4 sm:space-x-6">

          {/* Settings Icon */}
          <Link to="/settings" className="rounded-full text-primary hover:bg-gray-100">
            <Settings className="h-6 w-6" />
          </Link>

          {/* Favorites */}
          <Link to="/favorites" className="rounded-full text-primary hover:bg-gray-100">
            <Heart className="h-6 w-6" />
          </Link>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <span className="hidden md:block text-[#8B4513] font-medium">{userData.name}</span>
              <img src={userData.profilePicture || "/placeholder.svg"} alt="Profile" className="h-8 w-8 rounded-full border border-[#8B4513]/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNav
