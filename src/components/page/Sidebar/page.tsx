"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaTh,
  FaChartLine,
  FaFileAlt,
  FaList,
  FaTruck,
  FaUserCog,
  FaDollarSign,
  FaSignOutAlt,
  FaPencilAlt,
  FaPlusSquare ,
  FaSearch,
} from "react-icons/fa";

type MenuItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { icon: <FaTh />, label: "Dashboard", href: "/" },
  { icon: <FaChartLine />, label: "Spot Market", href: "/spot-market" },
  { icon: <FaSearch />, label: "Search RFQ", href: "/search" },
  { icon: <FaPlusSquare />, label: "Create RFQ", href: "/create-rfq" },
  { icon: <FaList />, label: "RFQ List", href: "/rfq-list" },
  { icon: <FaList />, label: "Order List", href: "/order-list" },
  { icon: <FaTruck />, label: "Shipment Status", href: "/shipment-status" },
];

const footerItems: MenuItem[] = [
  { icon: <FaUserCog />, label: "Account Settings", href: "/account-settings" },
  { icon: <FaDollarSign />, label: "Subscription", href: "/subscription" },
  { icon: <FaSignOutAlt />, label: "Logout", href: "/auth/signin" },
];

const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  return (
    <div
      className={`h-screen ${
        isHovered ? "w-64" : "w-16"
      } bg-white shadow-lg flex flex-col justify-between rounded-tr-[30px] rounded-br-[30px] transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Section */}
      <div className={`flex items-center px-4 py-4 mt-8 ${isHovered ? "px-10" : "justify-center"}`}>
        <Image
          src="/Vector.png"
          alt="freightAnt Logo"
          width={isHovered ? 150 : 40}
          height={50}
          priority
        />
      </div>

      {/* Menu Items */}
      <div className="flex-grow px-4 mt-8">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 p-2 rounded-md transition-colors duration-200 ${
                  activeItem === item.label
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 hover:bg-purple-600 hover:text-white"
                }`}
                onClick={() => setActiveItem(item.label)}
              >
                <span className="text-purple-600">{item.icon}</span>
                {isHovered && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="px-4 py-4 border-t border-gray-200">
        <ul className="space-y-2">
          {footerItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center gap-3 text-gray-700 hover:bg-purple-600 hover:text-white p-2 rounded-md transition-colors duration-200"
              >
                <span className="text-purple-600">{item.icon}</span>
                {isHovered && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

