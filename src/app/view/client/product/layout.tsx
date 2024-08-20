
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Page",
  };
export default function LayoutProduct({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}