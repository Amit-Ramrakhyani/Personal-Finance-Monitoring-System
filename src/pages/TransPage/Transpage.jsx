import React from "react";
import { Fragment, useState } from "react";
import { TransAPI } from "../../api"
import moment from 'moment';


export default function Example() {

  const [transactions, setTransactions] = useState([]);
  console.log("Transactions: ", transactions)
  React.useEffect(() => {
    document.title = "Dashboard";

    const fetchTransactions = async () => {
      try {
        const transactions = await TransAPI.listAllTranscations();
        setTransactions(transactions);
      }
      catch (error) {
        console.error("Error fetching transactions: ", error);
        alert("Error fetching transactions: ", error);
      }
    };
    fetchTransactions();
  }, []);
  const transactionsx = [
    {
      id: "AAPS0L",
      company: "Chase & Co.",
      share: "CAC",
      commission: "+$4.37",
      price: "$3,509.00",
      quantity: "12.00",
      netAmount: "$4,397.00",
    },
  ];

  return (
    <>
      <div className="flex h-full flex-col">
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
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Export
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
                              <tr key={transaction.id}>
                                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                  {transaction.id}
                                </td>
                                {/* <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                  {transaction.company}
                                </td> */}
                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                  {moment(transaction.transaction_date).format('MMMM Do YYYY, h:mm:ss a')}
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
                                  {transaction.netAmount}
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
