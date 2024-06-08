import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Logo from "../../components/navbar/icons/logo.png";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";

const navigation = [
  { name: "Home", href: "/home"},
  { name: "About Us", href: "/about" },
  { name: "Blogs", href: "/#"},
  { name: "Construction", href: "/construction"},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const COLORS_TOP = ["#3f97d2", "#3f97d2", "#3f97d2"];
  const color = useMotionValue(COLORS_TOP[0]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [sticky, setIsSticky] = useState(false);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop < 0 && !sticky) {
        setIsSticky(true)
      } else if (scrollTop === 0 && sticky) {
        setIsSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
    <Disclosure
      as="nav"
      className='bg-gray-800 fixed w-full transition-all duration-500 ease-in-out nav-top'
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 set-height">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/home">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden  custom-img"
                      src={Logo}
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block custom-img"
                      src={Logo}
                      alt="Workflow"
                    />
                    {/* <span className="logo-text">17 Columns</span> */}
                  </div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray text-white"
                            : "text-gray-300",
                          "px-4 py-2 rounded-md text-sm font-medium relative",
                          {
                            "border-b-2 border-purple-600":
                              hoveredItem === index,
                          }
                        )}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                >
                 Contact Us
                  <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.button>
              </Link>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden slide-in-from-top">
            <div className="px-2 pt-2 pb-3 space-y-1  bg-[#ffffff18] transition-all duration-500 ease-in-out">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-gray-300 hover:text-white border-l border-transparent",
                    "block px-3 py-2 rounded-md text-base font-medium relative",
                    {
                      "border-purple-600 bg-gray-100": hoveredItem === index,
                    }
                  )}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
    <div className="custom-height" />
    </>
  );
}
