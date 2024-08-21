export default function Footer() {
  return (
    <section className="relative pb-10 overflow-hidden py-10 bg-blue-950 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                
                <span className="ml-4 text-lg font-bold text-green-500">Let&apos;s Remote</span>
              </div>
              <div>
                <p className="mb-4  text-base font-medium"></p>
                <p className="text-sm text-white">
                  &copy; Copyright 2024. All Rights Reserved by Let&apos;s Remote.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300 " href="#">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#price">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Affiliate Program
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

