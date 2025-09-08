"use client";
import Logo from "asset/img/logo-6.png";
import { Button } from "components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "components/ui/navigation-menu";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "components/ui/popover";
import { ChevronDown, Menu, Wallet, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, NAV_ITEMS_MOBILE } from "../constant";
import { NAV_ITEMS_TYPE } from "../model";
import HexagonButton from "./HexagonButton";
import CartButton from "components/cart/cart-button";
const Header = () => {
  const path = usePathname();
  const closePopoverRef = useRef<HTMLButtonElement>();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = document.getElementById("header");
      if (header) {
        if (scrollY > 0) {
          header.classList.add("shadow");
        } else {
          header.classList.remove("shadow");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="sticky top-0 z-[10] bg-white">
      <div className="px-3 py-2 md:pl-10 lg:px-6  xl:px-[75px] st:px-[120px] xl:py-[12px] flex lg:gap-6 xl:gap-10 items-center justify-between mx-auto max-w-[1440px]">
        <Link href="/">
          <Image
            src={Logo}
            width={200}
            alt="Atom logo"
            priority
            quality={100}
            className="w-[200px] h-[55px]"
          />
        </Link>
        {/* <CartButton/> */}
        <div className="lg:hidden flex-1"></div>
        <Popover onOpenChange={(open) => setIsOpen(open)}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden hover:text-white hexagon-btn !w-[55px] !h-[60px]"
            >
              {!isOpen ? <Menu /> : <X />}{" "}
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="z-[9999] min-w-[320px] max-w-[368px]"
          >
            <PopoverClose
              className="hidden"
              ref={closePopoverRef as React.LegacyRef<HTMLButtonElement>}
            />
            <div className="flex flex-col gap-4 h-fit">
              <NavigationMenu className="!max-w-full block">
                <NavigationMenuList className="flex-col !items-start space-x-0">
                  {NAV_ITEMS_MOBILE.map((item) => (
                    <NavigationMenuItem className="!w-full" key={item.title}>
                      <PopoverClose asChild>
                        <NavigationMenuLink
                          href={item.link}
                          onClick={() => closePopoverRef.current?.click()}
                          className={`${navigationMenuTriggerStyle()} font-normal text-[#181818] whitespace-nowrap !w-full !justify-start`}
                          active={path === item.link}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </PopoverClose>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* <CartButton/> */}
                                    <PopoverClose asChild>

              <Link href="/products">
                <HexagonButton
                  className="bg-linear rounded-primary font-bold text-base text-white !w-full flex gap-2"
                  // onClick={() => closePopoverRef.current?.click()}
                >
                  <Wallet className="w-5 h-5" />
                  Shopping{" "}
                </HexagonButton>
              </Link>
              </PopoverClose>
            </div>
          </PopoverContent>
        </Popover>
        <NavigationMenu className="hidden lg:flex max-w-full navbar">
          <NavigationMenuList className="xl:justify-around">
            {NAV_ITEMS.map((item) => {
              if (item.type === NAV_ITEMS_TYPE.DROPDOWN) {
                return (
                  <Popover key={item.title}>
                    <PopoverTrigger asChild>
                      <Button className="rounded-primary bg-primary text-[#181818] hover:!scale-100 hover:text-[#181818] font-normal text-base hover:bg-primary/60 group">
                        {item.title}
                        <ChevronDown className="group-data-[state=open]:rotate-180 transition duration-200" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="end"
                      className="z-[9999] min-w-[320px]"
                    >
                      <PopoverClose
                        className="hidden"
                        ref={
                          closePopoverRef as React.LegacyRef<HTMLButtonElement>
                        }
                      />
                      {/* <ul>
                        {(item.children || []).map((child:any) => (
                          <li key={child.link}>
                            <NavigationMenuLink
                              asChild
                              onClick={() => closePopoverRef.current?.click()}
                              className={`${navigationMenuTriggerStyle()} !w-full !justify-start font-normal text-[#181818] whitespace-nowrap`}
                              active={path === child.link}
                            >
                              <Link href={child.link}>{child.title}</Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul> */}
                    </PopoverContent>
                  </Popover>
                );
              }
              return (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.link}
                    className={`${navigationMenuTriggerStyle()} font-normal text-[#181818] p-4 whitespace-nowrap`}
                    active={path === item.link}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* <CartButton /> */}
        {/* <Button className='bg-linear rounded-primary text-white xl:block hidden'>
                    <Link href='buy-now'>Buy Now</Link>
                </Button> */}
        <Link href="/products">
          <HexagonButton className="bg-linear rounded-primary font-bold text-base text-white lg:flex gap-2 hidden xl:px-12 st:!px-[72px]">
            <Wallet className="w-5 h-5" />
            Shopping
          </HexagonButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;
