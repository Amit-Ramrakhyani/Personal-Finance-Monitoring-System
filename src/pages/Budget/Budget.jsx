import React from "react";
import { Fragment, useState } from "react";
import { TransAPI } from "../../api"
import moment from 'moment';


export default function Example() {
    React.useEffect(() => {
      document.title = "Dashboard";
    })
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    return (
      <>
        <div className="flex h-full flex-col">
          {/* Bottom section */}
          <div className="flex min-h-0 flex-1 overflow-hidden">
            <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
              <section aria-labelledby="primary-heading" className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last">
                {/* Your content */}
              </section>
            </main>
          </div>
        </div>
      </>
    );

}