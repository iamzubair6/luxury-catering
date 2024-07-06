import { cn } from "@Lib/utils";
import { ComponentProps } from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";

export function Nav({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <nav className={cn("text-black flex justify-center", className)}>
      {children}
    </nav>
  );
}

export function NavLink(
  props: Omit<ComponentProps<typeof RouterNavLink>, "className"> & {
    className?: string;
  }
) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  return (
    <RouterNavLink
      {...props}
      className={cn(
        "p-4 hover:underline focus:underline focus:duration-300 focus:ease-in-out transition-all",
        isActive && "underline",
        props?.className
      )}
    />
  );
}
