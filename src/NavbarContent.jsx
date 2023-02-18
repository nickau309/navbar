import React, { useEffect, useRef } from "react";
import { Menu } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

function classNames(...classList) {
  return classList.filter(Boolean).join(" ");
}

export default function NavbarContent({ open }) {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    linksContainerRef.current.style.height = (open ? linksHeight : 0) + "px";
  }, [open]);

  return (
    <>
      <img src={logo} alt="logo" className="h-10" />
      <Menu.Button className="text-2xl text-blue-400 transition duration-200 ui-open:rotate-90 ui-open:text-sky-900 md:hidden">
        <FaBars />
      </Menu.Button>
      <div
        ref={linksContainerRef}
        className={classNames(
          "basis-full overflow-hidden transition-[height] duration-200",
          "md:flex md:!h-auto md:flex-auto md:items-center md:justify-between"
        )}
      >
        <Menu.Items as="ul" ref={linksRef} className="md:flex" static>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <Menu.Item as="li" key={id}>
                <a
                  href={url}
                  className={classNames(
                    "block py-2 capitalize tracking-wider text-slate-700 transition-colors duration-200 ease-linear",
                    "hover:text-blue-400 md:px-2"
                  )}
                >
                  {text}
                </a>
              </Menu.Item>
            );
          })}
        </Menu.Items>
        <ul className="hidden md:flex">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a
                  href={url}
                  className="block p-2 text-blue-400 duration-200 ease-linear hover:text-blue-300"
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
