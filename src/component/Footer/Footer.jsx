export default function Footer() {
  return (
    <section className="relative pb-10 overflow-hidden py-10 bg-blue-950 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <span className="ml-4 text-lg font-bold text-white">Let&apos;s Remote</span>
               
              </div> <p>Explore Thousands of Work-from-Anywhere Opportunities. Your Gateway to Top Remote Jobs and Careers.</p>
              <div>
                <p className="mb-4 text-base font-medium"></p>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                  <div className="flex space-x-4 mt-2">
                    {/* Facebook Icon */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.676 0H1.324A1.326 1.326 0 000 1.324v21.352A1.326 1.326 0 001.324 24H12.81V14.706H9.692V11.078h3.118V8.337c0-3.1 1.894-4.791 4.658-4.791 1.325 0 2.465.099 2.797.143v3.243l-1.92.001c-1.504 0-1.796.715-1.796 1.764v2.311h3.592l-.468 3.628h-3.124V24h6.125A1.327 1.327 0 0024 22.676V1.324A1.326 1.326 0 0022.676 0z" />
                      </svg>
                    </a>
                    {/* Twitter Icon */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.643 4.937a9.747 9.747 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.868 9.868 0 01-3.127 1.195 4.92 4.92 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.927 4.927 0 001.523 6.574 4.903 4.903 0 01-2.23-.616v.062a4.923 4.923 0 003.95 4.827 4.932 4.932 0 01-2.224.084 4.928 4.928 0 004.6 3.42A9.876 9.876 0 010 21.543a13.905 13.905 0 007.548 2.212c9.142 0 14.307-7.721 13.996-14.646a9.936 9.936 0 002.44-2.536z" />
                      </svg>
                    </a>
                    {/* LinkedIn Icon */}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.225 0H1.771A1.771 1.771 0 000 1.771v20.452A1.771 1.771 0 001.771 24h20.452A1.771 1.771 0 0024 22.223V1.771A1.771 1.771 0 0022.225 0zM7.125 20.452H3.558V9h3.567v11.452zM5.342 7.688a2.067 2.067 0 110-4.134 2.067 2.067 0 010 4.134zm15.108 12.764h-3.567v-5.794c0-1.384-.029-3.167-1.932-3.167-1.934 0-2.23 1.51-2.23 3.067v5.894h-3.567V9h3.423v1.565h.05c.476-.9 1.637-1.847 3.367-1.847 3.602 0 4.267 2.37 4.267 5.457v6.277z" />
                      </svg>
                    </a>
                    {/* Instagram Icon */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.162c3.204 0 3.584.012 4.847.07 1.366.062 2.633.335 3.63 1.332.997.996 1.27 2.264 1.332 3.63.058 1.263.07 1.643.07 4.847s-.012 3.584-.07 4.847c-.062 1.366-.335 2.633-1.332 3.63-.996.997-2.264 1.27-3.63 1.332-1.263.058-1.643.07-4.847.07s-3.584-.012-4.847-.07c-1.366-.062-2.633-.335-3.63-1.332-.997-.996-1.27-2.264-1.332-3.63-.058-1.263-.07-1.643-.07-4.847s.012-3.584.07-4.847c.062-1.366.335-2.633 1.332-3.63.996-.997 2.264-1.27 3.63-1.332 1.263-.058 1.643-.07 4.847-.07zm0-2.162C8.769 0 8.355 0 7.054.07 5.703.143 4.444.428 3.462 1.41 2.48 2.392 2.195 3.651 2.122 5.002 2.053 6.304 2.053 6.719 2.053 12c0 5.281.014 5.696.07 6.998.073 1.351.358 2.61 1.34 3.592.982.982 2.241 1.267 3.592 1.34 1.302.056 1.717.07 6.998.07 5.281 0 5.696-.014 6.998-.07 1.351-.073 2.61-.358 3.592-1.34.982-.982 1.267-2.241 1.34-3.592.056-1.302.07-1.717.07-6.998 0-5.281-.014-5.696-.07-6.998-.073-1.351-.358-2.61-1.34-3.592-.982-.982-2.241-1.267-3.592-1.34C15.645 0 15.231 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
             
            </div>
            <p className="text-sm text-white">
                  &copy; Copyright 2024. All Rights Reserved by Let&apos;s Remote.
                </p>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-[20px] font-semibold uppercase text-white">Home</h3>
              <ul>
                <li className="mb-4">
                  <a className="text-base font-medium text-slate-300" href="#">Homepage</a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-slate-300" href="#price">Services</a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-slate-300" href="#price">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-[20px] font-semibold uppercase text-white">Jobs</h3>
              <ul>
                <li className="mb-4">
                  <a className="text-base font-medium text-slate-300" href="#">Marketing Remote</a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-slate-300" href="#">Engineering Remote</a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-slate-300" href="#">Human Resource Remote</a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-slate-300" href="#">Project Manager Remote</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-[20px] font-semibold uppercase text-white">Legals</h3>
              <ul>
                <li className="mb-4">
                  <a className="text-base font-medium text-slate-300" href="#">Terms &amp; Conditions</a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-slate-300" href="#">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-base font-medium text-slate-300" href="#">Licensing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
