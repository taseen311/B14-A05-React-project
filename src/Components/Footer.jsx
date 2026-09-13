import Logo from "../assets/logo-text.png"
function Footer() {
  return (
    <footer
      className=" bg-gray-150  text-white mt-20"
    >
      <div
        className="
max-w-7xl
mx-auto
px-6
py-14
grid
sm:grid-cols-2
lg:grid-cols-4
gap-10
"
      >
        {/* Brand Section */}

        <div>
          <div
            className="
flex
items-center
gap-2
text-2xl
font-bold
"
          >
            <div
              className="
w-10
h-10
rounded-lg
gradient-bg
flex
items-center
justify-center
"
            >
              
            </div>
{/* 
            <span>Dev Stack</span> */}
            <img src={Logo} alt="" />
          </div>

          <p
            className="
text-gray-400
mt-5
leading-relaxed
"
          >
            Build your perfect development stack with modern technologies and
            tools.
          </p>

          {/* Social Links */}

          <div
            className="
flex
gap-4
mt-6
"
          >
            <a
              className="
p-2
h-10
rounded-2xl
bg-gray-800
flex
items-center
justify-center
hover:bg-gray-700
"
            >
              GitHub
            </a>

            <a
              className="
p-2
h-10
rounded-2xl
bg-gray-800
flex
items-center
justify-center
hover:bg-gray-700
"
            >
              Twitter
            </a>

            <a
              className="
p-2
h-10
rounded-2xl
bg-gray-800
flex
items-center
justify-center
hover:bg-gray-700
"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}

        <div>
          <h3
            className="
font-bold
text-lg
mb-5 text-black
"
          >
            Product
          </h3>

          <ul
            className="
space-y-3
text-gray-400
"
          >
            <li className="hover:text-white">Technologies</li>

            <li className="hover:text-white">Projects</li>

            <li className="hover:text-white">Features</li>

            <li className="hover:text-white">Pricing</li>
          </ul>
        </div>

        {/* Company */}

        <div>
          <h3
            className="
font-bold
text-lg
mb-5 text-black
"
          >
            Company
          </h3>

          <ul
            className="
space-y-3
text-gray-400
"
          >
            <li className="hover:text-white">About Us</li>

            <li className="hover:text-white">Contact</li>

            <li className="hover:text-white">Careers</li>

            <li className="hover:text-white">Blog</li>
          </ul>
        </div>

        {/* Legal */}

        <div>
          <h3
            className="
font-bold
text-lg
mb-5 text-black
"
          >
            Legal
          </h3>

          <ul
            className="
space-y-3
text-gray-400
"
          >
            <li className="hover:text-white">Privacy Policy</li>

            <li className="hover:text-white">Terms & Conditions</li>

            <li className="hover:text-white">Security</li>

            <li className="hover:text-white">License</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}

      <div
        className="
border-t
border-gray-800
"
      >
        <div
          className="
max-w-7xl
mx-auto
px-6
py-5
flex
flex-col
sm:flex-row
justify-between
items-center
gap-3
text-gray-400
text-sm
"
        >
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div
            className="
flex
gap-5
"
          >
            <span>Privacy</span>

            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
