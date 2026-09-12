"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

const navigation = [
  { href: "/", number: "01", label: "Home" },
  { href: "/about", number: "02", label: "Studio" },
  { href: "/services", number: "03", label: "Treatments" },
  { href: "/team", number: "04", label: "Clinicians" },
  { href: "/testimonials", number: "05", label: "Stories" },
  { href: "/contact", number: "06", label: "Visit" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="container-page pt-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-20"
              onClick={() => setOpen(false)}
              aria-label="SmileCare home"
            >
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-1 rounded-full border border-black/10 bg-[#f4f1ea]/90 p-1.5 shadow-sm backdrop-blur-xl lg:flex"
              aria-label="Main navigation"
            >
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                      active
                        ? "bg-[#171a19] text-white shadow-sm"
                        : "text-[#171a19]/60 hover:bg-black/5 hover:text-[#171a19]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[9px] transition-colors ${
                        active
                          ? "text-[#65cdb4]"
                          : "text-[#171a19]/35"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span>{item.label}</span>

                    {/* Active indicator */}
                    {active && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-1.5 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-[#65cdb4]"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/appointment"
                className="group flex items-center gap-2 rounded-full bg-[#171a19] px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#65cdb4] hover:text-[#171a19]"
              >
                Book consultation

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="relative z-50 grid h-12 w-12 place-items-center rounded-full bg-[#171a19] text-white transition-transform duration-300 active:scale-95 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.55,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-40 bg-[#171a19] px-7 pb-10 pt-28 text-white lg:hidden"
          >
            <div className="flex h-full flex-col justify-between">
              <nav aria-label="Mobile navigation">
                {navigation.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.08 + index * 0.06,
                        duration: 0.45,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`group relative flex items-center gap-5 border-b border-white/10 py-5 transition-colors ${
                          active
                            ? "text-[#65cdb4]"
                            : "text-white"
                        }`}
                      >
                        <span
                          className={`font-mono text-xs ${
                            active
                              ? "text-[#65cdb4]"
                              : "text-white/30"
                          }`}
                        >
                          {item.number}
                        </span>

                        <span className="display text-4xl">
                          {item.label}
                        </span>

                        {active && (
                          <motion.span
                            layoutId="activeMobileIndicator"
                            className="ml-auto h-2 w-2 rounded-full bg-[#65cdb4]"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <Link
                href="/appointment"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between bg-[#65cdb4] p-5 font-bold text-[#171a19]"
              >
                <span>Book your consultation</span>

                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}