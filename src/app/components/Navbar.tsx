import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="px-5 shadow-md w-full">
      <div className="flex justify-between py-4 items-center">
        <Link href="/">
          <div className="w-[100px] h-[40px] relative">
            <Image
              alt="logo"
              src="/images/logo.svg"
              fill
              className="relative top-1 left-0 w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* right */}
        <div className="flex">
          <Button
            title="Sign In"
            disabled={false}
            styles="text-blue-500 rounded-full py-1 px-6 font-semibold border-blue-500 border"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
