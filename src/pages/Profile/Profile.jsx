export default function Example() {
    return (
      <form className="space-y-8 divide-y divide-gray-200 ml-20">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-gray-800 sm:text-sm"
                  />
                </div>
              </div>
              {/* Empty div for spacing */}
              <div></div>
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-gray-800 sm:text-sm"
                  />
                </div>
              </div>
              {/* Empty div for spacing */}
              <div></div>
              <div className="sm:col-span-3">
                <label htmlFor="contact-number" className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <div className="mt-1">
                  <input
                    id="contact-number"
                    name="contact-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-gray-800 sm:text-sm"
                  />
                </div>
              </div>
              {/* Empty div for spacing */}
              <div></div>
              <div className="sm:col-span-3">
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                  Salary
                </label>
                <div className="mt-1">
                  <input
                    id="salary"
                    name="salary"
                    type="number"
                    autoComplete="salary"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-gray-800 sm:text-sm"
                  />
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
        <div className="pt-5">
        <div className="flex justify-start mr-9">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
      </form>
    );
  }
  