import React from "react";
import { Menu } from "@headlessui/react";
import NavbarContent from "./NavbarContent";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <Menu
        as="div"
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 p-4 md:flex-nowrap"
      >
        {({ open }) => <NavbarContent open={open} />}
      </Menu>
    </nav>
  );
}
