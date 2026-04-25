import { useEffect, useRef, type ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  // Focus the heading when the component mounts
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  //   Change the page title to match the heading text
  useEffect(() => {
    document.title = `${children} - Accesssible Web Components`;
  }, [children]);

  return (
    <h1 ref={headingRef} tabIndex={-1}>
      {children}
    </h1>
  );
}
