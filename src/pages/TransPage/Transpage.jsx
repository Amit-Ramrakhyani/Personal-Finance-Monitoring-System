import React from "react";
import { Fragment, useState, useRef } from "react";
import { TransAPI } from "../../api";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

export default function Example() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true );

  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    description: "",
    transaction_date: "",
    transaction_type: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send data to backend
    console.log(formData);
  };

  const cancelButtonRef = useRef(null);
  const [transactions, setTransactions] = useState([]);
  console.log("Transactions: ", transactions);
  React.useEffect(() => {
    document.title = "Your Transactions | Finance Manager";

    const fetchTransactions = async () => {
      try {
        const transactions = await TransAPI.listAllTranscations();
        setTransactions(transactions);
      } catch (error) {
        console.error("Error fetching transactions: ", error);
        alert("Error fetching transactions: ", error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <>
      <div className="flex h-full flex-col">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <PencilSquareIcon
                            className="h-6 w-6 text-white-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Create Transaction
                          </Dialog.Title>
                        </div>
                      </div>
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      className="max-w-lg pl-10 pr-10 pb-10"
                    >
                      <div className="mb-4">
                        <label
                          htmlFor="amount"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Amount
                        </label>
                        <input
                          type="number"
                          id="amount"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Category
                        </label>
                        <input
                          type="text"
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                          rows="3"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="transaction_date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Transaction Date
                        </label>
                        <input
                          type="datetime-local"
                          id="transaction_date"
                          name="transaction_date"
                          value={formData.transaction_date}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="transaction_type"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Transaction Type
                        </label>
                        <select
                          id="transaction_type"
                          name="transaction_type"
                          value={formData.transaction_type}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">Select Type</option>
                          <option value="debit">Debit</option>
                          <option value="credit">Credit</option>
                        </select>
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                    
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Bottom section */}
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
            <section
              aria-labelledby="primary-heading"
              className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
            >
              {/* Your content */}
              <div className="px-4 mt-10 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                      Transactions
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                      A table of placeholder stock market data that does not
                      make any sense.
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                      onClick={() => setOpen(true)}
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                      + Create
                    </button>
                  </div>
                </div>
                <div className="mt-8 flex flex-col">
                  <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                Transaction ID
                              </th>
                              {/* <th
                                scope="col"
                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Company
                              </th> */}
                              <th
                                scope="col"
                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Time
                              </th>
                              <th
                                scope="col"
                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Category
                              </th>
                              <th
                                scope="col"
                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Amount
                              </th>
                              <th
                                scope="col"
                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Description
                              </th>
                              <th
                                scope="col"
                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Merchants
                              </th>
                              <th
                                scope="col"
                                className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6"
                              >
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {transactions.map((transaction) => (
                              <tr key={transaction._id}>
                                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                  {transaction._id}
                                </td>
                                {/* <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                  {transaction.company}
                                </td> */}
                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                  {moment(transaction.transaction_date).format(
                                    "MMMM Do YYYY, h:mm:ss a"
                                  )}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                  {transaction.category}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                  {transaction.amount}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                  {transaction.description}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                  {transaction.transaction_type === "debit" ? (
                                    <span className="text-white bg-red-500 p-1 rounded-md ">
                                      Debit
                                    </span>
                                  ) : (
                                    <span className="text-white p-1 rounded-md  bg-green-500">
                                      Credit
                                    </span>
                                  )}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                  {transaction.merchant
                                    ? transaction.merchant
                                    : "N/A"}
                                </td>
                                <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                  <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-900"
                                  >
                                    Edit
                                    <span className="sr-only">
                                      , {transaction.id}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
