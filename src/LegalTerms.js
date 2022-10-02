import { useState } from "react";
export default function LegalTerms() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="no-underline border-b border-grey-dark text-grey-dark"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Terms of Service and Privacy Policy
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Terms of Service
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-base leading-relaxed">
                    Today, this site is for exercise purposes only.<br/>
                    If you choose to use this Service, then you agree to the collection and use of your information.
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-yellow-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}