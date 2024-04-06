// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { AiFillFileAdd } from 'react-icons/ai';

// export default function Example() {
//   return (
//     <div>
//     <div className="bg-gray-800 ml-10 mr-10">
//       <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:flex lg:justify-between lg:px-8">
//         <div className="max-w-xl">
//           <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Welcome 👋</h2>
//           <p className="mt-5 text-xl text-gray-400">
//            You're most welcome to our platform. We are here to help you with all your needs.
//           </p>
//         </div>
//       </div>
//     </div >

//     <div className="mt-10 ml-10 mr-10">
      

//       <div className="flex flex-wrap justify-center">
//         {/* First Row */}
//         <div className="w-full sm:w-1/3 p-4">
//           <button
//             type="button"
//             className="relative block w-full rounded-lg border-2 border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
//             <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 1</span>
//           </button>
//         </div>
        
//         <div className="w-full sm:w-1/3 p-4">
//           <button
//             type="button"
//             className="relative block w-full rounded-lg border-2 border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
//             <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 2</span>
//           </button>
//         </div>
        
//         <div className="w-full sm:w-1/3 p-4">
//           <button
//             type="button"
//             className="relative block w-full rounded-lg border-2  border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
//             <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 3</span>
//           </button>
//         </div>

//         {/* Second Row */}
//         <div className="w-full sm:w-1/2 p-4">
//           <button
//             type="button"
//             className="relative block w-full rounded-lg border-2  border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
//             <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 4</span>
//           </button>
//         </div>
        
//         <div className="w-full sm:w-1/2 p-4">
//           <button
//             type="button"
//             className="relative block w-full rounded-lg border-2  border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
//             <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 5</span>
//           </button>
//         </div>
//       </div>

      
//       </div>
//     </div>
//   )
// }




import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AiFillFileAdd } from 'react-icons/ai';

export default function Example() {
  return (
    <div> 
      <div className="bg-gray-800 ml-10 mr-10 py-10"> {/* Reduced py-10 */}
        <div className="mx-auto max-w-7xl px-6  lg:flex lg:justify-between lg:px-8"> {/* Adjusted sm:py-12 */}
          <div className="max-w-xxl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-2xl lg:text-4xl">Welcome 👋</h2>
            <p className="mt-5 text-xl text-gray-400">
              You're most welcome to our platform. We are here to help you with all your needs.
            </p>
          </div>
        </div>
    </div>


      <div className="mt-10 ml-10 mr-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <button
                type="button"
                className="relative block w-full text-center focus:outline-none"
              >
                <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
                <span className="mt-2 block text-xl font-medium text-gray-900">My Income</span>
              </button>
            </div>
          </div>
          
          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <button
                type="button"
                className="relative block w-full text-center focus:outline-none"
              >
                <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
                <span className="mt-2 block text-xl font-medium text-gray-900">Daily Expenses</span>
              </button>
            </div>
          </div>
          
          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <button
                type="button"
                className="relative block w-full text-center focus:outline-none"
              >
                <AiFillFileAdd className="mx-auto h-12 w-12 text-gray-400" />
                <span className="mt-2 block text-xl font-medium text-gray-900">Untitled Project 3</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

