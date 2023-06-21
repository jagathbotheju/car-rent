import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-5 w-full bg-gray-50">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col text-xs text-gray-500 w-2/5">
          <div className="w-[100px] h-[30px] relative">
            <Image
              alt="logo"
              src="/images/logo.svg"
              fill
              className="relative top-1 left-0 w-full h-full object-contain"
            />
          </div>
          <p>CarHub 2023</p>
          <p>All Right ©️ Reserved</p>
        </div>

        {/* right */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 w-full">
          <div className="flex flex-col text-xs text-gray-500 gap-y-2 my-2 md:my-0">
            <h3 className="text-lg font-semibold text-gray-700">About</h3>
            <p>How It Works</p>
            <p>Featured</p>
            <p>Partnership</p>
            <p>Business Registration</p>
          </div>

          <div className="flex flex-col text-xs text-gray-500 gap-y-2 my-2 md:my-0">
            <h3 className="text-lg font-semibold text-gray-700">Company</h3>
            <p>Events</p>
            <p>Blog</p>
            <p>Podcast</p>
            <p>Invite a Friend</p>
          </div>

          <div className="flex flex-col text-xs text-gray-500 gap-y-2 my-2 md:my-0">
            <h3 className="text-lg font-semibold text-gray-700">Socials</h3>
            <p>Discord</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
