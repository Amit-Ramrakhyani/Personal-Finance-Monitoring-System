// import React from "react";
// import { Fragment, useState } from "react";
// import { Dialog, Menu, Transition } from "@headlessui/react";
// import {
//   ChevronDownIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/20/solid";
// import {
//   ArchiveBoxIcon,
//   Bars3Icon,
//   BellIcon,
//   FlagIcon,
//   InboxIcon,
//   NoSymbolIcon,
//   PencilSquareIcon,
//   UserCircleIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// const user = {
//   name: "Whitney Francis",
//   email: "whitney.francis@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
// const navigation = [
//   {
//     name: "Inboxes",
//     href: "#",
//     children: [
//       { name: "Technical Support", href: "#" },
//       { name: "Sales", href: "#" },
//       { name: "General", href: "#" },
//     ],
//   },
//   { name: "Reporting", href: "#", children: [] },
//   { name: "Settings", href: "#", children: [] },
// ];
// const sidebarNavigation = [
//   { name: "Open", href: "#", icon: InboxIcon, current: true },
//   { name: "Archive", href: "#", icon: ArchiveBoxIcon, current: false },
//   { name: "Customers", href: "#", icon: UserCircleIcon, current: false },
//   { name: "Flagged", href: "#", icon: FlagIcon, current: false },
//   { name: "Spam", href: "#", icon: NoSymbolIcon, current: false },
//   { name: "Drafts", href: "#", icon: PencilSquareIcon, current: false },
// ];
// const userNavigation = [
//   { name: "Your Profile", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
//   React.useEffect(() => {
//     document.title = "Dashboard";
//   })
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <>
//       <div className="flex h-full flex-col">

//         {/* Bottom section */}
//         <div className="flex min-h-0 flex-1 overflow-hidden">
//           <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
//             <section aria-labelledby="primary-heading" className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last">
//               {/* Your content */}
//               <h1  className="sr-only text-black">Dashboard</h1>

//             </section>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    // <div className="max-w-xxl mx-auto px-9">

    <div className="bg-gray-800 ml-10 mr-10">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:flex lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Welcome 👋</h2>
          <p className="mt-5 text-xl text-gray-400">
           You're most welcome to our platform. We are here to help you with all your needs.
          </p>
        </div>
       {/* </div> */}
      </div>
    </div>
  )
}

