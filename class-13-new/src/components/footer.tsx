export default function Footer() {
  return (
    <footer className="font-sans tracking-wide bg-black py-10 px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        <div>
          <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-5">
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-300 hover:text-white text-[15px]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-300 hover:text-white text-[15px]"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-300 hover:text-white text-[15px]"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-6">Information</h4>
          <ul className="space-y-5">
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-300 hover:text-white text-[15px]"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-300 hover:text-white text-[15px]"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-300 hover:text-white text-[15px]"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-6">Help</h4>
          <ul className="space-y-5">
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-300 hover:text-white text-[15px]"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-300 hover:text-white text-[15px]"
              >
                Shipping Information
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-300 hover:text-white text-[15px]"
              >
                Returns & Exchanges
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-full max-w-2xl">
          <h4 className="text-white text-lg font-semibold mb-6">Newsletter</h4>
          <p className="text-gray-300 mb-4 text-[15px]">
            Subscribe to our newsletter to get updates on new products and
            promotions.
          </p>

          <form className="mb-4">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 px-4 py-3.5 rounded-l-md w-full text-[15px] text-gray-300 outline-none"
              />
              <button
                type="button"
                className="bg-gray-700 text-[15px] text-gray-300 tracking-wide px-4 py-3.5 rounded-r-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="text-gray-300 text-right text-[15px] mt-8">
        © ReadymadeUI. All rights reserved.
      </p>
    </footer>
  );
}
