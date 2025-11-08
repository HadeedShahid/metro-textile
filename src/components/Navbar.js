"use client";

import { Menu, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import Link from "next/link";
import { categories } from "@/data/categories";
import Call from "@/components/common/call";

const Navbar = ({
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "logo",
  },
  menu = [
    { title: "Products", url: "/products" },
    ...categories.map((category) => ({
      title: category.label,
      url: category.href,
    })),
  ],
}) => {
  return (
    <section className="py-4">
      {/* Desktop Menu */}
      <nav className="hidden justify-between items-center md:flex">
        <div className="flex gap-10">
          {/* Logo */}
          <Link href={logo.url} className="flex items-center gap-2">
            <Image src={logo.src} width={64} height={62} alt={logo.alt} />
          </Link>
          <div className="flex items-center gap-6">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="text-sm font-medium text-foreground hover:text-[#742b76] transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="hidden lg:block">
            <Call
              buttonLabel="Book a Call"
              className="bg-white border-2 border-[#742b76] text-[#742b76] hover:bg-[#742b76] hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            />
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#742b76] to-[#9d3fa0] rounded-lg blur opacity-75 group-hover:opacity-100 animate-pulse transition duration-300"></div>
            <Button
              asChild
              className="relative bg-[#742b76] hover:bg-[#5a2160] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <a href="mailto:info@metrotextile.com?subject=Product Query&body=Hello,%0D%0A%0D%0AI would like to inquire about your products.">
                <Mail className="h-4 w-4" />
                Send Query
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={logo.url} className="flex items-center gap-2">
            <img
              src={logo.src}
              className="max-h-8 dark:invert"
              alt={logo.alt}
            />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href={logo.url} className="flex items-center gap-2">
                    <img
                      src={logo.src}
                      className="max-h-8 dark:invert"
                      alt={logo.alt}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <div className="flex flex-col gap-4">
                  {menu.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="text-md font-semibold hover:text-[#742b76] transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Call
                    buttonLabel="Book a Call"
                    className="bg-white border-2 border-[#742b76] text-[#742b76] hover:bg-[#742b76] hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg w-full"
                  />
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#742b76] to-[#9d3fa0] rounded-lg blur opacity-75 group-hover:opacity-100 animate-pulse transition duration-300"></div>
                    <Button
                      asChild
                      className="relative bg-[#742b76] hover:bg-[#5a2160] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full flex items-center justify-center gap-2"
                    >
                      <a href="mailto:info@metrotextile.com?subject=Product Query&body=Hello,%0D%0A%0D%0AI would like to inquire about your products.">
                        <Mail className="h-4 w-4" />
                        Send Query
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Navbar;
