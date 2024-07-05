import { cn } from "@Lib/utils";
import { ComponentProps } from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";

export function Nav({ children }: { children: React.ReactNode }) {
  return <nav className="text-black flex justify-center px-4">{children}</nav>;
}

export function NavLink(
  props: Omit<ComponentProps<typeof RouterNavLink>, "className">
) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  return (
    <RouterNavLink
      {...props}
      //underline animation on hover and focus
      className={cn(
        "p-4 hover:underline focus:underline focus:duration-300 focus:ease-in-out transition-all",
        isActive && "underline"
      )}
    />
  );
}
