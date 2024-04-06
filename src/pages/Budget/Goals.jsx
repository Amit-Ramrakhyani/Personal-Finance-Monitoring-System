import React from "react";
import { Fragment, useState } from "react";
import { TransAPI } from "../../api";
import moment from "moment";

export default function Example() {
  React.useEffect(() => {
    document.title = "Dashboard";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex h-full flex-col">
        {/* Bottom section */}
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
            <section
              aria-labelledby="primary-heading"
              className="pl-10 pr-10 mt-10 flex bg-white h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
            >
              <div className="border-b border-gray-200 pb-5">
                <h1 className="text-4xl font-medium leading-6 text-gray-900">
                  Your Goals ✨
                </h1>
                <p className="mt-5 max-w-4xl text-sm text-gray-500">
                    A list of your financial goals,  Create actionable plans to achieve these goals, including budgeting strategies and investment recommendations
                    or specific goals like saving for a house or retirement, saving for a vacation, buying a home, or paying off debt.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
