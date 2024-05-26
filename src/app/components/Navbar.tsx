"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

const Navbar = () => {
  const pathName = usePathname();
  const { handleCartClick } = useShoppingCart()

  const handleCartClickk = () => {
    // Your cart click handler logic
  };
  return (
    <header className="sticky top-0 mb-8 border-b z-10 backdrop-blur">
        <div className="flex items-center justify-between mx-auto px-2 sm:px-3">
          <Link href={"/"}>
            <h1 className="text-2xl">
              Shop <span className="text-violet-700">Haven</span>
            </h1>
          </Link>
          <nav className="hidden gap-6 lg:flex 2xl:ml-16">
            {links.map((link, id) => (
              <div key={id}>
                {pathName === link.href ? (
                  <Link href={link.href} className="text-base text-violet-700">
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-base text-gray-600 transition duration-300 hover:text-violet-700"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex divide-x border-r sm:border-l">
            <Button
              variant={"outline"}
              onClick={()=> handleCartClick()}
              className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-12 sm:w-12 md:h-16 md:w-16 rounded-none"
            >
              <ShoppingBag/>
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </Button>
          </div>
        </div>
    </header>
  );
};

export default Navbar;
